import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner() {
  return (
    <div className="banner home-banner d-flex align-items-center">


    <div className="container">
        <div className="row no-gutters align-items-center">
            <div className="col-lg-6 text-center text-lg-left">
                <h1>Right Technology<br/>at the right time</h1>
                <p className="larger-txt">We believe in using the right technology for the problems at hand.<br/> Because technology advances so rapidly, keeping an open mind is critical</p>
                <Link href="https://dqserv.com">
                <a className="custom-btn secondary-btn">Check our Products</a></Link>

            </div>

            <div className="col-lg-6">
                <div className="img-container text-center text-lg-right">
                    <Image src={"/assets/images/banner/home1.svg"} height={300} width={400} className={"img-fluid"}/>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner