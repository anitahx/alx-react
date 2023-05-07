import React from 'react'
import Notifications from './Notifications'
import { shallow } from 'enzyme'

describe('Notifications component testing', () => {
    it('renders without crashing', () => {
        const notify = shallow(<Notifications />)
        expect(notify).toBeDefined();
    });
    it('renders three list items', () => {
        const notify = shallow(<Notifications />)
        expect(notify.find('li')).toHaveLength(3);
    });
    it('renders the text Here is the list of notifications', () => {
        const notify = shallow(<Notifications />)
        expect(notify.find('p').text()).toBe(
            'Here is the list of notifications'
        );
    });
});