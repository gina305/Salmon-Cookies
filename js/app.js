`use strict`;

let storeData=[];
let tempArray= [];
let storeResults=[];

//Calculate the number of store hours
let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


//Define a shop object constructor function
function shop(storeName,minCustomers,maxCustomers,avgCookiePerSale,CxPerHour){
this.storeName=storeName;
this.minCustomers = minCustomers;
this.maxCustomers = maxCustomers;
this.avgCookiePerSale = avgCookiePerSale;
this.cxPerHour = CxPerHour;
this.results = [];
};

//Hold the shops in an array
let stores =[
['Seattle',	23,	65,	6.3],
['Tokyo',	3,	24,	1.2],
['Dubai',	11,	38,	3.7],
['Paris',	20,	38,	2.3],
['Lima',	2,	16,	4.6] ];

//For loop to iterate through the stores array
for (let i = 0; i < stores.length; i++) {
  let storeName = stores[i][0];
  let min = stores[i][1];
  let max = stores[i][2];
  let avgCookie = Math.round(stores[i][3]);
  let cxFunction = function calculate(a,b){
    //Create random # of customers
    min = Math.floor(a);
    max = Math.ceil(b);
    return Math.ceil(Math.random() * (max - min) + min);
    };
  let cxPerHour =cxFunction(min,max);
  
  
  let newStore = new shop(storeName,min,max,avgCookie,cxPerHour);
 
console.log(newStore.storeName);

//storeResults.push([newStore.storeName,newStore.minCustomers,newStore.maxCustomers,newStore.avgCookiePerSale,newStore.cxPerHour]);
  
  //Loop through the store hours and calculate cookies sold per hour
  for (let index = 0; index < storeHours.length; index++) {
    let time = storeHours[index];
    //generate a random # of customers
    let cxNum = cxFunction(newStore.minCustomers,newStore.maxCustomers);
    //Define average cookie sales for this hour
    let cookies = (newStore.avgCookiePerSale);
    
    //Display hour
    console.log("Time: " + time);
    //Display number of cookies
    console.log("cookies: " + cookies);
    //Display number of customers
    console.log("customers: " + cxNum);
    
    //Define cookie results for this hour
    cookies = cxNum * cookies;
    
    //Define  text resukts for this hour
    let text = `${time}: ${cookies} cookies`;
    //Display number of cookies for this hour
    console.log("number of cookies: " + cookies);
    //Determine num of cookies by average customer this hour
    //console.log(cookies);
    
    //Store results in an array
    storeResults.push(cookies);

    //Call the list function to add this text to a list
  };
  
  //Push store text array to the 'results' variable in the store object
  newStore.results=storeResults;
  
  //Empty array for next iteration
  storeResults=[];
//console.log(storeResults.storeName);
 //get last value or array
  console.table(newStore.results[14]); 
};
