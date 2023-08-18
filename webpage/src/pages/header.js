import { FaBars, FaExpandArrowsAlt, FaRegBell, FaRegComments, FaSearch, FaThLarge } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Sidebar from './sidebar';

function Header(){

    const handleLogOut = () => {
        localStorage.clear();
    }

    return(
        <>
        <div className='wrapper layout-fixed'>
                <div className='navigation'>
                    <header>
                        <nav>
                            <div className='top-header d-flex justify-content-between p-2 align-items-center'>
                                <ul className='navbar'>
                                    <li className='nav-item'>
                                        <button className='btn nav-link toggle-button'>
                                            <FaBars />
                                        </button>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Home
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                                <ul className='navbar-icon d-flex'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'>
                                            <FaSearch />
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaRegComments /> </a>
                                        <span className='badge comment'>3</span>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaRegBell /> </a>
                                        <span className='badge bell'>15</span>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaExpandArrowsAlt /> </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#'> <FaThLarge /> </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className=' px-4 btn btn-primary' href='/' onClick={handleLogOut}>Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </div>

            <Sidebar />
        </>
    )
}

export default Header;