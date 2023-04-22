import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  const [count, setCount] = useState(0)
  
  const firebaseConfig = {
    apiKey: "AIzaSyBUw35rlR6NWVCZW4F9fUZgV2K5T7vZCMc",
    authDomain: "checklista-budowlana.firebaseapp.com",
    projectId: "checklista-budowlana",
    storageBucket: "checklista-budowlana.appspot.com",
    messagingSenderId: "114082480269",
    appId: "1:114082480269:web:df0b87bf046f6a0d80e2c4",
    measurementId: "G-P2KKXRHMF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React  </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
