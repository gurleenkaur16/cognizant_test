var express= require('express');
app=express();
cors=require('cors');
app.use(cors({
    origin:"http://localhost:4200"
}));


app.get('/getproducts',function(req,res){
    res.send(
        [
            {
                "title" : "Pulp Fiction",
                "year" : 1994,
                "rating" : "R",
                "review" : 4, 
                "genre" : "Drama",
                "country" : "USA",
                "copies" : 25
          },
          {
                "title": "Star Wars",
                "year" : 1977,
                "rating" : "PG",
                "review" : 5,
                "genre" : "Action",
                "country" : "USA",
                "copies" : 50
          },
          {
                "title": "Back to the Future",
                "year" : 1985,
                "rating" : "PG",
                "review" : 4,
                "genre" : "Adventure",
                "country" : "USA",
                "copies" : 20
          },
          {
                "title" : "Paddington",
                "year" : 2014,
               "rating" : "PG",
                "review" : 3,
                "genre": "Fantasy",
                "country" : "UK",
                "copies" : 5
          }]
    );
});


app.listen(3000,function(){
    console.log('server running @localhost:3000');
})