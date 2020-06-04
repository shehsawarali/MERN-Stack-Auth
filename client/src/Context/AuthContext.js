import React, {createContext, useEffect, useState} from 'react';
import AuthService from'./Services/AuthService';
import "./Spinner.css";

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AuthService.isAuthenticated().then(data => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);

    return(
        <div>
            {!isLoaded? <div className="c-inline-spinner"></div>  :
            <AuthContext.Provider value={{user,setUser, isAuthenticated, setIsAuthenticated}}>
                {children}
            </AuthContext.Provider>}
        </div>
    )
}