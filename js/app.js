`use strict`;

let storeData=[];
let tempArray= [];
let storeResults=[];
let allInventory=[];

//Calculate the number of store hours
let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//separate JS object literals for each shop location that outputs the following to the sales.html file:

//Define a shop using an book object constructor
function shopCreator(title,author,pages,year,genre){
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
  this.results=[];
};
//customers,avgCookie, cookiesThisHour, text
//Object consturctor to create new object of stored results
function inventory(customers,avgCookie, cookiesThisHour, text){
this.customers=0;
this.avgCookie = 0;
this.cookiesThisHour = 0;
this.text = '';
};

//Hold the shops in an array
let stores =[
['Seattle',	23,	65,	6.3],
['Tokyo',	3,	24,	1.2],
['Dubai',	11,	38,	3.7],
['Paris',	20,	38,	2.3],
['Lima',	2,	16,	4.6] ];

console.table(stores);

for (let i = 0; i < stores.length; i++) {
  let storeName = stores[i][0];
  let min = stores[i][1];
  let max = stores[i][2];
  let avgCookie = Math.round(stores[i][3]);
 
  let store = new shopCreator(storeName,min,max,avgCookie);
  
  let CPH = store.CxPerHour(min,max);
  //console.log(${shopCreator.readingTime()})
   console.log(CPH + ' --^^');
  
  // Add the store properties to the tempArray for temporary storage
  tempArray.push(storeName);
  tempArray.push(min);
  tempArray.push(max);
  tempArray.push(avgCookie);
  //tempArray.push(CPH);
  
  console.log(`${storeName} with a min of ${min}, a max of ${max} and an average of ${avgCookie} cookies per sale, with ${CPH} customers.`);

  console.log(tempArray);
  //console.log(`${shopCreator.CxPerHour()}.`)

  //Push the temporary array into the storeData array
  storeData.push(tempArray);

console.table(storeData);

  //Store name
  console.log("Store Name:" + storeName);
  //Save Store name to storeResults array
 // storeResults.push(storeName);
  
for (let index = 1; index <=storeHours.length; index++) {
  //Get the first hours from the storeHours array
  let hour = storeHours[index];
  
  //Calculate average cookies
  let customers= store.CxPerHour(min,max);

  // Calculate the cookies for the hour 
  let cookiesThisHour = Math.round(customers * avgCookie);

 
  //Create the element to push to index.html
  let text =  hour + ': ' + cookiesThisHour + ' cookies.';
    console.log(text);
 // Push theses calculated results to an array
 storeResults.push([customers,avgCookie, cookiesThisHour, text]);
 
   allInventory.push(storeName,text);

   //Call the addListItem function to create a new list item
  addListItem(text,storeName);
  };  
 
  //allInventory.push([storeName,storeResults]);
 // console.log(allInventory);
  //Create element to insert into the dom
  
  
 //Clear the temporary array for use in the next iteration
  tempArray =[];
  storeResults =[];

addElement(storeName);
};
console.table(storeResults[0])

//Manipulate the DOM

console.table("value" + allInventory[0][1]);



function addElement(storeName) {

  let myStore = storeName;
  //Set the value for the first window to add data too
  let storeSection= document.getElementById('store-profiles');
 
  // Define new elements
  const articleElem = document.createElement('article');
  articleElem.id = storeName;
  const h2El = document.createElement('h2');
  h2El.innerText=storeName;
  const pEl = document.createElement('p');
  const ulEl = document.createElement('ul');
  const newEl = document.createElement('li');
  const imgEl = document.createElement('img');
    
  storeSection.appendChild(articleElem);
 
 //Create new elements under the article
  articleElem.appendChild(h2El);
  articleElem.appendChild(pEl);
  articleElem.appendChild(ulEl);
  articleElem.appendChild(imgEl);
  
};
addElement(storeName);

function addListItem(item,storeName) {

  
  let newItem = item;
  let store = storeName;
  console.log("your store is" + storeName)

  
  
  //1. Set the value for the first window to add data too
 //let storeList= document.lastElementChild.getElementsByTagName("ul");

  //var storelist = document.getElementById(store);
  
 // console.log(storelist.firstElementChild);

 // const newEl = document.createElement('li');
 // newEl.innerText = item;
 // let storeList = document.querySelector('article ul');
 // console.dir(storeList);

  // Set content value of the list item
  //storeList.appendChild(newEl);
  
}; 

//Stores the min/max hourly customers, and the average cookies per customer, in object properties
//Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//Store the results for each location in a separate array… perhaps as a property of the object representing that location
//Display the values of each array as unordered lists in the browser
/* Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies

//Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

/* Here are the starting numbers that you’ll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.*/
