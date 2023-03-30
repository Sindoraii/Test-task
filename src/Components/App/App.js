import React, {useEffect, useState} from "react";
import {SortingUsers} from "../SortingUsers/SortingUsers";
import {DataSource} from "../DataSource/DataSource";
export function App() {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(users)
    useEffect(() => {
        (async function fetchData() {
            setIsLoading(true);

            const res = await DataSource();
            if (Array.isArray(res)) {
                setIsLoading(false)
                setUsers(res)
            } else {
                setIsLoading(false);
                setError(res.message);
            }
        })();
    }, [])

    if (users) {
        if (isLoading) {
            return (
                <h1>Loading...</h1>
            )
        } else if (error) {
            return (
                <h1>Error:{error}</h1>
            )
        } else {
            return (
                <SortingUsers users={users}/>
            )
        }
    }
}
