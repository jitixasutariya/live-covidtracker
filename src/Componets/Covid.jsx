import React, { useEffect, useState } from "react";
import "./Covid.css";

// Define the Covid component for Australia
const Covid = () => {
  // State to hold COVID-19 data
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // Function to fetch Australia's COVID-19 data
  const getCovidData = async () => {
    try {
      // Fetch data from the API for Australia
      const res = await fetch(
        "https://disease.sh/v3/covid-19/countries/Australia"
      );
      const resultData = await res.json();

      // Update the state with the fetched data
      setData(resultData);
      setLoading(false); // Set loading to false once data is fetched
    } catch (err) {
      // Log any errors to the console
      console.log(err);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getCovidData();
  }, []);

  // If loading, show a loading message or a loading skeleton
  if (loading) {
    return <div>Loading...</div>; // You can customize this
  }

  // Render the component once the data is fetched
  return (
    <div id="Card">
      <div className="container pt-5">
        <div className="row align-items-stretch">
          {/* Card for displaying country name */}
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Our Country
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">
                Australia
              </span>
            </div>
          </div>

          {/* Card for displaying total recovered cases */}
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Total Recovered Cases
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">
                {data.recovered?.toLocaleString() || "N/A"}
              </span>
            </div>
          </div>

          {/* Card for displaying total confirmed cases */}
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Total Confirmed Cases
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">
                {data.cases?.toLocaleString() || "N/A"}
              </span>
            </div>
          </div>

          {/* Card for displaying total death cases */}
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Total Death Cases
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">
                {data.deaths?.toLocaleString() || "N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="row align-items-stretch">
          {/* Card for displaying total active cases */}
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Total Active Cases
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">
                {data.active?.toLocaleString() || "N/A"}
              </span>
            </div>
          </div>

          {/* Card for displaying last updated time */}
          <div className="c-dashboardInfo col-lg-3 col-md-6">
            <div className="wrap">
              <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
                Last Updated Time
              </h4>
              <span className="hind-font caption-12 c-dashboardInfo__count">
                {new Date(data.updated).toLocaleString() || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Covid component as default
export default Covid;
