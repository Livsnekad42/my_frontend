import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

const App = () => {

  const [text, setText] = useState<string>('')

  useEffect(() => {
    axios.get('http://localhost:4000').then((resp) => {
      console.log('resp', resp)
      setText(resp.data)
    })
  }, [])

  return (
      <>
        {text}
      </>
  )
}

export default App;
