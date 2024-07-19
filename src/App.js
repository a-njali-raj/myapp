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
   <div>
    <table>
      <tbody>
      <Row/>
      <Column/>
      </tbody>
    </table>
   </div>
    
  );
}

function Row(){
  return(

  <tr>
    <th>name</th>
    <th>address</th>
  </tr>

  );
}
function Column(){
  return(

  <tr>
    <td>anjali</td>
    <td>Anjali</td>
  </tr>

  );
}
export default App;
