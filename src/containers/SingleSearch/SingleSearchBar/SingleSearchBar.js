import React, { Component } from 'react';

import classes from './SingleSearchBar.css';
import axios from '../../../axios-orders';


class SingleSearchBar extends Component {
    state = {
        value: null,
        CLASS_NO: null,
        ETC_OTC_CODE: null,
        ENTP_NAME: null,
        STORAGE_METHOD: null,
        VALID_TERM: null,
        EE_DOC_DATA: [],
        UD_DOC_DATA: [],
        NB_DOC_DATA: []
    };    
    

    testHandler = () => {
        axios.get('http://localhost:3500/singleSearch/' + this.state.value)
            .then(response =>
                {const data = response.data
                this.setState({
                    CLASS_NO: data[0],
                    ETC_OTC_CODE: data[1],
                    ENTP_NAME: data[2],
                    STORAGE_METHOD: data[3],
                    VALID_TERM: data[4],
                    EE_DOC_DATA: data[5].map(i => this.state.EE_DOC_DATA.concat(i)),
                    UD_DOC_DATA: data[6].map(i => this.state.UD_DOC_DATA.concat(i)),
                    NB_DOC_DATA: data[7].map(i => this.state.NB_DOC_DATA.concat(i)),
                })
                console.log(data)
                })
            .catch(error => console.log(error))
    }

    inputValueHandler = () => {
        const value = this.refs.singleSearch.value;
        this.setState({
            value: value,
            CLASS_NO: null,
            ETC_OTC_CODE: null,
            ENTP_NAME: null,
            STORAGE_METHOD: null,
            VALID_TERM: null,
            EE_DOC_DATA: [],
            UD_DOC_DATA: [],
            NB_DOC_DATA: []
        });
    }

    enterPressHandler = (e) => {
        if (e.key === 'Enter') {
            this.inputValueHandler();
            this.testHandler();
        }
    }
      
    render () {
        return (
            <div className={classes.InputBox}>
                <div className={classes.InputArea}>
                    <h2>단일 제품 검색</h2>
                    <div>
                    <input 
                        type="text" 
                        className={classes.Input} 
                        onChange={this.inputValueHandler}
                        onKeyPress={(e) => this.enterPressHandler(e)} 
                        ref='singleSearch'
                        />
                    <button 
                        type="submit" 
                        className={classes.InputBtn} 
                        onClick={this.testHandler}>검색</button>
                    </div>

                    <div>복지부분류
                    <div>{this.state.CLASS_NO}</div>
                    </div>

                    <div>의약품분류
                    <div>{this.state.ETC_OTC_CODE}</div>
                    </div>

                    <div>제약사
                    <div>{this.state.ENTP_NAME}</div>
                    </div>

                    <div>보관방법
                    <div>{this.state.STORAGE_METHOD}</div>
                    </div>

                    <div>유효기간
                    <div>{this.state.VALID_TERM}</div>
                    </div>

                    <div>효능효과
                    <div>{this.state.EE_DOC_DATA.map((i, a)=>
                        <div key={a}>{i}</div>)}</div>
                    </div>

                    <div>복용방법
                    <div>{this.state.UD_DOC_DATA.map((i, b)=>
                        <div key={b}>{i}</div>)}</div>
                    </div>

                    <div>주의사항
                    <div>{this.state.NB_DOC_DATA.map((i, c)=>
                        <div key={c}>{i}</div>)}</div>
                    </div>
                </div>
            </div>
        )
    }

};

export default SingleSearchBar;