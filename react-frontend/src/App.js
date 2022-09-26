import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router , Routes , Route , useParams} from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
function App() {
  return (
    <div>
      <Router>
      
        <Header />
        <div className="container">
          <Routes>
            <Route path = "/"  exact element = {<ListEmployeeComponent/>}></Route>
            <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
            <Route path = "/add-employee"exact element = {<CreateEmployeeComponent/>}></Route>
            <Route path = "/update-employee/:id"   element = {<UpdateEmployeeComponent/>}></Route>
            
          </Routes>
          
        </div>
        

      
      </Router>
    </div>
  );
  
}


export default App;
