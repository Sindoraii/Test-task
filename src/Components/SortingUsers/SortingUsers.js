import React, {useState} from "react";
import {MainLayout} from "../Common/MainLayout/MainLayout";
import {SortingUsersActionPanel} from "./SortingUsersActionPanel/SortingUsersActionPanel";
import {SortingUsersList} from "./SortingUsersList/SortingUsersList";

export function SortingUsers(props) {
    // const users = [...props.users];

    const [sortedUsers, setSortedUsers] = useState(props.users);
    console.log('sortedUsers',sortedUsers);
    console.log('setState',setSortedUsers )


    function getUsersSorted(field){
        let sortedUsersByField;

        if(field ==='city') {

            sortedUsersByField =  sortedUsers.sort((firstUser,secondUser)=> firstUser.address.city > secondUser.address.city ? 1 : -1);
            console.log('CITY',sortedUsersByField)
        } else if(field === 'company') {
            sortedUsersByField = sortedUsers.sort((firstUser,secondUser)=>firstUser.company.name > secondUser.company.name ? 1 : -1);
        }
         setSortedUsers(sortedUsersByField);
    }

       // let sortedUsersByField;

    //    switch (field) {
    //         case 'city':
    //              let sortedUsersByFieldCity =  sortedUsers.sort((firstUser,secondUser)=> firstUser.address.city > secondUser.address.city ? 1 : -1);
    //             setSortedUsers(sortedUsersByFieldCity);
    //             console.log('HANDLER city',sortedUsers);
    //             // console.log('sortedUsers',sortedUsers)
    //             break;
    //         case 'company':
    //             let sortedUsersByFieldCompany =  sortedUsers.sort((firstUser,secondUser)=>firstUser.company.name - secondUser.company.name ? 1 : -1);
    //             setSortedUsers(sortedUsersByFieldCompany);
    //             break;
    //     }
    //     // console.log('HANDLER ',sortedUsersByField);
    //     // setSortedUsers(sortedUsersByField);
    // }


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
