import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {title: ''};

		const data = {
			  "userId": 1,
			  "id": 1,
			  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			  "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
			};

		this.setState({title: data.title});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
