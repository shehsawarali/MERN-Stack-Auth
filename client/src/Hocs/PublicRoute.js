import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({component: Component, ...rest}) => {

    const { isAuthenticated} = useContext(AuthContext);
    return(
        <Route {...rest} render={props => {
            if(!isAuthenticated) {
                return <Component {...props}/>
            }

            else{
                return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
            }
        }}/>
    )
}

export default PrivateRoute;