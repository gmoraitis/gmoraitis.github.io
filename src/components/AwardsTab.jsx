function AwardsTab({ awardsData }) {
    return (
        <div className="row">
            <div className="col">
                <div>
                    <h3>Specializations</h3>
                    {awardsData.content.specializations.map((specialization, index) => (
                        <div className='mb-2' key={index}>
                            <h5>
                                <a  className="link"  href={specialization.href} target="_blank" rel="noopener noreferrer">
                                    {specialization.title} 
                                </a>
                            </h5>
                            <ul>
                                {specialization.courses.map((course, idx) => (
                                    <li className='mb-2' key={idx}>
                                        <a className="link"  href={course.href} target="_blank" rel="noopener noreferrer">
                                            {course.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr />
                <div>
                    <h3>Courses</h3>
                    <ul>
                        {awardsData.content.courses.map((course, index) => (
                            <li className='mb-2' key={index}>
                                <a className="link"  href={course.href} target="_blank" rel="noopener noreferrer">
                                    {course.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div>
                    <h3>Currently Enrolled</h3>
                    { awardsData.content.currently_enrolled.map((enrolled, index) => (
                        <div className='mb-2' key={index}>
                            <h5>
                                <a className="link"  href={enrolled.href} target="_blank" rel="noopener noreferrer">
                                    {enrolled.title}
                                </a>
                            </h5>
                            <ul>
                                {enrolled.courses.map((course, idx) => (
                                    <li className='mb-2' key={idx}>
                                        <a className="link"  href={course.href} target="_blank" rel="noopener noreferrer">
                                            {course.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AwardsTab;
