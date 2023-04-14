import './App.css';
import { useEffect, useState } from 'react';


function App() {

   async function getback() {
      const ret = await fetch('https://teste-back-gui.onrender.com')
      const data = await ret.text()
      setRetApi(data)
      console.log(data)
   }

   useEffect(()=>{
      getback()
   },[])

   const [retapi,setRetApi] = useState()

  return (
    <div className="App">
      <div>Teste Front Gui</div>
      {retapi && <div>{retapi}</div>}
    </div>
  );
}

export default App;
