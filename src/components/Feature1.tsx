import { Chart, ChartConfiguration } from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function Feature1() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    // Create a chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        

        chartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: [
              "Exception",
              "Intransit",
              "Pending",
              "Delivered",
              "Out for delivery",
            ],
            datasets: [
              {
                data: [23, 34, 56, 54, 21],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4CAF50",
                  "#FF9800",
                ],
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        } as ChartConfiguration<"pie", number[], string>);
      }
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div style={{ width: "100%", background: "#FFF7EE" }}>
        <div className="container-fluid p-5">
          <h2 style={{ fontWeight: "700" }}>
            Instant Dive into Your Performance Metrics
          </h2>

          <div className="d-flex gap-3 my-4">
            <div
              style={{ border: "2px solid #8051FF", borderRadius: "8px" }}
              className="bg-white px-4 py-2"
            >
              Lifetime
            </div>

            <div className="bg-white px-3 py-1 rounded">Last Week</div>

            <div className="bg-white px-3 py-1 rounded">Last Month</div>

            <div className="bg-white px-3 py-1 rounded">Last Year</div>

            <div className="bg-white px-3 py-1 rounded">
              Customize Time Line
            </div>
          </div>

          <div className="row my-5">
            <div className="col-5">
              <div className="card feature1Card p-3">
                <div className="d-flex justify-content-between">
                  <h5>Shipment Updates</h5>
                  <p>Total orders: 394</p>
                </div>

                <div className="card-headers-container d-flex gap-2 my-1">
                  <div
                    className="px-4 py-2 d-flex justify-content-center align-items-center card-header"
                    style={{
                      backgroundColor: "#FFF1E3",
                      borderColor: "#E3E3E3",
                    }}
                  >
                    <div className="card-header-content">
                      <h6>Delivered</h6>
                    </div>
                  </div>

                  <div
                    className="px-4 py-2 d-flex justify-content-center align-items-center card-header"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <div className="card-header-content">
                      <h6>Out For Delivery</h6>
                    </div>
                  </div>

                  <div
                    className="px-4 py-2 d-flex justify-content-center align-items-center card-header"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <div className="card-header-content">
                      <h6>Intransit</h6>
                    </div>
                  </div>

                  <div
                    className="px-4 py-2 d-flex justify-content-center align-items-center card-header"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <div className="card-header-content">
                      <h6>Pending</h6>
                    </div>
                  </div>


                </div>


                <div className="text-center my-3">

                  <canvas
                    ref={chartRef}
                    id="myChart"
                  ></canvas>

                </div>

              </div>
            </div>

            <div className="col-2">
              <div
                style={{ backgroundColor: "#956F00" }}
                className="card  feature1Card  p-2"
              >
                <div className="d-flex flex-column justify-content-between">
                  <h5 className="text-white">
                    Star Facts about your orders !!!
                  </h5>
                  <p className="text-white">
                    There are 8 shipments that have been in out for delivery for
                    more than 3 days.
                    <br />
                    <br />
                    There are 5 shipments in exception right now
                    <br />
                    <br />
                    The maximum chargebacks are from Miami.
                  </p>

                  <button className="btn btn-sm btn-light">
                    Check Orders page
                  </button>
                </div>
              </div>
            </div>

            <div className="col-5">
              <div className="card feature1Card p-3">
                <h5>Tracking Page Views Vs orders </h5>
                <p>
                  Understand user engagement patterns and optimize your tracking
                  page for enhanced customer experiences.
                </p>
                <div
                  className="card feature1Card p-2 mt-2"
                  style={{ backgroundColor: "	#D3D3D3" }}
                >
                  <h5 style={{ fontSize: "14px" }}>Orders</h5>
                  <p style={{ fontSize: "18px" }}>
                    <strong style={{ fontSize: "40px" }}>80</strong>
                  </p>
                </div>
                <div
                  className="card feature1Card p-2 mt-2"
                  style={{ background: "	#F4A460" }}
                >
                  <h5 style={{ fontSize: "14px" }}>Tracking Page Views</h5>
                  <p style={{ fontSize: "18px" }}>
                    <strong style={{ fontSize: "40px" }}>44</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
