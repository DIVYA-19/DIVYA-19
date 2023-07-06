import './main.css';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DraftsIcon from '@mui/icons-material/Drafts';
import FeedIcon from '@mui/icons-material/Feed';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';
import Contact from '../contact/contact';
import Projects from '../projects/projects';

function Main() {
    return (
        <div id="main">
            <div className="content-area">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/projects" element={<Projects />} />
                </Routes>
            </div>
            <div className="nav">
                <Link to="/">
                    <div className="icon icon-btn">
                        <HomeIcon style={{ color: '#fff' }} />
                    </div>
                </Link>
                <Link to="/about">
                    <div className="icon icon-btn">
                        <PersonIcon style={{ color: '#fff' }} />
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="icon icon-btn">
                        <BusinessCenterIcon style={{ color: '#fff' }} />
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="icon icon-btn">
                        <DraftsIcon style={{ color: '#fff' }} />
                    </div>
                </Link>
                <div className="icon icon-btn">
                    <FeedIcon style={{ color: '#fff' }} />
                </div>
            </div>
        </div>
    );
}

export default Main;
