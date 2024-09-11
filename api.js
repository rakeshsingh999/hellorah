// // // // PureComponent instead of using Component..........
// // // // import React,{Component, PureComponent} from 'react'

// // // // class User extends PureComponent{
// // // //     constructor(){
// // // //         super()
// // // //         this.state={
// // // //             count:0,

// // // //         }
// // // //     }
// // // //     update=()=>{
// // // //         this.setState({
// // // //             count:this.state.count+1
// // // //         })
// // // //     }
// // // //     render(){
// // // //         console.log('render method call....')
// // // //         return(
// // // //             <div>
// // // //                 <h3>Class Component : User</h3>
// // // //                 <p>count : {this.state.count} </p>
// // // //                 <button onClick={this.update}>update count</button>

// // // //             </div>
// // // //         )
// // // //     }
// // // // }
// // // // export default User;
// // // // hooks in React useState, useMemo, useEffect, useRef, createRef, forwardRef,useCallBack
// // // // import React,{useRef, useState} from 'react'

// // // // function User(){
// // // //     let [data,setdata]=useState(100)
// // // //     //let[name,setname]=useState('rahul')
// // // //     let [count,setcount]=useState(0)
// // // //     let InputRef=useRef()

// // //     // React.useEffect(()=>{
// // //     //     console.log('useeffect call')
// // //     // },[count])
// // //     //  function update(){
// // //     //      setdata(data+1)
// // //     //  }

// // // //   function handleRef(){
// // // //       console.log(InputRef.current.value)
// // // //       InputRef.current.style.background='red'
// // // //       InputRef.current.focus()
// // // //      // InputRef.current.style.display='none'
// // // //   }
// // // //     return <>
// // // //     <h4>User Component</h4>
// // // //     {/* <h5>DATA:{data} </h5>
// // // //     <h5>Count:{count} </h5>
// // // //     <button onClick={update}>click DATA </button>
// // // //     <button onClick={()=>setcount(count+1)}>click Count</button> */}
// // // //     <input type='text' ref={InputRef} ></input> <br></br>
// // // //     <button onClick={handleRef}>click</button>

// // // //     </>
// // // // }
// // // // export default User

// // // // import React, { createRef } from 'react'
// // // // export default class User extends React.Component{
// // // //     constructor(){
// // // //         super()
// // // //         this.InputRef=createRef()
// // // //     }
// // // //     getInfo=()=>{
// // // //   //this.InputRef.current.style.background='green'
// // // //   this.info=this.InputRef.current.value
// // // //   this.InputRef.current.focus()
// // // //   console.log(this.info)

// // // //     }
// // // //      render(){
// // // //          return(
// // // //              <div>
// // // //                  <h4>Class Component</h4>
// // // //                  <input type='text' ref={this.InputRef} ></input>
// // // //                  <button onClick={this.getInfo}>click here</button>

// // // //              </div>
// // // //          )
// // // //      }
// // // //  }
// // // // Controlled Component, Uncontrolled Component, High Order Component........ ->

// // // // React router Dom
// // // import {BrowserRouter,Route,Routes, Navigate, Link} from 'react-router-dom'
// // // import Home from './Components/home'
// // // import About from './Components/About'
// // // import Contact from './Components/Contact'
// // // import ErrorPage from './Components/ErrorPage'
// // // import Navbar from './Components/Navbar-Link'
// // // import Filter from './Components/Filter'
// // // import Profile from './Components/Student_Profile'
// // // import Page1 from './Components/page1'
// // // import Page2 from './Components/page2'
// // // import Login from "./LoginPage";
// // // import Protected from './Components/Protected'
// // // export default function User(){
// // //     return <div>
// // //         <h2>User's Page</h2>
// // //         <BrowserRouter>
// // //         <Navbar/><br></br>
// // //         <Routes>
// // //            <Route path='/' element={<Protected component={Home}/>}></Route>
// // //            <Route path='/login' element={<Login/>}></Route>
// // //            <Route path='/about/*' element={<About/>}>
// // //                <Route path='page1' element={<Page1/>}></Route>
// // //                <Route path='page2' element={<Page2/>}></Route>
// // //            </Route>
// // //            <Route path='/contact' element={<Contact/>}></Route>
// // //            <Route path='/filter' element={<Filter/>}></Route>

// // //            <Route path='/*' element={<ErrorPage/>}></Route>
// // //            <Route path='/profile/:name/:age/:country' element={<Profile/>}></Route>

// // //         </Routes>

// // //         </BrowserRouter>

// // //     </div>
// // // }

// // // React router dom ... single page application (spa)
// // // import Home from "./Pages/Home";
// // // import Contact from "./Pages/Contact";
// // // import About from "./Pages/About";
// // // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// // // import ErrorPage from "./Pages/ErrorPage";
// // // import Navbar from "./Pages/Navbar_Link";
// // // import "./selfstyle.css";
// // // import Filter from "./Pages/filter";
// // // import UserProfile from "./Pages/UsersProfile";
// // // import Students from "./Pages/Students";
// // // import Youtube from "./Pages/Youtube";
// // // import Channel from "./Pages/channel";
// // // import Subscription from "./Pages/subsciption";
// // // import LoginPage from './Pages/LoginPage'
// // // import Protected from "./Pages/Protected";

// // // let User = () => {
// // //   return (
// // //     <>
// // //       <h2>User Component</h2>
// // //       <BrowserRouter>
// // //         <Navbar />
// // //         <Routes>
// // //           <Route path="/" element={<Protected Component={Home}/>}></Route>
// // //           <Route path="/about" element={<Protected Component={About}/>}></Route>
// // //           <Route path="/student" element={<Protected Component={Students} />}></Route>
// // //           <Route
// // //             path="/profile/:name/:country/:gender/:age/:course"
// // //             element={<Protected Component={UserProfile} />}
// // //           ></Route>
// // //           <Route path="/contact" element={<Protected Component={Contact} />}></Route>
// // //           <Route path="/filter" element={<Protected Component={Filter} />}></Route>
// // //           <Route path="/*" element={<ErrorPage />}></Route>
// // //           <Route path="/youtube/*" element={<Protected Component={Youtube} />}>
// // //             <Route path="channel" element={<Channel />}></Route>
// // //             <Route path="subscriber" element={<Subscription />}></Route>
// // //           </Route>
// // //           <Route path='/login' element={<LoginPage/>}></Route>
// // //           {/* <Route path="/*" element={<Navigate to="/"/>}></Route> */}
// // //         </Routes>
// // //       </BrowserRouter>
// // //     </>
// // //   );
// // // };
// // // export default User;

// // import { useEffect, useState } from "react";
// // import { Table } from "react-bootstrap";
// // export default function User(){
// //   let [fetchdata,setfetchdata]=useState([])
  
// //   useEffect(()=>{
// //     fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>setfetchdata(data))

// //   },[])
  
// //   return (
// //     <div>
// //       <h2>User Component</h2>
// //       <Table variant='dark' hover striped bordered>
// //         <thead>
// //      <tr>
// //        <th>User Id</th>
// //        <th>Name</th>
// //        <th>User Name</th>
// //        <th>Email</th>
// //      </tr>
// //  </thead>
// //         <tbody>
// //           {
// //             fetchdata.map((value, index)=>{
// //               return(
// //                 <tr key={index} >
// //                   <td>{value.id} </td>
// //                   <td>{value.name} </td>
// //                   <td>{value.username} </td>
// //                   <td>{value.email} </td>
// //                 </tr>
// //               )

// //             })
// //           }


// //         </tbody>
// //       </Table>
      
// //     </div>
// //   )
// // }
// import { Table, Button } from "react-bootstrap";
// import { useState,useEffect } from "react";
// function User(){
//   let [name,setname]=useState('')
//   let [email,setemail]=useState('')
//   let[ gender, setgender]=useState('')
//   let[ id, setid]=useState('')
//   let [data,setdata]=useState([])
//   function getData(){
//     fetch('http://localhost:4012/users').then(response=>response.json()).then(result=>{setdata(result)
    
//   })
//   }
//   useEffect(()=>{
//     getData()
   
//   },[])
//   function DeleteData(id){
//    console.log(id)
//    fetch(`http://localhost:4012/users/${id}`,{
//      method:'delete'
//    }).then(res=>res.json()).then(data=>{console.log(data)
//   getData()
//   })
//   }
//   function UpdateUser(id,ind){
//     console.log(id,ind)
//     console.log(data[ind])
//     setname(data[ind].name)
//     setemail(data[ind].email)
//     setgender(data[ind].gender)
//     setid(id)
   

//   }
//   function CorrectUser(){
//     let newObj={name,email,gender}
//     console.log(name,email,gender)
//     fetch(`http://localhost:4012/users/${id}`,{
//       method:'put',
//       headers:{
//         'accept':'application/json',
//         'content-type':'application/json'
//       },
//       body: JSON.stringify(newObj)
//     }).then((response)=>{
//       response.json()

//     }).then(res=>getData())
    

//   }

  
//   return (
//     <div>
//       <Table variant='dark' striped hover>
//         <thead>
//           <tr>
//             <th>S.No.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Gender</th>
//             <th>Operation</th>
//             <th>Correction</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((value,index)=>{
//               return <tr key={index}>
//                 <td>{index+1} </td>
//                 <td>{value.name} </td>
//                 <td>{value.email} </td>
//                 <td>{value.gender} </td>
//                 <td> <Button onClick={()=>DeleteData(value.id)}>DELETE</Button> </td>
//                 <td><Button variant="success" onClick={()=>UpdateUser(value.id,index)}>UPDATE</Button> </td>

            

//               </tr>


//             })

//           }
//         </tbody>


//       </Table>
//       <input type='text' value={name} onChange={(e)=>setname(e.target.value)}></input><br/><br/>
//       <input type='text' value={email} onChange={(e)=>setemail(e.target.value)}></input><br/><br/>
//       <input type='text' value={gender} onChange={(e)=>setgender(e.target.value)}></input><br/><br/>
//       <Button onClick={CorrectUser}>Update User</Button>



     
//       </div>
//   )
// }
// export default User;

// import React,{  } from "react";
// import {Button  } from "react-bootstrap";
// export default function User(){
//   let [count,setcount]=React.useState(0)

//   function Update(){
//     let item =Math.floor((Math.random())*10)
//     setcount((prev)=>{
//       console.log(prev ,item)
//       if(prev>item) alert('previous value is greater than current value')

//       return item

//     })
//   }
//   return <>
//   <h3>Previous State</h3>
//   <h4>Current Count: {count}</h4>
//   <Button onClick={Update}>count update</Button>
//   </>
// }