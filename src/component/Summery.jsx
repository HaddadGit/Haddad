import React from "react";
import MyImg from './img/MyImg.jpeg'; 
function Summery() {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className="section">
          <div className="row">
            <img
              src={MyImg}
              alt="Mohammad Haddad"
              className=" PersonalImg ml-5"
            />
            <div>
              <h1 className="center pl-5 .display-2 headerText">Mohammad Haddad</h1>
              <div className="p-4 pl-5 summeryText">
                <i className="fas fa-envelope-open-text fa-2x"></i>
                <span className="font-weight-bold p-4">
                  Haddad.94m@Gmail.com
                </span>
              </div>
              <div className="pb-5 pl-5 summeryText">
                <i className="fas fa-mobile-alt fa-2x"></i>
                <span className="font-weight-bold p-4 ">+98-935-148-3223</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Summery;
