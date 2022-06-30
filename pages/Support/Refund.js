import React from 'react'
import Image from 'next/image'
import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';

function Refund() {
  return (
    <div>
<Header/>
    <div className="banner d-flex align-items-center light-grey-bg">

        <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Refund and Cancellation</li>
                </ol>
            </div>
        </nav>


        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-lg-6 text-center text-lg-left">
                    <h1>Refund and Cancellation Policy</h1>
                    <p className="larger-txt"> DigitalQ provides hosting  services at Internet service providers in India and abroad. This  includes purchase, rental or installation of a server or virtual server  at the service provider, and remote management of the server or  purchased services thereafter. Our hosting service fills the need for  Internet presence support where most of the ISP's and server rental  companies leave off. We manage you operating system, DNS, applications  and backups. The conectivity providers are usually not set up to  provide this service.</p>

                </div>

                <div className="col-lg-6">
                    <div className="img-container text-center text-lg-right">
                        <Image src="/assets/images/banner/opensource.svg" alt="Opensource banner image" className="img-fluid" width={630} height={367}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
	
	   {/* <section className="contact-us section-gap"> */}
        <div className="container">
            <h2 className="section-title">Overview</h2>
            <p className="larger-txt">
            The refund policy for hosting accounts has been updated. The following changes are now in effect for all new hosting accounts created on or after <strong>4/1/2017</strong>. </p>
			




<table style={{backgroundColor: "#FFFFFF"}}><tbody><tr style={{backgroundColor: "#2E86C1"}}><td colspan="1" rowspan="1" style={{textAlign: "center"}}><span style={{color: "#ffffff"}}>Canceled</span></td><td colspan="1" rowspan="1" style={{textAlign: "center"}}><span style={{color: "#ffffff"}}>Policy</span></td></tr><tr><td colspan="1" rowspan="1" style={{textAlign: "left"}}>3-30 Days</td><td colspan="1" rowspan="1" style={{textAlign: "left"}}>Between 3-30 days, you are eligible for a refund on all hosting services. We are not able<br/>			to refund domain registration fees during initial purchase or renewals.</td></tr><tr><td colspan="1" rowspan="1" style={{textAlign: "left"}}>Within 3 Days</td><td colspan="1" rowspan="1" style={{textAlign: "left"}}>If canceled within the first 3 days, you are able to receive a full refund<br/>			for the hosting (minus $15 for the domain, if applicable).</td></tr><tr><td colspan="1" rowspan="1" style={{textAlign: "left"}}>30+ Days</td><td colspan="1" rowspan="1" style={{textAlign: "left"}}>No refunds are offered after 30 days. </td></tr></tbody></table>

<h2 id="Account"><br/><a id="old-accounts" name="old-accounts"></a>Accounts created before 4/1/2017</h2>
These accounts are still able to receive a prorated refund if they cancel. If you wish to renew it and make a term change or adjust your account in any way, you can still receive the prorated refund. The no refund after 30 days policy is only applicable to new accounts created on or after 4/1/2017. 

<p className="accent"><b>Note</b>: During the month of April, we are extending our Money-Back Guarantee from 30 days to 60 days. </p>

<h3 id="Renewals"><b><a id="renewal" name="renewal"></a></b>Renewals</h3>

<p>If a customer is contacting us within 15 days of their renewal date (30 days after the bill date), agents can make an exception and issue a refund to the customer. However, offers billed on a monthly term are not refundable. For more information on Managing Renewal Options, check <a href="/help/article/managing-renewal-options" target="_blank">this article.</a></p>

<h3 id="Payment"><b><a id="payment-capture" name="payment-capture"></a></b>Payment Capture after expiration</h3>

<p>We will attempt to bill a customer using a 3rd party service after the expiration date to avoid account deletion. If a customer is billed by the payment capture after the written notice of cancellation sent to the customer, we will provide a full refund regardless of date. More information about this service is found. </p>

<h2 id="Add"><a id="addons" name="addons"></a>Add-Ons</h2>

<p>For all other addons, customers are not eligible for a refund once the product has been associated with a domain unless you&#39;re calling in to cancel the addons within the prebill time frame. If contacting us after the renewal date, it cannot be refunded. For more details, please contact our customer service for assistance, </p>

<h3 id="Domains"><br/><a id="domains-privacy" name="domains-privacy"></a>Domains and Domain Privacy</h3>

<p className="accent"><b>Note</b>: Once a domain has been registered, it is set in our system to <b>ADRS</b> (<b>Automated Domain Renewal Servic</b>e). This service allows the customer&#39;s domain to be automatically renewed prior to expiration to <b>avoid any service interruption</b>. Any domain that the customer has set to <b>ADRS</b> will receive multiple renewal notices via email prior to the domain being renewed 15 days before expiration. As we make multiple attempts to advise the customer that their domain will be renewed at that time, no refund requests will be honored for domains that were set to <b>ADRS </b>when the domain has been renewed.</p>

<p>Customers who set their domains to manual renewal <strong>at least 16 days prior to expiration</strong> will not have their domains automatically renewed.</p>

<h3 id="DedIP"><a id="dedicated-ip" name="dedicated-ip"></a>Dedicated IP </h3>
Dedicated IP&#39;s can be canceled within 30 days of purchase or renewal for a full refund.

<h3 id="SSL"><a id="ssl" name="ssl"></a>SSL</h3>
Once installed, SSL&#39;s are non-refundable, except in the following cases:

<ul><li>Severe SSL technical difficulties</li><li>If the customer failed to meet unique requirements for SSL (Extended Validation SSL only).</li><li>If the customer calls in to cancel the addons within the pre-bill time frame, we can issue a refund. If contacting us after the renewal date, it cannot be refunded.</li></ul>

<h3 id="SiteLock"><a id="sitelock" name="sitelock"></a>SiteLock</h3>
The customer must pay a fee equal to 50% of the total Annual Term (“Cancellation Fee”). SiteLock can be canceled within 30 days of purchase or renewal for a full refund. After 30 days, refunds are not allowed. 

<h3 id="Site"><a id="site-backup-restore" name="site-backup-restore"></a>Site Backup &amp; Restore Pro</h3>

<p>A full refund will be issued for Site Backup &amp; Restore Pro if the customer cancels the hosting within 30 days. Just the product itself can be fully refunded if canceled within 5 days. If canceled any time after, a prorated refund can be issued.</p>

<h3><a id="jumpstart" name="jumpstart"></a>Search Engine Jumpstart</h3>

<p>Search Engine Jumpstart can be canceled within 30 days of purchase or renewal for a full refund. After 30 days, refunds are not allowed. </p>

<h3><a id="seo" name="seo"></a>SEO Tools</h3>

<p>SEO Tools can be canceled within 30 days of purchase or renewal for a full refund. After 30 days, refunds are not allowed. </p>

<h3 id="professional-services"><a id="professional-services" name="professional-services"></a>Professional Services</h3>

<p>This concern needs a further check and assistance coming from our Professional Services team. Please contact our customer service representative for further details. </p>

<p><b>For more information, write to our 24/7 Customer Support at <a href="#" target="_blank"><strong>support at digitalq.co.in</strong></a> to request a refund.</b></p></div>


    
       
    {/* </section> */}

  
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
                                            <a href="http://youtube.com/digitalq" target="_blank" rel="noopener">
                                                <i className="fab fa-youtube"></i>
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

export default Refund;