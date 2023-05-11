import MonsterCard from '../monster-card/monster-card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster) => (
			<MonsterCard monster={monster} key={monster.id} />
		))}
	</div>
);
export default CardList;
