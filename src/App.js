import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  function handleChange(event) {
     setPassword(event.target.value);
     console.log(password)
  }

  const requirements = [
    {id : 0, name: 'At least 6 characters long'},
    {id : 1, name: 'At least 1 number'},
    {id : 2, name: 'At least 1 uppercase letter'}
  ];

    if (password.length >= 6) {
      requirements[0].color = 'green'
      
      
    }
     if (/\d/.test(password)) {
      requirements[1].color = 'green';
      
    }
  
 
  return (
    <div className="App">
      <h1>Password</h1>
      
      <input onChange={handleChange}/>
      <h3>{requirements.map(requirement => (<ul className="heading" style={ {color: requirement.color} } key={requirement.id}>{requirement.name}</ul>))}</h3>
      
      
    </div>
  );
}



 
export default App;
