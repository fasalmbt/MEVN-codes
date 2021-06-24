import { getCourses, getCourseByName, createCourse, deleteCourseById } from "../models/course.model.js";

// Controller to show all courses
export const showCourses = (req, res) =>{
    getCourses((err, results) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}

// Controller to show courses on seraching by name
export const showCoursesByName = (req, res) => {
    getCourseByName(req.params.name, (err, results) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}

// Controller for creating a new course
export const createCourses = (req, res) => {
    const data = req.body;
    createCourse(data, (err, results) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}

//controller to delete course by ID
export const deleteCourses = (req, res ) => {
    const id = req.params.id;
    deleteCourseById(id, (err, results) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(results);
        }
    });
}