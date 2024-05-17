import './Footer.scss';

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <h3 className="footer__links--heading">Quick Links</h3>
                    <a href="#home" className="footer__links--link">Home</a>
                    <a href="#services" className="footer__links--link">Services</a>
                    <a href="#about" className="footer__links--link">About</a>
                    <a href="#contact" className="footer__links--link">Contact</a>

                </div>
                <div className="footer__info">
                    <h3 className="footer__links--heading">Contact Info</h3>
                    <p className="footer__info--contact">604 NUMBER</p>
                    <p className="footer__info--contact">info@relaxmassage.com</p>
                    <p className="footer__info--contact"><b>Appointments Available:</b></p>
                    <p className="footer__info--contact">Monday - Sunday</p>

                </div>
            </div>
            <div className="footer__copyright">
                &copy; Relax Massage Surrey - All rights Reserved
            </div>
        </div>
        </>
    )
}

export default Footer;