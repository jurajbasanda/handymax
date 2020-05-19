import React from 'react';
import { Link } from 'react-router-dom';
import image from './logo.png'
class NotFoundPage extends React.Component{
    render(){
        return <div style={{marginTop:'15vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <img src={image} alt="" srcset="" style={{maxWidth:'300px'}}/>
        <h1>Sorry, Page is not found.</h1>
        <h2 style={{textAlign:"center",textDecoration:'underline',color:'black'}}>
        <Link to="/">Go Back </Link>
        </h2>
          </div>;
    }
}
export default NotFoundPage;