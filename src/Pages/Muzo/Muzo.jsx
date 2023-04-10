import "../Muzo/Muzo.css";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTelegram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Muzo = () => {
  return (
    <section className="muzo">
      <div className="container">
        <div className="row py-5">
          <div className="text-center">
            <img src="/src/assets/images/logo.png" alt="" />
            <p className="mt-4">
              Quis varius quam quisque id diam. Justo laoreet sit amet cursus
              sit amet <br /> dictum. ullamcorper eget facilisi dignissim diam
              quis.
            </p>
            <div className="row">
              <div className="d-flex justify-content-evenly gap-1 mt-4 socials">
                <a href="#">
                  <FaDiscord />
                </a>
                <a href="#">
                  <FaTwitch />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTelegram />
                </a>
                <a href="#">
                  <FaPinterest />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Muzo;
