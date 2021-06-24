import db from '../config/db.js';

// fetch all courses available
export const getCourses = (result) => {
    db.query("SELECT * FROM course", (err,results) => {
        if(err){
            console.log(err);
            result(err, null);
        }
        else{
            result(null, results);
        }
    });
}

// fetch course by name with any resemblance
export const getCourseByName = (name, result) => {
    db.query("SELECT * FROM course WHERE course_name REGEXP ?", [name], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }
        else{
            result(null, results);
        }
    });
}

// create a new course
export const createCourse = (data, result) => {
    db.query("INSERT INTO course SET ?", [data], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }
        else{
            result(null, result);
        }
    });
}

/* Remove a course
* Intended for course creators
* We'll be using course ID to delete it
*/
export const deleteCourseById = (id, result) => {
    db.query("DELETE FROM course WHERE course_id = ?", [id], (err, results) => {
        if(err){
            console.log(err);
            result(err, null);
        }
        else{
            result(null, results);
        }
    });
}