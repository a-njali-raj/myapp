import logo from './logo.svg';
import './App.css';

function App() {
  const name='anjali';
  const x=70;
  const y=7;
  const message=()=>{
    return "Good MOrning"
  }
  return (
    <div className="App">
     <h1 className="heading">Hello World</h1>
     <h1>My name is {name}</h1>
     <h2>Sum of 10 and 6 ={10+6}</h2>
     <h2>Sum of x and y={x+y}</h2>
     <h2>{message()}</h2>
    </div>
  );
}

export default App;
