import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";
const app=express();
const article=[];
const blogs={};

//Hint 3: Add the CSS link in header.ejs
app.use(express.static("public"));
//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
 
  res.render("index.ejs");
 
});
app.get("/regist", (req, res)=>{
    res.render("regist.ejs");
});

app.post("/submit", (req, res) => {
  

    const fecha = new Date();
    article.push({
        "nombre": req.body["Name"],
        "email": req.body["Email"],
        "topic": req.body["Topic"],
        "title": req.body["Title"],
        "article": req.body["Article"],
        "date": fecha.toDateString()
    });
   
    blogs.article=article;
    
  console.log(Math.round(blogs.article.length/2) + ' filas '+ blogs.article.length+' blogs');
  
    res.render("index.ejs", {blogs: blogs.article, cant:blogs.article.length, total:Math.round(blogs.article.length/2)});
    
  });

app.listen(4000, ()=>{
    console.log("Server running on port 3000");
});









