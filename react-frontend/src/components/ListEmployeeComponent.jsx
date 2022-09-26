import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {BrowserRouter as Router, Link} from 'react-router-dom';


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        // this.addEmployee = this.addEmployee.bind(this);
      // this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees : res.data});

        });
    }
    // addEmployee(){
        
    //     window.history.pushState(   "/add-employee" , );
    //     };

    render() {
         return (
            
        
            <div>
                <h2 className="text-center"> EMPLOYEE LIST</h2>
                <div className="row">
                
                    <button className="btn btn-light" ><Link to="/add-employee">Add Employee</Link></button>
                </div>
                <br></br>
                <div className = "row">
                    <table>
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email id</th>
                                <th> Actions</th>


                            </tr>

                            
                            


                        </thead>
                        <tbody>
                            {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        
                                    <button className="btn btn-info" ><Link to={`/update-employee/${employee.id}`}> Update </Link></button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                             
                                    </td>

                                </tr>
                                
                            )}
                        </tbody>


                    </table>


                </div>
            </div>
        )};
    }


export default ListEmployeeComponent;