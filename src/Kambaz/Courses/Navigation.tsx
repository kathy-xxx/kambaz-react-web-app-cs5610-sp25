import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Home", path: `/Kambaz/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kambaz/Courses/${cid}/Modules` },
    { label: "Piazza", path: "https://piazza.com/class/m5h5iqr0wds2l5" },
    { label: "Zoom", path: "https://applications.zoom.us/lti/rich" },
    { label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kambaz/Courses/${cid}/Grades` },
    { label: "People", path: `/Kambaz/Courses/${cid}/People` },
  ];
  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
    >
      {links.map((link) => (
        <ListGroup.Item
          key={link.path}
          as={Link}
          to={link.path}
          className={`list-group-item text-danger border border-0
         ${pathname.includes(link.label) ? "active" : "text-danger"}`}
        >
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
