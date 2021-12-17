import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme'

describe('Test gifgriditem', () => {
    const title = 'titulo';
    const url = 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    test('should show <GifGridItem>', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should have a paragraph', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    })
    test('should have image equal to url and alt of the props', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })
    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
    
})
