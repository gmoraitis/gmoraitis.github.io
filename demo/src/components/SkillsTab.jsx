import React from 'react';

function SkillsTab({ skillsData }) {
    return (
        <div className="row">
            <div className="col">
                {skillsData.map((skills, index) => (
                    <div key={index}>
                        <h3>
                            <a className="link" href="#" target="_blank">
                                {skills.general_info}
                            </a>
                        </h3>
                        <hr />
                        {skills.subjects.map((subject, index) => (
                            <div className='mb-4'key={index}>
                                <h4>{subject.subject_title}</h4>
                                {subject.subject_content.map((content, index) => (
                                    <div className='mb-2' key={index}>
                                        <li>{content.title}</li>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsTab;
