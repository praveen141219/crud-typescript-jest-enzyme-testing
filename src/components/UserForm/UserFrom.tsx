import { useState } from "react";
import { userFormTypes } from "../../models/userform";
import "./UserFrom.css";
interface formProps {
  usersData: userFormTypes[];
  setUsersData: React.Dispatch<React.SetStateAction<userFormTypes[]>>;
  editedUser: userFormTypes | undefined;
}

const UserForm: React.FunctionComponent<formProps> = ({
  setUsersData,
  usersData,
  editedUser,
}) => {
  const [userFormData, setUserFormData] = useState<userFormTypes>({
    id: 0,
    username: "",
    age: 0,
  });

  const handleChange = (e: React.SyntheticEvent) => {
    editedUser
      ? setUserFormData({
          ...userFormData,
          [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
            .value,
        })
      : setUserFormData({
          ...userFormData,
          id: Math.floor(Math.random() * 100 + 1),
          [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
            .value,
        });
  };

  const formSubmit = () => {
    setUsersData([...usersData, userFormData]);
  };
  const formUpdate = () => {
    console.log(userFormData);
    setUsersData(
      usersData.map((user) =>
        editedUser?.id === user.id
          ? { ...userFormData, user: userFormData }
          : user
      )
    );
  };
  return (
    <>
      <div className="form">
        <div className="input-parent">
          <label>User Name</label>
          <input
            type="text"
            value={editedUser && userFormData.username}
            data-testid="username"
            onChange={handleChange}
            name="username"
          />
        </div>
        <div className="input-parent">
          <label>Age</label>
          <input
            type="number"
            data-testid="age"
            value={editedUser && userFormData.age}
            onChange={handleChange}
            name="age"
          />
        </div>
        <button
          data-testid={editedUser ? "updateBtn" : "submitBtn"}
          onClick={editedUser ? formUpdate : formSubmit}
        >
          {editedUser ? "update" : "submit"}
        </button>
      </div>
    </>
  );
};

export default UserForm;
