import React from "react";
import "./SortingUsersActionPanel.css"

export function SortingUsersActionPanel(props){
 const {handlerSortByCity,handlerSortByCompany} = props;

    return(
        <section className='SortingUsersActionPanel'>
            <h2 className='SortingUsersActionPanel__name'>Сортировка</h2>
            <button className='SortingUsersActionPanel__button' onClick={handlerSortByCity}>
                по городу
            </button>
            <button className='SortingUsersActionPanel__button' onClick={handlerSortByCompany}>
                по компаниям
            </button>
        </section>
    );
}
