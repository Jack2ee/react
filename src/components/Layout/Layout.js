import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import NavigationItems from '../Navigation/NavigationItems';
import Functions from '../Functions/Functions';
import LastDescription from '../LastDescription/LastDescription';
import classes from './Layout.css';


class Layout extends Component {
    render () {
        return (
            <Aux>
                <div className={classes.NavigationItems}>
                    <NavigationItems />
                </div>
                <Functions />
                <LastDescription />
            </Aux>
        )
    }
}

export default Layout;