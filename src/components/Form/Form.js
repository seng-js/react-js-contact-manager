import React, {useEffect, useState} from 'react';
import './Form.css';
import {useForm} from 'react-hook-form';
import {saveContactHandler} from "../../services";
import {useDispatch} from "react-redux";
import {avatars, listCity, listPosition} from "../../util";

export const Form = (props) => {
    const dispatch = useDispatch();
    const [actionLabel, setActionLabel] = useState('Create');
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const saveInfo = (data) => {
        saveContactHandler(data, dispatch);
    }

    const socialNetworks =  ['facebook',  'instagram', 'twitter', 'youtube'];
    const renderSocialNetworks = socialNetworks.map((socialNetwork, key) => {
        return <input key={key} type="text"
                      {...register(`social_networks.${socialNetwork}`)}
                      className="social"
                      placeholder={socialNetwork} />
    });

    const renderAvatars = avatars.map((avatarProfile, key) => {
        const defaultCheckedProfile = key === 0 && props.item === undefined;
        return <>
            <input key={key} defaultChecked={defaultCheckedProfile}
                   type="radio" {...register('avatar')} className="radio_item" value={avatarProfile} id={key.toString()} />
                <label className="label_item" htmlFor={key.toString()}><img alt={avatarProfile} src={avatarProfile} /></label>
        </>
    });

    const renderPositions = listPosition.map((position, key) => {
        return <>
            <option key={key} value={position === 'Select Position' ? '' : position}>{position}</option>
        </>
    });

    const renderCities = listCity.map((city, key) => {
        return <>
            <option key={key} value={city === 'Select City' ? '' : city} >{city}</option>
        </>
    });

    useEffect(() => {
        if (props.index !== undefined) {
            setActionLabel('Update');
        }
        reset(props.item);
    }, [props.item, reset]);

    return (
        <div className="">
            <form action="" id="form" onSubmit={handleSubmit(saveInfo)} className="form-control">
                <label class="profile" htmlFor="socialNetworks">Select Avata</label>
               <div className="avatar-container">
                   {renderAvatars}
               </div>
                <div className={errors?.name ? "form-control error" : "form-control"}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"
                           {...register('name', {required: {value: true, message: 'Name is required!'}}) }
                    />
                    <small>{errors?.name && errors?.name.message}</small>
                </div>
                <div className={errors?.company ? "form-control error" : "form-control"}>
                    <label htmlFor="name">Company</label>
                    <input type="text" id="company"
                           {...register('company', {required: {value: true, message: 'Company is required!'}}) }
                    />
                    <small>{errors?.company && errors?.company.message}</small>
                </div>
                <label htmlFor="position">Position</label>
                <div className={errors?.position ? "form-control error" : "form-control"}>
                    <select id="position"
                            {...register('position', {required: {value: true, message: 'Position is required!'}}) }
                    >
                        {renderPositions}
                    </select>
                    <small>{errors?.position && errors?.position.message}</small>
                </div>
                <div className={errors?.city ? "form-control error" : "form-control"}>
                    <label htmlFor="city">City</label>
                    <select id="city"
                            {...register('city', {required: {value: true, message: 'City is required!'}}) }
                    >
                        {renderCities}
                    </select>
                    <small>{errors?.city && errors?.city.message}</small>
                </div>
                <div className="form-control">
                    <label htmlFor="isContact" className="checkbox">Add to contact?</label>
                    <input
                        id="isContact"
                        type="checkbox"
                        className="checkbox"
                        {...register('isContact')}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="isFavorite" className="checkbox">Add to favorite?</label>
                    <input
                        id="isFavorite"
                        type="checkbox"
                        className="checkbox"
                        {...register('isFavorite')}
                    />
                </div>
                <label htmlFor="socialNetworks">Social Networks</label>
                <div className="social-networks">
                    {renderSocialNetworks}
                </div>
                <input type="hidden" id="id" name="index" value={props.item?.index} />
                <input type="submit" value={actionLabel} />
            </form>
        </div>
    );
};

export default Form;