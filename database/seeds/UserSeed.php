<?php

use Illuminate\Database\Seeder;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (\App\User::count() === 0) {
            factory(\App\User::class)->times(5)->create();
        }
    }
}
