import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Autosuggest from 'react-autosuggest'
import classes from './SingleSearchBar.css';


class SingleSearchBar extends Component {
	getData = async () => {
			const res = await axios.get("http://localhost:3500/search/single");
			return await res
	}
	constructor(props) {
			super(props);
			this.state = {
					value: " ",
					autocompleteData: null,
					suggestions: [],
					CLASS_NO: null,
					ETC_OTC_CODE: null,
					ENTP_NAME: null,
					STORAGE_METHOD: null,
					VALID_TERM: null,
					EE_DOC_DATA: [],
					UD_DOC_DATA: [],
					NB_DOC_DATA: [],
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

	testHandler = () => {
			// document.getElementById('drugContent').style.display = 'block'
			axios.get('http://localhost:3500/singleSearch/' + this.state.value)
					.then(response =>
							{const data = response.data
							this.setState({
									CLASS_NO: data[0],
									ETC_OTC_CODE: data[1],
									ENTP_NAME: data[2],
									STORAGE_METHOD: data[3],
									VALID_TERM: data[4],
									EE_DOC_DATA: data[5],
									UD_DOC_DATA: data[6],
									NB_DOC_DATA: data[7]
							})
							console.log(data)
							})
					.catch(error => console.log(error))
	}

	inputValueHandler = () => {
			document.getElementById('toggleBtn').style.display = 'none'
			const value = this.refs.singleSearch.value;
			this.setState({
					value: value,
					suggestions: null,
					CLASS_NO: null,
					ETC_OTC_CODE: null,
					ENTP_NAME: null,
					STORAGE_METHOD: null,
					VALID_TERM: null,
					EE_DOC_DATA: [],
					UD_DOC_DATA: [],
					NB_DOC_DATA: [],
			});
	}

	enterPressHandler = (e) => {
			if (e.key === 'Enter') {
					this.inputValueHandler();
					this.testHandler();
			}
	}

	toggleHandler = () => {
			if (document.getElementById('toggleContent').style.display === 'block') {
					document.getElementById('toggleContent').style.display = 'none'
			} else {
					document.getElementById('toggleContent').style.display = 'block'
			}
	}

	handleChange = (event) => {
		this.setState({value: event.target.value})
	}

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue
		})
	}

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

	
	render () {
	  const { value, suggestions } = this.state;
		const inputProps = {
		placeholder: "제품명을 입력하세요",
		value,
		onChange: this.onChange
		};
		if(this.state.isRender){
			return (
				<div className={classes.InputBox}>
					<div className={classes.InputArea}>
						<h2>단일 제품 검색</h2>
						<div>
						<Autosuggest
							theme={classes}
							suggestions={suggestions}
							onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
							onSuggestionsClearRequested={this.onSuggestionsClearRequested}
							getSuggestionValue={this.getSuggestionValue}
							renderSuggestion={this.renderSuggestion}
							inputProps={inputProps}
							onKeyPress={(e) => this.enterPressHandler(e)}
						/>
					<button 
						type="submit" 
						className={classes.InputBtn} 
						onClick={this.testHandler}>검색</button>
					</div>

					
							<div className={classes.drugContent}>
									<div><h3>분류</h3> {this.state.CLASS_NO}</div>

									<div><h3>효능효과</h3>
									<div>{this.state.EE_DOC_DATA}</div>
									</div>

									<div><h3>복용방법</h3>
									<div>{this.state.UD_DOC_DATA}</div>
									</div>
									<button className={classes.moreBtn} onClick={this.toggleHandler}>자세히 알아보기</button>
									<div style={{display: 'none'}} id='toggleContent'>
											<div><h3>의약품분류</h3> {this.state.ETC_OTC_CODE}</div>

											<div><h3>제약사</h3> {this.state.ENTP_NAME}</div>

											<div><h3>보관방법</h3> {this.state.STORAGE_METHOD}</div>

											<div><h3>유효기간</h3> {this.state.VALID_TERM}</div> 
											<div><h3>주의사항</h3>
											<div>{this.state.NB_DOC_DATA}</div>
											</div>

													
											</div>
									</div>
						</div>
				</div>
					)
			} else {
					return (
							<div className={classes.spinnerArea}><div className={classes.ldsDualRing}></div></div>
					)
			}

	}
};

export default SingleSearchBar;