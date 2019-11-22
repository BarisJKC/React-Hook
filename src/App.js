import React,{useState,useEffect} from 'react';
import './App.css';
import {useFriendstatus} from './useFriendstatus'


// useEffect ile state te değişiklik olunca fire olan bir fonksiyor
// hook class larda kullanılmaz. sadece fonksyionlarda kullanılır
// hookları nested loop yada conditional şeklinde yapmayın. Alttaki language toogle edilmesi uygun değil.
// useEffect yada useState birer hook ve bunların condition içinde kullanılması yada loop içinde kullanılması
// uygun değil. fonksyion komponentlet daha hızlıdır.

// redux içinde hook kullanılabilir

//custom hook ise başında use kullan

// ayrı bir komponent yapıldı
// function useFriendstatus(friendID) {
//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(()=>{
//     setTimeout(()=>{setIsOnline(true)},(Math.floor(Math.random() * (7000 + 1)) + 3000))
//   })
//   return isOnline
// }


function FriendStatus(props) {
  // const [isOnline, setIsOnline] = useState(null);
  // useEffect(()=>{
  //   setTimeout(()=>{setIsOnline(true)},3000)
  // })

  const isOnline=useFriendstatus();

  if(isOnline===null) {
    return "Loading..."
  } 
  return isOnline ? "Online" : "Offline" 
}

function FriendListItem(props) {
  // const [isOnline, setIsOnline] = useState(null);
  // useEffect(()=>{
  //   setTimeout(()=>{setIsOnline(true)},3000)
  // })

  const isOnline=useFriendstatus();

  return (
    // <p style={{color:isOnline?"green":"red"}}>{props.friend.name}</p>
    <p>{props.friend.name} <i style={{color:isOnline?"green":"blue"}} className="user icon"></i></p>
    
    // <span style={{color:isOnline?"green":"red"}}>O </span>
    )

}

function App() {
  let [language,setLanguage] = useState('tr')
  let [count,setCount] = useState(0)


  useEffect(()=>{
    console.log('use Effect: ',language)
    const timer=setInterval(()=>setCount(count+1),1000)
    return(()=>clearInterval(timer)) // clearInterval yapmazsan her seferinde yeni bir interval yapar ve aritmetik olarak artarak gider  
  },[language]) // sadece lang değiştiğinde useEfect çalışıyor.

  return (
    <div className="App">
      <ul style={{listStyleType:"none"}}>
        <li><FriendListItem friend={{name:"Joey"}} /></li>
        <li><FriendListItem friend={{name:"Pheobe"}} /></li>
        <li><FriendListItem friend={{name:"Chandler"}} /></li>
        <li><FriendListItem friend={{name:"Ross"}} /></li>
        <li><FriendListItem friend={{name:"Rachel"}} /></li>
        <li><FriendListItem friend={{name:"Monica"}} /></li>
        <li><FriendListItem friend={{name:"Muhammet"}} /></li>
      </ul>
      FriendStatus: <FriendStatus /> <br/>
      Count: {count} <br/>
      <p>You picked {language} as a language</p>
      <button onClick={() => {console.log('',language);language=='tr' ? setLanguage('en') : setLanguage('tr')}}>{language}</button>
      <button onClick={() => {setLanguage('en');setCount(0)}}>English</button>
      <button onClick={() => setLanguage('tr')}>Turkish</button>
    </div>
  );
}

export default App;
