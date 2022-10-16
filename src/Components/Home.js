import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import Register from './Register';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user?.email ? <h2 className='text-xl my-2'>Welcom back ! {user?.displayName} </h2> : <Register></Register>
            }
        </div>
    );
};

export default Home;