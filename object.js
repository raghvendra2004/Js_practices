//object literals
// const JsUser={
//  name:"raghvendra",
//  age:18,
//  location:"ghaziabad"

// }
//  console.log(JsUser.name)
//  console.log(JsUser["name"])
// JsUser.greeting=function(){
//     console.log(`hello greeting ,${this.name}`);
// }
// console.log(JsUser.greeting());

//object sington

const UerId = new Object()

UerId.id="123"
UerId.name="raghav"
console.log(UerId)