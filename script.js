const advice_api="https://api.adviceslip.com/advice";

const advice_number= document.querySelector('.advice-generator__advice-number')
const advice_quote=document.querySelector('.advice-generator__quote')
const fetchBtn = document.querySelector('button.advice-generator__btn')
const fetchNewAdvice =async()=>{
    const response =await fetch(advice_api);
    const advice=await response.json();
return advice;
};
const renderAdvice=(adviceObj)=>{
const{id,advice}=adviceObj;
advice_number.textContent=`ADVICE #${id}`
advice_quote.textContent=`"${advice}"`
}





const generateNewAdvice=async()=>{
    const data =await fetchNewAdvice();
const advice = data.slip;
renderAdvice(advice)
};
window.addEventListener('DOMContentLoaded',()=>{
    fetchBtn.addEventListener('click',generateNewAdvice)
})