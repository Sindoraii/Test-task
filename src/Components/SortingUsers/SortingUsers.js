import React from "react";
import {MainLayout} from "../Common/MainLayout/MainLayout";
import {SortingUsersActionPanel} from "./SortingUsersActionPanel/SortingUsersActionPanel";
import {SortingUsersList} from "./SortingUsersList/SortingUsersList";

export function SortingUsers(props){
    const usersCopy = [...props.users];

    return(
        <MainLayout
            firstSlot = {<SortingUsersActionPanel/>}
            secondSlot ={<SortingUsersList users={usersCopy}
            />}
        />
    );
}
