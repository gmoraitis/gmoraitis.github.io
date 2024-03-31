// EducationTab.jsx
import React from 'react';

function EducationTab({ educationData }) {
    return (
        <div>
            {educationData.map((education, index) => (
                <div key={index}>
                    <p><strong>University: </strong>{education.University}</p>
                    <p><strong>Dates: </strong>{education.Dates}</p>
                    <p><strong>Study Material: </strong>{education.StudyMaterial}</p>
                </div>
            ))}
        </div>
    );
}

export default EducationTab;
