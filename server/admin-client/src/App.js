import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import List from "./pages/list/List";
import SingleCustomer from "./pages/singleCustomer/SingleCustomer";
import NewItem from "./pages/newItem/newItem";
import { userInputs } from "./FromSource";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ListProdcut from './pages/listProduct/ListProdcut'
import ListOrders from './pages/listOrders/ListOrders'




function App() {

 
  return (
    <div className="app">
     
       
      <Routes>
         
        <Route path="/home" element={<Home/>}/>
        <Route path= "/users" element ={<List/>}/>
        <Route path= "/prodcut" element ={<ListProdcut/>}/>
        <Route path= "/orders" element ={<ListOrders/>}/>
        <Route path= "/users/:userId" element ={<SingleCustomer/>}/>
        <Route path= "/product/new" element ={<NewItem inputs={userInputs} title="Add New Product" />}/>
        <Route path= "/" element ={<Login/>}/>
        <Route path= "/forgotpassword" element ={<ForgotPassword/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
