import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} <strong>BlueSky</strong>. All
            rights reserved.
          </p>
          <p className="footer-subtext">
            <small>
              Crafted with passion by <strong>Amir Sohail Shiek</strong>
            </small>
          </p>
          <p className="footer-subtext">
            <small>
              The weather is always changing, but we keep you informed.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
