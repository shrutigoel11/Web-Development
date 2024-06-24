// Require necessary packages
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

// Define port
const port = 3000;

// Example posts array with random image URLs
let posts = [
    {
        id: uuidv4(),
        username: "shruti",
        caption: "Love these flowers 🌻",
        imageUrl: "https://images.unsplash.com/photo-1718653469537-852ec5f32c27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: uuidv4(),
        username: "shru",
        caption: "Beauty and the smell 🌸",
        imageUrl: "https://images.unsplash.com/photo-1718653513135-c008f8d98752?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: uuidv4(),
        username: "shruuu",
        caption: "My love for you 🥀",
        imageUrl: "https://images.unsplash.com/photo-1718653505304-7a4ab69748c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Assuming your views are in the 'views' folder

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Parse urlencoded bodies for POST requests
app.use(express.urlencoded({ extended: true }));

// Enable method override for PATCH and DELETE requests
app.use(methodOverride('_method'));

// Handle GET request for /posts
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// Render form for creating new post
app.get("/posts/new", (req, res) => {
    res.render("new");
});

// Create a new post
app.post("/posts", (req, res) => {
    let id = uuidv4();  // Generate new UUID for post ID
    let { username, caption, imageUrl } = req.body;  // Destructure values from form
    posts.push({ id, username, caption, imageUrl });  // Push new post object to posts array
    res.redirect("/posts");  // Redirect to /posts after adding new post
});
//show
app.get("/posts/:id", (req, res) => {
    const { id } = req.params; // Extract post ID from URL parameter
    const post = posts.find(p => p.id === id); // Find post in posts array by ID
    
    if (!post) {
        res.status(404).send("Post not found"); // Handle case where post with given ID is not found
    } else {
        res.render("show", { post }); // Render show.ejs with post data
    }
});

// Render form for editing a post
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;  // Extract post ID from URL parameter
    let post = posts.find(p => p.id === id);  // Find post in posts array by ID
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("edit", { post });  // Render edit.ejs with post data
});

// Update a post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;  // Extract post ID from URL parameter
    let { caption } = req.body;  // Extract new caption from form
    let post = posts.find(p => p.id === id);  // Find post in posts array by ID
    if (!post) {
        return res.status(404).send("Post not found");
    }
    post.caption = caption;  // Update caption of found post
    res.redirect("/posts");  // Redirect to /posts after updating post
});
//delete
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((p)=>id!=p.id);
     res.redirect("/posts");
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
