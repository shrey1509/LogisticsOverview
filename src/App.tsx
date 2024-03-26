import React,{useEffect,useState} from 'react';
import {getData} from './utility'
import { SeparatedData} from './types'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import defaultData from './defaultData.json'
function App() {
  const [overviewData,setOverviewData] = useState<SeparatedData>(defaultData)
  useEffect(()=>{
    //call to load data into state
    async function fetchData() {
      setOverviewData(await getData())
    }
    fetchData();
  },[])
  
  return (
    <main className=" overview-container">
      <LeftColumn overviewData={overviewData?.leftColumn} />
      <RightColumn overviewData={overviewData?.rightColumn} />
    </main>
  );
}

export default App;
