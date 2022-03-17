`use strict`;

let storeData=[];
let tempArray= [];
let storeResults=[];

//Calculate the number of store hours
let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


//Define a shop using an book object constructor
function shopCreator(storeName,minCustomers,maxCustomers,avgCookiePerSale,CxPerHour,results){
this.storeName='';
this.minCustomers = 0;
this.maxCustomers = 0;
this.avgCookiePerSale = 0;
this.CxPerHour = function calculate(a,b){
    //Create random # of customers
    let ans= Math.floor(Math.random() * 12);
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    };
};

//Hold the shops in an array
let stores =[
['Seattle',	23,	65,	6.3],
['Tokyo',	3,	24,	1.2],
['Dubai',	11,	38,	3.7],
['Paris',	20,	38,	2.3],
['Lima',	2,	16,	4.6] ];


for (let i = 0; i < stores.length; i++) {
  let storeName = stores[i][0];
  let min = stores[i][1];
  let max = stores[i][2];
  let avgCookie = Math.round(stores[i][3]);
  let store = new shopCreator(storeName,min,max,avgCookie);
  let CPH = store.CxPerHour(min,max);

 // Call the addElement function to add the store name
  addElement(storeName);
 
  //Push the temporary array into the storeData array
  storeData.push(tempArray);

  //console.log("Store Name:" + storeName);


for (let index = 1; index < storeHours.length; index++) {
  
  //Get the right hour from the storeHours array
  let hour = storeHours[index];
  
  //Calculate average cookies
  let customers= store.CxPerHour(min,max);
  
  // Calculate the cookies for the hour 
  let cookiesThisHour = Math.round(customers * avgCookie);

  let text = hour + ': ' + cookiesThisHour + ' cookies.';

 // Push these calculated results to an array
 storeResults.push(text);


 addToList(text, storeName) 
  
  };  
 
 //Clear the temporary array for use in the next iteration
  console.table(storeResults);
  

  tempArray.push(storeResults);
storeResults =[]; 
};

function addElement(storeName) {

  let myStore = storeName;
  //Set the value for the first window to add data too
  let storeSection= document.getElementById('store-profiles');

  let listSection= document.getElementsByTagName('ul');
 
  // Define new elements
  const articleElem = document.createElement('article');
  //articleElem.id = storeName;
  const h2El = document.createElement('h2');
  h2El.innerText=storeName;
  const pEl = document.createElement('p');
  const ulEl = document.createElement('ul');
  ulEl.className=myStore;

  const imgEl = document.createElement('img');
    
  storeSection.appendChild(articleElem);
 
 //Create new elements under the article
  articleElem.appendChild(h2El);
  articleElem.appendChild(pEl);
  articleElem.appendChild(ulEl);
  articleElem.appendChild(imgEl);
};

function addToList(item, storeName) {

  let newItem = item;
  let targetStore = storeName;
  //Set the value for the first window to add data too
  let listSection= document.querySelector('.' + targetStore)
  console.log(listSection);
  //let listSection= document.getElementsByTagName('ul');
 
  // Define new elements
  const newEl = document.createElement('li');
  newEl.innerText=item;

  //Create new elements under the article  
  listSection.appendChild(newEl);
  
};
