import React from 'react';
// import { render } from 'react-dom';

require('assets/styles/myFirstComponent.css')



export default React.createClass ({
	getInitialState: function(){
		return {
			count: 0,
			likes: "likes"
		}
	},
	counter: function(e){
		var likesWord;
		var count = this.state.count + 1;
		if (count === 1) {
			likesWord = 'like';
		} else {
			likesWord = 'likes';
		}

		this.setState({
			count: count, 
			likes: likesWord
		});

	},
	render: function () {
		return (
			<div className="center">
			<button id="clickMe" onClick={this.counter} className="buttonStyle">{this.state.count} {this.state.likes}</button>
			</div>
		)
	}
})