export default function Functionality1() {
  return (
    <>
      <div style={{ width: "100%", background: "#FFF7EE" }}>
        <div className="container-fluid p-5">
          <h2 style={{ fontWeight: "700" }}>
            Discover the Heart of Our Functionality
          </h2>

          <div className="row my-4">
            <div className="col-md-4">
              <div
                className="card feature1Card p-3"
                style={{
                  width: "380px",
                  height: "450px",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Added to space out the fields
                }}
              >
                <div>
                  <h5>
                    Elevate Your Brand Aesthetics with Custom Tracking Page
                    Styles
                  </h5>
                  <p>
                    Immerse your customers in a branded experience by
                    personalizing the colors on your tracking page.
                  </p>
                </div>
                <div>
                <div className="mb-2">
                    <label htmlFor="field1-text">Text Color</label>
                    <input
                      id="field1-text"
                      type="text"
                      className="form-control"
                      placeholder="571010"
                      // Add any additional styling as needed
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="field1-text">Text Color</label>
                    <input
                      id="field1-text"
                      type="text"
                      className="form-control"
                      placeholder="571010"
                      // Add any additional styling as needed
                    />
                  </div>
                  <div>
                    <label htmlFor="field1-background">Background Color</label>
                    <input
                      id="field1-background"
                      type="text"
                      className="form-control"
                      placeholder="FFEAEA"
                      // Add any additional styling as needed
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="card feature1Card p-3"
                    style={{
                      width: "470px",
                      height: "190px",
                      right: "30px",
                    }}
                  >
                    <h5>Exclusive Onboarding Support for High-Volume Brands</h5>
                    <p>
                      Unlock personalized guidance! Book a one-on-one Onboarding
                      call to streamline your experience.
                    </p>
                    <div className="d-flex flex-row gap-3">
                      <button
                        className="btn btn-sm btn-dark"
                        style={{ fontSize: "14px", fontWeight: "bold" }}
                      >
                        Schedule A Call
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div
                    className="card feature1Card p-3"
                    style={{
                      width: "470px",
                      height: "236px",
                      top: "10px",
                      right: "30px",
                    }}
                  >
                    <h5>Explore Our Integrated Ecosystem</h5>
                    <p>
                      Discover a variety of popular integrations tailored for
                      your convenience
                    </p>
                   
                    <div className="d-flex flex-row gap-3">
                      <button
                        className="btn btn-sm btn-dark"
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          border: "1px solid #343a40",
                        }}
                      >
                        Explore Integrations
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card feature1Card p-3"
                style={{
                  width: "380px",
                  height: "450px",
                  left: "30px",
                  borderRadius: "16px",
                }}
              >
                <h5>Seamlessly Integrate Custom HTML Elements</h5>
                <p>
                  Unleash creativity with our Custom HTML feature. Add links,
                  custom messages, or any HTML content to elevate the tracking
                  page experience for your customers.
                </p>
                <p>HTML LINK</p>
                <textarea
                  className="form-control mb-3" // Add a class for styling
                  rows={5} // Adjust the number of rows as needed
                  placeholder="Enter your custom HTML content here..."
                />
                <div className="d-flex flex-row gap-3">
                  <button
                    className="btn btn-sm btn-light"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      border: "1px solid ",
                    }}
                  >
                    Preview
                  </button>
                  <button
                    className="btn btn-sm btn-dark"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      border: "1px solid #343a40",
                    }}
                  >
                    Apply Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
