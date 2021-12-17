import React from 'react'
import { GifExpertApp } from "../GifExpertApp";
import { shallow } from 'enzyme';

describe('Test GifExperApp', () => {
    
    test('should show <GifExperApp />', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    })
    test('should show categories list', () => {
        const categories = ['day','night'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        // console.log(wrapper.find('GifGrid').length);
        // console.log(categories.length);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
})
