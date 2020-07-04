import React from "react";

function CertificateImage(props) {
    const srcImage = props.src;
    const altImage = props.alt;
    const titleImage = props.title;
    const contentImage = props.content;
    const href = props.href;
    let mainClass = "carousel-item ";
    if (props.first === "true") { mainClass = "carousel-item active  "; }

    return (
        <div className={mainClass} >
            <a href={href} target="_blank">
                <img src={srcImage} alt={altImage} className='CursolImageSize' />
            </a>
        </div>
    );
}
// width="1140" height="550"
export default CertificateImage;
