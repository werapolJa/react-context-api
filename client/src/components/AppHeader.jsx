import { UserDataContext } from "../App";
import { useContext } from "react";
function AppHeader() {
  const { user } = useContext(UserDataContext)
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {user.username}</h2>
    </div>
  );
}

export default AppHeader;
