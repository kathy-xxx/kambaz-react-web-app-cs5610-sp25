import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div
      id="wd-dashboard"
      className="ms-5 ps-5 mt-3"
      style={{ marginLeft: "120px" }}
    >
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={4} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "250px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
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
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
