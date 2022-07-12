import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
import Logout from './views/Logout';
import AddUser from './views/crud/AddUser';
import Routing from './router/Routing';

function App() {

  return (
    // <div className="App">
    //   {/* {user.user ? <Logout /> : <Login />} */}
    //   <AddUser />
    // </div>
    <Routing />
  );
}

export default App;
