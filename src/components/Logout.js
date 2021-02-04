import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const {setLoginStatus} = useContext(AuthContext)
    const { push } = useHistory()

    useEffect(() => {
        setLoginStatus(false);
        push('/login')
    })

    return(
        <>
        
        </>
    )
}

export default Logout;