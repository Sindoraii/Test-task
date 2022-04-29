import React from "react";
import {SortingUsers} from "../SortingUsers/SortingUsers";
import {DataSource} from "../DataSource/DataSource";

export function App() {
    return (
        <>
            <SortingUsers users={DataSource()}/>
        </>
    );
}
