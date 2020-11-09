import {useState, useEffect} from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchingData = async() => {
            const fetching = await fetch(url).then( r => r.json()).then( j => setData(j)).then( f => setIsFetching(true));
        }
        console.log("useFetch", "renders: ");
        fetchingData();
    }, [url, isFetching])

   

    return {
        data,
        isFetching
    }

}

export default useFetch;