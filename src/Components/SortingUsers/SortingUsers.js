import React, {createContext, useState} from "react";
import {MainLayout} from "../Common/MainLayout/MainLayout";
import {SortingUsersActionPanel} from "./SortingUsersActionPanel/SortingUsersActionPanel";
import {SortingUsersList} from "./SortingUsersList/SortingUsersList";

export const UsersContext = createContext(null);

export function SortingUsers({users}) {
    const [sortedUsers, setSortedUsers] = useState(users);

    function getUsersSorted(field){
        const deepCopy = JSON.parse(JSON.stringify(sortedUsers));
        if(field ==='city') {
            const sortedUsersByField =  deepCopy.sort((firstUser,secondUser)=> firstUser.address.city > secondUser.address.city ? 1 : -1);
            setSortedUsers(sortedUsersByField)
        } else if(field === 'company') {
            const sortedUsersByField = deepCopy.sort((firstUser,secondUser)=>firstUser.company.name > secondUser.company.name ? 1 : -1);
            setSortedUsers(sortedUsersByField)
        }
    }

    return (
        <UsersContext.Provider value={sortedUsers}>
            <MainLayout
                firstSlot={
                    <SortingUsersActionPanel handlerSortByCity={() => getUsersSorted('city')}
                                             handlerSortByCompany={() => getUsersSorted('company')}
                    />}
                secondSlot={<SortingUsersList/>}
            />}
            />
        </UsersContext.Provider>
        );
}
