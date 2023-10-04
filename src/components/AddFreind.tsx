import React, { useRef, useState } from "react";
import UilUserPlus from "@iconscout/react-unicons/icons/uil-user-plus";
import UilImage from "@iconscout/react-unicons/icons/uil-image";
import UilCommentAltDots from "@iconscout/react-unicons/icons/uil-comment-alt-dots";

const AddFreind = ({ newFreindFunc, nextId }) => {
  const [isForm, setForm] = useState(false);
  const nameRef = useRef("");
  const statusRef = useRef("");
  const imageRef = useRef("");
  return (
    <div className="add-panel">
      {!isForm && (
        <button onClick={() => setForm(true)} className="list-submit">
          Neuer Freund
        </button>
      )}
      {isForm && (
        <>
          <div className="add-row">
            <div className="add-icon">
              <UilUserPlus size="24" color="#37420d" />
            </div>
            <div className="add-name">Name:</div>
            <div className="add-input">
              <input ref={nameRef} />
            </div>
          </div>
          <div className="add-row">
            <div className="add-icon">
              <UilCommentAltDots size="24" color="#37420d" />
            </div>
            <div className="add-name">Status:</div>
            <div className="add-input">
              <input ref={statusRef} />
            </div>
          </div>
          <div className="add-row">
            <div className="add-icon">
              <UilImage size="24" color="#37420d" />
            </div>
            <div className="add-name">Bild-Adresse:</div>
            <div className="add-input">
              <input ref={imageRef} />
            </div>
          </div>
          <div className="add-submit">
            <button
              onClick={() => {
                newFreindFunc({
                  id: nextId,
                  name: nameRef.current.value,
                  status: statusRef.current.value,
                  image: imageRef.current.value,
                  pay: 0,
                  own: 0,
                });
                setForm(false);
              }}
              className="list-submit"
            >
              Hinzufügen
            </button>
            <button onClick={() => setForm(false)} className="list-submit">
              Ablehnen
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddFreind;
