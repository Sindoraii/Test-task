import React from "react";
import './SortingUsersList.css'
import {SortingUsersCard} from "./SortingUsersCard/SortingUsersCard";

export function SortingUsersList(props){
    const users = props.users;
    return (
        <div className='_content-SortingUsersList'>
            <h1  >Список пользователей</h1>
            <section className='SortingUsersList'>
                <SortingUsersCard user={users[0]}/>
                <SortingUsersCard user={users[1]}/>
                <SortingUsersCard user={users[2]}/>
                <SortingUsersCard user={users[3]}/>
                <SortingUsersCard user={users[4]}/>
                <SortingUsersCard user={users[5]}/>
                <SortingUsersCard user={users[6]}/>
                <SortingUsersCard user={users[7]}/>
                <SortingUsersCard user={users[8]}/>
                <SortingUsersCard user={users[9]}/>
            </section>
            <p className='User-counter'>Найдено {users.length} пользователей</p>
        </div>
    );
}
