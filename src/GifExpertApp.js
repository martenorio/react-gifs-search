import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = ({ defaultCategories = [] }) => {
    // const [categories, setCategories] = useState(['trending']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     //setCategories([ ...categories, 'categories ' + (categories.length + 1)])
    //     setCategories( cate => [ ...cate, 'categories ' + (cate.length + 1)])
    // }

    return (
        <>
            <h2>Gif expert app</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>
            {
                categories.map(category => {
                    return <GifGrid key={category} category={category}></GifGrid>
                })
            }
        </>
    )
}