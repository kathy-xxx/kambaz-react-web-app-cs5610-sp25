import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ maxWidth: "400px", margin: "auto" }}>
      <h3 className="mb-3">Profile</h3>
      <Form.Control
        id="wd-username"
        defaultValue="alice"
        placeholder="Username"
        className="mb-2"
      />
      <Form.Control
        id="wd-password"
        defaultValue="123"
        placeholder="Password"
        type="password"
        className="mb-2"
      />
      <Form.Control
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
      />
      <Form.Control
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
      />
      <Form.Control
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2"
      />
      <Form.Control
        id="wd-email"
        defaultValue="alice@wonderland.com"
        type="email"
        placeholder="Email"
        className="mb-2"
      />
      <Form.Select id="wd-role" defaultValue="User" className="mb-3">
        <option value="User">User</option>
        <option value="Admin">Admin</option>
        <option value="Faculty">Faculty</option>
        <option value="Student">Student</option>
      </Form.Select>
      <Link to="/Kambaz/Account/Signin" id="wd-signout-link">
        <Button variant="danger" className="w-100">
          Signout
        </Button>
      </Link>
    </div>
  );
}
