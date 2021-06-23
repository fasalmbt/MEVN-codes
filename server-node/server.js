const express = require('express');
const app = express();
app.use(express.json());
const courses = require('./courses.json');
const users = require('./users.json');

// index page
app.get('/', async(req, res) => {
    res.send("Hello from nodejs");
});

// Get all users
app.get('/api/v1/courses/user/all', (req, res) => {
    res.send(users);
});

// Create new user
app.post('/api/v1/courses/user', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        education: req.body.education,
        salaryexpmonth: req.body.salaryexpmonth
    };
    users.push(user).unique;
    res.send(users)
    console.log("Account created successfully");
});

// fetching all courses
app.get('/api/v1/courses/all', async(req, res) => {
    res.send(courses);
});

// fetching course with course id
app.get('/api/v1/courses/:id', async(req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {res.status(404).send("Requested course not found");}
    else{res.send(course);}
});

// creating new courses
app.post('/api/v1/courses/new', async(req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        year: req.body.year
    };
    courses.push(course).unique;
    res.send(courses);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to ${port}. can be found at http://localhost:${port}`));