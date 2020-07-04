import React from "react";

function CertificateImage(props) {
    const srcImage = props.src;
    const altImage = props.alt;

    const href = props.href;
    let mainClass = "carousel-item ";
    if (props.first === "true") { mainClass = "carousel-item active  "; }

    return (
        <div className={mainClass} >
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={srcImage} alt={altImage} className='CursolImageSize' />
            </a>
        </div>
    );
}
// width="1140" height="550"
export default CertificateImage;
