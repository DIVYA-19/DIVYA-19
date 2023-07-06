import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-content">
            <img className="profile-pic" src="profile.png"></img>
            <div className="intro">
                <div className="name">- I&apos;m Divya Yeruva</div>
                <div className="profession">software developer</div>
                <div className="desc">
                    This is a praragrapgh which describes about. I love do that
                    and this. I am working for sometime. My hobbies are this
                    that... This is a praragrapgh which describes about. I love
                    do that and this. I am working for sometime. My hobbies are
                    this that . . .
                </div>
                <Link to="/about">
                    <div className="custom-btn">More about me</div>
                </Link>
            </div>
        </div>
    );
}

export default Home;
