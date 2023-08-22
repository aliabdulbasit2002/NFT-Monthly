import "../Introduce/Introduce.css";
import introImg from "../../assets/images/paint.png";
import introImg1 from "../../assets/images/image.png";
import introImg2 from "../../assets/images/paint (2).png";
import introImg3 from "../../assets/images/ring.png";

const Introduce = () => {
  return (
    <section className="introduce">
      <div className="container py-5">
        <div className="row">
          <div className="text-center">
            <h3 className="fw-bold">Introduce</h3>
            <p className="display-5 fw-bold">Muzo Introducing</p>
          </div>
          <div className="row">
            <div className="col-md-3 col-6 ">
              <div className="intro-card d-flex flex-column justify-content-center">
                <img
                  src={introImg}
                  className="img-fluid mx-auto"
                  style={{ width: "80px" }}
                  alt="paint"
                />
                <div className="intro-card-details text-center">
                  <h5>Creative Artwork</h5>
                  <p style={{ width: "110px", margin: "0 auto" }}>
                    Neque ornare aenean euismod elementum quis eleifend.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div className="intro-card d-flex flex-column justify-content-center">
                <img
                  src={introImg1}
                  className="img-fluid mx-auto"
                  style={{ width: "80px" }}
                  alt="paint"
                />
                <div className="intro-card-details text-center">
                  <h5>High Quality</h5>
                  <p style={{ width: "110px", margin: "0 auto" }}>
                    Neque ornare aenean euismod elementum quis eleifend.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6  mt-3 mt-md-0">
              <div className="intro-card d-flex flex-column justify-content-center">
                <img
                  src="/src/assets/images/paint (2).png"
                  className="img-fluid mx-auto"
                  style={{ width: "80px" }}
                  alt="paint"
                />
                <div className="intro-card-details text-center">
                  <h5>Awesome Creator</h5>
                  <p style={{ width: "110px", margin: "0 auto" }}>
                    Neque ornare aenean euismod elementum quis eleifend.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6  mt-3 mt-md-0">
              <div className="intro-card d-flex flex-column justify-content-center">
                <img
                  src="/src/assets/images/ring.png"
                  className="img-fluid mx-auto"
                  style={{ width: "80px" }}
                  alt="paint"
                />
                <div className="intro-card-details text-center">
                  <h5>Affordable Price</h5>
                  <p style={{ width: "110px", margin: "0 auto" }}>
                    Neque ornare aenean euismod elementum quis eleifend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Introduce;
