import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			allMonsters: [],
			monstersToDisplay: [],
		};
		this.monstersSource = 'https://jsonplaceholder.typicode.com/users';
	}
	componentDidMount() {
		// this method is called in the first time the component is rendered
		fetch(this.monstersSource)
			.then((response) => response.json())
			.then((responseInJson) =>
				this.setState(
					{
						allMonsters: responseInJson,
						monstersToDisplay: responseInJson,
					},
					() => console.log(this.state)
				)
			)
			.catch((error) => console.error('Monsters API call failed'));
	}
	render() {
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						this.setState({
							monstersToDisplay: this.state.allMonsters.filter(
								(monster) =>
									monster.name
										.toLowerCase()
										.includes(
											event.target.value.toLowerCase()
										)
							),
						});
					}}
				/>
				{this.state.monstersToDisplay.map((m) => (
					<h1 key={m.id}>{m.name}</h1>
				))}
			</div>
		);
	}
}

export default App;
