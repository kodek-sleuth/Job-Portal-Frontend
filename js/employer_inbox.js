const username = sessionStorage.getItem('employer_username')

if(username==''||username==null)
{
    window.location="/employer_login.html"
}

document.getElementsByClassName('logout')[0].addEventListener('click', logout)
function logout()
{
    window.location='/employer_login.html'
}


function change_names()
{
    document.getElementById('welcome_user').innerHTML='Welcome back to your Dashboard '+username;

    let output='';
  
    fetch('https://job-portal-online.herokuapp.com/employers',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
            if(emp.Username==username)
            {
                const employer_name=emp.Name
                const employer_username=emp.Username
                const employer_bio=emp.Biography
                const employer_member_since=emp.Member_Since
                const employer_password=emp.Password
                const employer_country=emp.Country
                const employer_company=emp.employer_company

                output+=`<h4>${emp.Name}</h4>`;
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
    });

}

change_names()



function get_messages_from_employee()
{
    let output='';
  
    fetch('https://job-portal-online.herokuapp.com/employer/inbox/'+username+'/received',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`
           <div id="demo_3" class="card">
           <div class="card_type">
               <h4 id="subject">Subject: ${mes.Subject}</h4>
               <h4 class="job_date">${mes.Date_Posted}</h4>
           </div>
          <h4 id="description">Des: ${mes.Description}</h4>
          <h4 id="from">From: ${mes.From}</h4>
          <a href="/messaging.html"><button class="message_btn">Reply</button></a>
      </div>`;
        })
        document.getElementById('get_messages_from_employee').innerHTML=output;
    });
}

get_messages_from_employee()

function get_messages_sent_to_employee()
{
    let output='';
  
    fetch('https://job-portal-online.herokuapp.com/employer/inbox/'+username+'/sent',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_3" class="card">
            <div class="card_type">
                <h4 id="subject">Subject: ${mes.Subject}</h4>
                <h4 class="job_date">${mes.Date_Posted}</h4>
            </div>
           <h4 id="description">Des: ${mes.Description}</h4>
           <h4 id="from">To: ${mes.To}</h4>
       </div>`;
        })
        document.getElementById('get_messages_sent_to_employee').innerHTML=output;
    });
}

get_messages_sent_to_employee()

document.getElementsByClassName('nav_message')[0].addEventListener('click', change_to_message)
function change_to_message()
{
    window.location='/messaging.html'
}