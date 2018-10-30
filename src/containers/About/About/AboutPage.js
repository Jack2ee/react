import React from 'react';

import Introduction from '../../../components/Functions/Introduction/Introduction';
import Team from '../../../assets/images/team.PNG';

const aboutPage = () => (
    <div>
        <Introduction />
        <img src={Team} alt="team"/>
    </div>
);

export default aboutPage;