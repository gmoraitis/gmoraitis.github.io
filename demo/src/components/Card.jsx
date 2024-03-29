import React, { useState } from 'react';




function Card({info}) {
    // State to track active tab and its content
    const [activeTab, setActiveTab] = useState(0);

    // Function to handle tab click
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='px-5'>



            <div className="card text-center text-bg-dark" style={{ maxWidth: '700px', margin: '0 auto' }}>
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
                    <p className="card-text px-4">{info[activeTab].content}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
}

export default Card;
