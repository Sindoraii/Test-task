import React from "react";
import "./SortingUsersActionPanel.css"

export function SortingUsersActionPanel(){

    return(
        <section className='SortingUsersActionPanel'>
            <h2 className='SortingUsersActionPanel__name'>Сортировка</h2>
            <button className='SortingUsersActionPanel__button'>
                по городу
            </button>
            <button className='SortingUsersActionPanel__button'>
                по компаниям
            </button>
        </section>
    );
}