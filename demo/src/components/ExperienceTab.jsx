// ExperienceTab
import React from 'react';

function ExperienceTab({ experienceData }) {
    return (
        <div>
            {experienceData.map((experience, index) => (
                <div key={index}>
                    <h3>{experience.job_title}</h3>
                    <p>
                        <a className="link"
                            href={experience.href}
                            target="_blank">
                            {experience.company_place}</a></p>
    
                    <p>{experience.dates}</p>
                    <p>{experience.job_info}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ExperienceTab;
