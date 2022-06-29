import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";
import "./Crypto.css";
import { Link } from "react-router-dom"

function Crypto() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  // const url = 'https://api.crypto.com/v2/public/get-instruments';
  return (
    <div className="wrapper">
      <br />
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Instrument</th>
            <th>Price</th>
            <th>Mrkt Cap</th>
            <th>Volume</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Link to="/chart">
                    <img
                      src={crypto.image}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                  </Link>
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{crypto.name}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">${crypto.current_price}</p>
              </td>
              <td>
                <span className="">${crypto.market_cap}</span>
              </td>
              <td>${crypto.total_volume}</td>
              {crypto.price_change_percentage_24h > 0 ? (
                <td>
                  <span
                    style={{
                      backgroundColor: "#76c893",
                      borderRadius: "5px",
                      padding: "6px",
                    }}
                  >
                    Gain
                  </span>
                </td>
              ) : (
                <td>
                  <span
                    style={{
                      backgroundColor: "#dc2f02",
                      borderRadius: "5px",
                      padding: "6px",
                    }}
                  >
                    Loss
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Crypto;
