import '../Demo/Demo.css'
import { Link,useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const chineselist =
    [
        { id: 1, name: "Chillichicken", category: "Chinese", thumbnail: "images/Chinese/chillichicken.jpg", Price: "150", description: "Non-Veg" },
        { id: 2, name: "Chicken Manchurian", category: "Chinese", thumbnail: "images/Chinese/chicken-manchurian.jpg", Price: "160", description: "Non-Veg" },
        { id: 3, name: "Chowmein", category: "Chinese", thumbnail: "images/Chinese/chowmein.jpg", Price: "110", description: "Veg" },
        { id: 4, name: "Manchow Soup", category: "Chinese", thumbnail: "images/Chinese/manchow-soup.jpg", Price: "100", description: "Veg" },
        { id: 5, name: "Spring Rolls", category: "Chinese", thumbnail: "images/Chinese/spring-rolls.jpg", Price: "120", description: "Veg" },
        { id: 6, name: "Schezuan Chicken", category: "Chinese", thumbnail: "images/Chinese/schezuan-chicken.jpg", Price: "190", description: "Non-Veg" },
        { id: 7, name: "Hakka Noodles", category: "Chinese", thumbnail: "images/Chinese/hakka-noodles.jpg", Price: "130", description: "Veg" }
    ]

const northlist =
    [
        { id: 1, name: "Ragan Ghosh", category: "North Indian", thumbnail: "images/NorthIndian/ragan_josh.jpg", Price: "370", description: "Non-Veg" },
        { id: 2, name: "Stuffed Bati", category: "North Indian", thumbnail: "images/NorthIndian/bati.jpg", Price: "160", description: "Veg" },
        { id: 3, name: "Malai ki Kheer", category: "North Indian", thumbnail: "images/NorthIndian/kheer.jpg", Price: "150", description: "Veg" },
        { id: 4, name: "Chicken Biryani", category: "North Indian", thumbnail: "images/NorthIndian/biryani.jpg", Price: "200", description: "Non-Veg" },
        { id: 5, name: "Samosa", category: "North Indian", thumbnail: "images/NorthIndian/samosa.jpg", Price: "120", description: "Veg" },
        { id: 6, name: "Nihari Ghosh", category: "North Indian", thumbnail: "images/NorthIndian/niharighosh.jpg", Price: "380", description: "Non-Veg" },
        { id: 7, name: "Butter Chicken", category: "North Indian", thumbnail: "images/NorthIndian/butterchicken.jpg", Price: "250", description: "Non-Veg" }
    ]

const shakeslist =
    [
        { id: 1, name: "Chocolate Hazelnut Milkshake", category: "Shakes", thumbnail: "images/Shakes/chocolatehazel.jpg", Price: "100", description: "Desserts" },
        { id: 2, name: "Date Milkshake", category: "Shakes", thumbnail: "images/Shakes/milkshake.jpg", Price: "110", description: "Desserts" },
        { id: 3, name: "Chocolate Malt Milkshake", category: "Shakes", thumbnail: "images/Shakes/chocolatemilkshake.jpg", Price: "120", description: "Desserts" },
        { id: 4, name: "Soy, Custard Apple and Peach Milkshake", category: "Shakes", thumbnail: "images/Shakes/soymilkshake.jpg", Price: "130", description: "Desserts" },
        { id: 5, name: "Almond Saffron Milkshake", category: "Shakes", thumbnail: "images/Shakes/Almond.jpg", Price: "140", description: "Desserts" },
        { id: 6, name: "Musk Melon Milkshake", category: "Shakes", thumbnail: "images/Shakes/musakmelon.jpg", Price: "150", description: "Desserts" },
        { id: 7, name: "Banana Milkshake", category: "Shakes", thumbnail: "images/Shakes/banana.jpg", Price: "160", description: "Desserts" }
    ]

// const HorizontalPlaylist = ({ song }category
// return (
//     <div>
//         <img className="song-thumbnail" src={song.thumbnail} ></img>
//         <div>{song.title}</div>
//     </div>
// )


// // const Component = () => {
// // return ( <div className="style">
// //     {songs.map((s)=> {
// //         return(
// //             <HorizontalPlaylist song = {s}></HorizontalPlaylist>
// //             )
// //         })}
// //         </div>
// // )}
// import React from 'react'

const Demo = () => {

    const history =useHistory()
    return (
        <div >
            <Header/>
            <center>
            <div className="inter"><h2>Welcome to Ravenous........</h2>
            <h5>Enjoy the taste ...............</h5>
            </div></center>
            <h2>Best Chinese Food</h2>
            <div className="headerx">
            {chineselist.map((chinese)=>{
                return(
                    <div  className="myStylex">
                        <img className="yourStylex" height="250px" src={chinese.thumbnail}></img>
                        <center>
                        <div className="divStylex">
                            <div><h3>{chinese.name}</h3></div>
                            <div >&#9734;&#9734;&#9734;&#9734;&#9734;</div>
                            <div >Price : {chinese.Price} Rs/-</div>
                            <div >Category : {chinese.category}</div>
                            <div >Description : {chinese.description} </div>
                            <button onClick={()=>{history.push('./signin')}} className="btn btn-primary">Order</button>
                        </div>
                        </center>
                    </div>
                )
            })}
            </div>
            <div className="imp">
            <h2>Best North Indian Food</h2>
            <div className="headerx">
            {northlist.map((north)=>{
                return(
                    <div  className="myStylex">
                        <img className="yourStylex" height="250px" src={north.thumbnail}></img>
                        <center>
                        <div className="divStylex">
                        
                            <div><h3>{north.name}</h3></div>
                            <div >&#9734;&#9734;&#9734;&#9734;&#9734;</div>
                            <div >Price : {north.Price} Rs/-</div>
                            <div >Category : {north.category}</div>
                            <div >Description : {north.description} </div>
                            <button onClick={()=>{history.push('./signin')}} className="btn btn-primary">Order</button>
                        </div>
                        </center>
                    </div>
                )
            })}
            </div>
            </div>
            <div className="imp">
            <h2>Best Shakes</h2>
            <div className="headerx">
            {shakeslist.map((shakes)=>{
                return(
                    <div  className="myStylex">
                        <img className="yourStylex" height="250px" src={shakes.thumbnail}></img>
                        <center>
                        <div className="divStylex">
                            <div><h3>{shakes.name}</h3></div>
                            <div >&#9734;&#9734;&#9734;&#9734;&#9734;</div>
                            <div >Price : {shakes.Price} Rs/-</div>
                            <div >Category : {shakes.category}</div>
                            <div >Description : {shakes.description} </div>
                            <button onClick={()=>{history.push('./signin')}} className="btn btn-primary">Order</button>
                        </div>
                        </center>
                    </div>
                )
            })}
            </div>
            </div>
            <Footer/>
        </div>
        )
            
                
         
            } 
            

export default Demo

//  <h2>Best Food In Bilaspur</h2>
//     {productInfo.map((product)=>{
//      return (
//       <div className="myStyle">
//        <img  src={product.img} ></img>
//        <div className="divStyle">
//        <div ><h3>{product.restaurant}</h3></div>
//        <div >&#9734;&#9734;&#9734;&#9734;&#9734;</div>
//        <div >{product.food}</div>
//        <div >{product.price}</div>
//        <div >{product.opens} to {product.closed}</div>
//      </div>)})
//     } 



