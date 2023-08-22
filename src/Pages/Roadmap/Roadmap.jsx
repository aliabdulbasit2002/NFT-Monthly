import "../Roadmap/Roadmap.css";
import roadImg from "../../assets/images/roadmap.png";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-md-7">
            <h3>ROADMAP</h3>
            <p className="display-5 fw-semibold">
              Explore Thousands <br /> Of Digital Art And <br /> Collectibles.
            </p>
            <p>
              Vulputate enim nulla aliquet porttitor lacus luctus accumsan.
              Mattis enim ut <br /> tellus elementum sagittis. In hendrerit
              gravida rutrum quisque,
            </p>
            <div className="position-relative">
              <span className="explore-border"></span>
              <a href="#" className="btn mt-3 fw-semibold explore">
                Explore Now
              </a>
            </div>
          </div>
          <div className="col-md-5 mt-5 mt-md-0">
            <img src={roadImg} className="img-fluid" alt="" width={300} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Roadmap;
