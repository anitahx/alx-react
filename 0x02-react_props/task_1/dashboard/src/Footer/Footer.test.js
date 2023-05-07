import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme'
import { getFooterCopy, getFullYear } from '../utils/utils'

describe('Footer', () => {
    it('renders without crashing', () => {
        const footer = shallow(<Footer />)
        expect(footer.exists()).toEqual(true)
    })
    *it('renders copyright text', () => {
        const footer = shallow(<Footer />)
        expect(footer.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy(true)}`)
    })
})