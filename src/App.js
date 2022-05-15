import React from "react";
import image from "./profile/Lens.jpg"
import Profile from "./profile/ProfileComponent"

function handleName(title) {
  alert(title)

}



function App() {

  return (
    <div style={ { textAlign:"center"}}>
    <Profile Name="Mai Kareem"  job="programmer" showName={handleName}> <img src={image} alt=""/> </Profile>

    </div>
  );
    
}


export default App;
