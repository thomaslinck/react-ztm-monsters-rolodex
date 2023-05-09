import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'thomas',
			names: ['thomas', 'jose'],
			whichName: false,
		};
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hi {this.state.name}</p>
					<button
						onClick={(props, state) =>
							this.handleButtonClick(state, props)
						}
					>
						Change name
					</button>
				</header>
			</div>
		);
	}
	handleButtonClick(state, props) {
		this.setState(
			(state, props) => {
				return {
					whichName: state.whichName ^ true,
					name: state.names[state.whichName],
				};
			},
			() => {
				console.log(this.state);
			}
		);
	}
}
export default App;
