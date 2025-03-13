import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment } from "./Enrollments/reducer";
import { useState } from "react";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const isFaculty = currentUser.role === "FACULTY";
  const [showAllCourses, setShowAllCourses] = useState(false);
  const userEnrollments = enrollments.filter(
    (e: any) => e.user === currentUser._id
  );
  const isEnrolled = (courseId: string) =>
    userEnrollments.some((e: any) => e.course === courseId);
  return (
    <div
      id="wd-dashboard"
      className="ms-5 ps-5 mt-3"
      style={{ marginLeft: "120px" }}
    >
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {!isFaculty && (
        <>
          <h2 id="wd-dashboard-published">
            {showAllCourses
              ? `Published Courses (${courses.length})`
              : `Enrolled Courses (${userEnrollments.length})`}
            <Button
              className="btn btn-primary float-end"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
            </Button>
          </h2>
          <hr />
        </>
      )}
      {isFaculty && (
        <>
          <div>
            <h5>
              New Course
              <button
                className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse}
              >
                Add
              </button>
              <button
                className="btn btn-warning float-end me-2"
                onClick={updateCourse}
                id="wd-update-course-click"
              >
                Update
              </button>
            </h5>
            <br />
            <FormControl
              value={course.name}
              placeholder="Course Name"
              className="mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <FormControl
              as="textarea"
              value={course.description}
              placeholder="Course Description"
              rows={3}
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
            <hr />
          </div>
          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>
          <hr />
        </>
      )}
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={4} className="g-4">
          {courses
            .filter((course) => showAllCourses || isEnrolled(course._id))
            .map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "250px" }}>
                <Card>
                  <Card.Img
                    variant="top"
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Link
                      to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <Button variant="primary">Go</Button>
                    </Link>
                    {!isFaculty &&
                      (isEnrolled(course._id) ? (
                        <Button
                          variant="danger"
                          onClick={() =>
                            dispatch(
                              deleteEnrollment({
                                user: currentUser._id,
                                course: course._id,
                              })
                            )
                          }
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={() =>
                            dispatch(
                              addEnrollment({
                                user: currentUser._id,
                                course: course._id,
                              })
                            )
                          }
                        >
                          Enroll
                        </Button>
                      ))}
                    {isFaculty && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}
