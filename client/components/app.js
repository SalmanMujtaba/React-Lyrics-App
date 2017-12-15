import React from 'react';
 export default ({children})=>{
    return (
        <div className = "container">{children}</div>
    )
 };
 //The routes mentioned in index.js are all children of app.js, which 
 //renders the components on the screen. Also, everything is 
 //bound to the apollo client