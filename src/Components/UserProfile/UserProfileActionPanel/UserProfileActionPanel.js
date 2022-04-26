import React from "react";
import './UserProfieActionPanel.css'

export function UserProfileActionPanel(props) {
    const {valueProfile} = props;

    return(
        <button className='UserProfileActionPanel_editButton' onClick={valueProfile}>
            Редактировать
        </button>
    );
}