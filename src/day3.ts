//Day 3 — Arrays • Tuples • Objects • Type Alias • Readonly • Optional Properties

//Arrays;

let accountNumbers: number[] = [1001, 1002, 1003, 1004];

console.log(`accountNumbers: ${accountNumbers}`);

//String Array

let atmCities: string[] = ["Pune", "Mumbai", "Delhi", "Chennai"];
console.log(`atmCities: ${atmCities}`);

//Tuples
//Tuple = Fixed order + fixed types.
//(Hindi: Order fixed aur type fixed hota hai.)

let transaction: [string, number];
transaction = ["txn1001", 1000];

console.log(`transaction: ${transaction}`);

//Real Life Use
//Card number + CVV:

let cardData:[string, number]=["xxxx-1234", 1234];
console.log(`cardData: ${cardData}`);

//Objects
//Object = Key + Value pair 
// Object = Related data grouped together.
//(Hindi: Ek entity ki multiple properties ek saath.)

let customer = {
    name:"NazMahi",
    accountNumber:1234567890,
    age:30,
    city:"Pune",
    kycVerified:true,

};

console.log("CustomerDetails", customer);

//Type Alias
//Type Alias = Custom name for a type.Reusable custom type.
//(Ek custom type bana kar multiple places par reuse karna.)
//(Apne type ke liye ek custom name.)

type customer={
    name:string,
    accountNumber:number,
    age:number,
    city:string,
    kycVerified:boolean,
};

//use

let customer1:customer={
    name:"Naz",
    accountNumber:1234567890,
    age:30,
    city:"Pune",
    kycVerified:true,
};
console.log("Customer1", customer1);

let customer2:customer={
    name:"Mayra",
    accountNumber:9876543210,
    age:25,
    city:"Mumbai",
    kycVerified:false,
};
console.log("Customer2", customer2);


//Readonly
//Value cannot change.
//(Ek baar set hone ke baad modify nahi kar sakte.)

//readonly id: number=1001;

//Banking Example
//Transaction ID immutable.

type transaction={
    readonly transactionId:string;
    amount:number;
};

let txn1:transaction ={
    transactionId:"txn1001",
    amount:1000,
};

console.log('transaction1',txn1);

//txn1.transactionId="txn1002"; //Error: Cannot assign to 'transactionId' because it is a read-only property.