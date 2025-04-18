<?php

namespace App\Services\Maintenance;

use App\Models\RepairOrder;
use App\Models\Truck;
use App\Models\Vendor;
use App\Models\AreaOfConcern;
use App\Models\Tenant;
use App\Services\Filtering\FilteringService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

/**
 * Class RepairOrderService
 *
 * Contains business logic for repair order operations, including CRUD, import, and export.
 */
class RepairOrderService
{
    protected $filteringService;

    public function __construct(FilteringService $filteringService)
    {
        $this->filteringService = $filteringService;
    }

    /**
     * Get repair order entries for the index view.
     *
     * @return array
     */
    public function getIndexData(): array
    {
        // Properly load the areasOfConcern relationship with withPivot to get all pivot data
        $query = RepairOrder::with(['truck', 'vendor' => function ($query) {
            $query->withTrashed();
        }, 'areasOfConcern' => function ($query) {
            $query->withTrashed()->get();
        }, 'tenant']);
        
        // Apply date filtering if requested
        $dateFilter = $this->filteringService->getDateFilter();
        $dateRange = [];
        
        if ($dateFilter !== 'full') {
            $query = $this->filteringService->applyDateFilter($query, $dateFilter, 'ro_open_date', $dateRange);
        }
        
        // Get per page value
        $perPage = $this->filteringService->getPerPage(Request::input('perPage', 10));
        
        // Apply tenant filter for non-admin users
        if (!is_null(Auth::user()->tenant_id)) {
            $query->where('tenant_id', Auth::user()->tenant_id);
        }
        
        $repairOrders = $query->latest()->paginate($perPage);
        
        $isSuperAdmin = is_null(Auth::user()->tenant_id);
        $tenantSlug = $isSuperAdmin ? null : Auth::user()->tenant->slug;
        $tenants = $isSuperAdmin ? Tenant::all() : [];
        
        return [
            'repairOrders' => $repairOrders,
            'tenantSlug' => $tenantSlug,
            'SuperAdmin' => $isSuperAdmin,
            'tenants' => $tenants,
            'trucks' => Truck::get(),
            'vendors' => Vendor::withTrashed()->get(),
            'areasOfConcern' => AreaOfConcern::withTrashed()->get(),
            'dateRange' => $dateRange,
            'dateFilter' => $dateFilter,
        ];
    }

    /**
     * Create a new repair order entry.
     *
     * @param array $data
     * @return RepairOrder
     */
    public function createRepairOrder(array $data)
    {
        $repairOrder = RepairOrder::create($data);
        
        // Properly handle the many-to-many relationship with the pivot table
        if (isset($data['area_of_concerns']) && is_array($data['area_of_concerns'])) {
            $repairOrder->areasOfConcern()->sync($data['area_of_concerns']);
        }
        
        return $repairOrder;
    }

    /**
     * Update an existing repair order entry.
     *
     * @param int $id
     * @param array $data
     * @return RepairOrder
     */
    public function updateRepairOrder($id, array $data)
    {
        $repairOrder = RepairOrder::findOrFail($id);
        $repairOrder->update($data);
        
        // Properly handle the many-to-many relationship with the pivot table
        if (isset($data['area_of_concerns']) && is_array($data['area_of_concerns'])) {
            $repairOrder->areasOfConcern()->sync($data['area_of_concerns']);
        }
        
        return $repairOrder;
    }

    /**
     * Delete a repair order entry.
     *
     * @param int $id
     * @return bool
     */
    public function deleteRepairOrder($id)
    {
        $repairOrder = RepairOrder::findOrFail($id);
        // This will automatically handle the pivot table deletion due to cascade
        $repairOrder->delete();
        return true;
    }

    /**
     * Delete multiple repair order entries.
     *
     * @param array $ids Array of repair order IDs to delete
     * @param int|null $tenantId
     * @return void
     */
    public function deleteMultipleRepairOrders(array $ids, $tenantId = null)
    {
        if (empty($ids)) {
            return;
        }
        
        // For security, ensure the user can only delete repair orders they have access to
        $query = RepairOrder::whereIn('id', $ids);
        
        // If not a super admin, restrict to tenant's repair orders
        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }
        
        $query->delete();
    }
}
