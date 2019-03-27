function get_jobs_applied()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/pascal/applied',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(job =>{
    
            output+=`<div id="demo_7"> 
            <h3>${job.Job_Title}</h3
            <h3>${job.Stack}</h3>
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
            
            output+=`<div id="demo_6"> 
            <h3>${emp.Job_Title}</h3>
            <h3>${emp.Date_Posted}</h3>
            <h3>${emp.Description}</h3>
            <h3>${emp.Stack}</h3>
            <button id='apply'>Apply Now!</button>
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
