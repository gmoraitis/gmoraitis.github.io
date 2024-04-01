import React from 'react';

function EducationTab({ educationData }) {
    return (
        <div className="row">
            <div className="col">
                {educationData.map((education, index) => (
                    <div key={index}>
                        <h3>{education.university}</h3>
                        <p>{education.dates}</p>
                        <p>{education.study}</p>
                        <a className="link" href={education.href} target="_blank">
                            {education.university}
                        </a>
                        <hr />
                        {education.courses.map((course, index) => (
                            <div key={index}>
                                <h4>{course.inner_title}</h4>
                                {course.inner_content.map((content, index) => (
                                    <div key={index}>
                                        <p>{content.title}</p>
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
