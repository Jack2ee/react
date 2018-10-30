import React, { Component, Fragment } from 'react';

import NavigationItems from '../Navigation/NavigationItems';
import Functions from '../Functions/Functions';
import LastDescription from '../LastDescription/LastDescription';
import classes from './Layout.css';


class Layout extends Component {
    render () {
        return (
            <Fragment>
                <div className={classes.NavigationItems}>
                    <NavigationItems />
                </div>
                <Functions />
                <LastDescription />
            </Fragment>
        )
    }
}

export default Layout;