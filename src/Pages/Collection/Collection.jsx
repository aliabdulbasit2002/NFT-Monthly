import "../Collection/Collection.css";
import colImg from "../../assets/images/col-img1.png";
import colImg1 from "../../assets/images/col-img2.png";
import colImg2 from "../../assets/images/col-img3.png";
import colImg3 from "../../assets/images/col-img4.png";
import colImg4 from "../../assets/images/col-img5.png";
import colImg5 from "../../assets/images/col-img6.png";

const Collection = () => {
  return (
    <section className="collection">
      <div className="container">
        <div className="row py-4">
          <div className="text-center mb-4">
            <h3 className="fw-semibold">Our Collection</h3>
            <p className="display-3 fw-semibold">Latest Sales Listings</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={colImg} className="img-fluid" alt="" width={300} />
            <h4>mila Kile</h4>
            <p>Muzo #455</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={colImg1} className="img-fluid" alt="" width={300} />
            <h4>Antique bust</h4>
            <p>Muzo #455</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={colImg2} className="img-fluid" alt="" width={300} />
            <h4>mila Kile</h4>
            <p>Muzo #455</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={colImg3} className="img-fluid" alt="" width={300} />
            <h4>mila Kile</h4>
            <p>Muzo #455</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={colImg4} className="img-fluid" alt="" width={300} />
            <h4>mila Kile</h4>
            <p>Muzo #455</p>
          </div>
          <div className="col-md-4 col-6 text-center">
            <img src={colImg5} className="img-fluid" alt="" width={300} />
            <h4>mila Kile</h4>
            <p>Muzo #455</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Collection;
