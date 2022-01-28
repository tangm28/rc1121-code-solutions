select "releaseYear",
       "genres"."name" as genre
    from "films"
    join "filmGenre" using ("filmId")
    join "genres" as "genres" using ("genreId")
    where "title" = 'Boogie Amelie'
