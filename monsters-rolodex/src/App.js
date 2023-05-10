import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
		this.url = 'https://jsonplaceholder.typicode.com/users';
	}
	componentDidMount() {
		// this method is called in the first time the component is rendered
		fetch(this.url)
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return {
							monsters: users,
						};
					},
					() => console.log(this.state)
				)
			);
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map((m) => (
					<h1 key={m.id}>{m.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
