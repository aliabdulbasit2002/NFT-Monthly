import "../Ourteam/Ourteam.css";
import { FaDiscord, FaTwitch, FaTwitter } from "react-icons/fa";
import ourTeam from "../../assets/images/col-img6.png";
import ourTeam1 from "../../assets/images/col-img2.png";
import ourTeam2 from "../../assets/images/col-img1.png";
import ourTeam3 from "../../assets/images/col-img5.png";

const Ourteam = () => {
  return (
    <section className="ourteam">
      <div className="container">
        <div className="row py-4 justify-content-around">
          <div className="text-center">
            <h3>MEET OUR TEAM</h3>
            <p className="display-3 fw-semibold">Meet Our Creator</p>
          </div>
          <div className="col-md-3 col-5 mt-3 mt-md-0 text-center">
            <img src={ourTeam3} className="img-fluid" alt="" width={150} />
            <h4 className="mt-2 fw-bold">Wade Warren</h4>
            <p>The Artist</p>
            <div className="d-flex gap-3 justify-content-center socials">
              <a href="#">
                <FaDiscord />
              </a>
              <a href="#">
                <FaTwitch />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-5 mt-3 mt-md-0 text-center">
            <img src={ourTeam} className="img-fluid" alt="" width={150} />
            <h4 className="mt-2 fw-bold">Wade Warren</h4>
            <p>The Artist</p>
            <div className="d-flex gap-3 justify-content-center socials">
              <a href="#">
                <FaDiscord />
              </a>
              <a href="#">
                <FaTwitch />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-5 mt-5 mt-md-0 text-center">
            <img src={ourTeam1} className="img-fluid" alt="" width={150} />
            <h4 className="mt-2 fw-bold">Wade Warren</h4>
            <p>The Artist</p>
            <div className="d-flex gap-3 justify-content-center socials">
              <a href="#">
                <FaDiscord />
              </a>
              <a href="#">
                <FaTwitch />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-5 mt-5 mt-md-0 text-center">
            <img src={ourTeam2} className="img-fluid" alt="" width={150} />
            <h4 className="mt-2 fw-bold">Wade Warren</h4>
            <p>The Artist</p>
            <div className="d-flex gap-3 justify-content-center socials">
              <a href="#">
                <FaDiscord />
              </a>
              <a href="#">
                <FaTwitch />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ourteam;
