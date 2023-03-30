import React, {useState} from "react";
import {MainLayout} from "../Common/MainLayout/MainLayout";
import {SortingUsersActionPanel} from "./SortingUsersActionPanel/SortingUsersActionPanel";
import {SortingUsersList} from "./SortingUsersList/SortingUsersList";

export function SortingUsers({users}) {
    const [sortedUsers, setSortedUsers] = useState(users);
    console.log('sortedUsers',sortedUsers);


    function getUsersSorted(field){
        let sortedUsersByField;
        if(field ==='city') {
            sortedUsersByField =  sortedUsers.sort((firstUser,secondUser)=> firstUser.address.city > secondUser.address.city ? 1 : -1);
        } else if(field === 'company') {
            sortedUsersByField = sortedUsers.sort((firstUser,secondUser)=>firstUser.company.name > secondUser.company.name ? 1 : -1);
        }
         setSortedUsers(sortedUsersByField);
    }


    return (
            <MainLayout
                firstSlot={<SortingUsersActionPanel handlerSortByCity={()=>getUsersSorted('city')}
                                                    handlerSortByCompany = {()=>getUsersSorted('company')}
                />}
                secondSlot={<SortingUsersList users={sortedUsers}
                />}
            />
        );

}
