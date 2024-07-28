import React, { useEffect, useState } from "react";
import "./Covid.css";

// Define the Covid component
const Covid = () => {
  // State to hold COVID-19 data
  const [data, setData] = useState([]);

  // Function to fetch COVID-19 data
  const getCovidData = async () => {
    try {
      // Fetch data from the API
      const res = await fetch("https://data.covid19india.org/data.json");
      const resultData = await res.json();

      // Log the first state's data for debugging purposes
      // console.log(resultData.statewise[0]);

      // Update the state with the fetched data
      setData(resultData.statewise[0]);
    } catch (err) {
      // Log any errors to the console
      console.log(err);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getCovidData();
  }, []);

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
                India
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
                {data.recovered}
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
                {data.confirmed}
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
                {data.deaths}
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
                {data.active}
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
                {data.lastupdatedtime}
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
