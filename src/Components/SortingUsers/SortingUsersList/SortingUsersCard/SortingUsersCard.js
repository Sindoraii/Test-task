import React from "react";
import "./SortingUsersCard.css"

export function SortingUsersCard(props) {
    const {user} = props;

    return(
        <article className='SortingUsersCard'>
            <p className='SortingUsersCard__field'>ФИО:
                <span className='SortingUsersCard__value'>{user.name}</span>
            </p>
            <p className='SortingUsersCard__field'>город:
                <span className='SortingUsersCard__value'> {user.address.street}</span>
            </p>
            <p className='SortingUsersCard__field'>компания:
                <span className='SortingUsersCard__value'>{user.company.name}</span>
            </p>
            <a className='SortingUsersCard__fullInfo'>Подробнее</a>
        </article>
    );
}