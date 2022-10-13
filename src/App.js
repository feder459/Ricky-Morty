import './App.css';
import ColorPicker from './components/ColorPicker';
import CharList from './components/CharList';

function App() {
  return (
    <div className="App">
      <CharList />
    </div>
  );
}

export default App;

/* APRENDER A USAR USeEFfect */

/* import { useEffect, useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  const [name, setName] = useState('Fede')

  useEffect(() => {
    console.log('useEffect called');
    document.title = `Welcome ${name} `
  },[name])

  console.log('App rendered');

  return (
    <div className="App">
      <p>Good morning {name} </p>
      <button onClick={() => setName("Joni")} >Change Name</button>
      
    </div>
  );
}
export default App;
*/

