import React, { useEffect, useRef, useState } from "react";
import css from "../styles/currency.module.css";
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
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const Currency = () => {
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
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: true,
        title: { display: false, text: "Who Let them out" },
      },
      maintainAspectRatio: false,
    });
  }, []);

  let newCoinArray = [];
  let graph = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    graph.push(newCoinArray[i]?.map((string) => parseFloat(string)));
  }

  // javascript for all the coins and their graph display
  let newCoinArray2 = [];
  let intArray = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray2.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    intArray.push(newCoinArray2[i]?.map((string) => parseFloat(string)));
  }

  const combinearray = _.zip(coinInfo, intArray);

  console.log(combinearray);

  const [chartOptions2, setChartOptions2] = useState({});

  useEffect(() => {
    setChartOptions2({
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

  let bullColor = "green";
  let bearColor = "red";
  const [ncolor, setNcolor] = useState("");
  const [visibility, setVisibility] = useState("none");
  const [inputValue, setInputValue] = useState("");

  const displaySearch = (e) => {
    setVisibility("block");

    if (e.target.value == "") {
      setVisibility("none");
    }

    setInputValue(e.target.value);
  };

  const inputRef = useRef(null);

  console.log(coinInfo);

  // console.log(
  //   coinInfo.filter((item) => item.name.toLowerCase().includes(inputValue))
  // );

  const searchClear = () => {
    setVisibility("none");
  };

  const searchShow = () => {
    var put = document.getElementById("input");

    if (put.value != "") {
      setVisibility("block");
    }
  };

  const [index, setIndex] = useState(0);

  let setMyIndex = () => {};

  var target = document.getElementsByClassName(`${css.container}`);

  // This is the data for the news of each coin

  const [coinNews, setCoinNews] = useState([]);

  const options4 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt",
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options4)
      .then(function (response) {
        console.log("The coin news ");
        console.log(response.data);
        setCoinNews(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div
      className={css.container}
      onClick={() => {
        setVisibility("none");
      }}
    >
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
        <div className={css.searchHead}>
          <input
            onChange={displaySearch}
            type="text"
            placeholder="Search"
            ref={inputRef}
            onClick={searchShow}
            id="input"
          />
          <div
            className={css.popupList}
            style={{
              display: visibility,
            }}
          >
            {coinInfo
              .filter((item) => item.name.toLowerCase().includes(inputValue))
              .map((item) => (
                <ul className={css.searchBoxList}>
                  <li onClick={(setMyIndex = () => setIndex(item.rank - 1))}>
                    <img src={item?.iconUrl} alt="logo"></img>
                    {item?.name}
                  </li>
                </ul>
              ))}
          </div>
          <h1>{`${coinInfo[index]?.name} - ${coinInfo[index]?.symbol} Price `}</h1>{" "}
          <br />
          <h4>
            {coinInfo[index]?.name} live price in US Dollar USD. View value
            statistics, market cap and supply
          </h4>
        </div>

        <div className={css.chartInfo}>
          <div className={css.summaryInfo}>
            {" "}
            <ul className={css.chartList}>
              <li> {`${coinInfo[index]?.name} Price Chart `} </li>
              <li> Change : {coinInfo[index]?.change} % </li>
              <li>
                {" "}
                {`Current ${coinInfo[index]?.name} Price : `}$
                {parseFloat(coinInfo[index]?.price).toFixed(2)}
              </li>
            </ul>
          </div>
          <div className={css.liveChart}>
            <div style={{ height: "60vh", width: "70vw" }}>
              <Line
                className={css.LineGraph}
                options={chartOptions}
                {...(graph && graph[graph?.length] <= graph[0]
                  ? (colors = "red")
                  : (colors = "green"))}
                data={{
                  labels: graph?.map(() => ""),
                  datasets: [
                    {
                      label: "Price in USD",
                      // data: newData,
                      data: graph[index],
                      fill: false,
                      borderColor: "blue",
                      tension: 0,
                      pointBorderColor: "red",
                      pointStyle: true,
                      pointRadius: "1",
                      drawBorder: false,
                      borderWidth: 1.4,
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className={css.chartStats}>
            <ul className={css.extraInfo}>
              <li>
                <span className={css.extraInfo_Header}>
                  {coinInfo[index]?.name} Value Statistics
                </span>
                <span className={css.extraInfo_head_content}>
                  <br /> An overview showing the statistics of $
                  {coinInfo[index]?.name}, sucha as the base and quote currency,
                  the rank and trading volume.
                </span>
                <table className={css.tableShow}>
                  <tbody>
                    <tr>
                      <td>
                        Price to USD <span> $ {coinInfo?.price} </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Rank <span> {coinInfo[index]?.rank} </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        24h Volume
                        <span>
                          {/* {numbEdits(coinInfo, index, "24hVolume")}
                    {value} */}

                          {coinInfo[index] &&
                          coinInfo[index]["24hVolume"].length === 9
                            ? `${
                                coinInfo[index] &&
                                coinInfo[index]["24hVolume"].substring(0, 3)
                              }.${
                                coinInfo[index] &&
                                coinInfo[index]["24hVolume"].substring(3, 4)
                              } M`
                            : coinInfo[index] &&
                              coinInfo[index]["24hVolume"].length === 10
                            ? `${
                                coinInfo[index] &&
                                coinInfo[index]["24hVolume"].substring(0, 1)
                              }.${
                                coinInfo[index] &&
                                coinInfo[index]["24hVolume"].substring(1, 2)
                              } BN`
                            : coinInfo[index] &&
                              coinInfo[index]["24hVolume"].length === 11
                            ? `${
                                coinInfo[index] &&
                                coinInfo[index]["24hVolume"].substring(0, 2)
                              }.${
                                coinInfo[index] &&
                                coinInfo[index]["24hVolume"].substring(2, 3)
                              } BN`
                            : coinInfo[index] && coinInfo[index]["24hVolume"]}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Market Cap{" "}
                        <span>
                          {coinInfo[index]?.marketCap.length === 11
                            ? `${coinInfo[index]?.marketCap.substring(
                                0,
                                2
                              )}.${coinInfo[index]?.marketCap.substring(
                                2,
                                3
                              )} BN `
                            : coinInfo[index]?.marketCap.length === 12
                            ? `${coinInfo[index]?.marketCap.substring(
                                0,
                                3
                              )}.${coinInfo[index]?.marketCap.substring(
                                3,
                                4
                              )} BN `
                            : coinInfo[index]?.marketCap}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        All-time-high(daily avg,) <span> $ 65K </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>

              {/*   NOTE: THE API TO GIVE OUT THIS DATA DOESNT NOT WORK ANYNORE   <li>
          <span className={css.extraInfo_Header}>Other stats info</span>

          <span className={css.extraInfo_head_content}>
            <br /> An overview showing the statistics of Bitcoin, sucha as the
            base and quote currency, the rank and trading volume.
          </span>
          <table className={css.tableShow}>
            <tbody>
              <tr>
                <td>
                  Number Of Markets <span> 21574 </span>
                </td>
              </tr>
              <tr>
                <td>
                  Number of Exchanges <span> 346 </span>
                </td>
              </tr>
              <tr>
                <td>
                  Approved Supply <span> / </span>
                </td>
              </tr>
              <tr>
                <td>
                  Total Supply <span> $ 48K </span>
                </td>
              </tr>
              <tr>
                <td>
                  Circulating Supply <span> $ 65K </span>
                </td>
              </tr>
            </tbody>
          </table>
        </li> */}

              {/* <li> What is bitcoin </li>

        <li> Bitcoin Links </li> */}
            </ul>
          </div>
          <div className={css.coinNews}>
            <h1>Related News</h1>
            <div className={css.newsItems}>
              {coinNews &&
                coinNews.map((item) =>
                  item?.title.includes(coinInfo[index]?.name) === true ? (
                    <div className={css.newContentSlide}>
                      <div className={css.newsTitle}> {item?.title} </div>
                      <div
                        className={css.newsImage}
                        style={{
                          backgroundImage: `url(${item?.thumbnail})`,
                          backgroundSize: "cover",
                        }}
                      >
                        {console.log(item?.url)}
                      </div>

                      <div style={{ marginTop: "1.5vh" }}>
                        {" "}
                        {item?.description}{" "}
                      </div>
                      <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                        {" "}
                        {item?.createdAt}{" "}
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
            </div>
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

export default Currency;
