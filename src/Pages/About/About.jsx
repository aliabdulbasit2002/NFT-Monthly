import "../About/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row px-3 py-4 align-items-center">
          <div className="col-md-5">
            <img
              src="/src/assets/images/about-img.png"
              className="img-fluid"
              alt="dummy"
            />
          </div>
          <div className="col-md-6 mt-5 mt-lg-0">
            <div className="ms-lg-5" style={{ width: "400px" }}>
              <h5 className="fw-bold">About Mezo</h5>
              <h3 style={{ width: "300px" }}>
                Explore Various Digital Art And NFT Collections
              </h3>
              <p>
                Vulputate enim nulla aliquet porttitor lacus luctus accumsan.
                Mattis enim ut tellus elementum sagittis. In hendrerit gravida
                rutrum quisque non tellus orci ac auctor. Integer feugiat
                scelerisque varius morbi enim nunc faucibus a.
              </p>
              <p>
                Quam viverra orci sagittis eu. Amet dictum sit amet justo donec.
                Cursus turpis massa tincidunt dui ut ornare lectus sit. At urna
                condimentum mattis.
              </p>
              <div className="d-flex justify-content-between">
                <div className="about-stats">
                  <h6>0.50 ETH</h6>
                  <p>Last Trade</p>
                </div>
                <div className="about-stats">
                  <h6>0.99 ETH</h6>
                  <p>0.99 ETH</p>
                </div>
                <div className="about-stats">
                  <h6>150+</h6>
                  <p>Owners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
