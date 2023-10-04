import { useState } from "react";
import "./App.css";
import Freinds from "./components/Freinds";
import freindsList from "./data.json";
import AddFreind from "./components/AddFreind";
import Bill from "./components/Bill";

export type Freunden = {
  id: number;
  name: string;
  image: string;
  pay: number;
  own: number;
};

function App() {
  const [freinds, setFreinds] = useState<Freunden[]>(freindsList);
  const [billUid, setBill] = useState(0);

  const addNewFreind = (freind) => {
    console.log(freind);
    setFreinds([...freinds, freind]);
  };

  const createBill = (uid) => {
    setBill(uid);
  };

  return (
    <div className="container">
      <div className="panel">
        <div className="leftside">
          <Freinds freinds={freinds} createBill={createBill} />
          <AddFreind newFreindFunc={addNewFreind} nextId={freinds.length + 1} />
        </div>
        <div className="rightside">
          {billUid > 1 && (
            <Bill
              freinds={freinds}
              uid={billUid}
              setFreinds={setFreinds}
              setBill={setBill}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
