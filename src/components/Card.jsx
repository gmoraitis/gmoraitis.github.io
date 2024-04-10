//Car component that displays the card with the tabs
import React, { useState } from 'react';
import AboutTab from './AboutTab';
import ExperienceTab from './ExperienceTab';
import EducationTab from './EducationTab';
import SkillsTab from './SkillsTab';
import AwardsTab from './AwardsTab';
import ProjectsTab from './ProjectsTab';
import BlogTab from './BlogTab';
import Interests from './InterestsTab';



function Card({ info }) {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='px-5'>
            <div className="card text-bg-dark" style={{ maxWidth: '700px', margin: '0 auto' }}>
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
                <div className="card-body mt-4 card-container">
                    {/* Switching tabs */}
                    {info[activeTab].title === 'About' && (
                        <AboutTab aboutData={info[activeTab]} />
                    )}

                    {info[activeTab].title === "Experience" && (
                        <ExperienceTab experienceData={info[activeTab].content} />
                    )}

                    {info[activeTab].title === "Education" && (
                        <EducationTab educationData={info[activeTab].content} />
                    )}

                    {info[activeTab].title === "Skills" && (
                        <SkillsTab skillsData={info[activeTab].content} />
                    )}

                    {info[activeTab].title === "Awards & Certifications" && (
                        <AwardsTab awardsData={info[activeTab]} />
                    )}

                    {info[activeTab].title === "Latest Projects" && (
                        <ProjectsTab projectsData={info[activeTab].content} />
                    )}

                    {info[activeTab].title === "Blog" && (
                        <BlogTab />
                    )}

                    {info[activeTab].title === "Interests" && (
                        <Interests />
                    )}

                </div>
            </div>
        </div>
    );
}

export default Card;
