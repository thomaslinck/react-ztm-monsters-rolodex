import { Component } from 'react';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return <div>{monsters.map(this.createMonsterCard)}</div>;
	}

	createMonsterCard(monster) {
		return <h1 key={monster.id}>{monster.name}</h1>;
	}
}

export default CardList;
