import "../Questions/Questions.css";

const Questions = () => {
  return (
    <section className="questions">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 text-center d-flex justify-content-center">
            <img
              src="/src/assets/images/question.png"
              className="img-fluid"
              alt=""
              width={350}
            />
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <h3 className="fw-semibold">POPULAR QUESTIONS</h3>
            <p className="display-6 fw-semibold">
              Frequently Asked <br /> Questions
            </p>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item bg-color">
                <h2 className="accordion-header bg-color">
                  <button
                    className="accordion-button fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What’s an NFT?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Massa tempor nec feugiat nisl pretium fusce. Sit amet est
                    placerat in egestas. Vitae sapien pellentesque habitant
                    morbi tristique senectus. Tortor condimentum lacinia quis.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-color">
                <h2 className="accordion-header bg-color">
                  <button
                    className="accordion-button fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    How can I buy one?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Massa tempor nec feugiat nisl pretium fusce. Sit amet est
                    placerat in egestas. Vitae sapien pellentesque habitant
                    morbi tristique senectus. Tortor condimentum lacinia quis.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-color">
                <h2 className="accordion-header bg-color">
                  <button
                    className="accordion-button fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Which blockchain?ask?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Massa tempor nec feugiat nisl pretium fusce. Sit amet est
                    placerat in egestas. Vitae sapien pellentesque habitant
                    morbi tristique senectus. Tortor condimentum lacinia quis.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-color">
                <h2 className="accordion-header bg-color">
                  <button
                    className="accordion-button fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    Maximum mintable?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Massa tempor nec feugiat nisl pretium fusce. Sit amet est
                    placerat in egestas. Vitae sapien pellentesque habitant
                    morbi tristique senectus. Tortor condimentum lacinia quis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Questions;
