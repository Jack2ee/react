import React from 'react';

import LoginList from './LoginList/LoginList';
import NavigationItems from '../../../components/Navigation/NavigationItems';
import Btn from './Btn/Btn';


const login = (props) => {
    return (
        <div>
            <NavigationItems/>
            <LoginList />
            <Btn/>
        </div>
    )
};

export default login;