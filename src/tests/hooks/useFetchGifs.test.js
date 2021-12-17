import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('test useFetchGifs', () => {
    test('should return initial state', async() => {
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs('day') );
        const { data ,loading } = result.current;
        await waitForNextUpdate({timeout:4000});
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })
    test('should return images array and false loading property ', async() => {
        const { result , waitForNextUpdate } = renderHook( () => useFetchGifs('day') );
        await waitForNextUpdate({timeout:4000});
        const { data ,loading } = result.current;
        expect(data.length).toBe(20)
        expect(loading).toBe(false)
    })
    
})
