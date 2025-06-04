import express from "express";
import {
  addNewCourse,
  deleteCourseById,
  getAllCourses,
  getCourseById,
  updateCourseById,
} from "../../controllers/instructor-controller/course-controller.js";

const courseRouter = express.Router();

courseRouter.route("/").get(getAllCourses).post(addNewCourse);
courseRouter
  .route("/:id")
  .get(getCourseById)
  .put(updateCourseById)
  .delete(deleteCourseById);

export default courseRouter;
