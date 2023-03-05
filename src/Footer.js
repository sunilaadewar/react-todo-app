import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <>
            <section className="contact-section" id="contact-section">
                <h2>Contact</h2>
                <div className="container contact">
                    <div className="social-icon"><a href="https://github.com/sunilaadewar" target="_blank"><i
                        className="fa-brands fa-github"></i></a>
                    </div>
                    <div className="social-icon"><a href="https://twitter.com/SunilAadewar" target="_blank"><i
                        className="fa-brands fa-twitter"></i></a></div>
                    <div className="social-icon"><a href="https://www.linkedin.com/in/sunil-aadewar-3a0744181/"
                                                    target="_blank"><i
                        className="fa-brands fa-linkedin"></i></a></div>
                    <div className="social-icon"><a href="https://www.figma.com/@sunilaadewar" target="_blank"><i
                        className="fa-brands fa-figma"></i></a></div>
                </div>
                <h4><a href="mailto:sunilaadewar@gmail.com">sunilaadewar@gmail.com</a></h4>
            </section>
            <section className="footer">
                <a href="https://www.figma.com/community/file/1214083467575044085" target="_blank">Figma File</a>
                <p>&#169;&nbsp;SUNIL AADEWAR - Coded with love in search of love</p>
            </section>

        </>
    );
};

export default Footer;