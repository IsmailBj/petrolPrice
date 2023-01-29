import './App.css';
import React, {useEffect,useState} from 'react';
import {getData} from './data/data'
import Card from "./components/card"
function App() {
  const [petrolData, setPetrolData] = useState([])
  const [dataSucces, setDataSuccess] = useState(false)
  useEffect(()=>{
    getData().then((res)=>{
      setPetrolData(res.results)
      setDataSuccess(res.success)
    })
  },[])

  return (
    <div className="App">
      {dataSucces && petrolData.map((data, undex) => (
      <Card key={undex}
      country={data.country}
      currency={data.currency}
      diesel={data.diesel}
      gasoline={data.gasoline}
      lpg={data.lpg}

      />
      ))}
    </div>
  );
}

export default App;
