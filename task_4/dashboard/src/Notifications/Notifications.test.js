import React from 'react'
import Notifications from './Notifications'
import { shallow, mount } from 'enzyme'
import { getLatestNotification } from '../utils/utils';

let notify;
describe('Notifications component testing', () => {

    beforeEach(() => {
        notify = shallow(<Notifications />)
    });

    it('renders without crashing', () => {
        expect(notify).toBeDefined();
    });
    it("verify that Notifications renders correctly if you dont pass the listNotifications property or if you pass an empty array", () => {
      notify.setProps({displayDrawer: true});
      expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
      notify.setProps({displayDrawer: true, listNotifications: []});
      expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
    });
  
    it("verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
      notify.setProps({displayDrawer: true, listNotifications: []});
      expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type=\"default\">No new notification for now</li>');
      expect(notify.findWhere((node)=>{return node.text() === "Here is the list of notifications"})).toHaveLength(0);
    });
    it('renders the text Here is the list of notifications', () => {
        notify.setProps({displayDrawer:true, listNotifications: [{id: 1, value: "New course available", type: "default"}]})
        expect(notify.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    });
    it("verify that the first NotificationItem element renders the right html", () => {
        notify.setProps({displayDrawer:true})
        expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">No new notification for now</li>');
    });
    it("menu item is being displayed when displayDrawer is false", () => {
    expect(notify.find('.menuItem')).toHaveLength(1);
    });

    it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(notify.find('.Notifications')).toHaveLength(0);
    });
});

describe("Testing <Notification displayDrawer={true}/> ", () => {

    beforeEach(() => {
      notify = shallow(<Notifications displayDrawer={true}/>);
    });
  
    it("menu item is being displayed when displayDrawer is true", () => {
      expect(notify.find('.menuItem')).toHaveLength(1);
    });
  
    it("div.Notifications is being displayed when displayDrawer is true", () => {
      expect(notify.find('.Notifications')).toHaveLength(1);
    });
    
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let notify;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    notify = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(notify.find("NotificationItem")).toHaveLength(3);
    expect(notify.find("NotificationItem").first().props().value).toEqual('New course available');
  });
});

describe("Testing markAsRead method in the notification class Component", () => {
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const mock = jest.spyOn(console, 'log');
    const notify = wrapper.find('li').first();
    notify.simulate('click');
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
  });
});