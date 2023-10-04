import React from "react";

const Freinds = ({ freinds, createBill }) => {
  return (
    <>
      {freinds.map((freind) => {
        return (
          <div className="list-panel" key={Math.random().toString()}>
            <div>
              <img src={freind.image} className="list-image" />
            </div>
            <div className="list-information">
              <div className="list-title">{freind.name}</div>
              <div className="list-status">{freind.status}</div>
              {freind.id !== 1 && (
                <div
                  className={
                    freind.pay > freind.own
                      ? "list-description-red"
                      : "list-description-green"
                  }
                >
                  {freind.pay > freind.own
                    ? "Du schuldest " +
                      freind.name +
                      " noch " +
                      (freind.pay - freind.own) +
                      "-Euro"
                    : freind.name +
                      " schuldet dir noch " +
                      (freind.own - freind.pay) +
                      "-Euro"}
                </div>
              )}
            </div>
            <div className="list-button">
              {freind.id !== 1 && (
                <button
                  onClick={() => createBill(freind.id)}
                  className="list-submit"
                >
                  Auswahl
                </button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Freinds;
