import React from "react"
import PropTypes from "prop-types";



const Profile =({showName,Name,job,bio,children}) => { 
        function Alert(){
                showName(Name)
        }    
    return (
        <>
        
        <h2 onClick={Alert}>FullName: {Name} </h2>
        <h3> Bio: {bio}</h3>
        <h3>profession:  {job} </h3>
        <div> {children} </div>

         </>
         
        )  
}


Profile.defaultProps = {
    bio:"I am a student"
   };

Profile.propTypes = {   
        stringProp: PropTypes.string,    
}

export default Profile; 


