import React from 'react';
import companyLogo from '../assets/img/logoDark.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import python from '../assets/img/footer/python.svg'
import swift from '../assets/img/footer/swift.svg'
import dart from '../assets/img/footer/dart.svg'
import unity from '../assets/img/footer/unity.svg'
import sap from '../assets/img/footer/sap.svg'
import '../assets/styles/footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="first-grid">
                <img src={companyLogo} alt="Company logo"/>
                <p>Adress:<br/>
                    Mansuroğlu, Ankara Cd. No:81 35030, 35100 Bayraklı/İzmir</p>
                <div className="social-media-icons">
                    <InstagramIcon className="social-media-icon" width="100px" height="100px"/>
                    <XIcon className="social-media-icon"/>
                    <LinkedInIcon className="social-media-icon"/>
                    <FacebookIcon className="social-media-icon"/>
                </div>
                <p>
                    desMoss Software Development, Inc.<br/>
                    CAGE/NCAGE: 7W6F0 <br/>
                    SAM Unique Entity ID: <br/>
                    NQ9PRQMMSJG4 <br/>
                </p>
            </div>
            <div className="divider"></div>
            <div className="second-grid">
                <div className="services-container">
                    <div >
                        <h1> Services</h1>
                        <ul>
                            <li>Artificial intelligence</li>
                            <li>Website Design</li>
                            <li>Application Development</li>
                            <li>Enterprise Resource Planning</li>
                        </ul>
                    </div>
                    <div>
                        <h1> Game Store </h1>
                        <ul>
                            <li>Coming Soon</li>
                            <li>Ember: A Fox Story</li>
                            <li>Runner: Istanbul</li>
                            <li>Environmental Cleaning</li>
                        </ul>
                    </div>
                    <div>
                        <h1> App Store </h1>
                        <ul>
                            <li>desMoss Taxi Cabinet</li>
                            <li>desMoss Human Resources</li>
                            <li>desMoss Pholosophy App</li>
                        </ul>
                    </div>
                </div>
                <div className="logos">
                    <img src={python} alt="Python Logo"/>
                    <img src={swift} alt="Swift Logo"/>
                    <img src={dart} alt="Dart Logo"/>
                    <img src={unity} alt="Unity Logo"/>
                    <img src={sap} alt="Sap Logo"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;