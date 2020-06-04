import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from "../Context/Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = props => {

    const {isAuthenticated, user, setIsAuthenticated, setUser} = useContext(AuthContext);

    const LogoutHandler = () => {
        AuthService.logout().then(data => {
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        })
    }
    
    const unauthenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>

                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>

                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>
            </>
        )
    }

    const authenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>

                <Link to="/alltodos">
                    <li className="nav-item nav-link">
                        My Todos
                    </li>
                </Link>

                {
                    user.role === "admin" ?
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }
                
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={LogoutHandler}>Logout</button>
            </>
        )
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">NoobCoder</div>
            </Link>
            {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>

                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </nav>
    )
}

export default Navbar;