
import profileImg from '../assets/profileImg.jpg';


function Header() {
    return (
        <header className="mb-4 mt-5">
            <div>
                <div>
                    <img src={profileImg} className="img react" alt="profile image" />
                </div>

                <h1 className='name'>Hi,👋 I am George Moraitis</h1>
                <p>Zurich  - Switzerland</p>
            </div>
        </header>
    );
}

export default Header;