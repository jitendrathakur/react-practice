//search
import React, {Component} from 'react';
//const Component = React.Component;

// const SearchBar = () => {
// 	return <input />
// };

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {term: 'Hello'};
	}

	render() {
		//return <input onChange={this.onInputChange} />;
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.setState({term:event.target.value})} 
					/>
				value of the input: {this.state.term}
			</div>
		);
	}

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;