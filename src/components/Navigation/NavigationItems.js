import React, { Component } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import { Link } from 'react-router-dom';

class NavigationItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display1: "none"
        }
    }

    navSearchHoverShowingHandler = () => {
        this.setState({display1: "flex"})
    }

    navSearchHoverOutHandler = () => {
        this.setState({display1: "none"})
    }

    LoginShowingHandler = () => {
        this.setState({display2: 'flex'})
    }

    render () {
        return (
        <div className={classes.OverallNav}>
            <div className={classes.NavBar}>
                <div className={classes.NavLeft}>
                    <NavigationItem>
                        <div 
                            className={classes.NavigationDiv}
                            onMouseOver={() => this.navSearchHoverShowingHandler()}
                            onMouseOut={() => this.navSearchHoverOutHandler()}>검색</div></NavigationItem>
                    <NavigationItem><Link to="/About" className={[classes.NavigationDiv, classes.Link].join(' ')}>소개</Link></NavigationItem>
                    <NavigationItem><div className={classes.NavigationDiv}>컨텐츠</div></NavigationItem>
                </div>

                <div className={classes.LogoArea}>
                    <NavigationItem><Link to="/" className={[classes.Link, classes.NavigationDiv].join(' ')}>투약</Link></NavigationItem>
                </div>

                <div className={classes.NavRight}>
                    <NavigationItem><div className={classes.NavigationDiv}>약 기록하기</div></NavigationItem>
                    <NavigationItem><Link to='/LogIn' className={[classes.NavigationDiv, classes.Link].join(' ')}>LogIn</Link></NavigationItem>
                </div>
            </div>

            <div style={{display:this.state.display1}} className={classes.Hover} onMouseOver={() => this.navSearchHoverShowingHandler()}
            onMouseOut={() => this.navSearchHoverOutHandler()}>
                <div className={classes.HoverContents}>
                    <Link to="/singleSearch" className={[classes.HoverDrug, classes.Link].join(' ')}>단일검색</Link>
                    <Link to='/multiSearch' className={[classes.HoverHealth, classes.Link].join(' ')}>병용검색</Link>
                </div>
            </div>
        </div>
        )
    }
};

export default NavigationItems;