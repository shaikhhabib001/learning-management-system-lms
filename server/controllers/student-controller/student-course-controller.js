import Course from "../../models/instructor-model/Course.js";

const getAllStudentCourses = async (request, responce) => {
  try {
    const allCourses = await Course.find();

    return responce.status(200).json({
      success: true,
      count: allCourses.length,
      data: allCourses,
    });
  } catch (error) {
    return responce.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

const getStudentCourseDetails = async (request, responce) => {
  try {
    const { id } = request.params;
    const course = await Course.findById(id);

    if (!course) {
      throw new Error("No Course Found");
    }

    return responce.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    return responce.status(200).json({
      success: false,
      msg: error.message,
    });
  }
};

export { getAllStudentCourses, getStudentCourseDetails };
