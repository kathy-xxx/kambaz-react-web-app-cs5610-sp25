import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const { cid } = useParams();

  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  if (currentUser.role === "FACULTY") {
    return children;
  }

  if (!cid) {
    return children;
  }

  const isEnrolled = enrollments?.some(
    (e: any) => e.user === currentUser._id && e.course === cid
  );

  if (!isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  return children;
}
