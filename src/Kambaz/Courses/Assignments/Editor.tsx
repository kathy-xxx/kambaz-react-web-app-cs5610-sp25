import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find(
    (assignment) => assignment.course === cid && assignment._id === aid
  );
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>{assignment && assignment.title}</Form.Label>
        <Form.Control defaultValue="A1" placeholder="Enter assignment name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={5}
          defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-points">
        <Form.Label>Points</Form.Label>
        <Form.Control type="number" defaultValue={100} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-group">
        <Form.Label>Assignment Group</Form.Label>
        <Form.Select defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECTS">PROJECTS</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-display-grade-as">
        <Form.Label>Display Grade as</Form.Label>
        <Form.Select defaultValue="Percentage">
          <option value="percentage">Percentage</option>
          <option value="points">Points</option>
          <option value="complete/incomplete">Complete/Incomplete</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-submission-type">
        <Form.Label>Submission Type</Form.Label>
        <Form.Select defaultValue="Online">
          <option value="online">Online</option>
          <option value="paper">Paper</option>
          <option value="none">None</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Online Entry Options</Form.Label>
        <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
        <Form.Check
          type="checkbox"
          id="wd-website-url"
          label="Website URL"
          defaultChecked
        />
        <Form.Check
          type="checkbox"
          id="wd-media-recordings"
          label="Media Recordings"
        />
        <Form.Check
          type="checkbox"
          id="wd-student-annotation"
          label="Student Annotation"
        />
        <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
      </Form.Group>

      {/* Assign To */}
      <Form.Group className="mb-3" controlId="wd-assign-to">
        <Form.Label>Assign to</Form.Label>
        <Form.Control defaultValue="Everyone" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="wd-due-date">
            <Form.Label>Due</Form.Label>
            <Form.Control
              type="datetime-local"
              defaultValue="2024-05-13T23:59"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="wd-available-from">
            <Form.Label>Available from</Form.Label>
            <Form.Control
              type="datetime-local"
              defaultValue="2024-05-06T00:00"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="wd-available-until">
            <Form.Label>Until</Form.Label>
            <Form.Control
              type="datetime-local"
              defaultValue="2024-05-20T00:00"
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          className="me-2"
          onClick={() => alert("Assignment Cancelled!")}
        >
          Cancel
        </Button>
        <Button variant="danger" onClick={() => alert("Assignment Saved!")}>
          Save
        </Button>
      </div>
    </div>
  );
}
