const username = sessionStorage.getItem('employer_username')

if(username==''||username==null)
{
    window.location="/employer_login.html"
}

document.getElementsByClassName('logout')[0].addEventListener('click', logout)
function logout()
{
    sessionStorage.removeItem('employer_username')
    window.location='/employer_login.html'
}


function change_names()
{
    document.getElementById('welcome_user').innerHTML='Welcome back to your Dashboard '+username;

    let output='';
    let profile=''
  
    fetch('http://127.0.0.1:3000/employers',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
            if(emp.Username==username)
            {
                profile+=`<div id="demo" class="card">
                <h3 id="name">Name: ${emp.Name} </h3>
                <h3 id="expertise">Username: ${emp.Username} </h3>
                <h3 id="username">Company: ${emp.Company}</h3>
                <h3 id="work_status">Country: ${emp.Country} </h3>
                <h3 id="company">Biography: ${emp.Biography}</h3>
                <h3 id="biography">Member Since: ${emp.Member_Since}</h3>
            </div>`

                output+=`<h4>${emp.Name}</h4>`;
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
        document.getElementById('get_employer_profile').innerHTML=profile;
    });

}
change_names()


function get_Employees()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employees',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{

           output+=`
           <div id="demo" class="card">
               <h4 id="name">Name: ${emp.Name}</h4>
               <h4 id="expertise">Expertise: ${emp.Expertise}</h4>
               <h4 id="username">Username: ${emp.Username}</h4>
               <h4 id="work_status">Work Status: ${emp.Status}</h4>
               <a href="/messaging.html"><button class="message_btn">Message</button></a>
           </div>
       `;
        })
        document.getElementById('get_employees').innerHTML=output;
    });
}
get_Employees()


function get_jobs()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/'+username+'/posted',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(job =>{
        
           output+=`<div id="demo_2" class="card">
           <div class="card_type">
                <h3 class="job_type">Type: ${job.Job_Type}</h3>
                <h3 class="job_date">Date Posted: ${job.Date_Posted}</h3>
           </div>
           <h3 class="job_title">Title: ${job.Job_Title}</h3>
           <h3 class="job_stack">Stack: ${job.Stack}</h3>
       </div>`;
        })
        document.getElementById('get_jobs_posted').innerHTML=output;
    });
}
get_jobs()


