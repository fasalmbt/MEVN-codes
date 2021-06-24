import express from "express";
import { showCourses, showCoursesByName, createCourses, deleteCourses } from '../controllers/course.controller.js';

const router = express.Router();

router.get('/api/v1/courses/all', showCourses);
router.get('/api/v1/courses/find/:name', showCoursesByName);
router.post('/api/v1/courses/create', createCourses);
router.delete('/api/v1/courses/delete/:id', deleteCourses);

export default router;