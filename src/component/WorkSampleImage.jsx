import React from "react";

function WorkSamplesImage (props) {
    const srcImage = props.src;
    const altImage = props.alt;
    const titleImage = props.title;
    const contentImage = props.content;
    const href = props.href;
    let mainClass = "carousel-item";
    if (props.first === "true"){mainClass = "carousel-item active";}

  return (
    <div className={mainClass}>
      <a href={href} target="_blank">
        <img src={srcImage} alt={altImage} className='CursolImageSize' />
        <div className="carousel-caption">
          <h3 className='bg-light text-dark'>{titleImage}</h3>
          <p className='bg-light text-info'>{contentImage}</p>
        </div>
      </a>
    </div>
  );
}

export default WorkSamplesImage;
