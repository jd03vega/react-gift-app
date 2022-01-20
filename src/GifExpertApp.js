import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Hunter'] );
    //     // setCategories( cats => [...cats, 'Hunter'] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map((category, i) => 
                        <GiftGrid 
                            key={category} 
                            category={category}
                        />
                    )
                }
            </ol>

            
        </>
    )
}
