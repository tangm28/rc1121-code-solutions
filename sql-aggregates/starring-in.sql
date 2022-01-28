select "g"."name" as "genre",
       count ("c".*) as "appearances"
    from "actors" as "a"
    join "castMembers" as "c" using ("actorId")
    join "filmGenre" as "f" using ("filmId")
    join "genres" as "g" using ("genreId")
  where "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
  group by "g"."genreId"
