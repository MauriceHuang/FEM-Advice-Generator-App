const advice_api="https://api.adviceslip.com/advice";

const fetchNewAdvice =async()=>{
    const response =await fetch(advice_api);
    const advice=await response.json();
return advice;
}
const generateNewAdvice=async()=>{
    const data =await fetchNewAdvice();
console.log(data);
}