import { BrowserRouter,Switch,Route } from "react-router-dom/cjs/react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <ToastContainer/>
    <div className="fw-bold" style={{display: 'flex',justifyContent: 'center'}}>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/adduser' component={AddEditUser}/>
       <Route exact path='/edituser/:id'  component={AddEditUser}/>
       <Route exact path='/userInfo/:id'   component={UserInfo}/>
       <Route exact path='/about'  component={About}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
