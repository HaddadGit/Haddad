import React from 'react';
import icon from './img/icon/favicon-32x32.png'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="#"><img src={icon} alt="icon" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="#skillss">Skills <span className="sr-only">(current)</span></a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Certifications">Certifications</a>
                        </li>
                    <li className="nav-item mr-sm-2">
                        <a className="nav-link " href="#SampleWork">Sample Work
</a>
                        </li>
                    </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item mr-sm-2">
                        <a target='_blank' className="nav-link " href="https://github.com/HaddadGit"> 
                            <i className="fab fa-github-square fa-2x text-info"></i>
                            </a>
                        </li>
                    <li className="nav-item mr-sm-2">
                        <a target='_blank' className="nav-link " href="https://www.linkedin.com/in/mohammad-haddad-336681ab/">
                            <i className="fab fa-linkedin fa-2x text-info"></i>
                            </a>
                        </li>
                    <li className="nav-item mr-sm-2">
                        <a className="nav-link " href="#contact-form">
                            <i className="fas fa-id-card fa-2x text-info"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                 
            </nav>
            
    )
};

export default Header;