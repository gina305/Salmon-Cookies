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
  
for (let index = 1; index < storeHours.length; index++) {
  //Get the first hours from the storeHours array
  let hour = storeHours[index];
  
  //Calculate average cookies
  let customers= store.CxPerHour(min,max);

  
  
 // storeResults.push(storeName);
  
  // Calculate the cookies for the hour 
  let cookiesThisHour = Math.round(customers * avgCookie);

  //storeResults.push(storeName);
 // storeResults.push(cookiesThisHour);
  //storeResults.push(customers);
  //console.table(storeResults);
  //Create the element to push to index.html
  let text = '<ul> ' + hour + ': ' + cookiesThisHour + ' cookies. </ul>';
    console.log(text);
 // Push theses calculated results to an array
 storeResults.push([customers,avgCookie, cookiesThisHour, text]);
  //console.log(`Here are the results:`)
  //console.table(storeResults);
 
  var hotel = new inventory(customers,avgCookie, cookiesThisHour, text);
  //console.log(hotel.avgCookies)
  /*
  function inventory(customers,avgCookie, cookiesThisHour, text){
this.customers=0;
this.avgCookie = 0;
this.cookiesThisHour = 0;
this.text = '';
};
var
  */
   allInventory.push(storeName,text);
  };  
 
  //allInventory.push([storeName,storeResults]);
 // console.log(allInventory);
  //Create element to insert into the dom
  
  
 //Clear the temporary array for use in the next iteration
  tempArray =[];
  storeResults =[];

addElement(storeName);
};
console.table("value" + allInventory[0][1]);

function addElement (li) {
  // create new elements
 // const newArticle = document.createElement("article");
 // const newH2 = document.createElement("h2");
  //const p = document.createElement("p");
 // const ul = document.createElement("ul");
 const newEl = document.createElement("li");
  //const img = document.createElement("img");
  
  // Set content value of the h2
  const newH2 = document.createTextNode(storeName);
  newEl.appendChild(newH2);
  // Set content value of the list item
  //const li = document.createTextNode(text);

  // add the text node to the newly created div
  

  // add the newly created element and its content into the DOM
  var position = document.getElementsByTagName(ul)[0];
  
  position.appendChild(li)
}
//console.log(`${shopCreator.CxPerHour()}.`)
//Create a new book object using the object constructor notation
//let DariusBook = new bookCreator('Minding My Own Data','Darion McMlay',1120,2004,'non-fiction');

//console.log(`${.author}.`);

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
