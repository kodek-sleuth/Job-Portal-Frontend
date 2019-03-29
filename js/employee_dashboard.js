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
                profile+=`<div id="demo" class="card">
                <h3 id="name">Name: ${emp.Name} </h3>
            </div>`

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






document.getElementById('search_employee').addEventListener('submit', search_employers)
function search_employers(e)
{
    e.preventDefault()
    let output = ''
    var result=document.getElementById('search').value;
    fetch('http://127.0.0.1:3000/employers',{
        method: 'GET'
        })
        .then((response)=> response.json())
        .then((data)=>{ 
            data.forEach(emp =>{
                if(emp.Username==result)
                {
                    output+=`<div id="demo_15" class="card">
                        <h4 id="name">Name: ${emp.Name}</h4>
                        <h4 id="expertise">Company: ${emp.Company}</h4>
                        <h4 id="username">Username: ${emp.Username}</h4>
                        <h4 id="status">Member_Since: ${emp.Member_Since}</h4>
                        <button class="message_btn" id="">Message: </button>
                    </div>`
                }
                
            })

            document.getElementById('get_employers_search').innerHTML=output
        });   
    
        
}

