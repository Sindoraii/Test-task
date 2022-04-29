import React, {useState} from "react";
import {MainLayout} from "../Common/MainLayout/MainLayout";
import {UserProfileActionPanel} from "./UserProfileActionPanel/UserProfileActionPanel";
import {DataSource} from "../DataSource/DataSource";
import {UserProfileForm} from "./UserProfileForm/UserProfileForm";


export function UserProfile() {
    const [readonly,setReadonly] = useState(true);

    function handleValueProfile () {
        return setReadonly(false);
    }

    return(
        <MainLayout
            firstSlot ={<UserProfileActionPanel valueProfile = {handleValueProfile} />}
            secondSlot = {<UserProfileForm
                stateProfile={readonly}
                users =  {DataSource()[0]}
                />}
                />
    );
}
