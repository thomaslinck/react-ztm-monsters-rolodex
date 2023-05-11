import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
	const monstersSource = 'https://jsonplaceholder.typicode.com/users';
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchFiled] = useState('');

	const onSearchBoxChange = (event) => {
		setSearchFiled(event.target.value.toLowerCase());
	};

	const byMonsterThatIncludeSearchText = (monster) => {
		return monster.name.toLowerCase().includes(searchField);
	};

	useEffect(
		() => {
			fetch(monstersSource)
				.then((response) => response.json())
				.then((responseInJson) => setMonsters(responseInJson))
				.catch(() => console.error('Monsters API call failed'));
		},
		[] //useEffect ensures we will only fetch once from the database since there are no other dependencies
	);

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				className="monster-search-box"
				placeholder="search monsters"
				onChangeHandler={onSearchBoxChange}
			/>
			<CardList
				monsters={monsters.filter(byMonsterThatIncludeSearchText)}
			/>
		</div>
	);
};

export default App;
