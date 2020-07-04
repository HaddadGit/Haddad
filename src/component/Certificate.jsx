import React from "react";
import CertificateImage from "./CertificateImage";
import HTML from "./img/certificate/HTML.JPG";
import CSS from "./img/certificate/Css.JPG";
import JS from "./img/certificate/js.JPG";
import Responsive from "./img/certificate/Responsive.JPG";
import Matlab from "./img/certificate/Matlab.JPG";
import Python from "./img/certificate/Python.jpg";


function Certificate() {
    return (
        <div id='Certifications'>
            <hr className='mt-5'/>
            <div className="row pt-5 pb-3 col-12">
                <i
                    className="fas fa-stamp col-1 skillsFont"
                    style={{ color: "#8ec6c5" }}
                ></i>
                <h2 className="col-8 skillsFont" style={{ color: "#8ec6c5" }}>
                    Certifications
        </h2>
            </div>
            <div className="row ">
                <div id="demo" className="carousel slide col-12" data-ride="carousel">
                    <ul className="carousel-indicators ">
                        <li className="active bg-info" data-target="#demo" data-slide-to="0" ></li>
                        <li className='bg-info'    data-target="#demo" data-slide-to="1"></li>
                        <li className='bg-info'    data-target="#demo" data-slide-to="2"></li>
                        <li className='bg-info'    data-target="#demo" data-slide-to="3"></li>
                        <li className='bg-info'    data-target="#demo" data-slide-to="4"></li>
                        <li className='bg-info'    data-target="#demo" data-slide-to="5"></li>
                    </ul>
                    <div className="carousel-inner ">
                        <CertificateImage
                            src={HTML}
                            alt="HTML Certificate"
                            href="https://www.coursera.org/account/accomplishments/certificate/NVXQ95XCUSDX"
                            first="true"
                        />
                        <CertificateImage
                            src={CSS}
                            alt="CSS Certificate"
                            href="https://www.coursera.org/account/accomplishments/certificate/NVZL4RV9H5SF"
                            first=""
                        />
                        <CertificateImage
                            src={JS}
                            alt="JS Certificate"
                            href="https://www.coursera.org/account/accomplishments/certificate/RDF25MK9S6KR"
                            first=""
                        />
                        <CertificateImage
                            src={Responsive}
                            alt="Responsive Certificate"
                            href="https://www.coursera.org/account/accomplishments/certificate/ZL7CDAF93F8W"
                            first=""
                        />
                        <CertificateImage
                            src={Matlab}
                            alt="Matlab Certificate"
                            href="https://www.coursera.org/account/accomplishments/certificate/KXVUZESP849Z"
                            first=""
                        />
                        <CertificateImage
                            src={Python}
                            alt="Python Certificate"
                            href="https://www.udemy.com/certificate/UC-4aead225-a5bd-414d-9961-9ef92b0119e3/"
                            first=""
                        />
                        

                        
                    </div>
                    <a className="carousel-control-prev " href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon bg-info"></span>
                    </a>
                    <a className="carousel-control-next " href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon bg-info"></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Certificate;
