import React from "react";
import {UserProfile} from "../UserProfile/UserProfile";
import {SortingUsers} from "../SortingUsers/SortingUsers";
import {DataSource} from "../DataSource/DataSource";

export function App(){
    return(
        <>
            <SortingUsers users = {DataSource()} />
            {/*<UserProfile/>*/}
        </>
    );
}


