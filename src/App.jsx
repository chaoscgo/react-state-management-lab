import {useState} from 'react';

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [totalStrength, setTotalStrength] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
       {
          name: 'Survivor',
          price: 12,
          strength: 6,
          agility: 4,
          img: 'https://via.placeholder.com/150/92c952',
        },
        {
          name: 'Scavenger',
          price: 10,
          strength: 5,
          agility: 5,
          img: 'https://via.placeholder.com/150/771796',
        },
        {
          name: 'Shadow',
          price: 18,
          strength: 7,
          agility: 8,
          img: 'https://via.placeholder.com/150/24f355',
        },
        {
          name: 'Tracker',
          price: 14,
          strength: 7,
          agility: 6,
          img: 'https://via.placeholder.com/150/d32776',
        },
        {
          name: 'Sharpshooter',
          price: 20,
          strength: 6,
          agility: 8,
          img: 'https://via.placeholder.com/150/1ee8a4',
        },
        {
          name: 'Medic',
          price: 15,
          strength: 5,
          agility: 7,
          img: 'https://via.placeholder.com/150/66b7d2',
        },
        {
          name: 'Engineer',
          price: 16,
          strength: 6,
          agility: 5,
          img: 'https://via.placeholder.com/150/56acb2',
        },
        {
          name: 'Brawler',
          price: 11,
          strength: 8,
          agility: 3,
          img: 'https://via.placeholder.com/150/8985dc',
        },
        {
          name: 'Infiltrator',
          price: 17,
          strength: 5,
          agility: 9,
          img: 'https://via.placeholder.com/150/392537',
        },
        {
          name: 'Leader',
          price: 22,
          strength: 7,
          agility: 6,
          img: 'https://via.placeholder.com/150/602b9e',
        },
  ]);

  const handleAddFighter = (newTeamMember) => {
    if ((money - newTeamMember.zombieFighter.price) > 0) {
      const newTeamArray = [...team, newTeamMember];
      setTeam(newTeamArray);
      const newMoney = money - newTeamMember.zombieFighter.price;
      setMoney(newMoney);
    } else {
      console.log('Not enough money');
    }
  };
  
  let advice;

  if (team.length === 0) {
    advice = 'Pick some team members';
  } else {
    advice = '';
  };

  return (
  <>
    <div>
      <p>Current amount of money available: ${money}</p>
      <p>{advice}</p>  
    </div>
    <p>Team Members</p>
    <div>
      {team.map((teamMember, idx) => (
        <p>
          <img src={teamMember.zombieFighter.img} />
          <li> Name: {teamMember.zombieFighter.name}</li>
          <li> Price: ${teamMember.zombieFighter.price} </li>
          <li> Strength: {teamMember.zombieFighter.strength} </li>
          <li> Agility: {teamMember.zombieFighter.agility} </li>
          {/* <button onClick = {() => handleAddFighter({zombieFighter})}>Add Fighter to Team</button> */}
        </p>
      ))}
    </div>
    <p>Fighters</p>
    <div>
      {zombieFighters.map((zombieFighter, idx) => (
        <p>
          <img src={zombieFighter.img} />
          <li> Name: {zombieFighter.name}</li>
          <li> Price: ${zombieFighter.price} </li>
          <li> Strength: {zombieFighter.strength} </li>
          <li> Agility: {zombieFighter.agility} </li>
          <button onClick = {() => handleAddFighter({zombieFighter})}>Add Fighter to Team</button>
        </p>
      ))}
    </div>
  </>
  );
};

export default App
