import React from "react";
import {useState } from "react";
import { useEffect } from "react";


const Details = (props) => {
    const [userState, setUserState] = useState({
        user: null,
        loadend: false,
    });

    useEffect(() => {
        
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`)
            .then((response) => response.ok ? response.json() : new Error('error geting data'))
            .then((data) => {
                setUserState(prevState => ({
                    ...prevState,
                    user: prevState.user = data,
                    loadend: prevState.loadend = true,
                }));
            });

        return () => {
            setUserState(prevState => ({
                ...prevState,
                loadend: prevState.loadend = false,
            }));
        }
    }, [props.info.id]);
    
   
    return (
        <React.Fragment>
            <div className="details-body">
                <div className="details-body-img-main">
                    {console.log(userState.loadend)}
                    {userState.loadend ?  <img src={userState.user.avatar}  alt="#"/> : 'loading...'}
                </div>
                <div className="details-body-name">
                    {userState.loadend ? <h4>{userState.user.name}</h4> : 'loading...'}
                </div>
                <div className="details-body-city">
                    {userState.loadend ? <h4>City: {userState.user.details.city}</h4> : 'loading...'} 
                </div>
                <div className="details-body-company">
                    {userState.loadend ?  <h4>Company: {userState.user.details.company}</h4> : 'loading...'}
                </div>
                <div className="details-body-position">
                    {userState.loadend ?  <h4>Position: {userState.user.details.position}</h4> : 'loading...'}
                </div>
            </div>
        </React.Fragment>
    );
}



export default Details;