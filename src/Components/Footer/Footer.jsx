import "../Footer/Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row py-4">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex align-items-center gap-4">
              <a href="#">Privacy Policy</a>

              <p>&bull;</p>

              <a href="#">Terms & Conditions</a>

              <p>&bull;</p>

              <a href="#">Contact Us</a>
            </div>

            <div className="mt-2 mt-md-0">
              Copyright ©2022 Muzo. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
