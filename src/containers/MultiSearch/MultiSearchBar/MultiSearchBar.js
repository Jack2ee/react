import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Autosuggest from 'react-autosuggest'

import classes from './MultiSearchBar.css';

class MultiSearchBar extends Component {
    getData = async () => {
        const res = await axios.get("http://54.180.99.202/search/single");
        return await res
    }

    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {query1: { search_type: 'drug_name', search_term: '경동아스피린장용정'}},
                {query2: { search_type: 'drug_name', search_term: '유한메토트렉세이트정'}}
            ],
            isRender: false
        };
    }


    componentDidMount () {
		if (!this.state.autocompleteData) {
				this.getData().then(data=>
						{this.setState({autocompleteData: data.data, isRender: true})
						console.log(this.state.autocompleteData)})
						.catch(err=>console.log(err))
				}
    }
    
    escapeRegexCharacters = (str) => {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
	}
	
	getSuggestions = (value) => {
		const escapedValue = this.escapeRegexCharacters(value.trim());
	
		if (escapedValue === '') {
			return [];
		}

		const regex = new RegExp('^' + escapedValue, 'i');

		return this.state.autocompleteData.filter(data => regex.test(data.title));
	}

	getSuggestionValue = (suggestion) => {
		return suggestion.title;
	}

	renderSuggestion = (suggestion) => {
		return <span>{suggestion.title}</span>
	}

    InputAppendHandler = () => {
        let newInput = `query${this.state.inputs.length+1}`;
        this.setState({inputs: [...this.state.inputs, { [newInput]: { search_type: '', search_term: '' }}]});
    };

    InputRemoveHandler = () => {
        if (this.state.inputs.length > 1) {
            this.state.inputs.pop();
            let removedInputs = this.state.inputs;
            this.setState({inputs: removedInputs});
        };
    };

    QuerySendHandler = () => {
        const inputs = this.state.inputs
        const search = {search: inputs}
        axios.get('http://54.180.99.202/multiSearch', { params: search })
            .then(response=> console.log(response))
        console.log(typeof search)
    }

    render () {
        return (
            <div className={classes.InputBox}>
                <div className={classes.InputArea}>
                    <h2>병용 금기 검색</h2>
                    <div>
                            {this.state.inputs.map((input, k) => <input key={k} type="text" className={classes.Input} name={input}/>)}
                            <button type="submit" className={classes.InputBtn} onClick={this.QuerySendHandler}>검색</button>                    
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