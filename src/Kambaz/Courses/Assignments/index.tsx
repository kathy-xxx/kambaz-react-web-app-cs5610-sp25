import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { FaSearch } from "react-icons/fa";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text className="bg-light border-secondary">
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search..."
            aria-label="Search for Assignments"
            id="wd-search-assignment"
            className="border-secondary"
          />
        </InputGroup>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button
            variant="outline-secondary"
            className="me-2 d-flex align-items-center px-3"
            id="wd-add-assignment-group"
          >
            <BsPlus className="position-relative me-2" /> Group
          </Button>
          <Button
            variant="danger"
            className="d-flex align-items-center px-3"
            id="wd-add-assignment"
          >
            <BsPlus className="position-relative me-2" /> Assignment
          </Button>
        </div>
      </div>
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2" />
              <b>ASSIGNMENTS</b>
            </div>
            <div className="d-flex align-items-center">
              <div className="badge rounded-pill border border-dark text-dark px-3 py-2">
                40% of Total
              </div>
              <AssignmentsControlButtons />
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <AiOutlineForm className="text-success me-2" />
                  <div className="wd-assigment">
                    <Link
                      to="/Kambaz/Courses/1234/Assignments/1"
                      className="text-decoration-none text-dark fw-bold me-2"
                    >
                      A1
                    </Link>
                    <br />
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <b>Not available until</b> May 6 at 12am | <b>Due</b> May 30
                    at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <AiOutlineForm className="text-success me-2" />
                  <div className="wd-assigment">
                    <Link
                      to="/Kambaz/Courses/1234/Assignments/2"
                      className="text-decoration-none text-dark fw-bold me-2"
                    >
                      A2
                    </Link>
                    <br />
                    <span className="text-danger">Multiple Modules</span> |
                    <b>Not available until</b> May 13 at 12am | <b>Due</b> May
                    30 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2" />
                  <AiOutlineForm className="text-success me-2" />
                  <div className="wd-assigment">
                    <Link
                      to="/Kambaz/Courses/1234/Assignments/1"
                      className="text-decoration-none text-dark fw-bold me-2"
                    >
                      A3
                    </Link>
                    <br />
                    <span className="text-danger">Multiple Modules</span> |
                    <b>Not available until</b> May 20 at 12am | <b>Due</b> May
                    30 at 11:59pm | 100 pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
