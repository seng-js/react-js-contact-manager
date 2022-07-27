import React, {useState} from 'react';
import './Form.css';
import {useForm} from 'react-hook-form';
import {saveContactHandler} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {avatars, listCity, listPosition} from "../../util";

export const Form = (props) => {
    const state = useSelector(state => state);
    const {name, company} = props.index === undefined ? '' : state.contacts[props.index];
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addToFavorite, setAddToFavorite] = useState('');
    const [addToContact, setAddToContact] = useState('');
    const [selectAvatar, setSelectAvatar] = useState('img/img1.jpg');
    const saveInfo = (data) => {
        saveContactHandler(data, dispatch);
    }

    const socialNetworks =  ['facebook',  'instagram', 'twitter', 'youtube'];
    const renderSocialNetworks = socialNetworks.map((socialNetwork, key) => {
        return <input key={key} type="text" {...register(`social_networks.${socialNetwork}`)} className="social" placeholder={socialNetwork.toUpperCase()} />
    });

    const renderAvatars = avatars.map((avatar, key) => {
        const checked = key === 0 && selectAvatar === '' || selectAvatar === avatar;
        return <>
            <input data-key={key} key={key} checked={checked}
                   type="radio" {...register('avatar')} className="radio_item" value={avatar} id={key.toString()} />
                <label className="label_item" htmlFor={key.toString()}><img alt={avatar} src={avatar} /></label>
        </>
    });

    const renderPositions = listPosition.map((position, key) => {
        return <>
            <option key={key} value={position === 'Select Position' ? '' : position}>{position}</option>
        </>
    });

    const renderCities = listCity.map((city, key) => {
        return <>
            <option key={key} value={city === 'Select City' ? '' : city}>{city}</option>
        </>
    });

    const favoriteRadioOptions = [
        {
            'title': 'Add to favorite?',
            'name': 'isFavorite'
        },
        {
            'title': 'Add to contact?',
            'name': 'isContact'
        }
    ];

    const renderFavoriteRadioOptions = favoriteRadioOptions.map((favoriteRadio, key) => {
        const name = favoriteRadio.name;
        return (
            <div className="addTo" key={key}>
                <span>{favoriteRadio.title}</span>
                <div>
                    <input id={name + 'Yes'} {...register(name)} checked={addToContact !== ''} type="radio" className="with-font" value="true" />
                    <label htmlFor={name + 'Yes'}>Yes</label>
                </div>
                <div>
                    <input id={name + 'No'} {...register(name)} checked={addToContact === ''} type="radio" className="with-font" value="false" />
                    <label htmlFor={name + 'No'}>No</label>
                </div>
            </div>
        );
    });

    return (
        <div className="">
            <form action="" id="form" onSubmit={handleSubmit(saveInfo)} className="form">
                <label htmlFor="socialNetworks">Select Avata</label>
               <div className="avatar-container">
                   {renderAvatars}
               </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name}
                           {...register('name', {required: {value: true, message: 'Name is required!'}}) }
                    />
                    <small>{errors?.name && errors?.name.message}</small>
                </div>
                <div>
                    <label htmlFor="name">Company</label>
                    <input type="text" id="company" value={company}
                           {...register('company', {required: {value: true, message: 'Company is required!'}}) }
                    />
                    <small>{errors?.company && errors?.company.message}</small>
                </div>
                <label htmlFor="position">Position</label>
                <div>
                    <select id="position"
                            {...register('position', {required: {value: true, message: 'Position is required!'}}) }
                    >
                        {renderPositions}
                    </select>
                    <small>{errors?.position && errors?.position.message}</small>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <select id="city"
                            {...register('city', {required: {value: true, message: 'City is required!'}}) }
                    >
                        {renderCities}
                    </select>
                    <small>{errors?.city && errors?.city.message}</small>
                </div>
                {renderFavoriteRadioOptions}
                <label htmlFor="socialNetworks">Social Networks</label>
                <div className="social-networks">
                    {renderSocialNetworks}
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};
export default Form;
