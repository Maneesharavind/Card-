import React from 'react';
import './App.css';

// Sample data for "yourself"
const myself = {
  name: 'MANEESH ARAVIND S',
  age: 19,
  occupation: 'STUDENT',
  bio: 'Studying in CIT 3rd year',
  qoute:'Workhard through mind'
};

// Card component that receives props and displays the data
const Card = (props) => {
  const { name, age, occupation, bio,qoute } = props;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Bio: {bio}</p>
      <p>Qoute:{qoute}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Myself</h1>
      <Card
        name={myself.name}
        age={myself.age}
        occupation={myself.occupation}
        bio={myself.bio}
        qoute = {myself.qoute}
      />
    </div>
  );
}

export default App;
