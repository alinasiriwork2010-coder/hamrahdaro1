setTimeout(()=>{document.getElementById('splash').classList.add('hidden');document.getElementById('login').classList.remove('hidden')},2600);
function demoLogin(){
 const btn=document.querySelector('#login .primary');btn.disabled=true;btn.textContent='در حال ورود...';
 setTimeout(()=>{document.getElementById('login').classList.add('hidden');document.getElementById('app').classList.remove('hidden');btn.disabled=false;btn.textContent='ورود نمایشی';},900);
}
function demoLogout(){document.getElementById('app').classList.add('hidden');document.getElementById('login').classList.remove('hidden')}
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.nav').forEach(n=>n.classList.toggle('active',n.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'})}
function markTaken(btn){btn.textContent='✓ مصرف شد';btn.disabled=true;alert('مصرف دارو ثبت شد. (نمایشی)')}
function addMedicine(){const n=document.getElementById('drugName').value.trim();if(!n){alert('لطفاً نام دارو را وارد کنید.');return}alert('داروی «'+n+'» اضافه شد. (نمایشی)');showPage('medicines')}
function placeOrder(){alert('سفارش اضطراری ثبت شد. (نمایشی)');showPage('home')}