import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
		// by using () => {} syntax, this is automatically binded to the method.
		this.setState({
			searchField: event.target.value.toLowerCase(),
		});
	};

	byMonsterThatIncludeSearchText = (monster) => {
		return monster.name.toLowerCase().includes(this.state.searchField);
	};

	render() {
		const { monsters } = this.state;

		return (
			<div className="App">
				<SearchBox
					className="monster-search-box"
					placeholder="search monsters"
					onChangeHandler={this.onSearchBoxChange}
				/>
				<CardList
					monsters={monsters.filter(
						this.byMonsterThatIncludeSearchText
					)}
				/>
			</div>
		);
	}
}

export default App;
