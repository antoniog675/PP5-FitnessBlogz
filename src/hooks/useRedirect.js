import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom"

export const useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('/dj-rest-auth/token/refresh/')
                // If user is logged in they will be redirected
                if (userAuthStatus === 'loggedIn'){
                    history.push('/')
                }
            } catch (err) {
                console.log(err)
                // If user is logged out they will be redirected
                if (userAuthStatus === 'loggedOut') {
                    history.push('/')
                }
            }
            };
            handleMount();
        }, [history, userAuthStatus])
}