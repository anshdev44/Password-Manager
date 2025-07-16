import './App.css';
import { useEffect, useState } from 'react';
import { Nav } from './components/nav';
import Inputs from './components/input';
import Password from './components/passwords';

function App() {
  const [url, seturl] = useState('');
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pass, setpass] = useState([]);
  const [Edit, setEdit] = useState(false);
  const [Edits, setEdits] = useState({});
  const [old, setold] = useState([]);

  useEffect(() => {
    try {
      const passes = JSON.parse(localStorage.getItem("passwords")) || [];
      setold(passes);
      setpass(passes);
      
    } catch (err) {
      console.error("Corrupted localStorage value", err);
      setold([]);
    }
  }, []); 

  return (
    <div>
      <Nav />
      <Inputs
        url={url}
        seturl={seturl}
        Username={Username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        pass={pass}
        setpass={setpass}
        Edit={Edit}
        setEdit={setEdit}
        Edits={Edits}
        setEdits={setEdits}
        old={old}
        setold={setold}  
      />

      <Password
        url={url}
        seturl={seturl}
        Username={Username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        pass={pass}
        setpass={setpass}
        Edit={Edit}
        setEdit={setEdit}
        Edits={Edits}
        setEdits={setEdits}
        old={old}
        setold={setold}  
      />
    </div>
  );
}

export default App;
