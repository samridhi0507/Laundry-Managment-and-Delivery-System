//new firebase config 
// const firebaseConfig = {
//   apiKey: "AIzaSyBpJY3ZzVR9kZRbw2Mzhul6aiLjx882pww",
//   authDomain: "laundry-app-af5f5.firebaseapp.com",
//   databaseURL: "https://laundry-app-af5f5-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   // databaseURL: "https://laundry-app-af5f5.firebaseio.com",
//   projectId: "laundry-app-af5f5",
//   storageBucket: "laundry-app-af5f5.appspot.com",
//   messagingSenderId: "791223162039",
//   appId: "1:791223162039:web:a255ea8f17d006e3b4a932"
// };

//Navbar Funtion
window.addEventListener("scroll", function () {
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Toggle Menu
function toggleMenu() {
  const menuBar = document.querySelector('.menuToggle');
  const nav = document.querySelector(".nav");
  menuBar.classList.toggle('active');
  nav.classList.toggle('active');

}

// ----Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAB8aC2EUyuLB5hMsdqrY_ZwkNoSQL7osc",
  authDomain: "laundry-system-e7505.firebaseapp.com",
  databaseURL: "https://laundry-system-e7505-default-rtdb.firebaseio.com",
  projectId: "laundry-system-e7505",
  storageBucket: "laundry-system-e7505.appspot.com",
  messagingSenderId: "547803642808",
  appId: "1:547803642808:web:fbbf849be4a81d978aad4d"
};


firebase.initializeApp(firebaseConfig);

//reference your database
var OrderFormDB = firebase.database().ref('OrderForm');
document.getElementById('confirm').addEventListener('click', confirmForm);

function confirmForm(e) {
  e.preventDefault();
  console.log(document.getElementById("name").value);
  var name = getElementVal('name');
  var weight = getElementVal('weight');
  var estimation = getElementVal('estimation');
  var service = getElementVal('service-item');
  OrderForTshirts(name, weight, estimation, service);
  console.log(name, weight, estimation, service);
}

const OrderForTshirts = (name, weight, estimation, service) => {
  var newOrder = OrderFormDB.push();

  newOrder.set({
    name: name,
    weight: weight,
    estimation: estimation,
    service: service
  })
}

//for blanket
var OrderFormDB = firebase.database().ref('OrderForm');
document.getElementById('confirm1').addEventListener('click', confirmForm1);

function confirmForm1(e) {
  e.preventDefault();
  console.log(document.getElementById("name").value);
  var name = getElementVal('name1');
  var pcs = getElementVal('pcs');
  var estimation = getElementVal('estimation1');
  var service = getElementVal('service-item1');
  OrderForBlanket(name, pcs, estimation, service);
  console.log(name, pcs, estimation, service);
}

const OrderForBlanket = (name, pcs, estimation, service) => {
  var newOrder = OrderFormDB.push();

  newOrder.set({
    name: name,
    pcs: pcs,
    estimation: estimation,
    service: service
  })
}

//for shoes
var OrderFormDB = firebase.database().ref('OrderForm');
document.getElementById('confirm2').addEventListener('click', confirmForm2);

function confirmForm2(e) {
  e.preventDefault();
  console.log(document.getElementById("name").value);
  var name = getElementVal('name2');
  var pcs = getElementVal('pcs1');
  var estimation = getElementVal('estimation2');
  var service = getElementVal('service-item2');
  OrderForShoes(name, pcs, estimation, service);
  console.log(name, pcs, estimation, service);
}

const OrderForShoes = (name, pcs, estimation, service) => {
  var newOrder = OrderFormDB.push();

  newOrder.set({
    name: name,
    pcs: pcs,
    estimation: estimation,
    service: service
  })
}


const getElementVal = (id) => {
  return document.getElementById(id).value;
}