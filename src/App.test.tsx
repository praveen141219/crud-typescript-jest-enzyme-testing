import { shallow } from "enzyme";
import App from "./App";

test("has render", () => {
  const wrapper = shallow(<App />);
});
