import { Link } from "react-router-dom";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Modules"
        id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"
      >
        Modules
      </Link>
      <Link
        to="https://piazza.com/class/m5h5iqr0wds2l5"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"
      >
        Piazza
      </Link>
      <Link
        to="https://applications.zoom.us/lti/rich"
        id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"
      >
        Zoom
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"
      >
        Assignments
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"
      >
        Quizzes
      </Link>
      <Link
        to="/Kambaz/Courses/1234/Grades"
        id="wd-course-grades-link"
        className="list-group-item text-danger border border-0
      "
      >
        Grades
      </Link>
      <Link
        to="/Kambaz/Courses/:cid/People"
        id="wd-course-people-link"
        className="list-group-item text-danger border border-0"
      >
        People
      </Link>
      <br />
    </div>
  );
}
