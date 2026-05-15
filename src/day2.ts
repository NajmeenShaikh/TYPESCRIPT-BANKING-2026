// Day 2Topics:

// ✅ any
// ✅ unknown
// ✅ void
// ✅ never
// ✅ union
// ✅ literal types

//any
//Any means anything.

//(Koi bhi type accept karega. Type checking off ho jati hai.)

//let data:any;

let customerData: any = "Naz";
customerData = 5000;
customerData = true;
console.log(`customerData:${customerData}`);

let transactionData: any = "Pending";
transactionData = "True";
transactionData = 200;
console.log(`transactionData:${transactionData}`);

//unknown
// Unknown also accepts anything…
// But before use, checking is mandatory.
// (Hindi: Data kuch bhi ho sakta hai, lekin use karne se pehle check karna padega.)

let unknownData: unknown;

let apiData: unknown = "Naz";

if (typeof apiData === "string") {
  console.log(`apiData:${apiData}`);
  console.log(`apiData:${apiData.toUpperCase()}`);
}

let customerResponse: unknown = "KYC Approved";

//void
// Void means no return value.
// function koi value return nahi karega, to uska type void hoga.

function printCustomer(): void {
  console.log("customer Verified");
}

printCustomer();

function sendOtp(): void {
  console.log("OTP sent");
}

sendOtp();

//never
//Function never finishes normally.
//(Hindi: Function kabhi normal value return nahi karta.)
//Example: Infinite loop, Error throw

function throwError(): never {
  throw new Error("Transaction Failed");
}
try {
  throwError();
} catch (error) {
  console.log("Transaction failed");
}

//throwError();

//union types
//Union types allow a variable to hold more than one type of value.Multiple types allowed.
//(Hindi: Ek variable multiple types ke value hold kar sakta hai.)

let transactionID: number | string;
transactionID = 12345;
transactionID = "TXN12345";

console.log(`transactionID:${transactionID}`);

let customerStatus: "Active" | "Inactive" | "Pending";
customerStatus = "Active";
console.log(`customerStatus:${customerStatus}`);

//literal types
//Literal types allow a variable to have a specific set of values.Fixed values only.
//(Hindi: Ek variable ke paas specific set of values ho sakti hai.Sirf predefined values allowed hain)

let transactionStatus: "Success" | "Failed" | "Pending";
transactionStatus = "Pending";
console.log(`transactionStatus:${transactionStatus}`);
