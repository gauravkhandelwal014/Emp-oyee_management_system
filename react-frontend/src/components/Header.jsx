import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div><a href ="https://javaguides.net" className="navbar-brand"> Employee Management System</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;