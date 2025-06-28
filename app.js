const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

// Ensure the 'files' directory exists
const filesDir = path.join(__dirname, 'files');
if (!fs.existsSync(filesDir)) {
    fs.mkdirSync(filesDir);
}

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/read', async (req, res) => {
    let alluser = await userModel.find();
    res.render("read", { users: alluser });
})

app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read")
})

app.get('/edit/:id', async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.id })
    res.render("edit", { user });
})
app.post('/create', async (req, res) => {
    console.log(req.body)
    let { username, email, imageUrl } = req.body;
    let creuser = await userModel.create({
        username: username,
        email: email,
        imageUrl: imageUrl
    })
    res.redirect("/read");
})

app.post('/update/:userid', async (req, res) => {
    let { username, email, imageUrl } = req.body;
    let user = await userModel.findOneAndUpdate({ _id: req.params.userid }, { imageUrl, username, email }, { new: true })
    res.redirect("/read");
})
// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
