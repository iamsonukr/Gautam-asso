import React from 'react';
import './footer.css'
import CountryDropdown from '../country/CountrySelect';


const Footer = () => {
    return (
        <footer className="custom-bg footerHead">
            {/* Part A */}
            <div className='footerSec2 '>

                <p className="paraOne custom-font">We Provide best Services<br /> all over the India</p>
                <button className='headerBtn'>Explore our products</button>
            </div>

            {/* Part B */}
            <div className="partB ">
                {/* Part B1 */}
                <div className="partBOne">

                    {/* Part B1 Left*/}
                    <div className="BOneLeft borderLeft">
                        <h3 className="subscribe custom-txt">SUBSCRIBE TO RECEIVE GRAPE <br /> NEWS & OFFERS</h3>
                        <div style={{display:'flex'}}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="custom-brown inputEmail"
                            />
                            <button className="custom-brown btnSub">
                                &gt;
                            </button>
                        </div>
                        <div style={{paddingTop:'20px'}} >
                            <input type="checkbox" />
                            <label htmlFor="" className='custom-txt'> I've read the Privacy Policy and I consent to <br /> Halal Interior sending me marketing<br /> communications</label>
                        </div>
                        <div className="socialLinks">
                            <div className=" custom-txt">
                                <table>
                                    <tr>
                                        <td>
                                            <a href="#">
                                                <p >Instagram</p>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#" >
                                                <p>Facebook</p>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#" >
                                                <p >Pintrest</p>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#" >
                                                <p >Twitter</p>
                                            </a>
                                        </td>
                                    </tr>
                                </table>                            
                            </div>
                        </div>

                        <div style={{marginTop:'40px'}}>
                            <div style={{display:'flex'}}>
                                <CountryDropdown/>
                            </div>
                        </div>
                    </div>

                    {/* Part B2 Right */}

                    <div className="menus BTwoRight" >

                        {/*  first */}
                        <div className="FooterFirstMenus">
                            <div className=" custom-txt">
                                <ul className="custom-txt custom-txt">
                                    <p >ALL<br /> PRODUCT</p>
                                    <p >BEST <br /> SELLERS</p>
                                    <p >NEW<br /> ARRIVALS</p>
                                    <p >LOWEST<br /> PRICES</p>
                                    <p >DELIVERY</p>
                                </ul>
                            </div>
                        </div>

                        {/* Threee sections start here */}
                        <div className='ThreeSections'>
                            <div className='ThreeSectionsTop '>

                                <div className="FooterMenus">
                                    <ul class="custom-txt">
                                        <p >PRIVACY POLICY</p>
                                        <p >ORDER ONLINE</p>
                                        <p >CONTACT US</p>
                                        <p >RETURNS &amp; <br /> CLAIMS</p>
                                    </ul>

                                </div>
                                <div className="FooterMenus">
                                    <ul className="custom-txt">
                                        <p >ABOUT US</p>
                                        <p >OUR PROMISE</p>
                                        <p >MY ACCOUNT</p>
                                    </ul>
                                </div>
                                <div className="FooterMenus">
                                    <ul className="custom-txt">
                                        <p >BLOG</p>
                                        <p >REVIEWS</p>
                                        <p >PRIVACY POLICY</p>
                                        <p >LOOKBOOK</p>
                                    </ul>
                                </div>
                            </div>

                            {/* Cash Prizes */}

                            <div className="PaymentIcons">
                                <p className="weAccept custom-txt">We Accept</p>
                                <div style={{display:'flex', flexWrap:'wrap'}}>
                                    <img src="/payment-icons/AmazonPay.png" alt="PayPal"  />
                                    <img src="/payment-icons/ApplePay.png" alt="Apple Pay"  />
                                    <img src="/payment-icons/GooglePay.png" alt="Google Pay" />
                                    <img src="/payment-icons/JCB.png" alt="Mastercard" />
                                    <img src="/payment-icons/Mastercard.png" alt="Mastercard" />
                                    <img src="/payment-icons/Visa Classic.png" alt="Visa"/>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* B1 end */}
                </div>


                {/*Part B2 */}
                <div className="custom-txt copyrightSection">
                    <div>
                        <p >© 2021 GHBIAN.FIT.COM ALL RIGHTS RESERVED.</p>
                    </div>
                    <div>
                        <ul className="custom-txt">
                            <p>PRIVACY POLICY</p>
                            <p>TERMS OF USE</p>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;