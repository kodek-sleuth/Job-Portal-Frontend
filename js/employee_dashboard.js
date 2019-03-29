const username = sessionStorage.getItem('employee_username')

if(username==''||username==null)
{
    window.location="/index.html"
}

document.getElementsByClassName('logout')[0].addEventListener('click', logout)
function logout()
{
    sessionStorage.removeItem('employee_username')
    window.location='/index.html'
}

document.getElementsByClassName('nav_message')[0].addEventListener('click', change_to_message)
function change_to_message()
{
    window.location='/message_employee.html'
}


function change_names()
{
    document.getElementById('welcome_user').innerHTML='Welcome back to your Dashboard '+username;

    let output='';
  
    fetch('https://job-portal-online.herokuapp.com/employees',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
            if(emp.Username==username)
            {
                output+=`<h4>${emp.Name}</h4>`;
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
    });

}
change_names()

function get_Jobs()
{
    let output='';
  
    fetch('https://job-portal-online.herokuapp.com/jobs',{
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