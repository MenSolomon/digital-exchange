import React, { useEffect, useRef, useState } from "react";
import css from "../styles/news.module.css";
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
import _ from "lodash";
import { Link } from "react-router-dom";

const News = () => {
  const [coindesk, setCoindesk] = useState([]);

  const options = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCoindesk(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [coinTelegraph, setCoinTelegraph] = useState([]);

  const options1 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph",
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options1)
      .then(function (response) {
        console.log(response.data);
        setCoinTelegraph(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [bitCoinist, setBitCoinist] = useState([]);

  const options2 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/bitcoinist",
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data);
        setBitCoinist(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [decrypt, setDecrypt] = useState([]);

  const options3 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt",
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options3)
      .then(function (response) {
        console.log(response.data);
        setDecrypt(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const [bscNews, setBscNews] = useState([]);

  const options4 = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/bsc",
    headers: {
      "X-RapidAPI-Key": "c4567f7f2amsh6502f1468677466p10bff5jsn035f8a4d6094",
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options4)
      .then(function (response) {
        console.log(response.data);
        setBscNews(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // const [theGuardian, setTheGuardian] = useState([]);

  // const options5 = {
  //   method: "GET",
  //   url: "https://cryptocurrency-news2.p.rapidapi.com/v1/theguardian",
  //   headers: {
  //     "X-RapidAPI-Key": "aaf2863073msh4e5d6e95bdeace4p10eeccjsn9414f80e815d",
  //     "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   axios
  //     .request(options5)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setTheGuardian(response.data.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  //   console.log(coindesk);
  //   console.log(coinTelegraph);
  //   console.log(bitCoinist);
  //   console.log(decrypt);
  //   console.log(bscNews);
  //   console.log(theGuardian);

  const combinearray = _.zip(
    coindesk,
    coinTelegraph,
    bitCoinist,
    decrypt,
    bscNews
  );

  console.log(combinearray);

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
        <h2>
          Find out what's going on in the crypto market with latest crypto news{" "}
          <br />
          from your favorite and trusted news sources..............
        </h2>

        <div className={css.masterNewsArea}>
          <span style={{ fontSize: "2em", marginBottom: "5vh" }}>
            {" "}
            Coindesk
          </span>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {coindesk &&
              coindesk.map((item) => (
                <div className={css.newContentSlide}>
                  <div className={css.newsTitle}> {item?.title} </div>
                  <div
                    className={css.newsImage}
                    style={{
                      backgroundImage: `url(${item?.thumbnail})`,
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div style={{ marginTop: "1.5vh" }}>
                    {" "}
                    {item?.description}{" "}
                  </div>
                  <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                    {item?.createdAt}
                  </div>
                </div>
              ))}
          </div>

          <span style={{ fontSize: "2em", marginBottom: "5vh" }}>
            Coin Telegraph
          </span>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {coinTelegraph &&
              coinTelegraph.map((item) => (
                <div className={css.newContentSlide}>
                  <div className={css.newsTitle}> {item?.title} </div>
                  <div
                    className={css.newsImage}
                    style={{
                      backgroundImage: `url(${item?.thumbnail})`,
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div style={{ marginTop: "1.5vh" }}>
                    {" "}
                    {item?.description}{" "}
                  </div>
                  <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                    {item?.createdAt}
                  </div>
                </div>
              ))}
          </div>

          <span style={{ fontSize: "2em", marginBottom: "5vh" }}>
            BitCoinist
          </span>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {bitCoinist &&
              bitCoinist.map((item) => (
                <div className={css.newContentSlide}>
                  <div className={css.newsTitle}> {item?.title} </div>
                  <div
                    className={css.newsImage}
                    style={{
                      backgroundImage: `url(${item?.thumbnail})`,
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div style={{ marginTop: "1.5vh" }}>
                    {" "}
                    {item?.description}{" "}
                  </div>
                  <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                    {item?.createdAt}
                  </div>
                </div>
              ))}
          </div>

          <span style={{ fontSize: "2em", marginBottom: "5vh" }}>Decrypt</span>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {decrypt &&
              decrypt.map((item) => (
                <div className={css.newContentSlide}>
                  <div className={css.newsTitle}> {item?.title} </div>
                  <div
                    className={css.newsImage}
                    style={{
                      backgroundImage: `url(${item?.thumbnail})`,
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div style={{ marginTop: "1.5vh" }}>
                    {" "}
                    {item?.description}{" "}
                  </div>
                  <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                    {item?.createdAt}
                  </div>
                </div>
              ))}
          </div>

          <span style={{ fontSize: "2em", marginBottom: "5vh" }}>BSC News</span>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {bscNews &&
              bscNews.map((item) => (
                <div className={css.newContentSlide}>
                  <div className={css.newsTitle}> {item?.title} </div>
                  <div
                    className={css.newsImage}
                    style={{
                      backgroundImage: `url(${item?.thumbnail})`,
                      backgroundSize: "cover",
                    }}
                  ></div>

                  <div style={{ marginTop: "1.5vh" }}>
                    {" "}
                    {item?.description}{" "}
                  </div>
                  <div style={{ fontWeight: "bold", marginTop: "1.5vh" }}>
                    {item?.createdAt}
                  </div>
                </div>
              ))}
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

export default News;
