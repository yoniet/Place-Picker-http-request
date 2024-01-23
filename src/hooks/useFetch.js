import { useEffect, useState } from 'react';

export function useFetch(fetchFunction, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFunction();
                setFetchedData(data);
            } catch (error) {
                setError({ message: error.message || 'Failed to fetch data.' })
            }
            setIsFetching(false);
        }

        fetchData();
    }, [fetchFunction]);

    return {
        isFetching,
        fetchedData,
        error,
        setFetchedData
    }
}