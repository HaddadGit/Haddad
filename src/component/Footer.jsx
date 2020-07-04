import React from 'react';

function Footer() {
    function validateForm(props) {
        console.log(props)
        var name = props.value;
        if (name === "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty";
            return false;
        }
        var email = document.getElementById('email').value;
        if (email === "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty";
            return false;
        } else {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                document.querySelector('.status').innerHTML = "Email format invalid";
                return false;
            }
        }
        var subject = document.getElementById('subject').value;
        if (subject === "") {
            document.querySelector('.status').innerHTML = "Subject cannot be empty";
            return false;
        }
        var message = document.getElementById('message').value;
        if (message === "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty";
            return false;
        }
        document.querySelector('.status').innerHTML = "Sending...";
    }
    return ( <footer>
        <div className='container'>
            <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions?</p>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mailto:haddad.94m@gmail.com" method="POST" enctype="text/plain">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder='Your Name' required/>
                                        
                        </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <label for="email" className="" >Your email</label>

                                        <input type="text" id="email" name="email" className="form-control" placeholder='Your Email Address' required/>
                        </div>
                                    </div>
                                </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <label for="subject" className="" >Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder='subject' required/>
                        </div>
                                        </div>
                                    </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <label for="message" >Your message</label>
                                        <textarea type="text" id="message" name="message" rows="3" placeholder='Write your message' className="form-control md-textarea" size="150" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                     <div className="text-center text-md-left mt-3">
                                <button type='submit' className="btn btn-info" onClick={validateForm} >Send</button>
                                </div>
            </form>
                       
                        <div className="status"></div>
                            </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-phone mt-4 fa-2x text-info"></i>
                                        <p>+98 935 148 3223</p>
                                    </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x text-info"></i>
                                        <p>Haddad.94m@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
</section>
        </div>
        </footer>
    )

};

export default Footer;