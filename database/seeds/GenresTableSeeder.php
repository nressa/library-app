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
                ['genres' => 'fantasy', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'adventure', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'romance', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'contemporary', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'dystopian', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'mystery', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'thriller', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'horror', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'paranormal', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'historical fiction', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'memoir', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'cooking', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'art', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Self-help / Personal', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'development', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Motivational', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Health', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'History', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Travel', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Huide/How to', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Families & Relationships', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Humor', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
                ['genres' => 'Children`s', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ];
    
            DB::table('genres')->insert($genres);
        }
    }
}
