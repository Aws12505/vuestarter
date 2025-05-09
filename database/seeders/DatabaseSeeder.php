<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        
        $this->call([
            PermissionsSeeder::class,
        ]);
        User::factory()->create([
            'name' => 'Adler Morgan',
            'email' => 'adlermorgan12@gmail.com',
        ]);
    }
}
