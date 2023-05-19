import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from "./AppContext";
import { user, logOut} from '../App/AppContext';

describe("App component testing", () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("App component contains Notifications component", () => {
    const app = shallow(<App />);
    expect(app.find("Notifications")).toHaveLength(1);
  });

  it("App component contains Header component", () => {
    const app = shallow(<App />);
    expect(app.find("Header")).toHaveLength(1);
  });

  it("App component contains Login component", () => {
    const app = shallow(<App />);
    expect(app.find("Login")).toHaveLength(1);
  });

  it("App component contains Footer component", () => {
    const app = shallow(<App />);
    expect(app.find("Footer")).toHaveLength(1);
  });

  it("test to check that CourseList is not displayed inside App", () => {
    const app = shallow(<App />);
    expect(app.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let app;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    app = shallow(<App isLoggedIn={true} />);
  });

  it("the Login component is included", () => {
    expect(app.find("Login")).toHaveLength(1);
  });

  it(" the CourseList component is included", () => {
    expect(app.find("CourseList").exists());
  });
});

describe("Testing App Component's State />", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(<App/>);
  });

  it('check if default value of displayDrawer in state is false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('Verify that after calling handleDisplayDrawer, the state displayDrawer should now be true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('verify that after calling handleHideDrawer, the state displayDrawer is updated to be false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('Should check that if logOut is being called by verifying if the state is updated correctly instead', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().logOut();
		expect(wrapper.state().user).toEqual(user);
	});

	it('Should check that the logIn function updates the state correctly', () => {
		const newUser = {
			email: 'graceffiong@gmail.com',
			password: '012345',
			isLoggedIn: true
		};

		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().logIn('graceffiong@gmail.com', '012345');
		expect(wrapper.state().user).toEqual(newUser);
	});

	it('Should check that the logOut function updates the state correctly', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().logIn('mnortiz.ortiz@gmail.com', '012345');
		wrapper.instance().logOut();
		expect(wrapper.state().user).toEqual(user);
	});

  it('Should check that markNotificationAsRead func works as intended', () => {
		const notification = [
			{ id: 1, type: 'default', value: 'New course available', },
			{ id: 2, type: 'urgent', value: 'New resume available', },
		];

		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().markNotificationAsRead(3);
		expect(wrapper.state().listNotifications).toEqual(notification);
	});
});