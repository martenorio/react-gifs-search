import { getGif } from "../../helpers/getGifs"

describe('Test getGifs fetch', () => {
    test('should get 20 items', async() => {
        const gifs = await getGif('k-on');
        expect(gifs.length).toBe(20);
    })
    test('should get 20 items', async() => {
        const gifs = await getGif('');
        expect(gifs.length).toBe(0);
    })
    
})
