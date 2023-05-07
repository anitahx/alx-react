import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App component testing', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />)
        expect(app).toBeDefined();
    });
    it('App component contains Notifications component', () => {
        const app = shallow(<App />)
        expect(app.find("Notifications")).toHaveLength(1);
      });
    
    it('App component contains Header component', () => {
        const app = shallow(<App />)
        expect(app.find("Header")).toHaveLength(1);
    });

    it('App component contains Login component', () => {
        const app = shallow(<App />)
        expect(app.find("Login")).toHaveLength(1);
    });

    it('App component contains Footer component', () => {
        const app = shallow(<App />)
        expect(app.find("Footer")).toHaveLength(1);
    });

    it('test to check that CourseList is not displayed inside App', () => {
        const app = shallow(<App />)
        expect(app.find("CourseList")).toHaveLength(0);
    });
})

describe("Testing <App isLoggedIn={true} />", () => {
    let app;
  
    beforeEach(() => {
      app = shallow(<App isLoggedIn={true}/>);
    });
  
    it("the Login component is not included", () => {
      expect(app.find('Login')).toHaveLength(0);
    });
  
    it(" the CourseList component is included", () => {
      expect(app.find('CourseList').exists());
    });
  });