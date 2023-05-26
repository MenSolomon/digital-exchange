import React, { useState, useEffect } from "react";
import css from "../styles/home.module.css";
import notify from "../images/notify.png";
import night from "../images/night.png";
import day from "../images/day.png";
import exit from "../images/exit.png";
import user from "../images/user.png";
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
import _, { lowerFirst } from "lodash";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);
import logo from "../images/logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [coinInfo, setCoinInfo] = useState([]);

  const [coinInfoPrev, setCoinInfoPrev] = useState([]);

  const combinearray = _.zip(coinInfo, coinInfoPrev);

  // console.log("info", combinearray);

  useEffect(() => {
    const options = {
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
        "X-RapidAPI-Key": "ab05e36d7cmsh2e30315d4df830fp15fa40jsn35c4f9206e1a",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    const fetchdata = () => {
      setCoinInfoPrev(coinInfo);
      coinInfoPrev.push(coinInfo);

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data.data.coins);
          setCoinInfo(response.data.data.coins);
        })
        .catch(function (error) {
          // console.error(error);
        });
    };

    //short polling for every minute

    fetchdata();

    const intervalId = setInterval(fetchdata, 60000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [coinInfo]);

  const [coinSelect, setCoinSelect] = useState([]);

  const [index, setIndex] = useState(0);

  const setMyIndex = () => {
    setCoinSelect([coinInfo[index]?.name, coinInfo[index]?.symbol]);
  };

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

  let newCoinArray = [];
  let intArray = [];

  coinInfo &&
    coinInfo.map((data) => {
      newCoinArray.push(data.sparkline);
    });
  for (let i = 0; i < 50; i++) {
    intArray.push(newCoinArray[i]?.map((string) => parseFloat(string)));
  }

  let colors = "#13414B";

  // console.log(intArray);

  // const [coindesk, setCoindesk] = useState([]);

  // const options3 = {
  //   method: "GET",
  //   url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
  //   headers: {
  //     "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
  //     "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .request(options3)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setCoindesk(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  // const [newsIndex, setNewsIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     newsIndex > 50 ? setNewsIndex(0) : "";
  //     setNewsIndex((newsIndex) => newsIndex + 1);
  //   }, 15000); // 5000 milliseconds = 5 seconds

  //   return () => clearInterval(interval); // cleanup function to clear the interval when the component unmounts
  // }, []);

  const [coinNews, setCoinNews] = useState([]);

  const options4 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt",
    headers: {
      "X-RapidAPI-Key": "ab05e36d7cmsh2e30315d4df830fp15fa40jsn35c4f9206e1a",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options4)
      .then(function (response) {
        console.log("The coin news ");
        // console.log(response.data);
        setCoinNews(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    //eslint
  }, []);

  console.log(coinNews);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // const [coinNews, setCoinNews] = useState([]);

  // const options4 = {
  //   method: "GET",
  //   url: "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt",
  //   headers: {
  //     "X-RapidAPI-Key": "ab05e36d7cmsh2e30315d4df830fp15fa40jsn35c4f9206e1a",
  //     "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .request(options4)
  //     .then(function (response) {
  //       console.log("The coin news ");
  //       console.log(response.data);
  //       setCoinNews(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  // console.log(coinNews);

  let coin = document.getElementById("coin");
  let dollar = document.getElementById("dollar");

  // dollar.addEventListener("input", function (e) {
  //    let value =e.target.value
  //   } )

  const [inputValue, setInputValue] = useState("");

  const handleConversion = (e) => {
    dollar.value =
      e.target.value * parseFloat(coinInfo[index]?.price).toFixed(2);
  };

  const handleConversion2 = (ev) => {
    coin.value =
      ev.target.value / parseFloat(coinInfo[index]?.price).toFixed(2);
  };

  const handleThemeDay = () => {
    document.documentElement.style.setProperty("--primaryColor", "white");
  };

  return (
    <div className={css.container}>
      <div className={`${css.header} ${css.section}`}>
        <div className={css.logo}>
          <img src={logo} />
        </div>
        <div className={css.utilities}>
          <ul>
            <li>
              <img src={day} onClick={handleThemeDay} />
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
        <div className={css.exchange}>
          <h4> EXCHANGE </h4>

          <div className={css.conversion}>
            <div className={css.conCurrency}>
              ${" "}
              <input
                type="number"
                max={10000}
                maxLength={5}
                id="dollar"
                // value={inputValue}
                // defaultValue={inputValue}
                onChange={handleConversion2}
                style={{ fontSize: ".9em" }}
              />
            </div>
            <div className={css.conImage}>
              <img src={exchange} />
            </div>
            <div className={css.conCoin}>
              <input
                type="number"
                max={10000}
                maxLength={5}
                id="coin"
                onChange={handleConversion}
                style={{ fontSize: ".9em" }}
              />
              {coinInfo[index]?.symbol}
            </div>
          </div>
          <div className={css.minAndMax}>
            <div className={css.minVal}>
              min:<span>$50</span>
            </div>
            <div className={css.maxVal}>
              max:<span>$10,000</span>
            </div>
          </div>
        </div>
        <div className={css.chart}>
          <div className={css.chartDetails}>
            <ul>
              <li>
                <div
                  style={{
                    backgroundImage: `url(${coinInfo[index]?.iconUrl})`,
                    backgroundSize: "contain",
                  }}
                ></div>
              </li>
              <li>
                <h4> {coinInfo[index]?.name} </h4>
              </li>
              <li>
                <h5> {coinInfo[index]?.symbol} </h5>
              </li>
              <li>
                <h6>{coinInfo[index]?.change}%</h6>
              </li>
            </ul>
          </div>
          <div className={css.chartDiagram}>
            <Line
              style={{
                position: "relative",
                right: "1vw",
                height: "8vh",
                width: "4vw",
              }}
              options={chartOptions}
              // {...(intArray[index][intArray.length] <= intArray[index][0]
              //   ? (colors = "red")
              //   : (colors = "green"))}

              data={{
                labels: intArray[index]?.map(() => ""),
                datasets: [
                  {
                    label: "My First Dataset",
                    // data: newData,
                    data: intArray[index],
                    fill: false,
                    borderColor: colors,
                    tension: 0.4,
                    pointBorderColor: "red",
                    pointStyle: false,
                    pointRadius: "0.3",
                    drawBorder: false,
                    borderWidth: 1.4,
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className={css.news}>
          <div className={css.newsHead}>
            <Carousel
              responsive={responsive}
              className={css.carousel}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDuration={300}
              keyBoardControl={true}
              arrows={true}
            >
              {coinNews.map((data) => (
                <div className={`${css.caroulBody} `}>
                  <div className={`${css.caroulImage} `}>
                    {/* {" "}
                    <select>
                      <option>Coindesk</option>
                      <option>Coindesk</option>
                      <option>Coindesk</option>
                    </select>{" "} */}
                    <div
                      className={css.caroulDivImage}
                      style={{
                        backgroundImage: `url(${data?.thumbnail})`,
                        backgroundSize: "100% 100%",
                      }}
                    ></div>
                  </div>
                  <div className={`${css.caroulContent} `}>
                    <div className={`${css.caroulHeadline} `}>
                      {" "}
                      {data.title}{" "}
                    </div>
                    <div className={`${css.caroulSource} `}>
                      {" "}
                      {data?.createdAt}{" "}
                    </div>
                    <div className={`${css.caroulTime} `}></div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className={`${css.cryptoArea} ${css.section}`}>
        <table>
          <thead>
            <td> Name </td> <td> Price </td> <td> %change </td>
            <td> Market Cap </td> <td> Volume(24hr) </td>
          </thead>

          <tbody>
            {combinearray.slice(0, 7).map(([data, data2]) => (
              <tr key={data?.rank}>
                <td>
                  <div
                    onClick={() => {
                      setIndex(data?.rank - 1);
                    }}
                  >
                    {" "}
                    <img src={data?.iconUrl} />
                    <h4>
                      {" "}
                      {data?.name}
                      <span> &nbsp; {data?.symbol}</span>{" "}
                    </h4>
                  </div>
                </td>{" "}
                <td> ${parseFloat(data?.price).toFixed(2)} </td>{" "}
                <td
                  style={{
                    color: `${
                      (data?.change).substring(0, 1) == "-" ? "red" : "green"
                    }`,
                  }}
                >
                  {data?.change}%
                </td>
                <td>
                  {" "}
                  {data?.marketCap.length === 11
                    ? `${data?.marketCap.substring(
                        0,
                        2
                      )}.${data?.marketCap.substring(2, 3)} BN `
                    : data?.marketCap.length === 12
                    ? `${data?.marketCap.substring(
                        0,
                        3
                      )}.${data?.marketCap.substring(3, 4)} BN `
                    : data?.marketCap}{" "}
                </td>{" "}
                <td>
                  {" "}
                  {data && data["24hVolume"].length === 9
                    ? `${data && data["24hVolume"].substring(0, 3)}.${
                        data && data["24hVolume"].substring(3, 4)
                      } M`
                    : data && data["24hVolume"].length === 10
                    ? `${data && data["24hVolume"].substring(0, 1)}.${
                        data && data["24hVolume"].substring(1, 2)
                      } BN`
                    : data && data["24hVolume"].length === 11
                    ? `${data && data["24hVolume"].substring(0, 2)}.${
                        data && data["24hVolume"].substring(2, 3)
                      } BN`
                    : data && data["24hVolume"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${css.navArea} ${css.section}`}>
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
                {" "}
                <img src={service} /> Services
              </li>
              <li>
                {" "}
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
              {" "}
              <img src={historyicon} /> History{" "}
            </li>
            <li>
              {" "}
              <img src={message} /> Messages{" "}
            </li>
            <li>
              {" "}
              <img src={settings} /> Settings{" "}
            </li>
          </ul>
        </div>
        <div className={css.helpAndSupport}>
          <h5> HELP & SUPPORT </h5>

          <h3>
            Need Help? <span>Contact us</span>{" "}
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

export default Home;

// {parseFloat(data?.change) - parseFloat(data2?.change) < 0
//   ? (data?.change).substring(0, 1) == "-"
//     ? "" + data?.change
//     : "-" + data?.change
//   : "+" + data?.change}
