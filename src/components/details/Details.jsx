import React from "react";
import {useState } from "react";
import { useEffect } from "react";


const Details = (props) => {

    const [userState, setUserState] = useState({
        user: null,
        loadend: false
    })


    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`)
            .then((response) => response.json())
            .then((data) => {
                setUserState(prevState => ({
                    ...prevState,
                    user: prevState.user = data,
                    loadend: true
                }));
            })
        return () => {
            setUserState(prevState => ({
                ...prevState,
                loadend: false
            }));
        }
    }, [props.info.id]);

    if (userState.loadend) {
        return (
            <React.Fragment>
                <div className="details-body">
                    <div className="details-body-img-main">
                        <img src={userState.user.avatar}  alt="#"/>
                    </div>
                    <div className="details-body-name">
                        <h4>{userState.user.name}</h4>
                    </div>
                    <div className="details-body-city">
                        <h4>{userState.user.details.city}</h4>
                    </div>
                    <div className="details-body-company">
                        <h4>{userState.user.details.company}</h4>
                    </div>
                    <div className="details-body-position">
                        <h4>{userState.user.details.position}</h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Details;