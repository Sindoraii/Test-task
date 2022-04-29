import React from "react";
import {Link} from "react-router-dom";
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
            {/*<a className='SortingUsersCard__fullInfo'>Подробнее</a>*/}
            <div className='SortingUsersCard__fullInfo'>
                <Link to="/profile">Подробнее</Link>
            </div>
        </article>
    );
}
