import React from 'react'
import Notifications from './Notifications'
import { shallow } from 'enzyme'

describe('Notifications component testing', () => {
    let notify;

    beforeEach(() => {
        notify = shallow(<Notifications />)
    });

    it('renders without crashing', () => {
        expect(notify).toBeDefined();
    });
    it('renders three list items', () => {
        expect(notify.find('NotificationItem')).toHaveLength(3);
    });
    it('renders the text Here is the list of notifications', () => {
        expect(notify.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });
    it("verify that the first NotificationItem element renders the right html", () => {
        expect(notify.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
      });
});