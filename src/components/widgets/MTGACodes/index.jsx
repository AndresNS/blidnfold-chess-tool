import React, { useState, useEffect } from "react";
import "./styles.css";

import Button from "../../modules/Button";

// Libraries
import axios from "axios";

const config = {
  CODES_URL:
    "https://raw.githubusercontent.com/LaustinSpayce/arena-codes/master/src/data/codes.csv",
};

const MTGACodes = () => {
  const [codes, setCodes] = useState(null);
  const [availableCodes, setAvailableCodes] = useState([]);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const { data } = await axios.get(config.CODES_URL);
        const cleanedCodes = filterCodesData(data);

        setCodes(cleanedCodes);
        setAvailableCodes(getAvailableCodes(cleanedCodes));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCodes();
  }, []);

  const getAvailableCodes = (codes) => {
    const redeemedCodes = getReedemedCodes();

    const availableCodes = codes.filter(
      (code) => !redeemedCodes.map((code) => code.text).includes(code.text)
    );

    return availableCodes;
  };

  const filterCodesData = (data) => {
    const lines = data.split("\n");
    lines.shift();

    return lines
      .map((line) => {
        const regexResult = line.match(/"(.*?)"/g);

        let cleanedLine = line;

        if (regexResult) {
          const regexResultNoCommas = regexResult[0].replaceAll(",", "");
          cleanedLine = line.replace(regexResult[0], regexResultNoCommas);
        }

        const text = cleanedLine.split(",")[0].trim();
        const expire = cleanedLine.split(",")[2]?.trim();
        const added = cleanedLine.split(",")[3]?.trim();

        return { text, expire, added };
      })
      .filter((line) => line.text !== "");
  };

  const getReedemedCodes = () =>
    window.localStorage.getItem("codes")
      ? JSON.parse(window.localStorage.getItem("codes"))
      : [];

  const handleRedeemCode = (code) => {
    const redeemedCodes = getReedemedCodes();
    const updatedRedeemedCodes = [...redeemedCodes, code];

    window.localStorage.setItem("codes", JSON.stringify(updatedRedeemedCodes));

    setAvailableCodes(getAvailableCodes(codes));
  };

  return (
    <>
      {availableCodes.length > 0 && (
        <div className="codes-container">
          <div className="codes-table">
            <div className="codes-table__cell codes-table__cell--header">
              Code
            </div>
            <div className="codes-table__cell codes-table__cell--header">
              Expires
            </div>
            <div className="codes-table__cell codes-table__cell--header">
              Redeem
            </div>
            {availableCodes.map((code, index) => (
              <React.Fragment key={index}>
                <div className="codes-table__cell">
                  <code>{code.text}</code>
                </div>
                <div className="codes-table__cell">{code.expire || "TBD"}</div>
                <Button
                  text="Mark as redeemed"
                  className="codes-table__cell"
                  size="small"
                  onClick={() => handleRedeemCode(code)}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MTGACodes;
