import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Test AddCategories', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })

    test('should show <AddCategories>', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('should change text in textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', {target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    test('should not post information with the submit ', () => {
        wrapper.find('form').simulate('submit',{ preventDefault: ()=>{} });
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('should call setCategories and clean the textbox', () => {
        //1. simular input change
        const value = 'sunshine'
        wrapper.find('input').simulate('change', {target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
        //2. simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault: ()=>{} });
        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        //4. el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})
