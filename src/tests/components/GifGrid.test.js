import React from 'react'
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid', () => {
    const category = 'Love live'
    
    test('should show <GifGrid />', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow(<GifGrid category={ category }/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('should show items when images are loaded useFetchGifs', () => {
        const gifs = [{ 
            id : 'idimage',
            title : 'prueba',
            url : 'http://localhost/gif.gif'
        }];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const wrapper = shallow(<GifGrid category={ category }/>)
        // expect(wrapper).toMatchSnapshot(); 
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })
    

})
