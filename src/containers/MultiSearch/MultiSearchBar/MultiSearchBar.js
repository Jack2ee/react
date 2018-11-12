import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Autosuggest from 'react-autosuggest'

import classes from './MultiSearchBar.css';

class MultiSearchBar extends Component {
    getData = async () => {
        const res = await axios.get("http://54.180.99.202/search_terms");
        return await res
    }

    constructor(props) {
        super(props);
        this.state = {
            inputs: [
                {query1: { search_type: 'drug_name', search_term: '경동아스피린장용정'}},
                {query2: { search_type: 'drug_name', search_term: '유한메토트렉세이트정'}}
            ],
            value: '',
            autocompleteData: null,
            suggestions: [],
            isRender: false,
            result: []
        };
    }


    componentDidMount () {
		if (!this.state.autocompleteData) {
				this.getData().then(data=>
						{this.setState({autocompleteData: data.data, isRender: true})})
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
    
    handleChange = (event) => {
		this.setState({value: event.target.value})
	}

	onChange = ( event , { newValue }) => {
        this.setState({
            value: newValue
        });
    };    

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		})
	}

	onSuggestionsClearRequested = () => {
		this.setState({
		  suggestions: []
		});
	};

	shouldRenderSuggestions = (value) => {
		return value.trim().length > 1;
	  };

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
        const paramsInputs = JSON.stringify(this.state.inputs)
        axios.get('http://54.180.99.202/multiSearch', { params: {
            search: paramsInputs} })
            .then(response => {console.log(response.data)
                this.setState({result: response.data})
                console.log(this.state.result)}
                )
        console.log(typeof search)
    }

    

    render () {
        const { value, suggestions } = this.state;
        const inputProps = {
            id: 1,
            value,
            onChange: this.onChange
        }
        
        if(this.state.isRender) {
            return (
                <div className={classes.InputBox}>
                    <div className={classes.InputArea}>
                        <h2>병용 금기 검색</h2>
                        <div>
                                {/* {this.state.inputs.map((i, k) => 
                                    // <Autosuggest
                                    //     id={'string '+ k.toString()}
                                    //     key={k}
                                    //     theme={classes}
                                    //     suggestions={suggestions}
                                    //     onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                    //     onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                    //     getSuggestionValue={this.getSuggestionValue}
                                    //     renderSuggestion={this.renderSuggestion}
                                    //     inputProps={inputProps}
                                    //     shouldRenderSuggestions={this.shouldRenderSuggestions}
                                    //     highlightFirstSuggestion={true}
                                    // />)
                                } */}
                                {this.state.inputs.map((i, k) => <div><input className={classes.input}></input></div>
                                )}
                                <button type="submit" className={classes.InputBtn} onClick={this.QuerySendHandler}>검색</button>                    
                            <div className={classes.InputFunc}>
                                <button className={classes.InputFuncBtn} onClick={this.InputAppendHandler}>+</button>
                                <button className={classes.InputFuncBtn} onClick={this.InputRemoveHandler}>-</button>
                            </div>
                            
                            
                        </div>
                        <div>{this.state.result.map((i, k) => <div>{
                                <div>
                                <div>{k}</div>
                                <div>주의 {i.review}</div>
                                <div>{i.more_info}</div>
                                <div>{i.note}</div>
                                </div>}</div>              
                            )}</div>
                    </div>
                </div>
        )
    } else {
        return (
            <div className={classes.spinnerArea}><div className={classes.ldsDualRing}></div></div>
    )
    }
    }; 
};

export default MultiSearchBar;