import React, { useEffect, useState } from 'react'
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { BannerDetails } from './Components/Banner/BannerDetails';

function App() {
  const bannerData = [
    {text1: "Manage Your Project", text2: "Azea - Now you can use this admin template to design stunning dashboards that will wow your target viewers or users to no end."},
    {text1: "Azea", text2: "Now you can use this admin template to design"},
    {text1: "Manage Project", text2: "Now you can use this admin template to design stunning dashboards"}
  ]

  const [bannerList, setBannerCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=> {
    setInterval(()=> {
      setBannerCount((count)=> {return count===2?0:count+1})
    },3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} bannerList={bannerList}/>
      <Navbar/>
      <BannerDetails
        setPlayStatus={setPlayStatus}
        bannerData={bannerData[bannerList]}
        bannerList={bannerList}
        setBannerCount={setBannerCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App