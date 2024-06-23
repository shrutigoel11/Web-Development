let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
let del=companies.shift();
console.log(companies);
let sp=companies.splice(2,1,'Ola');
console.log(companies);
let ne=companies.push('Amazon');
console.log(companies);