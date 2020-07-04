import React from "react";
import WorkSamplesImage from "./WorkSampleImage";
import serverToDOList from "./img/serverToDoList.JPG"; 
import GritBook from "./img/GritBook.JPG";
import Dice from "./img/Dice.JPG";
import Keeper from "./img/Keeper.JPG";
import SignIn from "./img/signIn.JPG";
import Conva from "./img/BeachHotel.JPG";
import ReactToDoList from "./img/ToDoList.JPG";
import emogi from "./img/Emojipedia.JPG";

function WorkSamples() {
  return (
    <div id='SampleWork'>
      <hr className='mt-5' />

      <div className="row col-12 pt-5 pb-3 ">
        <i
          className="fas fa-briefcase col-1 skillsFont"
          style={{ color: "#8ec6c5" }}
        ></i>
        <h2 className="col-8 skillsFont" style={{ color: "#8ec6c5" }}>
          Sample Work
        </h2>
      </div>
      <div className="row ">
        <div id="demoWorkSkill" className="carousel slide col-12" data-ride="carousel">
          <ul className="carousel-indicators">
            <li data-target="#demoWorkSkill" data-slide-to="0" className="active bg-info"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="1"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="2"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="3"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="4"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="5"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="6"></li>
            <li className="bg-info" data-target="#demoWorkSkill" data-slide-to="7"></li>
          </ul>
          <div className="carousel-inner">
            <WorkSamplesImage
              src={serverToDOList}
              alt="A To Do List"
              title="To do List"
              content="Use Mongoose DB, Heroku server, EJS, js, CSS, HTML"
              href="https://secret-sands-26744.herokuapp.com/school"
              first="true"
            />

            <WorkSamplesImage
              src={GritBook}
              alt="A One Page web to introduction Grit book"
              title="GritBook"
              content="Use HTML, js, CSS, Bootstrap and design icon "
              href="https://haddadgit.github.io/Grit-book/#title"
              first=""
            />

            <WorkSamplesImage
              src={Dice}
              alt="Lucky dices"
              title="Lucky dices"
              content="Use js, CSS, HTML and design icon"
              href="https://haddadgit.github.io/Dice-challenge/"
              first=""
            />

            <WorkSamplesImage
              src={Keeper}
              alt="Keeper app"
              title="Keeper App"
              content="Use React, js, CSS, HTML"
              href="https://codesandbox.io/s/github/HaddadGit/KeeperReact-v02"
              first=""
            />

            <WorkSamplesImage
              src={SignIn}
              alt="A sample Sign In"
              title="Sign In"
              content="Use Mongoose DB, Heroku server, EJS, js, CSS, HTML"
              href="https://polar-sands-87514.herokuapp.com/"
              first=""
            />

            <WorkSamplesImage
              src={Conva}
              alt="A simple one page web"
              title="A hotel one page web"
              content="Use canva website"
              href="https://www.canva.com/design/DAD-MAeb0ao/SjgC_DfnPNStLby58BrWZg/view?website#4:beach-hotel"
              first=""
            />

            <WorkSamplesImage
              src={ReactToDoList}
              alt="A To Do List by React"
              title="To do List by react"
              content="Use React, js, CSS, HTML"
              href="https://codesandbox.io/s/github/HaddadGit/toDoListByReact"
              first=""
            />
            <WorkSamplesImage
              src={emogi}
              alt="A emogi"
              title="A Emojipedia by React"
              content="Use React, js, CSS, HTML"
              href="https://codesandbox.io/s/github/HaddadGit/EmojiDictionary"
              first=""
            />
          </div>
          <a className="carousel-control-prev" href="#demoWorkSkill" data-slide="prev">
            <span className="carousel-control-prev-icon bg-info"></span>
          </a>
          <a className="carousel-control-next " href="#demoWorkSkill" data-slide="next">
            <span className="carousel-control-next-icon bg-info"></span>
          </a>
        </div>
      </div>
      <hr className='mt-5' />

    </div>
  );
}

export default WorkSamples;
