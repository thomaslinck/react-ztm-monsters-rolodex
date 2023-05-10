import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
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
						monsters: responseInJson,
					},
					() => console.log(this.state)
				)
			)
			.catch((error) => console.error('Monsters API call failed'));
	}
	componentDidUpdate() {
		console.log(this.state.monsters);
		console.log(this.state.searchField);
	}

	onSearchBoxChange = (event) => {
		this.setState({
			searchField: event.target.value.toLowerCase(),
		});
	};

	byMonsterThatIncludeSearchText = (monster) => {
		return monster.name.toLowerCase().includes(this.state.searchField);
	};

	createMonsterTag(monster) {
		return <h1 key={monster.id}>{monster.name}</h1>;
	}
	render() {
		const { monsters } = this.state;

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={this.onSearchBoxChange}
				/>
				{monsters
					.filter(this.byMonsterThatIncludeSearchText)
					.map(this.createMonsterTag)}
			</div>
		);
	}
}

export default App;
