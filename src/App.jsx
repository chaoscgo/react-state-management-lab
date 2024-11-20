import {useState} from 'react';
import './App.css'

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const [totalStrength, setTotalStrength] = useState(0);

  const [totalAgility, setTotalAgility] = useState(0);

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
    if (money - newTeamMember.price >= 0) {
      const newTeamArray = [...team, newTeamMember];
      setTeam(newTeamArray);
      const newMoney = money - newTeamMember.price;
      setMoney(newMoney);
      const newStrength = totalStrength + newTeamMember.strength;
      setTotalStrength(newStrength);
      const newAgility = totalAgility + newTeamMember.agility;
      setTotalAgility(newAgility);
      console.log(team);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (oldTeamMember) => {
    const newTeamArray = team.findIndex((teamMember) => {
      return teamMember === oldTeamMember;
    });

     if (newTeamArray !== -1) {
      const newTeam = [...team]
      newTeam.splice(newTeamArray, 1)
      setTeam(newTeam)
      const updatedZombies = [...zombieFighters, oldTeamMember]
      setZombieFighters(updatedZombies)

      const newMoney = money + oldTeamMember.price;
      setMoney(newMoney);
      const newStrength = totalStrength - oldTeamMember.strength;
      setTotalStrength(newStrength);
      const newAgility = totalAgility - oldTeamMember.agility;
      setTotalAgility(newAgility);
     }  
  };
    
 return (
  <>
    <h1>Zombie Fighters</h1>
    <div>
      <h2>Money: ${money}</h2>
      <h2> Team Strength: {totalStrength}</h2>
      <h2> Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
    </div>
    <div className = 'team'>
    {team.length > 0 ? (
       team.map((teamMember, index) => (
       <div key={index}>
      <p>
        <img src={teamMember.img} alt={teamMember.name} />
        <li>Name: {teamMember.name}</li>
        <li>Price: ${teamMember.price}</li>
        <li>Strength: {teamMember.strength}</li>
        <li>Agility: {teamMember.agility}</li>
      </p>
      <button onClick={() => handleRemoveFighter(teamMember)}>Remove Fighter from Team</button>
    </div>
  ))
) : (
  <p>Pick some team members</p>
)}
    </div>
    <h2>Fighters</h2>
    <div className = 'fighters'>
      {zombieFighters.map((zombieFighter) => (
        <p>
          <img src={zombieFighter.img} alt={zombieFighter.name} />
          <li> Name: {zombieFighter.name}</li>
          <li> Price: ${zombieFighter.price} </li>
          <li> Strength: {zombieFighter.strength} </li>
          <li> Agility: {zombieFighter.agility} </li>
          <button onClick = {() => handleAddFighter(zombieFighter)}>Add Fighter to Team</button>
        </p>
      ))}
    </div>
  </>
  );
};

export default App
