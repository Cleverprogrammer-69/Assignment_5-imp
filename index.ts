import inquirer from 'inquirer'
//Q1
console.log("hello world")
//Q2
let temperature: number =   12
if(temperature <20) console.log("It's cold!")
//Q3
let apples: number =10
let appleGiven: number =3
console.log(`I gave ${appleGiven} apples from ${apples}, so i have ${apples-appleGiven} apples.`)
//Q4
let firstName: string ="Abdullah",lastName: string =" Arshad"
let fullName: string =firstName+lastName
console.log(`My name is ${fullName}`)
//Q5
if(5>3)console.log("Yes")
    else console.log("No")
//Q6
const calculateArea=(radius:number):number =>Math.PI*radius*radius
console.log(calculateArea(4.5))
//Q7
for(let i=1;i<=50;i++){
    if(i%3==0)console.log("Fizz")
    else if(i%5==0)console.log("Buzz")
    else console.log(i)
}
//Q8
let temperatures:number[]=[34,42,23,16,2,-5]
let max:number=temperatures[0]
for(let i=0;i<temperatures.length;i++){
    if(temperatures[i]>max) max=temperatures[i]
}
console.log("Maximum temperature in array is " + max + " Celsius")
//Q9

async function adultOrNot(){
    let prompt1 =await inquirer
      .prompt([
        {
          type: "input",
          name: "age",
          message: "What is your age?",
        },
      ])
      if(prompt1.age<18)console.log("You're minor")
        else console.log("You're an adult")
}

await adultOrNot()

//Q10
const positiveInArray=(array:any):number=>{
    let count:number=0
    for(let i=0;i<array.length;i++){
        if(array[i]>0)count++
    }
    return count
}

console.log(`Positive numbers in array are : ${positiveInArray([3,4,-4,1,-8])}`)
//Q11
function wordsStartByA(array: string[]):string[]{
   let newArray:string[]=[]
   for(let i=0;i<array.length;i++){
            
       if(array[i].startsWith("a")||array[i].startsWith("A"))newArray.push(array[i])
   }
   return newArray
}
console.log(wordsStartByA(["Apple","orange","airplane","albino","appricote"]))
//Q12
let fruits:string[]=["apple","banana","orange","mango"]
for (let i = 1; i < fruits.length; i++){
  console.log(fruits[i])
}
//Q13
const squaredNumbers=(numbers:number[]):number[]=>numbers.map(number=>number*number)
console.log(squaredNumbers([2,3,4,1,6,0]))
//q14
const reversedArray=(numbers:number[]):number[]=>{
  let reversedArray : number[]= []
  for(let i=numbers.length-1;i>=0;i--){
    reversedArray.push(numbers[i])
  }
  return reversedArray
}
console.log(reversedArray([1,2,4,12,90]))
//Q15
let scores:number[]=[10,5,20,20,4,5,2,25,1]
let minCount:number=0
let maxCount:number=0
for(let i=0;i<scores.length;i++){
  if(scores[i]<5){
    minCount++
  }
  if(scores[i]>10){
    maxCount++
  }
}
console.log(`Score fell bellow 5, ${minCount} times, and socre rised above 10,${maxCount} times`)
//Q16
const removeFalse=(array:any[]):any[] =>{
  let newArray:any[] = []
  for(let i = 0; i < array.length; i++){
    if(array[i]!==false){
      newArray.push(array[i])
    }
  }
  return newArray
}
console.log(removeFalse([false,null,undefined,false,true,false,true,NaN,0,""]))
//Q17
let nums1:number[]=[1,2,3]
let nums2:number[]=[4,5,6]
for(let i=0;i<nums2.length;i++){
  nums1.push(nums2[i])
}
console.log(nums1)
//Q18
const sumOfElements=(numbers:number[]):number=>{
  let sum:number=0
    for(let element of numbers){
      sum=sum+element
    }
    return sum
}
console.log(sumOfElements([1,24,53,23,15]))
//q19
const findNumber=(numbers:number[],n:number):number=>{
  // numbers.filter(number=>n===number)
  return numbers.findIndex(number=>number===n)

}
console.log("Number is present at ", findNumber([3,42,5,2,35,0],0))
//q20
const smallInteger = (numbers:number[]):number =>{
  let min:number=numbers[0]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]<min)min=numbers[i]
  }
  return min
}
console.log("Smallest integer :", smallInteger([1,2,5,-8,-0.99999,-0.999989]))
//q21
const calculateProduct=(numbers:number[]):number => {
  let product=1;
  for(let i=0;i<numbers.length;i++){
    product=product*numbers[i]
  }
  return product
}
console.log(calculateProduct([1,2,4,2,3]))
//q22
const filterByLength = (strings:string[],n:number):string[]=>{
  let newArray:string[]=[]
  for(let i=0;i<strings.length;i++){
    if(strings[i].length>n)newArray.push(strings[i])
  }
  return newArray
}

console.log(filterByLength(["apple","banana","orange","mango"],5))
//q23
const findDuplicates=(numbers:number[]):number[] => {
 return numbers.filter((item, index) => numbers.indexOf(item) !== index);
}
console.log(findDuplicates([2,1,1,3,2,5]))
//q24
const incrementAll =(numbers:number[]):number[]=>{
  return numbers.map(number=>number+1)
}

console.log(incrementAll([1,2,3,4,5]))
//Q25
const countOccurrences=(numbers:number[]):any=>{
  let occurrences:{[key:number]:number}={}
  for(let i=0;i<numbers.length;i++){
    if(occurrences[numbers[i]]){
      occurrences[numbers[i]]++
    }
    else{
      occurrences[numbers[i]]=1
    }
}
return occurrences
}
console.log(countOccurrences([1,2,3,4,52,1,3,2]))
//Q26
const isSorted = (numbers: number[]): boolean => {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(isSorted([1,2,3,4,5]))
//q27
const formatingNames = (names: string[]): string => {
  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0];
  } else {
    const to2ndLast = names.slice(0, -2).join(", ");
    const lastTwo = names.slice(-2).join(" and ");
    return `${to2ndLast}, ${lastTwo}`;
  }
};
console.log(formatingNames(['Abdullah',"hammad","Noor","John","muneeb"]))
//q28
