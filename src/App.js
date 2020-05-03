import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Razzak", "Bappi", "Jashim", "Alomgir", "Salman"];
  //Array of objects
  const products = [
    { name: "Photoshop", price: "$90.99"},
    { name: "Illustrator", price: "$60.99"},
    { name: "PDF Reader", price: "$6.99"},
    { name: "Adobe Reader", price: "$7.99"}
  ]

  const friends = [
    { name: "Abtahee Azad", gender: "Male", age: "20"},
    { name: "Sabina Akter", gender: "Female", age: "25"},
    { name: "Aminta Mahsin", gender: "Female", age: "7"}
  ];

  // var name = "Dr. Mahfuz";
  // var person1 = {name: "Mahfuzur Rahman", job: "Singer"};
  // var person2 = {name: "Eva Rahman", job: "Kokil Konthi"};

  // var style = {
  //   color: 'red',
  //   backgroundColor: 'yellow'
  // }

  // const nayokName = nayoks.map( nayok => nayok);
  // console.log(nayokName);
  
  return (
    <div className="App">
        <header className="App-header"> 
        <ul>
          <Counter></Counter>
          <Users></Users>
          {
            friends.map( friend => <Friend friend = {friend}></Friend>)
          }

          {/* <Friend name = {friends[0].name} age = {friends[0].age} gender = {friends[0].gender}></Friend> */}
      
          {/* Making it dynamic===>>> */}
          {
            nayoks.map( nayok => <li>{nayok}</li>)
          }
            
          {
            products.map( product => <Product product = {product}></Product>)
          } 

          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        {/* //<img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>My First React Paragraph</p>
        <h1> {2+3}</h1>
        <h2>{name}</h2>
        <h3 style={style}>{person1.name +" "+ person1.job}</h3>
        <h4 style={{color:'blue', backgroundColor: 'cyan'}}>{person2.name +" "+ person2.job}</h4> */}
      {/* <Product name={products[0].name} price={products[0].price}></Product> */}
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product> */}

      <Person name="Rubel" nayika="Moushimi"></Person>
      <Person name="Manna" nayika="Sabana"></Person>
      <Person name="Salman" nayika="Shabnur"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1> Count : {count}</h1>
      <button onClick= { ()=> setCount(count+1)}>Increase</button>
      <button onClick= { () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [ users, setUsers] = useState([]);

  useEffect( ()=> {
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then( data => setUsers(data));
  } )
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map( user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Friend(props){
  const style = {
    width : "300px",
    height: "250px",
    backgroundColor: "cyan",
    border: "1px solid gold"
  }
  const {name, gender, age} = props.friend;
  // console.log(props.friend.gender);

  return (
    <div style={style}>
        <h2>{name}</h2>
        <h4> Gender:{gender}</h4>
        <h5> Age: {age}</h5>
    </div>
  )
}

function Person(props) {
  var personStyle = {
      margin: "10px"
  }
  return (
    <div style= {{border:"2px solid yellow", margin:"10px"}}>
      <h1>Nayok: {props.name}</h1>
      <h3 style= {personStyle}>Hero of {props.nayika}</h3>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border : "1px solid gray",
    borderRadius : "5px",
    backgroundColor:"lightgray",
    height : "200px",
    width: "200px",
    float : "left"
  }
  const { name, price} = props.product;
  //console.log(price);
  return (
    <div style = {productStyle}>
      {/* <h2>{props.name}</h2>
      <h5>{props.price}</h5> */}
      {/* <h2>{props.product.name}</h2>
      <h5>{props.product.price}</h5> */}
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>

  );
}

export default App;
