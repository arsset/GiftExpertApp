import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

    const categoriesInit = ['One punch man'];

    let [categories, setCategories] = useState(categoriesInit);

    // const handleAdd = () => {
    //     //categories.push('Nueva categoría')
    //     //setCategories( [...categories, 'Revenge']);
    //     setCategories( cats => [ ...cats, 'Revenge'])
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map((category, i) =>
                       <GifGrid 
                       key={category}
                       category={category}
                       />
                    )
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp;