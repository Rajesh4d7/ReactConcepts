import {useState, useEffect} from 'react';


const useQuery = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(!url) return;

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            }
            catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [url]);

    return {data, loading, error};
}


export default useQuery;