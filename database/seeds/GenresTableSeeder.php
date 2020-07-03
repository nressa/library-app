<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class GenresTableSeeder extends Seeder
{

    public function run()
    {
        $genresCount = DB::table('genres')->count();
        if (!$genresCount) {
            $genres = [
                ['name' => 'fantasy', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'adventure', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'romance', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'contemporary', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'dystopian', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'mystery', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'thriller', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'horror', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'paranormal', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'historical fiction', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'memoir', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'cooking', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'art', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Self-help / Personal', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'development', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Motivational', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Health', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'History', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Travel', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Huide/How to', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Families & Relationships', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Humor', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['name' => 'Children`s', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ];
    
            DB::table('genres')->insert($genres);
        }
    }
}
