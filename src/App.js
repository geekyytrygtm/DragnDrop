import './App.css';
import React, { useState } from 'react';

function App() {
  
  let [bucketA, updateA] = useState([]);
  let [bucketB, updateB] = useState([]);
  let [bucket, updateBucket] = useState(["A1", "A2", "A3", "B1", "B2", "B3", "A4"]);
  let [dragContent, startDrag] = useState({})

  updateBucket = (evt) => {
    if(evt.target.innerText.indexOf("A")>=0){
      updateA(arr => [...arr, evt.target.innerText]);
    }else{  
      updateB(arr => [...arr, evt.target.innerText]);
    }
    return bucket.splice(bucket.indexOf(evt.target.innerText), 1)     
  }

  function handleDrop(ev){
    if(ev.target.className.indexOf(dragContent.target.innerText[0])>0){
      updateBucket(dragContent);
      startDrag({});
    }      
  }
  

  function handleDragOver(ev){
    ev.preventDefault();
  } 

  return (
    <div className="wrapper-dnd">
      <header className="header">
        <h4>Drag Drop</h4>
      </header>
      <div className="container">
        <div className="bucketList">
          {!bucket.length && <p>Bucket is empty</p>}
          {bucket.map(item =>{
            return (
            <div className="bucketItem" 
                  key={item} 
                  onDoubleClick={updateBucket}
                  draggable
                  onDragStart = {ev => startDrag(ev)}   
            >
              {item}
            </div>)
          })}
        </div>
        <div className="container_A">
          <h2>A</h2>
          <div className="bucketA"
            onDrop = {handleDrop}
            onDragOver={handleDragOver}>
            {bucketA.map((item,i) =>{
              return(<div className="bucketItem" key={item+""+i}>{item}</div>)
            })}
          </div>
        </div>
        <div className="container_B">
          <h2>B</h2>
          <div className="bucketB"
              onDrop = {handleDrop}
              onDragOver={handleDragOver}>
            
            {bucketB.map((item,i) =>{
              return(<div className="bucketItem" key={item+""+i}>{item}</div>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
