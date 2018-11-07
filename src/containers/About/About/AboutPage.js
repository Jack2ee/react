import React from 'react';

import Introduction from '../../../components/Functions/Introduction/Introduction';
import Team from '../../../assets/images/team.jpg';
import classes from './AboutPage.css'

const aboutPage = () => (
    <div>
        <Introduction />
        <img src={Team} alt="team" className={classes.TeamImg}/>
    </div>
);

export default aboutPage;