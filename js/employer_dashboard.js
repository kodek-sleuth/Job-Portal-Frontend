const db_Employer_Username=localStorage.getItem('Username_from_Employer')

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
               <button class="message_btn">Message</button>
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
  
    fetch('http://127.0.0.1:3000/employee/'+db_Employer_Username+'/posted',{
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

