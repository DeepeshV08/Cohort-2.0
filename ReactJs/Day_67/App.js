import React from 'react'

const App = () => {
    let arr = ["deepesh","ajay","prateek" , "karan","priyanshu"];
  return (
    <div>
      <h1>{arr.map((val)=>{
        console.log(val);
      })}</h1>
    </div>
  )
}

export default App
