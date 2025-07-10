import express from "express";
import {
  checkCoursePurchaseInfo,
  getAllStudentCourses,
  getStudentCourseDetails,
  getStudentsBoughtCourses,
} from "../../controllers/student-controller/student-course-controller.js";

const studentCourseRouter = express.Router();

studentCourseRouter.route("/").get(getAllStudentCourses);
studentCourseRouter.route("/:id").get(getStudentCourseDetails);
studentCourseRouter.route("/bought-courses/:id").get(getStudentsBoughtCourses);
studentCourseRouter
  .route("/check-course-bought-info/:courseId/:studentId")
  .get(checkCoursePurchaseInfo);

export default studentCourseRouter;
