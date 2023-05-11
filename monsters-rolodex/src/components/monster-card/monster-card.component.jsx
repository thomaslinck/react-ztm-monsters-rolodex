import './monster-card.styles.css';

const MonsterCard = ({ monster }) => {
	const { id, name, email } = monster;
	return (
		<div className="monster-card">
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default MonsterCard;
