import React from 'react'
import Footer from '../components/Home/Footer'

function about() {
  return (
    <div>
  

    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="http://localhost:3000/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>About Us</h1>
                    <p className="larger-txt">Learn how we helped our several clients grow in online <br/>business.It will
                        give you an idea of our capabilities.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <img src="assets/images/banner/about.svg" alt="about banner image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section className="features section-gap" id="cynic-about" data-scroll-offset="165">
        <div className="container">


            <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="img-container">
                            <img src="assets/images/banner/about9.svg" alt="why choose us" className="img-fluid"/>

                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <div className="features-content">
                            <h2 className="section-title">Reasons for choosing us</h2>
                            <p>The Right Technology At The Right Time<br />
We believe in using the right technology for the problems at hand. Because technology advances so rapidly, keeping an open mind is critical. What was the right solution yesterday may have already been replaced by a better one today, and you have to be willing to adapt.

No single individual can be an expert in every possible technology, or have experience in every area. We make sure that we have professionals available from across the technology spectrum, so we can rely on answers that come from experience.</p>





                        </div>
                    </div>
                </div>
            </div>

            <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div className="img-container">
                            <img src="assets/images/banner/about2.svg" alt="why choose us" className="img-fluid"/>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="features-content">
                            <h2 className="section-title">How we do it?</h2>
                            <p>First, we get a feel for what your goals are and how your product will work; we can't help you out of the muck until everyone knows what needs to be done. Then, we cover all the bases by starting at the bottom of the infrastructure and working our way up.

Work on the Cloud or Corporate Infrastructure, making sure you have all the basic services you need to be successful. (Things like Email, Source Control, Identity Management, File Sharing, Bug Tracking and Collaboration tools.)
 

Design your Production Infrastructure. This covers things like selecting an Operating System, creating a Build System, implementing Configuration Management and automating your application Deployment.
 

Provide Support and Intelligence. This means making Monitoring and Trending essential parts of the system. We'll work with you to identify what the key metrics are for your application, and build systems that alert you in a timely manner when it has issues.
 

Hire, train, and augment your own Operations Staff. We've met a lot of excellent people over the years, and we love to hook them up with awesome companies.</p>





                        </div>
                    </div>
                </div>
            </div>




      <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-left">
                        <div className="img-container">
                            <img src="assets/images/banner/about8.svg" alt="why choose us" className="img-fluid"/>

                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1">
                        <div className="features-content">
                            <h2 className="section-title">What does it cost?</h2>
                            <p>We all learned the lessons during the dot-com boom about keeping an eye on the bottom line. The high cost of hiring the best talent drives many startups to cut corners on the infrastructure, or to have people who aren't experts "wear many hats." DigitalQ helps drive that cost down by providing a pool of talented people who work on the problems you have. Need a Systems Architect to help design your deployment system on Monday and a Network Engineer on Tuesday? We've got it covered.

When the time comes to hire full time Operations staff, we help with that too. We'll help recruit, hire, and train the right team. Once they are in place, we'll be around to help out when they need it.</p>





                        </div>
                    </div>
                </div>
            </div>









            <div className="features-grid">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div className="img-container">
                            <img src="assets/images/banner/staff1.svg" alt="why choose us" className="img-fluid"/>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="features-content">
                            <h2 className="section-title">We can help</h2>
                            <p>If we're not the experts in the problems you face, we'll tell you. It's important to us that your business be successful, and that means making sure you get the right advice at the right time. We know consultants in a wide variety of technologies and we'll be happy to help you get in touch with them.</p>





                        </div>
                    </div>
                </div>
            </div>







        </div>
    </section>

  

   


    <div className="modal fade team-modal" id="team-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="modal-body text-center">
                    <img src="assets/images/team/team-modal-img.png" alt="team modal image"
                        class="img-fluid modal-feat-img"/>
                    <div class="modal-title">
                        <h4>Steve Johnson
                            <span>Chief Exicutive Officer</span>
                        </h4>
                    </div>
                    <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr.
                        Erickson's up there. But in many cases, writing a bio that's readable even conversational is
                        actually a really good thing. But once created, this bio should represent who you are in the
                        eyes.</p>

                    <ul class="social-icons">
                        <li>
                            <a href="http://www.behance.net/" target="_blank" rel="noopener">
                                <i class="fab fa-behance"></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li>
                            <a href="http://dribbble.com/" target="_blank" rel="noopener">
                                <i class="fab fa-dribbble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade full-width-modal quote-modal" id="quote-modal" tabindex="-1" role="dialog"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content white-bg">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="modal-body d-flex align-items-center justify-content-center text-center">
                    <div class="quote-form-wrapper text-center">
                        <h3>Get a Free Quote</h3>
                        <form method="POST" class="quote-form text-center row" action="#">
                            <div class="col-lg-6">
                                <input type="text" name="fname" placeholder="Name"/>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="email" placeholder="Email"/>
                            </div>

                            <div class="col-lg-6">
                                <input type="text" name="phone" placeholder="Phone"/>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" name="website" placeholder="Website"/>
                            </div>
                            <div class="col-lg-12">
                                <textarea placeholder="Message" name="message"></textarea>
                                <button type="submit" class="custom-btn secondary-btn w-100">GET A QUOTE</button>
                                <div class="social-icons-wrapper d-flex justify-content-center">
                                    <p>Follow us:</p>
                                    <ul class="social-icons">
                                        <li>
                                            <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://youtube.com/" target="_blank" rel="noopener">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://plus.google.com/discover" target="_blank" rel="noopener">
                                                <i class="fab fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default about