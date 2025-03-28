<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\UserManagement\UserController;
use App\Http\Controllers\Web\On_Time\DelaysController;
use App\Http\Controllers\Web\Performance\SummariesController;
use App\Http\Controllers\Web\Acceptance\RejectionsController;
use App\Http\Controllers\Web\Safety\SafetyDataController;
use App\Http\Controllers\Web\Performance\PerformanceController;
use App\Http\Controllers\Web\UserManagement\ImpersonationController;

Route::middleware(['auth', 'tenant'])->group(function () {
    Route::prefix('{tenantSlug}')->group(function () {
        Route::get('dashboard',  [SummariesController::class, 'getSummaries'])->name('dashboard');

        Route::get('/users-roles', [UserController::class, 'index'])->name('users.roles.index');

        // User routes
        Route::post('/users', [UserController::class, 'storeUser'])->name('users.store');
        Route::put('/users/{user}', [UserController::class, 'updateUser'])->name('users.update');
        Route::delete('/users/{user}', [UserController::class, 'destroyUser'])->name('users.destroy');

        // Role routes
        Route::post('/roles', [UserController::class, 'storeRole'])->name('roles.store');
        Route::put('/roles/{role}', [UserController::class, 'updateRole'])->name('roles.update');
        Route::delete('/roles/{role}', [UserController::class, 'destroyRole'])->name('roles.destroy');

        // Stop impersonation
        Route::get('/stopimpersonate', [ImpersonationController::class, 'stopImpersonation'])->name('impersonate.stop');

        // Performance routes
        Route::get('/performance', [PerformanceController::class, 'index'])->name('performance.index');
        Route::post('/performance', [PerformanceController::class, 'store'])->name('performance.store');
        Route::put('/performance/{performance}', [PerformanceController::class, 'update'])->name('performance.update');
        Route::delete('/performance/{performance}', [PerformanceController::class, 'destroy'])->name('performance.destroy');
        Route::post('/performance/import', [PerformanceController::class, 'import'])->name('performance.import');
        Route::get('/performance/export', [PerformanceController::class, 'export'])->name('performance.export');

        // Safety data routes
        Route::get('/safety', [SafetyDataController::class, 'index'])->name('safety.index');
        Route::post('/safety', [SafetyDataController::class, 'store'])->name('safety.store');
        Route::put('/safety/{id}', [SafetyDataController::class, 'update'])->name('safety.update');
        Route::delete('/safety/{id}', [SafetyDataController::class, 'destroy'])->name('safety.destroy');
        Route::post('/safety/import', [SafetyDataController::class, 'import'])->name('safety.import');
        Route::get('/safety/export', [SafetyDataController::class, 'export'])->name('safety.export');

        // Delays routes
        Route::post('/ontime', [DelaysController::class, 'store'])->name('ontime.store');
        Route::put('/ontime/{delay}', [DelaysController::class, 'update'])->name('ontime.update');
        Route::delete('/ontime/{delay}', [DelaysController::class, 'destroy'])->name('ontime.destroy');
        Route::get('/ontime', [DelaysController::class, 'index'])->name('ontime.index');

        // acceptance routes
        Route::get('/acceptance', [RejectionsController::class, 'index'])->name('acceptance.index');
        Route::post('/acceptance', [RejectionsController::class, 'store'])->name('acceptance.store');
        Route::put('/acceptance/{rejection}', [RejectionsController::class, 'update'])->name('acceptance.update');
        Route::delete('/acceptance/{rejection}', [RejectionsController::class, 'destroy'])->name('acceptance.destroy');
    });
});