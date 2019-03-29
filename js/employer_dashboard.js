const username = sessionStorage.getItem('employer_username')

if(username==''||username==null)
{
    window.location="/employer_login.html"
}

document.getElementsByClassName('logout')[0].addEventListener('click', logout)
function logout()
{
    sessionStorage.removeItem('employer_username')
    window.location='/index.html'
}

document.getElementsByClassName('nav_message')[0].addEventListener('click', change_to_message)
function change_to_message()
{
    window.location='/messaging.html'
}

function change_names()
{
    document.getElementById('welcome_user').innerHTML='Welcome back to your Dashboard '+username;

    let output='';
    let profile=''
  
    fetch('https://job-portal-online.herokuapp.com/employers',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
            if(emp.Username==username)
            {
                profile+=`<div id="demo" class="card">
                <h4 id="name">Name: ${emp.Name} </h4>
                <h4 id="expertise">Username: ${emp.Username} </h>
                <h4 id="username">Company: ${emp.Company}</h4>
                <h4 id="work_status">Country: ${emp.Country} </h4>
                <h4 id="company">Biography: ${emp.Biography}</h4>
                <h4 id="biography">Member Since: ${emp.Member_Since}</h4>
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
  
    fetch('https://job-portal-online.herokuapp.com/employees',{
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
  
    fetch('https://job-portal-online.herokuapp.com/employee/'+username+'/posted',{
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

document.getElementById('search_employee').addEventListener('submit', search_employees)
function search_employees(e)
{
    e.preventDefault()
    let output = ''
    var result=document.getElementById('search').value;
    fetch('http://127.0.0.1:3000/empoyeer/employees',{
        method: 'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
          
        body:JSON.stringify({"Username":result})
        })
        .then((response)=> response.json())
        .then((data)=>{ 

            document.getElementById('name').innerHTML='Name: ' +data.Name;  
            document.getElementById('expertise').innerHTML='Expertise: ' +data.Expertise;
            document.getElementById('username').innerHTML='Username: ' +data.Username;
            document.getElementById('status').innerHTML='Work Status: ' +data.Status;
        });   
        
        
}

document.getElementById('to_messaging').addEventListener('click', time_for_message)

function time_for_message()
{
    window.location='/messaging.html'
}

function get_Employees_csharp()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employees',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
           if(emp.Expertise=='Java')
           {
                output+=`
                <div id="demo" class="card">
                    <h4 id="name">Name: ${emp.Name}</h4>
                    <h4 id="expertise">Expertise: ${emp.Expertise}</h4>
                    <h4 id="username">Username: ${emp.Username}</h4>
                    <h4 id="work_status">Work Status: ${emp.Status}</h4>
                    <a href="/messaging.html"><button class="message_btn">Message</button></a>
                </div>`;
                document.getElementById('get_employees_csharp').innerHTML=output;
           }
           
        })
        
    });
}
get_Employees_csharp()






