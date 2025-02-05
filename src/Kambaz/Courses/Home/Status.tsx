import { Button } from "react-bootstrap";
import { IoBan } from "react-icons/io5";
import { FaCheckCircle, FaBullhorn, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdOutlineBarChart, MdHome } from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 text-nowrap d-flex align-items-center justify-content-center"
            id="wd-unpublish"
          >
            <IoBan className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button
            variant="success"
            size="lg"
            className="w-100 d-flex align-items-center justify-content-center"
            id="wd-publish"
          >
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>
      <br />
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-import-existing-content"
      >
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-import-from-commons"
      >
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-choose-home-page"
      >
        <MdHome className="me-2 fs-5" /> Choose Home Page
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-view-course-stream"
      >
        <MdOutlineBarChart className="me-2 fs-5" /> View Course Stream
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-new-announcement"
      >
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-new-analytics"
      >
        <MdOutlineBarChart className="me-2 fs-5" /> New Analytics
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="w-100 mt-1 text-start d-flex align-items-center"
        id="wd-view-course-notifications"
      >
        <FaBell className="me-2 fs-5" /> View Course Notifications
      </Button>
    </div>
  );
}
