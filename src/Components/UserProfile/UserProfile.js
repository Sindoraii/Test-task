import React, {useContext, useState} from "react";
import {MainLayout} from "../Common/MainLayout/MainLayout";
import {UserProfileActionPanel} from "./UserProfileActionPanel/UserProfileActionPanel";
import {UserProfileForm} from "./UserProfileForm/UserProfileForm";
import {useLocation} from "react-router-dom";

export function UserProfile() {
    const [readonly,setReadonly] = useState(true);
    const location = useLocation();
    const {user} = location.state;

    function handleValueProfile () {
        return setReadonly(false);
    }

    return(
        <MainLayout
            firstSlot ={<UserProfileActionPanel valueProfile = {handleValueProfile} />}
            secondSlot = {<UserProfileForm
                stateProfile={readonly}
                user = {user}
                />}
                />
    );
}
