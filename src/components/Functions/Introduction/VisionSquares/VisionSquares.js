import React from 'react';

import VisionSquare1 from './VisionSquare1/VisionSquare1';
import VisionSquare2 from './VisionSquare2/VisionSquare2';
import VisionSquare3 from './VisionSquare3/VisionSquare3';
import VisionSquare4 from './VisionSquare4/VisionSquare4';
import classes from './VisionSquares.css';

const visionSquares = () => (
    <div className={classes.VisionSquaresLayout}>
        <div className={classes.VisionSquares}>
            <div className={classes.VisionSquare1and2}>
                <VisionSquare1
                    title="투약 정보 제공"
                    description1="믿을 수 있는 정보에 쉽게 다가가세요."
                    description2="국가가 보장하고, 전문가도 믿을 수 있는 정보를 제공합니다."
                    /> 
                
                <VisionSquare2
                    title="투약 커뮤니티"
                    description1="나와 같은 질환을 앓는 이와 소통하세요."
                    description2="알레르기부터 큰 수술을 감행한 질환까지, 게시판에서 자유로게 정보를 공유하세요." />
            </div>
            
            <div className={classes.VisionSquare3and4}>
                <VisionSquare3
                    title="투약 건강 모니터링"
                    description1="처방전 사진으로 건강 모니터링 서비스가 가능합니다."
                    description2="과거 질환 행적을 추적하여 미래 아픔에 대비하세요." />
                <VisionSquare4
                    title="투약 세이렌"
                    description1="더 이상 약국에서 기다리지 마세요."
                    description2="병원에서 나오자마자 예약하고 약국에서 간편하게 픽업하세요." />
            </div>
        </div>
    </div>
);

export default visionSquares;