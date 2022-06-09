import * as React from "react";
import { userFormTypes } from "../../models/userform";
import "./UserData.css";
interface IUserDataProps {
  usersData: userFormTypes[];
  setUsersData: React.Dispatch<React.SetStateAction<userFormTypes[]>>;
  setEditedUser: React.Dispatch<
    React.SetStateAction<userFormTypes | undefined>
  >;
}

const UserData: React.FunctionComponent<IUserDataProps> = ({
  usersData,
  setUsersData,
  setEditedUser,
}) => {
  const handleDelete = (id: number) => {
    setUsersData(usersData.filter((user) => user.id !== id));
  };
  const handleEdit = (idn: number, user: userFormTypes) => {
    setEditedUser(user);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>UserName</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {usersData &&
            usersData.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(user.id, user)}
                      data-testid="editBtn"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      data-testid="deleteBtn"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default UserData;
