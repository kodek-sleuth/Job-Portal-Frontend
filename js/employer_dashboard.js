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

           output+=`<div id="demo"> 
            <h3>${emp.Name}</h3>
            <h3>${emp.Username}</h3>
            <h3>${emp.Expertise}</h3>
            <h3>${emp.Status}</h3>
            <button id='seeReport'>See Report</button>
            
           </div>`;
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
        
           output+=`<div id="demo_2"> 
            <h3>${job.Job_Title}</h3>
            <h3>${job.Date_Posted}</h3>
            <h3>${job.Stack}</h3>
            <h3>${job.Job_Type}</h3>
           </div>`;
        })
        document.getElementById('get_jobs_posted').innerHTML=output;
    });
}
get_jobs()