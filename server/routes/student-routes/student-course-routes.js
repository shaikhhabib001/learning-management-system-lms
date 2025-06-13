import express from "express";
import { getAllStudentCourses, getStudentCourseDetails } from "../../controllers/student-controller/student-course-controller.js";

const studentCourseRouter = express.Router();

studentCourseRouter.route("/").get(getAllStudentCourses);
studentCourseRouter.route("/:id").get(getStudentCourseDetails);

export default studentCourseRouter;
