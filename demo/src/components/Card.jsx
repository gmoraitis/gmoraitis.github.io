import React, { useState } from 'react';
import profileImg from '../assets/profileImg.jpg';



function Card({info}) {
    // State to track active tab and its content
    const [activeTab, setActiveTab] = useState(0);

    // Function to handle tab click
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='px-3'>

            <div>
                <img src={profileImg} className="img react" alt="profile image" />
            </div>

            <h1>Hi,  I am George Moraitis</h1>

            <div className="card text-center text-bg-dark" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs justify-content-center">
                        {info.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a
                                    className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                    href="#"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{info[activeTab].title}</h5>
                    <p className="card-text">{info[activeTab].content}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
}

export default Card;
