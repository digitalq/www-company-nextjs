import React from 'react'
import Footer from '../components/Home/Footer'

function careers() {
  return (
    <div>
        
    <div className="banner d-flex align-items-center light-grey-bg">

<nav className="breadcrumb-wrapper" aria-label="breadcrumb">
    <div className="container">
        <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="http://localhost:3000/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Careers</li>
        </ol>
    </div>
</nav>


<div className="container">
    <div className="row no-gutters align-items-center">
        <div className="col-lg-6 text-center text-lg-left">
            <h1>Careers</h1>
            <p className="larger-txt">Learn how we helped our several clients grow in online <br/>business.It will
                give you an idea of our capabilities.</p>

        </div>

        <div className="col-lg-6">
            <div className="img-container text-center text-lg-right">
                <img src="assets/images/banner/careers.svg" alt="Careers banner image" className="img-fluid"/>
            </div>
        </div>
    </div>
</div>
</div>

<section className="contact-us section-gap">
<div className="container">
    <h2 className="section-title text-center">Why Work Here?</h2>
    <p className="larger-txt text-center">We think we’ve got the best team in the world, but you might be the next greatest thing to happen to us.</p>
    <div className="quote-form-wrapper contact-form-wrapper text-center grid-wrapper">
      
           
            <div className="col-lg-12">
                
                
             <a href="careers.php#" className="custom-btn secondary-btn" data-toggle="modal"
                    data-target="#quote-modal">Apply</a>
               
            </div>
       
    </div>
</div>
</section>


<div className="modal fade full-width-modal quote-modal" id="quote-modal" tabindex="-1" role="dialog"
aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content white-bg">
        <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fas fa-times"></i>
            </button>
        </div>

        <div className="modal-body d-flex align-items-center justify-content-center text-center">
            <div className="quote-form-wrapper text-center">
                <h3>We’d love to talk about working together.</h3>
                <form method="POST" className="quote-form text-center row" action="contact.php#">
                    <div className="col-lg-6">
                        <input type="text" name="fname" placeholder="Name"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="email" placeholder="Email"/>
                    </div>

                    <div className="col-lg-6">
                        <input type="text" name="phone" placeholder="Phone"/>
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="linked_url" placeholder="LinkedIn URL"/>
                    </div>
                    <div className="col-lg-12">
                        <textarea placeholder="Message" name="message"></textarea>
                        <button type="submit" className="custom-btn secondary-btn w-100">Submit</button>
                        <div className="social-icons-wrapper d-flex justify-content-center">
                            <p>Follow us:</p>
                            <ul className="social-icons">
                                <li>
                                    <a href="http://www.facebook.com/dqindia" target="_blank" rel="noopener">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://twitter.com/dqindia" target="_blank" rel="noopener">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://youtube.com/dq.india" target="_blank" rel="noopener">
                                        <i className="fab fa-instagram"></i>
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

    <Footer></Footer>
    </div>
  )
}

export default careers