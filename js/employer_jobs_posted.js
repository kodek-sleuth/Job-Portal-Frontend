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
            </div>`

                output+=`<h4>${emp.Name}</h4>`;
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
    });

}
change_names()


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
