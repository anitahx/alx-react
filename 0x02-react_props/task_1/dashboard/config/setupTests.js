import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
// import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });