const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_TELEGRAM_USER_ID";

function openForm(item, price){
  document.getElementById("orderForm").style.display="flex";
}

function closeForm(){
  document.getElementById("orderForm").style.display="none";
}

function submitOrder(){
  let name=document.getElementById("name").value;
  let whatsapp=document.getElementById("whatsapp").value;
  let ffid=document.getElementById("ffid").value;
  let ref=document.getElementById("ref").value;
  let qty=document.getElementById("qty").value;

  let msg=`New Free Fire Top Up Order to Anuga Official Top Up Centre.

Name : ${name}
WhatsApp Number : ${whatsapp}
Product : AUTO_SELECTED
Quantity : ${qty}
Free Fire User ID : ${ffid}
Payment Refference Number : ${ref}`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({chat_id:CHAT_ID,text:msg})
  });

  alert("Order submitted!");
  closeForm();
}
