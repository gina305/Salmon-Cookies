`use strict`;

let storeData=[];
let storeResults=[];

//Calculate the number of store hours
let storeHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];


//Define a shop object constructor function
function shop(storeName,minCustomers,maxCustomers,avgCookiePerSale,CxPerHour){
this.storeName=storeName;
this.minCustomers = minCustomers;
this.maxCustomers = maxCustomers;
this.avgCookiePerSale = avgCookiePerSale;
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
  
  //storeResults.push([newStore.storeName,newStore.minCustomers,newStore.maxCustomers,newStore.avgCookiePerSale,newStore.cxPerHour]);

  //Render table structure if index is 0
  if (i ===0){
  render(i);
  }else{
    //Render table elements
    renderData;
  };
  };

  
  //Push store text array to the 'results' variable in the store object
 // newStore.results=storeResults;

  //Empty array for next iteration
  //storeResults=[];


function addElements(cookies,storeName,index) {
  let a = 0;
 
  if (index === a){

  let myStore = storeName;
  //Set the value for the first window to add data too
  let storeSection= document.getElementById('store-profiles');
  let listSection= document.getElementsByTagName('ul');
  // Define new elements
  const articleElem = document.createElement('article');
  //articleElem.id = storeName;
  const h2El = document.createElement('h2');
  h2El.innerText=myStore;
  const tableElem = document.createElement('table');
  tableElem.className="data";
  //const imgEl = document.createElement('img');
    
  storeSection.appendChild(tableElem);
 };
 //Create new elements under the article

};

//Render function to create header and footer row
function render(i) {

  let storeSection= document.getElementById("store-profiles");
  if(i === 0){
  //Set the value for the table to add data too
  const table = document.createElement('table');
  table.id ="data-table";
  storeSection.appendChild(table);

  //Add table head
  const thead = document.createElement('thead');
  storeSection.appendChild(thead);
  thead.id = "head";
  
  //Add table body
    const tbody = document.createElement('tbody');
    tbody.id="body";
    storeSection.appendChild(tbody);
    
  //Add table footer
  const tfoot = document.createElement('tfoot');
  storeSection.appendChild(tfoot);
  };
renderData(i);
};  
 
function renderData(i){

  let storeSection= document.getElementById("head");
  
  const tr = document.createElement('tr');
  tr.id = "Seattle";
  body.appendChild(tr);
  
  //Create a row elemend in the table header
  if(i===0){
    const tr = document.createElement('tr');
    tr.innerText="      ";
    tr.id=i;
    storeSection.appendChild(tr);
  };


  for (let index = 0; index < storeHours.length; index++) {
    
    //Append the first row of store hours to the theader element
    storeSection= document.getElementById(`${i}`);
    
    //Add an empty <th> element
    if(index === 0){
    const th = document.createElement('th');
    th.innerText=" ";
    storeSection.appendChild(th);
    };
    

    //Add <th> elements containg the current store hour
    const hour = storeHours[index];
    const th = document.createElement('th');
    th.innerText=hour;
    storeSection.appendChild(th);
   };

    //Loop through each store and generate data for appending cookie data to the table body
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
     
      //Find the tbody element
      let dataSection= document.getElementById("body");

       if (i > 0){
        const tr = document.createElement('tr');
        tr.id=storeName;
        dataSection.appendChild(tr);
       };

         let tempArray= [];

           //Create results for each hour for this store
           for (let index = 0; index < storeHours.length; index++) {
           let dataSection= document.getElementById(storeName);

            if(index===0){
            const td = document.createElement('td');
            td.innerText = storeName;
            dataSection.appendChild(td);
            }
            let cxPerHour =cxFunction(min,max);
            let cookies = avgCookie * cxPerHour;
            const td = document.createElement('td');
            td.innerText = cookies;
            dataSection.appendChild(td);
           
            tempArray.push(cookies);
         };

            //Create a new store objest using the shop object constructor
            let newStore = new shop(storeName,min,max,avgCookie);
            newStore.results = tempArray;
           
            //console.dir(newStore);

            //Store the results in an array called storeResults
            storeResults.push(newStore);
      };
       console.table(storeResults);
      
};



//Event listener to add a new store
function addStore(event){
  
  let cxFunction = function calculate(a,b){
    //Create random # of customers
    min = Math.floor(a);
    max = Math.ceil(b);
    return Math.ceil(Math.random() * (max - min) + min);
    };

  let tempArray =[];
  //Prevent browser default action
  event.preventDefault();
  
  //Set the entry point for appending to the table
  let i = storeResults.length;

  //Capture form values to define variables
   let storeName = event.target.location.value;
   let min = parseInt(event.target.minCustomers.value);
   let max = parseInt(event.target.maxCustomers.value);
   let avg = parseInt(event.target.avgCookiePerSale.value);
   let newStore = new shop(storeName,min,max,avg); 
   

   let newTr= document.getElementById('body');
  
   const tr = document.createElement('tr');
        tr.id=storeName;
  
      newTr.appendChild(tr);

   //Create results for each hour for this store
   for (let index = 0; index < storeHours.length; index++) {

    if(index===0){
      const td = document.createElement('td');
      tr.innerText = storeName;
      td.id=storeName;
      newTr.appendChild(td);
      }

      //Add cookie for the hour
     let cxPerHour =cxFunction(min,max);
     let cookies = avg * cxPerHour;
     const td = document.createElement('td');
     td.innerText = cookies;
     tr.appendChild(td);
    
     tempArray.push(cookies);
     
  };

  newStore.results = tempArray;
  //console.dir(newStore);

  //Store the results in an array called storeResults
  storeResults.push(newStore);

  //console.table(storeResults);
};


 //Get the form element and add an event listener
 let myform = document.getElementById('form');
 form.addEventListener('submit',addStore);

// Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.

// Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

// Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

// If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

// Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.

// Validate your html through HTML5 validation.

// Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.