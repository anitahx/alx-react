import React from 'react'
import Footer from './Footer'
import { shallow, mount } from 'enzyme'
import { getFooterCopy, getFullYear } from '../utils/utils'
import AppContext from '../App/AppContext'
import { user, logOut } from '../App/AppContext'

describe('Footer', () => {
    it('renders without crashing', () => {
        const footer = shallow(<Footer />)
        expect(footer.exists()).toEqual(true)
    })
    it('Should check that the link is not displayed when the user is logged out within the context', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Footer />
			</AppContext.Provider>
		);
		expect(wrapper.find('a').exists()).not.toBeTruthy();
	});

	it('Should check that the link is displayed when the user is logged in within the context', () => {
		const newUser = {
			email: 'graceffiong@gmail.com',
			password: '012345',
			isLoggedIn: true
		};
		const wrapper = mount(
			<AppContext.Provider value={{ user: newUser, logOut }}>
				<Footer />
			</AppContext.Provider>
		);
		expect(wrapper.find('a').exists()).toBeTruthy();
	});
})