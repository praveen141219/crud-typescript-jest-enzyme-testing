import { shallow } from "enzyme";
import UserData from "./UserData";

describe("userdata component", () => {
  const defaultProps = {
    usersData: [
      {
        id: 9,
        username: "papu",
        age: 20,
      },
    ],
    editedUser: undefined,
    setUsersData: () => {},
    setEditedUser: () => {},
    setIsEdit: () => {},
  };
  const wrapper = shallow(<UserData {...defaultProps} />);
  test("render", () => {});
  test("handle Delete", () => {
    const deleteBtn = wrapper.find(`[data-testid="deleteBtn"]`);
    deleteBtn.simulate("click");
    const editBtn = wrapper.find(`[data-testid="editBtn"]`);
    editBtn.simulate("click");
  });
});
