import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App component testing', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />)
        expect(app).toBeDefined();
    });
})