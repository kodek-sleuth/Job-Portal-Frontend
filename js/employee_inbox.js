const username = sessionStorage.getItem('employee_username')

if(username==''||username==null)
{
    window.location="/employee_login.html"
}

document.getElementsByClassName('logout')[0].addEventListener('click', logout)
function logout()
{
    sessionStorage.removeItem('employee_username')
    window.location='/employee_login.html'
}


function get_messages_from_employer()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/inbox/'+username+'/received',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_8" class="card">
           <div class="card_type">
                <h3 id="subject">Subject: ${mes.Subject}</h3>
                <h3 class="job_date">${mes.Date_Posted}</h3>
            </div>
           <h3 id="description">Des: ${mes.Description}</h3>
           <h3 id="from">From: ${mes.From}</h3>
           <a href="/message_employer.html"><button class="message_btn">Reply</button></a>
       </div>`;
        })
        document.getElementById('get_messages_from_employer').innerHTML=output;
    });
}

get_messages_from_employer()

function get_messages_sent_to_employer()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/inbox/'+username+'/sent',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_9" class="card">
           <div class="card_type">
               <h3 id="subject">Subject: ${mes.Subject}</h3>
               <h4 class="job_date">${mes.Date_Posted}</h4>
           </div>
          <h3 id="description">Des: ${mes.Description}</h3>
          <h3 id="from">To: ${mes.To}</h3>
          
      </div>`;
        })
        document.getElementById('get_messages_sent_to_employer').innerHTML=output;
    });
}

get_messages_sent_to_employer()