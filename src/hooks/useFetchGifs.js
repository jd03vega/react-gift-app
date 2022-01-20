import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    useEffect( () => {
        // setTimeout(() => {
            getGifs(category).then(gifs => {
                setState({
                    data: gifs,
                    loading: false
                });
            });
        // }, 3000);
    }, [ category ]);


    const [state, setState] = useState({
        data:[],
        loading: true
    });

    return state; // arreglo

}
