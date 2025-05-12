const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

const Blog = require('./models/blog.js');

const userRoute = require('./routes/user.js');
const blogRoute = require('./routes/blog.js');

const { checkForAuthenticationCookie } = require('./middlewares/authentication.js');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
})

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));