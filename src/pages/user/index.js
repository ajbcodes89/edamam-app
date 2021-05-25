import React from "react";
import UserProfile from "../../components/userProfile";
import UserFavorites from "../../components/userFavorites";
import "./user.scss";


function Users() {
  return (
  <div className="Results">
    <UserProfile />
    <UserFavorites />
  </div>
  );
}

export default Users;
