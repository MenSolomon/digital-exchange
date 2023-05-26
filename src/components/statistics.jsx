import React, { useEffect, useRef, useState } from "react";
import css from "../styles/statistics.module.css";
import notify from "../images/notify.png";
import night from "../images/night.png";
import day from "../images/day.png";
import exit from "../images/exit.png";
import user from "../images/user.png";
import logo from "../images/logo.png";
import exchange from "../images/exchange.png";
import crypto from "../images/crypto.png";
import marketplace from "../images/marketplace.png";
import trading from "../images/trading.png";
import statistics from "../images/statistics.png";
import service from "../images/service.png";
import card from "../images/card.png";
import historyicon from "../images/historyicon.png";
import message from "../images/message.png";
import settings from "../images/settings.png";
import tiktok from "../images/tiktok.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import snapchat from "../images/snapchat.png";
import news from "../images/news.png";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale, // x axis
  LinearScale, // y axis
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
import _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const Statistics = () => {
  let [realData, setData] = useState({});

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/stats",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(realData);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);

  const options2 = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const [coinInfo, setCoinInfo] = useState([]);
  const [coinInfo1, setCoinInfo1] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .request(options2)
        .then(function (response) {
          console.log(response.data.data.coins);
          setCoinInfo(response.data.data.coins);
          setCoinInfo1(response.data.data);
          console.log("Jesus is God");
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  console.log(coinInfo1);

  /// TABLE INFO

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: false,
        title: { display: false, text: "Who Let them out" },
        maintainAspectRatio: false,
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },

        x: {
          grid: {
            display: false,
          },

          ticks: {
            display: false,
          },
        },
      },
    });
  }, []);
  let colors = "";
  let newCoinArray = [];
  let intArray = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    intArray.push(newCoinArray[i]?.map((string) => parseFloat(string)));
  }

  const combinearray = _.zip(coinInfo.slice(0, 10), intArray.slice(0, 10));

  return (
    <div className={css.container}>
      <div className={`${css.header} ${css.section} ${css.fixed}`}>
        <div className={css.logo}>
          <img src={logo} />
        </div>
        <div className={css.utilities}>
          <ul>
            <li>
              <img src={day} />
            </li>
            <li>
              <img src={notify} />
            </li>

            <li>
              <div
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundSize: "cover",
                }}
                className={css.profileImage}
              ></div>
              <h6>Mike</h6>
            </li>

            <li>
              <img src={exit} />
              <h6>Logout</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${css.overviewHead} ${css.section}`}>
        <div className={css.statsLayout}>
          {/* <div className={css.table}></div> */}

          <table>
            <tbody>
              <tr>
                <td>
                  <h2> Total Coins </h2>
                </td>
                <td>
                  <h2> Total 24h Volume </h2>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  {realData.data?.totalCoins.toString().length === 5
                    ? `${realData.data?.totalCoins
                        .toString()
                        .substring(0, 2)}.${realData.data?.totalCoins
                        .toString()
                        .substring(2, 3)} K`
                    : realData.data?.totalCoins}
                </td>{" "}
                <td>
                  {" "}
                  {realData.data?.total24hVolume.length === 11
                    ? `${realData.data?.total24hVolume.substring(0, 2)} BN`
                    : realData.data?.total24hVolume.length === 10
                    ? `${realData.data?.total24hVolume.substring(
                        0,
                        1
                      )}.${realData.data?.total24hVolume.substring(1, 2)} BN`
                    : realData.data?.total24hVolume}{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <h2> Total Market Cap </h2>
                </td>
                <td>
                  <h2> Total Market </h2>
                </td>
              </tr>
              <tr>
                <td>
                  {realData.data?.totalMarketCap.length === 13
                    ? `${realData.data?.totalMarketCap.substring(
                        0,
                        1
                      )}.${realData.data?.totalMarketCap.substring(1, 2)} TRN `
                    : realData.data?.totalMarketCap}
                </td>{" "}
                <td>
                  {" "}
                  {realData.data?.totalMarkets.toString().length === 5
                    ? `${realData.data?.totalMarkets
                        .toString()
                        .substring(0, 2)}.${realData.data?.totalMarkets
                        .toString()
                        .substring(2, 3)} K`
                    : realData.data?.totalMarkets}{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={css.cryptoTable}>
          <h1>Top 10 Cryptos In The World</h1>

          <div className={css.displaySheet}>
            <table>
              <thead>
                <tr>
                  <td>#</td> <td>Name</td> <td>Market Cap</td> <td>Change</td>
                  <td>Volume</td> <td>Price</td>
                </tr>
              </thead>

              <tbody>
                {combinearray &&
                  combinearray.map(([index, graph]) => (
                    <tr key={index?.rank}>
                      <td> {index?.rank} </td>
                      <td>
                        <img src={index?.iconUrl} alt="logo"></img>{" "}
                        {index?.name} ( {index?.symbol} )
                      </td>
                      <td>
                        {index?.marketCap.length === 11
                          ? `${index?.marketCap.substring(
                              0,
                              2
                            )}.${index?.marketCap.substring(2, 3)} BN `
                          : index?.marketCap.length === 12
                          ? `${index?.marketCap.substring(
                              0,
                              3
                            )}.${index?.marketCap.substring(3, 4)} BN `
                          : index?.marketCap}
                      </td>

                      <td>
                        {" "}
                        {index?.change.substring(0, 1) === "-" ? (
                          <span style={{ color: "red" }}>
                            {" "}
                            {index?.change}%
                            <div className={css.arrowDown}>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </span>
                        ) : (
                          <span style={{ color: "green" }}>
                            {" "}
                            {index?.change}%{" "}
                            <div className={css.arrow}>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </span>
                        )}
                      </td>
                      <td>
                        {index && index["24hVolume"].length === 9
                          ? `${index && index["24hVolume"].substring(0, 3)}.${
                              index && index["24hVolume"].substring(3, 4)
                            } M`
                          : index && index["24hVolume"].length === 10
                          ? `${index && index["24hVolume"].substring(0, 1)}.${
                              index && index["24hVolume"].substring(1, 2)
                            } BN`
                          : index && index["24hVolume"].length === 11
                          ? `${index && index["24hVolume"].substring(0, 2)}.${
                              index && index["24hVolume"].substring(2, 3)
                            } BN`
                          : index && index["24hVolume"]}{" "}
                      </td>
                      <td>
                        <div>
                          {/* {setFake(index.sparkline)}
                      {setNewData(fake.map((string) => parseInt(string, 10)))} */}

                          {parseFloat(index?.price).toFixed(2)}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={`${css.navArea} ${css.section} ${css.fixed}`}>
        <div className={css.general}>
          <div className={css.lineMove}>
            <img src={crypto} />

            <div className={css.lineMoveDiv}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={css.items}>
            <ul>
              <Link to="/" className={css.LinkStyle}>
                <li> Cryptocurrency </li>{" "}
              </Link>
              <Link to="/news" className={css.LinkStyle}>
                {" "}
                <li>
                  <img src={news} /> News
                </li>
              </Link>
              <Link to="/coins" className={css.LinkStyle}>
                {" "}
                <li>
                  <img src={trading} /> Trading
                </li>
              </Link>
              <Link to="/stats" className={css.LinkStyle}>
                <li>
                  <img src={statistics} /> Statistics
                </li>
              </Link>
            </ul>
          </div>
          <div className={css.services}>
            <ul>
              <li>
                <img src={service} /> Services
              </li>
              <li>
                <img src={card} /> Cards
              </li>

              <li>
                <img src={card} /> Investment &nbsp; <span>Disable</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.aboutProfile}>
          <h5>PROFILE</h5>
          <ul>
            <li>
              <img src={historyicon} /> History
            </li>
            <li>
              <img src={message} /> Messages
            </li>
            <li>
              <img src={settings} /> Settings
            </li>
          </ul>
        </div>
        <div className={css.helpAndSupport}>
          <h5> HELP & SUPPORT </h5>

          <h3>
            Need Help? <span>Contact us</span>
          </h3>

          <ul>
            <li>
              <img src={tiktok} />
            </li>
            <li>
              <img src={snapchat} />
            </li>
            <li>
              <img src={facebook} />
            </li>
            <li>
              <img src={twitter} />
            </li>
          </ul>
        </div>

        <div className={css.overview}></div>
        <div className={css.buysell}></div>
        <div className={css.history}></div>
        <div className={css.profile}></div>
      </div>
    </div>
  );
};

export default Statistics;
