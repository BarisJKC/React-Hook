import React,{useState,useEffect} from 'react';

function useFriendstatus(friendID) {
    const [isOnline, setIsOnline] = useState(false);
    
    useEffect(()=>{
       const statusInterval = setInterval(()=>setIsOnline(isOnline?false:true),(Math.floor(Math.random() * (7000)) + 3000))
       return ()=>clearInterval(statusInterval)
    })
    // useEffect(()=>{
    //   setTimeout(()=>{setIsOnline(true)},(Math.floor(Math.random() * (7000)) + 3000))
    // })
    return isOnline
  }

export {useFriendstatus};
