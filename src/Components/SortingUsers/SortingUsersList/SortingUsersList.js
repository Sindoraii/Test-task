import React, {useContext} from "react";
import './SortingUsersList.css'
import {SortingUsersCard} from "./SortingUsersCard/SortingUsersCard";
import {UsersContext} from "../SortingUsers";
export function SortingUsersList(){
    const users = useContext(UsersContext);

    return (
        <div className='_content-SortingUsersList'>
            <h1 >Список пользователей</h1>
            <section className='SortingUsersList'>
                {users.map((user)=>(<SortingUsersCard key={user.id} user={user}/>))}
            </section>
            <p className='User-counter'>Найдено {users.length} пользователей</p>
        </div>
    );
}
