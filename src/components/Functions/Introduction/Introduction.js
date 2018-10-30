import React from 'react';

import VisionText from './VisionText/VisionText';
import VisionSquares from './VisionSquares/VisionSquares';
import classes from './Introduction.css';

const introduction = () => (
    <div className={classes.Introduction}>
        <VisionText
            title='투약의 비전과 미션'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            button="더 알아보기" />
        <VisionSquares />
    </div>
);

export default introduction;