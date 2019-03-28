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


function change_names()
{
    document.getElementById('welcome_user').innerHTML='Welcome back to your Dashboard '+username;

    let output='';
    let profile=''
  
    fetch('http://127.0.0.1:3000/employees',{
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
                <h3 id="username">Email: ${emp.Email}</h3>
                <h3 id="work_status">Country: ${emp.Country} </h3>
                <h3 id="company">Expertise: ${emp.Expertise}</h3>
                <h3 id="biography">Other Skills: ${emp.Other_Skills}</h3>
                <h3 id="biography">Status: ${emp.Status}</h3>
                <h3 id="biography">Biography: ${emp.Biography}</h3>
            </div>`

                output+=`<h4>${emp.Name}</h4>`;
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
        document.getElementById('get_employee_profile').innerHTML=profile;
    });

}
change_names()

function get_jobs_applied()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/pascal/applied',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(job =>{
    
            output+=`<div id="demo_7" class="card"> 
            <h3>Title: ${job.Job_Title}</h3
            <h3>Language: ${job.Stack}</h3>
           </div>`;
        })
        document.getElementById('get_jobs_applied').innerHTML=output;
    });
}
get_jobs_applied()

function get_Jobs()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/jobs',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
            
            output+=`<div id="demo_6" class="card"> 
            <div class="card_type">
                <h3>Title: ${emp.Job_Title}</h3>
                <h3 class="job_date">${emp.Date_Posted}</h3>
            </div>
            <h3>Des: ${emp.Description}</h3>
            <h3>Language: ${emp.Stack}</h3>
            <a href="/employee_apply_job.html"><button id='apply' class="message_btn apply">Apply Now!</button></a>
           </div>`;
        })
        document.getElementById('get_all_jobs').innerHTML=output;
    });
}
get_Jobs()

function get_Employers()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employers',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{

           output+=`<div id="demo_10"> 
            <h3>${emp.Name}</h3>
            <h3>${emp.Username}</h3>
            <h3>${emp.Date_Posted}</h3>
            <h3>${emp.Company}</h3>
            <h3>${emp.Country}</h3>
           </div>`;
        })
        document.getElementById('get_all_employers').innerHTML=output;
    });
}
get_Employers()
