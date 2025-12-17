import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CreateIssue from "./CreateIssue";
import MyIssues from "./MyIssues";
import Profile from "./Profile";

const StudentDashboard = () => {
  const [active, setActive] = useState("create");

  const renderContent = () => {
    if (active === "create") return <CreateIssue />;
    if (active === "myissues") return <MyIssues />;
    if (active === "profile") return <Profile />;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 p-8">{renderContent()}</div>
    </div>
  );
};

export default StudentDashboard;
