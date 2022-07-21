const billInput = document.querySelector('#bill');
const percentItems = document.querySelector('.percent__items');
const percentInput = document.querySelector('#percent');
const amountInput = document.querySelector('#amount');
const amountSum = document.querySelector('.amount__sum');
const totalSum = document.querySelector('.total__sum');
const cleanBtn = document.querySelector('.tips__button');
let percent = 0;
function calckluteTips(){
    let bill = null;
    let people = null;
    bill = parseInt(billInput.value);
    people = parseInt(amountInput.value);
    if (!(bill && people && percent)) return
    let totalTips = Math.round(bill * (percent/100));
    let perconTips = Math.round(totalTips/people);
    totalSum.innerText = `${totalTips}`;
    amountSum.innerText = `${perconTips}`;
}

function getPercent(e){
    if (e.target.classList.contains('percent__item')) {
        document.querySelectorAll('.percent__item').forEach((item)=>{
            item.classList.remove('percent__item_active');
        })
        e.target.classList.add('percent__item_active');
        percent = parseInt(e.target.innerText);
    }
    calckluteTips()
}

function getPercentByInput() {
    percent = parseInt(percentInput.value);
    calckluteTips();
}

function clean() {
    document.querySelectorAll('.percent__item').forEach((item)=>{
        item.classList.remove('percent__item_active');
    })
    billInput.value = 0;
    amountInput.value = 0;
    percent = 0;
    totalSum.innerText = `0`;
    amountSum.innerText = `0`;
    document.querySelectorAll('input').forEach((item)=>item.classList.remove('error'));
}

function validation(e){
   let value = parseInt(e.target.value);
   if (e.target.classList.contains('percent__input')) {
        if (isNaN(value) || value <= 0 || value > 100) {
        e.target.value = 0;
        e.target.classList.add('error');
       } else {
        e.target.classList.remove('error');
       }
       return
   }
   if (isNaN(value) || value <= 0) {
    e.target.value = 0;
    e.target.classList.add('error');
   } else {
    e.target.classList.remove('error');
   }
}
percentInput.addEventListener('change',validation);
amountInput.addEventListener('change',validation);
billInput.addEventListener('change',validation);
percentInput.addEventListener('input',getPercentByInput);
cleanBtn.addEventListener('click',clean);
percentItems.addEventListener('click',getPercent);
billInput.addEventListener('input',calckluteTips);
amountInput.addEventListener('input',calckluteTips);


