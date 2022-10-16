import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/login")
            }).catch(err => console.log(err));
    }
    return (
        <div>
            <div className="navbar bg-violet-600 text-white px-12">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Fantastic Auth</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        {
                            !user?.email && <li><Link to="/register">Register</Link></li>
                        }
                        {
                            !user?.email && <li><Link to="/login">Login</Link></li>
                        }
                        <li><Link to="/orders">Orders</Link></li>
                    </ul>
                </div>
                <div className='user-info'>
                    {user?.email}
                    {
                        user?.email && <button onClick={handleLogOut} className="btn btn-active btn-sm ml-3">Log out</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;