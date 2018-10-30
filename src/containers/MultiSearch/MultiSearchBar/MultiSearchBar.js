import React, { Component } from 'react';

import classes from './MultiSearchBar.css';

class MultiSearchBar extends Component {
    state = {
        inputs: ['query1']
    };

    InputAppendHandler = () => {
        let newInput = `query${this.state.inputs.length+1}`;
        this.setState({inputs: this.state.inputs.concat([newInput])});
    };

    InputRemoveHandler = () => {
        if (this.state.inputs.length > 1) {
            this.state.inputs.pop();
            let removedInputs = this.state.inputs;
            this.setState({inputs: removedInputs});
        };
    };

    render () {
        return (
            <div className={classes.InputBox}>
                <div className={classes.InputArea}>
                    <h2>병용 금기 검색</h2>
                    <div>
                        <form>
                            {this.state.inputs.map(input => <input type="text" className={classes.Input} key={input} name={input}/>)}
                            <button type="submit" className={classes.InputBtn}>검색</button>
                        </form>                      
                        <div className={classes.InputFunc}>
                            <button className={classes.InputFuncBtn} onClick={this.InputAppendHandler}>+</button>
                            <button className={classes.InputFuncBtn} onClick={this.InputRemoveHandler}>-</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }; 
};

export default MultiSearchBar;