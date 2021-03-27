import { useEffect, useState } from 'react';
import axios from "axios";

export default function useFromApi(
    actionCreator,
    dependencyList
) {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        setLoading(true);
        setDone(false);
        axios({
            method: actionCreator.method,
            url: actionCreator.url,
            data: actionCreator.payload,
        })
            .then((response) => {
                setLoading(false);
                setDone(true);
                setData(response);
            })
    }, [...dependencyList]);

    return { loading, done, data };
}