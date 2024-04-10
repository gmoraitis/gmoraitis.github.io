// Code: Header component
import profileImg from '../assets/profileImg.jpg';


function Header() {
    return (
        <header className="mb-4 mt-5 text-center">
            <div>
                <div>
                    <img src={profileImg} className="img react" alt="profile image" />
                </div>

                <h1 className='link'>Hi,👋 I am George Moraitis</h1>
                <p>Zurich  - Switzerland</p>
                
                <div>
                    <p className="mt-auto text-white-50 text-center">
                        <a className="link" href='https://github.com/gmoraitis'
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-github" style={{ margin: "6px" }}></i>
                            Github</a>

                            <a className="link" href='https://www.linkedin.com/in/georgiosmoraitis/'
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-linkedin" style={{ margin: "6px" }}></i>
                            Linkedin</a>

                            <a className="link" href='mailto:moraitis.georgios@icloud.com'
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="bi bi-envelope" style={{ margin: "6px" }}></i>
                            Mail</a>
                    </p>
                </div>
            </div>
        </header>
    );
}

export default Header;