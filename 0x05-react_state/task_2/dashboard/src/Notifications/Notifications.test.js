import React from "react";
import Notifications from "./Notifications";
import { shallow, mount } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from 'aphrodite';

let notify;
describe("Notifications component testing", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    notify = shallow(<Notifications />);
  });

  it("renders without crashing", () => {
    expect(notify).toBeDefined();
  });
  it("renders the text Here is the list of notifications", () => {
    notify.setProps({
      displayDrawer: true,
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
      ],
    });
    expect(notify.contains(<p>Here is the list of notifications</p>)).toEqual(
      true
    );
  });
  it("menu item is being displayed when displayDrawer is false", () => {
    expect(notify.find("#menuItem")).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(notify.find(".Notifications")).toHaveLength(0);
  });
});


describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let notify;
  const listNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    notify = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(notify.find("NotificationItem")).toHaveLength(3);
    expect(notify.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });
});

describe("Testing markAsRead method in the notification class Component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    console.log = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const mock = jest.spyOn(console, "log");
    const notify = wrapper.find("li").first();
    notify.simulate("click");
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
  });
});

describe("Testing the notification class Component re-rendering", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it("verify that when updating the props of the component with the same list, the component doesn't rerender", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    const listNotifications2 = [
      { id: 1, value: "New course available changed", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    console.log = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    wrapper.setProps({ listNotifications: listNotifications });
    expect(wrapper.find("NotificationItem").length).toBe(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });

  it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    const listNotifications2 = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New course available2", type: "default" },
      { id: 3, value: "New resume available", type: "urgent" },
      { id: 4, html: { __html: getLatestNotification() }, type: "urgent" },
    ];
    console.log = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    wrapper.setProps({ listNotifications: listNotifications2 });
    expect(wrapper.find("NotificationItem").at(1).props().value).toEqual(
      "New course available2"
    );
    expect(wrapper.find("NotificationItem").length).toBe(4);
  });
});

describe("Testing Notifications Component Drawer Display handlers ", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<Notifications handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()}/>);
  });

  it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    (wrapper.find('div').at(0)).simulate('click');
    expect(wrapper.props().handleDisplayDrawer).toBeCalled();
  });

  it("verify that clicking on the button calls handleHideDrawer", () => {
    wrapper.setProps({displayDrawer: true});
    (wrapper.find('button').at(0)).simulate('click');
    expect(wrapper.props().handleHideDrawer).toBeCalled();
  });

  it('Should check that clicking on the menu item calls handleDisplayDrawer', () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();
		const wrapper = shallow(
			<Notifications
			handleDisplayDrawer={handleDisplayDrawer}
			handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find('#menuItem').simulate('click');
		expect(handleDisplayDrawer).toHaveBeenCalled();
		expect(handleHideDrawer).not.toHaveBeenCalled();

		jest.restoreAllMocks();
	});

	it('Should check clicking on the button calls handleHideDrawer', () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();
		const wrapper = shallow(
			<Notifications
			displayDrawer
			handleDisplayDrawer={handleDisplayDrawer}
			handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find('#closeButton').simulate('click');
		expect(handleDisplayDrawer).not.toHaveBeenCalled();
		expect(handleHideDrawer).toHaveBeenCalled();

		jest.restoreAllMocks();
	});
});