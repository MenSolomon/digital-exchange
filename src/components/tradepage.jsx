import React, { useState, useEffect } from "react";
import css from "../styles/tradepage.module.css";
import axios from "axios";
import _, { lowerFirst } from "lodash";
import notify from "../images/notification.png";
import visible from "../images/visible.png";
import invisible from "../images/invisible.png";
import nft from "../images/nft.png";
import assets from "../images/assets.png";
import profile from "../images/profile.png";
import trade from "../images/trade.png";
import history from "../images/history.png";
import overview from "../images/overview.png";

const Tradepage = () => {
  const [coinInfo, setCoinInfo] = useState([]);

  const [coinInfoPrev, setCoinInfoPrev] = useState([]);

  const combinearray = _.zip(coinInfo, coinInfoPrev);

  console.log("info", combinearray);

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
          console.log(response.data.data.coins);
          setCoinInfo(response.data.data.coins);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    //short polling for every minute

    fetchdata();

    const intervalId = setInterval(fetchdata, 60000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.container}>
      <div className={css.overviewHead}>
        <div className={css.welcomeArea}>
          <div className={css.welcomeMessage}>
            <ul>
              <li>
                <div className={css.profileImage}>
                  {" "}
                  <h1>A</h1>{" "}
                </div>
              </li>
              <li>
                <h2>Hello!Alien</h2>
              </li>
            </ul>
          </div>
          <div className={css.notification}>
            {/* <div
              className={css.notifyImage}
              style={{ backgroundImage: `url(${notify})` }}
            ></div> */}
            <img className={css.notifyImage} src={notify} />
          </div>
        </div>
        <div className={css.portfolioArea}>
          <div className={css.portfolioAmount}>
            <span> Portfolio Balance </span>
            <h1> $10,120.2 </h1>
          </div>
          <div className={css.portfolioHide}>
            <img className={css.notifyImage} src={invisible} />
          </div>
        </div>
        <div className={css.functionalArea}>
          <div className={css.sendMoney}>
            <div> Send </div>
          </div>
          <div className={css.receiveMoney}>
            <div> Receive </div>
          </div>
          <div className={css.virtualCards}>
            <div> Cards </div>
          </div>
        </div>
        <div className={css.tabArea}>
          <div className={css.assets}>
            <img src={assets} /> <label> Assets</label>
          </div>
          <div className={css.nfts}>
            <div>
              <img src={nft} /> <label>NFTs</label>
            </div>
          </div>
        </div>
      </div>
      <div className={css.cryptoArea}>
        <table>
          <thead></thead>
          <tbody>
            {combinearray.slice(0, 14).map(([data, data2]) => (
              <tr key={data?.rank}>
                <td>
                  <img src={data?.iconUrl} />
                </td>
                <td>
                  <h3> {data?.name} </h3>
                  <div>
                    <span>${parseFloat(data?.price).toFixed(2)} &nbsp; </span>
                    <span
                      style={{
                        color: `${
                          parseFloat(data?.change) - parseFloat(data2?.change) <
                          0
                            ? "red "
                            : "green"
                        }`,
                      }}
                    >
                      {parseFloat(data?.change) - parseFloat(data2?.change) < 0
                        ? (data?.change).substring(0, 1) == "-"
                          ? "" + data?.change
                          : "-" + data?.change
                        : "+" + data?.change}
                      %
                    </span>
                  </div>
                </td>
                <td>
                  <h4> 0.0000 {data?.symbol} </h4>
                  <div>$0.00</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={css.navArea}>
        <div className={css.overview}>
          <img src={overview} /> <label>Overview</label>
        </div>
        <div className={css.buysell}>
          <img src={trade} /> <label>Trade</label>
        </div>
        <div className={css.history}>
          <img src={history} /> <label>History</label>
        </div>
        <div className={css.profile}>
          <img src={profile} /> <label>Profile</label>
        </div>
      </div>
    </div>
  );
};

export default Tradepage;
