import logo from './logo.svg';
import './App.css';

import Home from './Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {About} from './About';

const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
]);

function App() {
  const getUser = async ()=>{
    let res = await fetch("https://reqres.in/api/users");
    let serverRes = await res.json;
    console.log(serverRes['data']);
  }
  return (
    <div>
      {/*<RouterProvider config={config}/>*/}
      <Home/>
      <About/>
      <button onClick={getUser}>Click ti get user list</button>
    </div>
  );
}

export default App;
