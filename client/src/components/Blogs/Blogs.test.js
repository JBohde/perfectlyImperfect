import React from 'react';
import { expect } from 'chai';
import td from 'testdouble';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Blogs } from './Blogs';

configure({adapter: new Adapter()});
describe('Blogs page', () => {
    it('should render the top 4 blogs', () => {
          const wrapper = shallow(<Blogs />);
          expect(wrapper.blogs).to.deep.equal(4);
    })
});