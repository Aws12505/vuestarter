<template>
  <AppLayout :breadcrumbs="breadcrumbs" :tenantSlug="tenantSlug">
    <div class="max-w-7xl mx-auto p-6 space-y-8">
      <!-- Success Message -->
      <Alert v-if="successMessage" variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>{{ successMessage }}</AlertDescription>
      </Alert>

      <!-- Actions Section -->
      <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Performance Management</h1>
        <div class="flex flex-wrap gap-3">
          <Button @click="openCreateModal" variant="default">
            <Icon name="plus" class="mr-2 h-4 w-4" />
            Create New Performance
          </Button>

          <label class="cursor-pointer">
            <Button variant="secondary" as="span">
              <Icon name="upload" class="mr-2 h-4 w-4" />
              Import CSV
            </Button>
            <input type="file" class="hidden" @change="handleImport" accept=".csv" />
          </label>

          <Button @click.prevent="exportCSV" variant="outline">
            <Icon name="download" class="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <!-- Filters Section -->
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex flex-col sm:flex-row justify-between items-end gap-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div>
                <Label for="search">Search</Label>
                <Input 
                  id="search"
                  v-model="filters.search" 
                  type="text" 
                  placeholder="Search by date..." 
                  @input="applyFilters"
                />
              </div>
              <div>
                <Label for="dateFrom">From Date</Label>
                <Input 
                  id="dateFrom"
                  v-model="filters.dateFrom" 
                  type="date" 
                  @change="applyFilters"
                />
              </div>
              <div>
                <Label for="dateTo">To Date</Label>
                <Input 
                  id="dateTo"
                  v-model="filters.dateTo" 
                  type="date" 
                  @change="applyFilters"
                />
              </div>
            </div>
            <Button 
              @click="resetFilters" 
              variant="ghost"
              size="sm"
            >
              <Icon name="rotate-ccw" class="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      <!-- Performance Table -->
      <Card>
        <CardContent class="p-0">
          <div class="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead v-if="SuperAdmin">Company Name</TableHead>
                  <TableHead 
                    v-for="col in tableColumns" 
                    :key="col" 
                    class="cursor-pointer"
                    @click="sortBy(col)"
                  >
                    <div class="flex items-center">
                      {{ col.replace(/_/g, ' ') }}
                      <div v-if="sortColumn === col" class="ml-2">
                        <svg v-if="sortDirection === 'asc'" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M8 15l4-4 4 4" />
                        </svg>
                        <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M16 9l-4 4-4-4" />
                        </svg>
                      </div>
                      <div v-else class="ml-2 opacity-50">
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M8 10l4-4 4 4" />
                          <path d="M16 14l-4 4-4-4" />
                        </svg>
                      </div>
                    </div>
                  </TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-if="filteredPerformances.length === 0">
                  <TableCell :colspan="SuperAdmin ? tableColumns.length + 2 : tableColumns.length + 1" class="text-center py-8">
                    No performance records found matching your criteria
                  </TableCell>
                </TableRow>
                <TableRow v-for="item in filteredPerformances" :key="item.id" class="hover:bg-muted/50">
                  <TableCell v-if="SuperAdmin">
                    {{ item.tenant?.name ?? '—' }}
                  </TableCell>
                  <TableCell>{{ item.date }}</TableCell>
                  <TableCell>
                    <div>{{ item.acceptance }}</div>
                    <div class="text-xs italic text-gray-500">({{ item.acceptance_rating }})</div>
                  </TableCell>
                  <TableCell>{{ item.on_time_to_origin }}</TableCell>
                  <TableCell>{{ item.on_time_to_destination }}</TableCell>
                  <TableCell>
                    <div>{{ item.on_time }}</div>
                    <div class="text-xs italic text-gray-500">({{ item.on_time_rating }})</div>
                  </TableCell>
                  <TableCell>
                    <div>{{ item.maintenance_variance_to_spend }}</div>
                    <div class="text-xs italic text-gray-500">({{ item.maintenance_variance_to_spend_rating }})</div>
                  </TableCell>
                  <TableCell>
                    <div>{{ item.open_boc }}</div>
                    <div class="text-xs italic text-gray-500">({{ item.open_boc_rating }})</div>
                  </TableCell>
                  <TableCell>
                    <div>{{ item.meets_safety_bonus_criteria ? 'Yes' : 'No' }}</div>
                    <div class="text-xs italic text-gray-500">({{ item.meets_safety_bonus_criteria_rating }})</div>
                  </TableCell>
                  <TableCell>
                    <div>{{ item.vcr_preventable }}</div>
                    <div class="text-xs italic text-gray-500">({{ item.vcr_preventable_rating }})</div>
                  </TableCell>
                  <TableCell>
                    <div class="flex space-x-2">
                      <Button @click="openEditModal(item)" variant="warning" size="sm">
                        <Icon name="pencil" class="mr-1 h-4 w-4" />
                        Edit
                      </Button>
                      <Button @click="deletePerformance(item.id)" variant="destructive" size="sm">
                        <Icon name="trash" class="mr-1 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div class="bg-muted/20 px-4 py-3 border-t" v-if="performances.links">
            <div class="flex justify-between items-center">
              <div class="text-sm text-muted-foreground">
                Showing {{ filteredPerformances.length }} of {{ performances.data.length }} entries
              </div>
              <div class="flex">
                <Button 
                  v-for="link in performances.links" 
                  :key="link.label" 
                  @click="visitPage(link.url)" 
                  :disabled="!link.url" 
                  variant="ghost"
                  size="sm"
                  class="mx-1"
                  :class="{'bg-primary/10 text-primary border-primary': link.active}"
                >
                  <span v-html="link.label"></span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Modal for Create/Edit Performance -->
      <Dialog v-model:open="showModal">
        <DialogContent class="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{{ formTitle }}</DialogTitle>
            <DialogDescription>
              Fill in the details to {{ formAction.toLowerCase() }} a performance record.
            </DialogDescription>
          </DialogHeader>
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Tenant Dropdown for SuperAdmin -->
            <div v-if="SuperAdmin">
              <Label for="tenant">Company Name</Label>
              <div class="relative">
                <select
                  id="tenant"
                  v-model="form.tenant_id"
                  required
                  class="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                >
                  <option disabled value="">Select a Company</option>
                  <option v-for="tenant in tenants" :key="tenant.id" :value="tenant.id">
                    {{ tenant.name }}
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <!-- Date Field -->
            <div>
              <Label for="date">Date</Label>
              <Input
                id="date"
                v-model="form.date"
                type="date"
                required
              />
            </div>
            <!-- Acceptance Field -->
            <div>
              <Label for="acceptance">Acceptance</Label>
              <Input
                id="acceptance"
                v-model="form.acceptance"
                type="number"
                step="0.01"
                required
              />
            </div>
            <!-- On Time to Origin Field -->
            <div>
              <Label for="on_time_to_origin">On Time to Origin</Label>
              <Input
                id="on_time_to_origin"
                v-model="form.on_time_to_origin"
                type="number"
                step="0.01"
                required
              />
            </div>
            <!-- On Time to Destination Field -->
            <div>
              <Label for="on_time_to_destination">On Time to Destination</Label>
              <Input
                id="on_time_to_destination"
                v-model="form.on_time_to_destination"
                type="number"
                step="0.01"
                required
              />
            </div>
            <!-- Maintenance Variance to Spend Field -->
            <div>
              <Label for="maintenance_variance_to_spend">Maintenance Variance to Spend</Label>
              <Input
                id="maintenance_variance_to_spend"
                v-model="form.maintenance_variance_to_spend"
                type="number"
                step="0.01"
                required
              />
            </div>
            <!-- Open BOC Field -->
            <div>
              <Label for="open_boc">Open BOC</Label>
              <Input
                id="open_boc"
                v-model="form.open_boc"
                type="number"
                step="1"
                required
              />
            </div>
            <!-- Safety Bonus Checkbox -->
            <div class="flex items-center gap-2">
              <input
                id="meets_safety_bonus_criteria"
                v-model="form.meets_safety_bonus_criteria"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
              />
              <Label for="meets_safety_bonus_criteria">
                Meets Safety Bonus Criteria
              </Label>
            </div>
            <!-- VCR Preventable Field -->
            <div>
              <Label for="vcr_preventable">VCR Preventable</Label>
              <Input
                id="vcr_preventable"
                v-model="form.vcr_preventable"
                type="number"
                step="1"
                required
              />
            </div>
            <!-- Action Buttons -->
            <DialogFooter>
              <Button type="button" @click="closeModal" variant="outline">
                Cancel
              </Button>
              <Button type="submit" variant="default">
                {{ formAction }}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <!-- Delete Confirmation Dialog -->
      <Dialog v-model:open="showDeleteModal">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this performance record? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter class="mt-4">
            <Button type="button" @click="showDeleteModal = false" variant="outline">
              Cancel
            </Button>
            <Button type="button" @click="confirmDelete" variant="destructive">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <!-- Hidden Export Form -->
      <form ref="exportForm" method="GET" class="hidden" />
    </div>
  </AppLayout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useForm } from '@inertiajs/vue3'
import AppLayout from '@/layouts/AppLayout.vue'
import { router } from '@inertiajs/vue3'
import Icon from '@/components/Icon.vue'
import { 
  Button,
  Card, CardHeader, CardTitle, CardContent,
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  Label, Input,
  Alert, AlertTitle, AlertDescription
} from '@/components/ui'

const props = defineProps({
  performances: {
    type: Object,
    default: () => ({ data: [], links: [] }),
  },
  tenantSlug: { type: String, default: null },
  SuperAdmin: { type: Boolean, default: false },
  tenants: { type: Array, default: () => [] }
})

const successMessage = ref('')
const showModal = ref(false)
const showDeleteModal = ref(false)
const formTitle = ref('Create Performance')
const formAction = ref('Create')
const exportForm = ref(null)
const performanceToDelete = ref(null)

// Sorting state
const sortColumn = ref('date')
const sortDirection = ref('desc')

// Filtering state
const filters = ref({
  search: '',
  dateFrom: '',
  dateTo: '',
})

const breadcrumbs = [
  {
    title: props.tenantSlug ? 'Dashboard' : 'Admin Dashboard',
    href: props.tenantSlug
      ? route('dashboard', { tenantSlug: props.tenantSlug })
      : route('admin.dashboard')
  },
  {
    title: 'Performance',
    href: '#'
  }
]

const tableColumns = [
  'date',
  'acceptance',
  'on_time_to_origin',
  'on_time_to_destination',
  'on_time',
  'maintenance_variance_to_spend',
  'open_boc',
  'meets_safety_bonus_criteria',
  'vcr_preventable'
]

// Initialize form state using Inertia's useForm helper.
const form = useForm({
  tenant_id: null, 
  date: '',
  acceptance: '',
  on_time_to_origin: '',
  on_time_to_destination: '',
  maintenance_variance_to_spend: '',
  open_boc: '',
  meets_safety_bonus_criteria: false,
  vcr_preventable: '',
  id: null
})

const deleteForm = useForm({})
const importForm = useForm({ csv_file: null })

// Computed property for filtered and sorted performances
const filteredPerformances = computed(() => {
  let result = [...props.performances.data]
  
  // Apply search filter
  if (filters.value.search) {
    const searchTerm = filters.value.search.toLowerCase()
    result = result.filter(item => 
      item.date?.toLowerCase().includes(searchTerm)
    )
  }
  
  // Apply date range filters
  if (filters.value.dateFrom) {
    result = result.filter(item => item.date >= filters.value.dateFrom)
  }
  
  if (filters.value.dateTo) {
    result = result.filter(item => item.date <= filters.value.dateTo)
  }
  
  // Apply sorting
  result.sort((a, b) => {
    let valA = a[sortColumn.value]
    let valB = b[sortColumn.value]
    
    // Handle null values
    if (valA === null) return 1
    if (valB === null) return -1
    
    // String comparison
    if (typeof valA === 'string') {
      valA = valA.toLowerCase()
      valB = valB.toLowerCase()
    }
    
    if (valA < valB) return sortDirection.value === 'asc' ? -1 : 1
    if (valA > valB) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
  
  return result
})

// Sort function
function sortBy(column) {
  if (sortColumn.value === column) {
    // Toggle direction if clicking the same column
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    // Set new column and default to ascending
    sortColumn.value = column
    sortDirection.value = 'asc'
  }
}

// Filter functions
function applyFilters() {
  // This function is triggered by input/change events
  // The filtering is handled by the computed property
}

function resetFilters() {
  filters.value = {
    search: '',
    dateFrom: '',
    dateTo: '',
  }
}

function openCreateModal() {
  formTitle.value = 'Create Performance'
  formAction.value = 'Create'
  form.reset()
  showModal.value = true
}

function openEditModal(item) {
  formTitle.value = 'Edit Performance'
  formAction.value = 'Update'

  form.tenant_id = props.SuperAdmin ? item.tenant_id : null
  form.date = item.date
  form.acceptance = item.acceptance
  form.on_time_to_origin = item.on_time_to_origin
  form.on_time_to_destination = item.on_time_to_destination
  form.maintenance_variance_to_spend = item.maintenance_variance_to_spend
  form.open_boc = item.open_boc
  form.meets_safety_bonus_criteria = !!item.meets_safety_bonus_criteria
  form.vcr_preventable = item.vcr_preventable
  form.id = item.id

  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function deletePerformance(id) {
  performanceToDelete.value = id
  showDeleteModal.value = true
}

function confirmDelete() {
  const routeName = props.SuperAdmin
    ? route('performance.destroy.admin', [performanceToDelete.value])
    : route('performance.destroy', [props.tenantSlug, performanceToDelete.value])

  deleteForm.delete(routeName, {
    onSuccess: () => {
      successMessage.value = 'Performance deleted successfully.'
      showDeleteModal.value = false
    }
  })
}

function submitForm() {
  const isCreate = formAction.value === 'Create'
  const routeName = isCreate
    ? props.SuperAdmin
      ? route('performance.store.admin')
      : route('performance.store', props.tenantSlug)
    : props.SuperAdmin
      ? route('performance.update.admin', [form.id])
      : route('performance.update', [props.tenantSlug, form.id])

  const method = isCreate ? 'post' : 'put'

  form[method](routeName, {
    onSuccess: () => {
      successMessage.value = isCreate
        ? 'Performance created successfully.'
        : 'Performance updated successfully.'
      closeModal()
    },
    onError: () => {
      alert('Something went wrong.')
    }
  })
}

function handleImport(e) {
  const file = e.target.files?.[0]
  if (!file) return

  importForm.csv_file = file

  const routeName = props.SuperAdmin
    ? route('performance.import.admin')
    : route('performance.import', props.tenantSlug)

  importForm.post(routeName, {
    forceFormData: true,
    preserveScroll: true,
    onSuccess: () => {
      importForm.reset()
      successMessage.value = 'CSV Imported successfully.'
    },
    onError: () => {
      alert('Import failed.')
    }
  })
}

function exportCSV() {
  const routeName = props.SuperAdmin
    ? route('performance.export.admin')
    : route('performance.export', props.tenantSlug)

  exportForm.value?.setAttribute('action', routeName)
  exportForm.value?.submit()
}

function visitPage(url) {
  if (url) {
    router.get(url, {}, { only: ['performances'] })
  }
}

// Auto-hide success message after 5 seconds
watch(successMessage, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  }
})
</script>
