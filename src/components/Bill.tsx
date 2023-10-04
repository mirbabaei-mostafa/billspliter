import React, { useRef, useState } from "react";
import UilShoppingCart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilUsersAlt from "@iconscout/react-unicons/icons/uil-users-alt";
import UilTransaction from "@iconscout/react-unicons/icons/uil-transaction";

const Bill = ({ freinds, uid, setFreinds, setBill }) => {
  const [anteil, setAnteil] = useState(0);
  const billRef = useRef(0);
  const myRef = useRef(0);
  const hisRef = useRef(0);
  const whoRef = useRef();

  const calcAnteil = () => {
    setAnteil(parseInt(billRef.current.value) - parseInt(myRef.current.value));
  };

  const editFreinds = () => {
    const userInfo = findUser();
    let payVal = 0;
    let ownVal = 0;
    if (parseInt(whoRef.current.value) === 1) {
      payVal = parseInt(userInfo[0].pay);
      ownVal = parseInt(userInfo[0].own) + parseInt(hisRef.current.value);
    } else {
      payVal = parseInt(userInfo[0].pay) + parseInt(myRef.current.value);
      ownVal = parseInt(userInfo[0].own);
    }
    setFreinds(
      freinds.map((f) => {
        if (parseInt(f.id) === parseInt(uid)) {
          console.log({
            id: userInfo[0].id,
            name: userInfo[0].name,
            status: userInfo[0].status,
            image: userInfo[0].image,
            pay: payVal,
            own: ownVal,
          });
          return { ...f, pay: payVal, own: ownVal };
        } else {
          return f;
        }
      })
    );
    setBill(false);
  };

  const findUser = () => {
    return freinds.filter((freind) => freind.id === uid);
  };

  const findUserName = () => {
    const userInfo = findUser();
    return userInfo[0].name;
  };

  const currentUser = findUserName();

  return (
    <div className="add-panel">
      <div className="bill-row">
        <div className="bill-title">
          Die Rechnung zu verteilen mit {currentUser}
        </div>
      </div>
      <div className="bill-row">
        <div className="bill-icon">
          <UilShoppingCart size="24" color="#37420d" />
        </div>
        <div className="bill-name">Rechnung:</div>
        <div className="bill-input">
          <input ref={billRef} type="number" className="bill-input-form" />
        </div>
      </div>
      <div className="bill-row">
        <div className="bill-icon">
          <UilUser size="24" color="#37420d" />
        </div>
        <div className="bill-name">Meinen Anteil:</div>
        <div className="bill-input">
          <input
            ref={myRef}
            type="number"
            className="bill-input-form"
            onChange={calcAnteil}
          />
        </div>
      </div>
      <div className="bill-row">
        <div className="bill-icon">
          <UilUsersAlt size="24" color="#37420d" />
        </div>
        <div className="bill-name">Seinen Anteil:</div>
        <div className="bill-input">
          <input
            ref={hisRef}
            value={anteil}
            type="number"
            className="bill-input-form"
            disabled
          />
        </div>
      </div>
      <div className="bill-row">
        <div className="bill-icon">
          <UilTransaction size="24" color="#37420d" />
        </div>
        <div className="bill-name">Wen hat bezahlt:</div>
        <div className="bill-input">
          <select ref={whoRef}>
            <option value="1">Ich</option>
            <option value="2">{currentUser}</option>
          </select>
        </div>
      </div>
      <div className="bill-row">
        <div className="bill-title">
          <button className="list-submit" onClick={editFreinds}>
            Verteil die Rechnung
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
