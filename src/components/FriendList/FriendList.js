import React from "react";
import PropTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem'
import s from './FriendList.module.css';


const FriendList = ({ friends }) => {
    
    return (
        <ul className={s.friend__list}>
            {friends.map(({ avatar, name, isOnline, id }) =>
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    
                
                
                />)}
</ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;