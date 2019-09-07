import React from 'react';
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component';
import NavBar from '../../components/navbar/navbar.component'
const HomePage = () => {
    return (
        <div className = 'home-page'>
            <NavBar/>
            <Directory/>
        </div>
    );
};

export default HomePage;