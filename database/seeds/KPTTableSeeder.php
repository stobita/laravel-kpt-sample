<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class KPTTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('kpt')->insert([
        [
          'content' => 'キープです',
          'user_id' => 1,
          'status' => 0,
          'created_at' => Carbon::now(),
          'updated_at' => Carbon::now(),
        ],
        [
          'content' => 'プロブレムです',
          'user_id' => 1,
          'status' => 1,
          'created_at' => Carbon::now(),
          'updated_at' => Carbon::now(),
        ],
        [
          'content' => 'トライです',
          'user_id' => 1,
          'status' => 2,
          'created_at' => Carbon::now(),
          'updated_at' => Carbon::now(),
        ]
      ]);
    }
}
