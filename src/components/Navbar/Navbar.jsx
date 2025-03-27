import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li><Link to="/portfolio" style={styles.navLink}>Portfolio</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        padding: '10px 20px',
        zIndex: 1000,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        margin: '0 15px',
    }
};

export default Navbar;
