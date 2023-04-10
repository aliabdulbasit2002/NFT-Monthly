import "../Hero/Hero.css";

const Hero = () => {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 pt-4 pt-md-0">
            <h1 className="display-3 fw-semibold">
              Exclusive Muzo <br className="d-md-none d-lg-flex" /> Collectible
              Arts.
            </h1>
            <p className="mt-4" style={{ width: "420px" }}>
              Integer quis auctor elit sed vulputate. Purus ut faucibus pulvinar{" "}
              elementum integer enim neque.
            </p>
            <div className="position-relative">
              <span className="explore-border"></span>
              <a href="#" className="btn mt-3 fw-semibold explore">
                Explore Now
              </a>
            </div>
          </div>
          <div className="col-md-6 py-4 py-md-0">
            <img
              src="/src/assets/images/hero-img.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
