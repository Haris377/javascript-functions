const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1893, end: 1990},
    {name: "Company Four", category: "Retail", start: 1994, end: 2000},
    {name: "Company Five", category: "Technology", start: 1995, end: 2006},
    {name: "Company Six", category: "Auto", start: 1896, end: 2007},
    {name: "Company Seven", category: "Retail", start: 1897, end: 2008},
    {name: "Company Eight", category: "Finance", start: 1998, end: 2009},
    {name: "Company NIne", category: "Technology", start: 1899, end: 2010}
]

const ages = [33, 10, 24, 16, 61, 92, 12, 15, 25, 62, 94, 28];


// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }


//  companies.forEach(function(company){
//     console.log(company.name);
//  });
//const company = companies.forEach(company => console.log(company.name));

//  let canDrink = [];
//  for(let i=0; i<ages.length; i++){
//     if(ages[i] > 21){
//         canDrink.push(ages[i]);
//     }
//  }
//  console.log(canDrink);

//filter method

//  const canDrink = ages.filter(function(age){
//         if(age < 21){
//             return true;
//         }
//  });
//  console.log(canDrink);

//  const canDrink = ages.filter(age => age < 21);
//  console.log(canDrink);


// const retailCompany = companies.filter(function(company){
//     if(company.category == "Retail"){
//         return true;
//     }
// });

//const retailCompany = companies.filter(company => company.category === "Retail");
//console.log(retailCompany);

//Get 80s companies
// const eightiesCompanies = companies.filter(company => (company.start >= 1800 && company.end <= 2000));
// console.log(eightiesCompanies);


//Get companies that lasted 10 years or more

// const lastedTenYears = companies.filter(company => (company.end - company.start) > 10);
// console.log(lastedTenYears);

// map 

//Create array of company names

//const company = companies.forEach(company => console.log(company.name));

// const companyNames = companies.map(function(company){
//     return company.name;
// });
// const companyNames = companies.map(company => company.name);
// console.log(companyNames);

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - {company.end}]`;
// })
// console.log(testMap);


// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => age * 2)
// console.log(agesSquare);
// console.log(agesTimesTwo);

// Sort

// const sortCompanies = companies.sort(function(a, b){
//     if(a.start > b.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

//const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//sort ages
//const sortAges = ages.sort((a, b) => a - b)
//console.log(sortAges);

//reduce

// let ageSum = 0;
// for(let i=0; i<ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.start - company.end);
// })

// const totalYears = companies.reduce((total, company) => total +
//  (company.start - company.end), 0);

// Combine Method

const combine = ages
.map(age => age * 2).filter(age => age > 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);
console.log(combine);


