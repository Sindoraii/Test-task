import './UserProfileForm.css';
import {useState} from "react";
import {startValidation} from "./UserProfileFormValidation";

export function UserProfileForm(props) {
    const {stateProfile,users} = props;
    let copyUsers = {...users};
    // const company = {
    //     bs:copyUsers.company.bs,
    //     catchPhrase: copyUsers.company.catchPhrase,
    //     name: copyUsers.company.name
    // }
 const [comment,setComment] = useState({comment: ''});

    /* state for user`s data */
    const [userData,setUserData] = useState({
        email: copyUsers.email,
        id: copyUsers.id,
        name: copyUsers.name,
        phone: copyUsers.phone,
        username: copyUsers.username,
        website: copyUsers.website
    });

    /* state for data of address */
    const [addressData, setAddressData] = useState({
        city: copyUsers.address.city,
        geo: {lat: copyUsers.address.geo.lat,
              lng: copyUsers.address.geo.lng
        },
        street:copyUsers.address.street,
        suite: copyUsers.address.suite,
        zipcode: copyUsers.address.zipcode
    })

    const [errors, setErrors] = useState([]);

    /*Handlers*/
    function editAddressData(e,field) {
        let stateCopy = {...addressData};
        stateCopy[field] = e.target.value;
        setAddressData(stateCopy);
    }

    function editUserData(e, field) {
        let stateCopy = {...userData};
        stateCopy[field] = e.target.value;
        setUserData(stateCopy);
    }

    function editComment(e,field) {
        let stateCopy = {...comment};
        stateCopy[field] = e.target.value;
        setComment(stateCopy);
    }

    function getOutputDataForValidation() {
        let outputObj = {
            name: userData.name,
            username: userData.username,
            email: userData.email,
            street: addressData.street,
            city: addressData.city,
            zipcode: addressData.zipcode,
            phone: userData.phone,
            website: userData.website
        }
        return outputObj;
    }

    function madeValidation() {
        let arrErrors = startValidation(getOutputDataForValidation());

        if (arrErrors.length === 0) {
            _onSubmit();
            } else {
            setErrors(arrErrors);

        }
            /* private */
            function _onSubmit() {
                let output = {
                    ...getOutputDataForValidation(),
                    ...comment
                }
                let sendingObj = JSON.stringify(output);
                console.log(sendingObj);
            }
    }

    /***
     *
     * @param {Array} arr - error array
     * @param {string} fieldName - name of the input
     * @returns {boolean}  - if this value is true then the input value has the error
     */

    function checkInput(arr,fieldName) {
        return arr.includes(_getError(arr,fieldName));

        function _getError(arr,fieldName){
            return arr.find((item)=> item.field === fieldName);
        }
    }

    if(stateProfile === true) {
        return (
        <>
            <h1>Профиль пользователя</h1>
            <form className='UserProfileForm_form' >
                <label>Name
                    <input type='text'  className='UserProfileForm_input' value={userData.name} disabled={true}/>
                </label>
                <label>User name
                    <input type='text' className='UserProfileForm_input' value={userData.username} disabled={true}/>
                </label>
                <label>E-mail
                    <input type='text' className='UserProfileForm_input' value={userData.email} disabled={true} />
                </label>
                <label>Street
                    <input type='text' className='UserProfileForm_input' value={addressData.street} disabled={true}/>
                </label>
                <label>City
                    <input type='text' className='UserProfileForm_input' value={addressData.city} disabled={true}/>
                </label>
                <label>Zip code
                    <input type='text' className='UserProfileForm_input' value={addressData.zipcode} disabled={true}/>
                </label>
                <label>Phone
                    <input type='text' className='UserProfileForm_input' value={userData.phone} disabled={true}/>
                </label>
                <label>Website
                    <input type='text' className='UserProfileForm_input' value={userData.website} disabled={true}/>
                </label>
                <label>Comment
                    <input type='text' className='UserProfileForm_input' value={comment.comment} disabled={true}/>
                </label>
            </form>
            <button type='submit' className='UserProfileForm_button UserProfileForm_button__disabled' disabled={true}>
                Отправить
            </button>
        </>
        );
    } else if (stateProfile === false) {
        return(
        <>
            <h1>Профиль пользователя</h1>
            <form className='UserProfileForm_form'  onSubmit={madeValidation}>
                <label >Name
                    <input type='text' className={`${(!checkInput({errors}.errors,'name')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`}  value={userData.name} onChange={(e)=> editUserData(e,'name')} />
                </label>
                <label >User name
                    <input type='text' className={`${(!checkInput({errors}.errors,'username')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`} value={userData.username} onChange={(e)=> editUserData(e,'username')} />
                </label>
                <label >E-mail
                    <input type='text' className={`${(!checkInput({errors}.errors,'email')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`}  value={userData.email} onChange={(e)=> editUserData(e,'email')} />
                </label>
                <label >Street
                    <input type='text' className={`${(!checkInput({errors}.errors,'street')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`}  value={addressData.street} onChange={(e)=> editAddressData(e,'street')}  />
                </label>
                <label >City
                    <input type='text' className={`${(!checkInput({errors}.errors,'city')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`}  value={addressData.city}  onChange={(e)=> editAddressData(e,'city')}  />
                </label>
                <label >Zip code
                    <input type='text' className={`${(!checkInput({errors}.errors,'zipcode')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`}  value={addressData.zipcode} onChange={(e)=> editAddressData(e,'zipcode')}  />
                </label>
                <label >Phone
                    <input type='text' className={`${(!checkInput({errors}.errors,'phone')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`}  value={userData.phone} onChange={(e)=> editUserData(e,'phone')}  />
                </label>
                <label >Website
                    <input type='text' className={`${(!checkInput({errors}.errors,'website')) ? "UserProfileForm_input" : "UserProfileForm_input UserProfileForm_input--error"}`} value={userData.website} onChange={(e)=> editUserData(e,'website')}  />
                </label>
                <label >Comment
                    <input type='text' className='UserProfileForm_input'  value={comment.comment} onChange={(e)=>{editComment(e,'comment')}}  />
                </label>
            </form>
            <button className='UserProfileForm_button'  onClick={madeValidation}>Отправить </button>
        </>
        );
    }
}
