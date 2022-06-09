import { shallow } from "enzyme";
import UserForm from "./UserFrom";

describe("user form component", () => {
  const defaultProps = {
    usersData: [],
    setUsersData: () => {},
    setEditedUser: () => {},
    editedUser: undefined,
    isEdit: false,
  };
  const wrapper = shallow(<UserForm {...defaultProps} />);
  test("should  render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("handle change", () => {
    const onChangeHandle = (testid: string, value: any) => {
      const getChangingInput = wrapper.find(`[data-testid="${testid}"]`);
      return getChangingInput.simulate("change", { target: { value } });
    };
    onChangeHandle("username", "praveen");
    onChangeHandle("age", 25);
  });
  test("handle submit", () => {
    const submitBtn = wrapper.find(`[data-testid="submitBtn"]`);
    submitBtn.simulate("click");
  });
});

describe("isedit true ", () => {
  test("handle update", () => {
    const defaultProps = {
      usersData: [],
      setUsersData: () => {},
      setEditedUser: () => {},
      editedUser: {
        id: 1,
        username: "ddd",
        age: 23,
      },
    };
    const wrapper = shallow(<UserForm {...defaultProps} />);
    const updateBtn = wrapper.find(`[data-testid="updateBtn"]`);
    updateBtn.simulate("click");
    console.log(updateBtn.debug());
  });
});

describe("user form component", () => {
  const defaultProps = {
    usersData: [
      {
        id: 1,
        username: "ddd",
        age: 23,
      },
      {
        id: 2,
        username: "ddd",
        age: 23,
  
      }
    ],
    setUsersData: () => {},
    setEditedUser: () => {},
    editedUser: {
      id: 1,
      username: "ddd",
      age: 23,
    },
    isEdit: false,
  };
  const wrapper = shallow(<UserForm {...defaultProps} />);
  test("should  render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("handle change", () => {
    const onChangeHandle = (testid: string, value: any) => {
      const getChangingInput = wrapper.find(`[data-testid="${testid}"]`);
      return getChangingInput.simulate("change", { target: { value } });
    };
    onChangeHandle("username", "praveen");
    onChangeHandle("age", 25);
  });
  const updateBtn = wrapper.find(`[data-testid="updateBtn"]`);
  updateBtn.simulate("click");
});
