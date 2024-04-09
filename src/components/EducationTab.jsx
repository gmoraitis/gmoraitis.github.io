// Code: EducationTab component
import React from 'react';

function EducationTab({ educationData }) {
    return (
        <div className="row">
            <div className="col">
                {educationData.map((education, index) => (
                    <div key={index}>
                         <h3>
                        <a className="link" href={education.href} target="_blank">
                            {education.university}
                        </a>
                        </h3>   
                        <p>{education.dates}</p>
                        <p>{education.study}</p>
                     <hr />
                        {education.courses.map((course, index) => (
                            <div className='mb-4' key={index}>
                                <h4>{course.inner_title}</h4>
                                {course.inner_content.map((content, index) => (
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

export default EducationTab;
