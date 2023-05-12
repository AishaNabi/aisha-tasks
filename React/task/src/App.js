import { useState } from 'react';
import './App.css';
import { Teacher } from './components/Teacher';
import Student from './components/Student';

function App() {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [student, setStudent] = useState(false)
  const clickHandler = () => {
    setName(value)
    setStudent(true)
  }
  const changeHandler = (event) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <form onSubmit={(event) =>{
        event.preventDefault()
      }}>
        <input type='text' onChange={changeHandler} value={value} />
        <button onClick={clickHandler}>Elave et</button>
      </form>
      
      <Teacher name={name} />
      {student ? 
        (<Student name={name} />): 
        (<p>Daxil olunmayib</p>)
      }
    </div>
  );
}

export default App;
