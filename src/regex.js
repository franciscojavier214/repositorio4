// quiero ver una pelicula del 2000 o anterior pero que dure menos de 2 horas
db.pelicula1.find( { $and: [ { year: {$lte: 2000} } , {RunningTime: {$lt: 120}}] } )
/*
"_id" : ObjectId("5fa8401a88e6198488a93834"), "tittle" : " Vals con Bashir ", "year" : 1982, "RunningTime" : 90, "reviews" : { "metacritic" : 60, "sensacine" : 75, "imdb" : 80 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93835"), "tittle" : " En el nombre del padre ", "year" : 1993, "RunningTime" : 73, "reviews" : { "metacritic" : 84, "sensacine" : 78, "imdb" : 81 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93836"), "tittle" : " El profesinal Leon ", "year" : 1994, "RunningTime" : 110, "reviews" : { "metacritic" : 64, "sensacine" : 30, "imdb" : 85 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93837"), "tittle" : " reservoir dogs ", "year" : 1992, "RunningTime" : 99, "reviews" : { "metacritic" : 79, "sensacine" : 100, "imdb" : 83 } }
*/

// quiero ver una pelicula relativamente nueva o almenos que sea de corta duración.
db.pelicula1.find( { $or: [ { year: {$gte: 2000} } , {RunningTime:
{$lt: 99 }}] } )
/*
{ "_id" : ObjectId("5fa8401a88e6198488a93833"), "tittle" : " Las vidas posibles de MR. NOBODY ", "year" : 2009, "RunningTime" : 141, "reviews" : { "metacritic" : 65, "sensacine" : 80, "imdb" : 78 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93834"), "tittle" : " Vals con Bashir ", "year" : 1982, "RunningTime" : 90, "reviews" : { "metacritic" : 60, "sensacine" : 75, "imdb" : 80 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93835"), "tittle" : " En el nombre del padre ", "year" : 1993, "RunningTime" : 73, "reviews" : { "metacritic" : 84, "sensacine" : 78, "imdb" : 81 } }
{ "_id" : ObjectId("5fa9742d08dd83602914dcbc"), "tittle" : "bomb city", "year" : 2017, "RunningTime" : 99, "reviews" : { "metacritic" : 65, "sensacine" : 72, "imdb" : 68 } }
*/

// no quiero ver una pelicula que haya recibido la maxima puntuación en ninguna pagina de criticas.
 db.pelicula1.find( { $nor: [ { reviews: {metacritic: {$eq: 100}} } , { reviews: {sensacine: {$eq: 100}} } , { reviews: {imdb: {$eq: 100}} }] } )
/*
{ "_id" : ObjectId("5fa8401a88e6198488a93830"), "tittle" : " Pulp Fiction  ", "year" : 1994, "RunningTime" : 154, "reviews" : { "metacritic" : 94, "sensacine" : 90, "imdb" : 89 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93831"), "tittle" : " La naranja mecánica ", "year" : 1971, "RunningTime" : 136, "reviews" : { "metacritic" : 90, "sensacine" : 88, "imdb" : 83 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93832"), "tittle" : " La lista de Schindler ", "year" : 1993, "RunningTime" : 195, "reviews" : { "metacritic" : 78, "sensacine" : 60, "imdb" : 89 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93833"), "tittle" : " Las vidas posibles de MR. NOBODY ", "year" : 2009, "RunningTime" : 141, "reviews" : { "metacritic" : 65, "sensacine" : 80, "imdb" : 78 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93834"), "tittle" : " Vals con Bashir ", "year" : 1982, "RunningTime" : 90, "reviews" : { "metacritic" : 60, "sensacine" : 75, "imdb" : 80 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93835"), "tittle" : " En el nombre del padre ", "year" : 1993, "RunningTime" : 73, "reviews" : { "metacritic" : 84, "sensacine" : 78, "imdb" : 81 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93836"), "tittle" : " El profesinal Leon ", "year" : 1994, "RunningTime" : 110, "reviews" : { "metacritic" : 64, "sensacine" : 30, "imdb" : 85 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93837"), "tittle" : " reservoir dogs ", "year" : 1992, "RunningTime" : 99, "reviews" : { "metacritic" : 79, "sensacine" : 100, "imdb" : 83 } }
{ "_id" : ObjectId("5fa9742d08dd83602914dcbc"), "tittle" : "bomb city", "year" : 2017, "RunningTime" : 99, "reviews" : { "metacritic" : 65, "sensacine" : 72, "imdb" : 68 } }
*/


 // quiero ver los datos de Pulp Fiction   y reservoir dogs
 db.pelicula1.find( {   tittle: {$in:[" Pulp Fiction  "," reservoir dogs "] } }  )
 /*
 { "_id" : ObjectId("5fa8401a88e6198488a93830"), "tittle" : " Pulp Fiction  ", "year" : 1994, "RunningTime" : 154, "reviews" : { "metacritic" : 94, "sensacine" : 90, "imdb" : 89 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93837"), "tittle" : " reservoir dogs ", "year" : 1992, "RunningTime" : 99, "reviews" : { "metacritic" : 79, "sensacine" : 100, "imdb" : 83 } }
*/

// Quiero ver lo que sea, menos la lista de Schilndler
db.pelicula1.find({ tittle: {$ne: " La lista de Schindler " }})
/*
{ "_id" : ObjectId("5fa8401a88e6198488a93830"), "tittle" : " Pulp Fiction  ", "year" : 1994, "RunningTime" : 154, "reviews" : { "metacritic" : 94, "sensacine" : 90, "imdb" : 89 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93831"), "tittle" : " La naranja mecánica ", "year" : 1971, "RunningTime" : 136, "reviews" : { "metacritic" : 90, "sensacine" : 88, "imdb" : 83 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93833"), "tittle" : " Las vidas posibles de MR. NOBODY ", "year" : 2009, "RunningTime" : 141, "reviews" : { "metacritic" : 65, "sensacine" : 80, "imdb" : 78 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93834"), "tittle" : " Vals con Bashir ", "year" : 1982, "RunningTime" : 90, "reviews" : { "metacritic" : 60, "sensacine" : 75, "imdb" : 80 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93835"), "tittle" : " En el nombre del padre ", "year" : 1993, "RunningTime" : 73, "reviews" : { "metacritic" : 84, "sensacine" : 78, "imdb" : 81 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93836"), "tittle" : " El profesinal Leon ", "year" : 1994, "RunningTime" : 110, "reviews" : { "metacritic" : 64, "sensacine" : 30, "imdb" : 85 } }
{ "_id" : ObjectId("5fa8401a88e6198488a93837"), "tittle" : " reservoir dogs ", "year" : 1992, "RunningTime" : 99, "reviews" : { "metacritic" : 79, "sensacine" : 100, "imdb" : 83 } }
{ "_id" : ObjectId("5fa9742d08dd83602914dcbc"), "tittle" : "bomb city", "year" : 2017, "RunningTime" : 99, "reviews" : { "metacritic" : 65, "sensacine" : 72, "imdb" : 68 } }
*/

//Bueno en realidad si que queiero ver la lista de Schindler y ademas estoy segurisimo que no duraba menos de 3h, pero lo voy a comprobar
db.pelicula1.find( {$nor: [ { tittle: {$ne: " La lista de Schindler "} } , {RunningTime: {$lt: 190 }}]})
/*
Ciertamente
"_id" : ObjectId("5fa8401a88e6198488a93832"), "tittle" : " La lista de Schindler ", "year" : 1993, "RunningTime" : 195, "reviews" : { "metacritic" : 78, "sensacine" : 60, "imdb" : 89 } }
*/

// Aquella pelicula en la que en algun lugar de su largo titulo habia un "nobody"
db.pelicula1.find({ tittle: {$regex : / nobody /, $options: "i"}}) 
/*
"_id" : ObjectId("5fa8401a88e6198488a93833"), "tittle" : " Las vidas posibles de MR. NOBODY ", "year" : 2009, "RunningTime" : 141, "reviews" : { "metacritic" : 65, "sensacine" : 80, "imdb" : 78 } }
*/