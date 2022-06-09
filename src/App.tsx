import "./App.css";
import * as React from "react";
import UserForm from "./components/UserForm/UserFrom";
import { userFormTypes } from "./models/userform";
import UserData from "./components/UserData/UserData";

function App() {
  const [usersData, setUsersData] = React.useState<userFormTypes[]>([]);
  const [editedUser, setEditedUser] = React.useState<userFormTypes>();
  

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <UserForm
          usersData={usersData}
          setUsersData={setUsersData}
          editedUser={editedUser}
        />
      </div>
      <UserData
        usersData={usersData}
        setUsersData={setUsersData}
        setEditedUser={setEditedUser}
      />
    </div>
  );
}

export default App;
