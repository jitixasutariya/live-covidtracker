import React, { useEffect, useState } from "react";
import "./Covid.css";

// Define the Covid component for Australia
const Covid = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/countries/Australia"
      );
      const resultData = await res.json();
      setData(resultData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div id="Card">
      <h1 className="covid-title">
        Australia COVID-19 Dashboard: Real-Time Updates
      </h1>
      <div className="container pt-5">
        <div className="c-dashboardInfo">
          <div className="wrap">
            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
              Our Country
            </h4>
            <span className="hind-font caption-12 c-dashboardInfo__count">
              Australia
            </span>
          </div>
        </div>

        <div className="c-dashboardInfo">
          <div className="wrap">
            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
              Total Recovered Cases
            </h4>
            <span className="hind-font caption-12 c-dashboardInfo__count">
              {data.recovered?.toLocaleString() || "N/A"}
            </span>
          </div>
        </div>

        <div className="c-dashboardInfo">
          <div className="wrap">
            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
              Total Confirmed Cases
            </h4>
            <span className="hind-font caption-12 c-dashboardInfo__count">
              {data.cases?.toLocaleString() || "N/A"}
            </span>
          </div>
        </div>

        <div className="c-dashboardInfo">
          <div className="wrap">
            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
              Total Death Cases
            </h4>
            <span className="hind-font caption-12 c-dashboardInfo__count">
              {data.deaths?.toLocaleString() || "N/A"}
            </span>
          </div>
        </div>

        <div className="c-dashboardInfo">
          <div className="wrap">
            <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
              Total Active Cases
            </h4>
            <span className="hind-font caption-12 c-dashboardInfo__count">
              {data.active?.toLocaleString() || "N/A"}
            </span>
          </div>
        </div>

        <div className="c-dashboardInfo">
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
  );
};

export default Covid;
