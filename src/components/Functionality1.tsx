import React, { useState } from "react";
import { SketchPicker, ColorResult, RGBColor } from "react-color";

interface Feature1CardProps { }

const rgbToHex = (color: RGBColor): string => {
  const { r, g, b } = color;
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
};

const Feature1Card: React.FC<Feature1CardProps> = () => {
  const [accentColor, setAccentColor] = useState<RGBColor>({
    r: 255,
    g: 152,
    b: 152,
  });
  const [textColor, setTextColor] = useState<RGBColor>({ r: 87, g: 16, b: 16 });
  const [backgroundColor, setBackgroundColor] = useState<RGBColor>({
    r: 255,
    g: 234,
    b: 234,
  });

  const [showAccentColorPicker, setShowAccentColorPicker] =
    useState<boolean>(false);
  const [showTextColorPicker, setShowTextColorPicker] =
    useState<boolean>(false);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] =
    useState<boolean>(false);

  const colorPickerButtonStyle = {
    width: "100px",
    height: "40px",
    borderRadius: "10px",
    marginLeft: "10px",
  };

  const smallInputStyle = {
    width: "240px",
    height: "40px",
    borderRadius: "10px",
  };

  const handleAccentColorChange = (color: ColorResult) => {
    setAccentColor(color.rgb);
  };

  const handleTextColorChange = (color: ColorResult) => {
    setTextColor(color.rgb);
  };

  const handleBackgroundColorChange = (color: ColorResult) => {
    setBackgroundColor(color.rgb);
  };
  return (
    <div
      className="card feature1Card p-3"
      style={{
        width: "380px",
        height: "450px",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div>
        <h5>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h5>
        <p>
          Immerse your customers in a branded experience by personalizing the
          colors on your tracking page.
        </p>
      </div>
      <div>
        <div className="color-picker-wrapper">
          <div className="mb-2 color-picker-container">
            <label htmlFor="accentColorPicker">Accent Color</label>
            <div className="color-picker-input d-flex">
              <input
                className="form-control small-input"
                style={smallInputStyle}
                value={rgbToHex(accentColor)}
                readOnly
              />
              {showAccentColorPicker && (
                <div style={{ position: "absolute", top: "40px", left: "0" }}>
                  <SketchPicker
                    color={accentColor}
                    onChange={handleAccentColorChange}
                  />
                </div>
              )}
              <button
                onClick={() => setShowAccentColorPicker(!showAccentColorPicker)}
                style={{
                  ...colorPickerButtonStyle,
                  backgroundColor: rgbToHex(accentColor),
                }}
              />
            </div>
          </div>

          <div className="mb-2 color-picker-container">
            <label htmlFor="textColorPicker">Text Color</label>
            <div className="color-picker-input d-flex">
              <input
                className="form-control small-input"
                style={smallInputStyle}
                value={rgbToHex(textColor)}
                readOnly
              />
              {showTextColorPicker && (
                <div style={{ position: "absolute", top: "40px", left: "0" }}>
                  <SketchPicker
                    color={textColor}
                    onChange={handleTextColorChange}
                  />
                </div>
              )}
              <button
                onClick={() => setShowTextColorPicker(!showTextColorPicker)}
                style={{
                  ...colorPickerButtonStyle,
                  backgroundColor: rgbToHex(textColor),
                }}
              />
            </div>
          </div>

          <div className="mb-2 color-picker-container">
            <label htmlFor="backgroundColorPicker">Background Color</label>
            <div className="color-picker-input d-flex">
              <input
                className="form-control small-input"
                style={smallInputStyle}
                value={rgbToHex(backgroundColor)}
                readOnly
              />
              {showBackgroundColorPicker && (
                <div style={{ position: "absolute", top: "40px", left: "0" }}>
                  <SketchPicker
                    color={backgroundColor}
                    onChange={handleBackgroundColorChange}
                  />
                </div>
              )}
              <button
                onClick={() =>
                  setShowBackgroundColorPicker(!showBackgroundColorPicker)
                }
                style={{
                  ...colorPickerButtonStyle,
                  backgroundColor: rgbToHex(backgroundColor),
                }}
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-3 mt-3">
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
  );
};

const Functionality1: React.FC = () => {
  return (
    <>
      <div style={{ width: "100%", background: "#FFF7EE" }}>
        <div className="container-fluid p-5">
          <h2 style={{ fontWeight: "700" }}>
            Discover the Heart of Our Functionality
          </h2>

          <div className="row my-4">
            <div className="col-md-4">
              <Feature1Card />
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
                  className="form-control mb-3"
                  rows={5}
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
};

export default Functionality1;
