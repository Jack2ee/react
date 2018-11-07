import React from 'react';

import VisionText from './VisionText/VisionText';
import VisionSquares from './VisionSquares/VisionSquares';
import classes from './Introduction.css';

const introduction = () => (
    <div className={classes.Introduction}>
        <VisionText
            title='투약의 비전과 미션'
            description="누구나 자신의 몸을 스스로 챙기고 관리할 수 있는 세상. 저희는 그런 세상을 꿈 꾸고 있습니다. 어렵기만한 의약학 지식을 누구나 손쉽게 습득하고 활용할 수 있길 바랍니다. 전문가가 하나부터 열까지 알려주지 않더라도 나 스스로 건강한 삶을 영위할 수 있도록 저희 투약이 노력하겠습니다. 앞으로 저희의 모습을 지켜봐 주세요!"
            button="더 알아보기" />
        <VisionSquares />
    </div>
);

export default introduction;