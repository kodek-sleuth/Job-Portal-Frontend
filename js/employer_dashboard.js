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
               <h4>Name: ${emp.Name}</h4>
               <h4>Expertise: ${emp.Expertise}</h4>
               <h4>Username: ${emp.Username}</h4>
               <h4>Work Status: ${emp.Status}</h4>
               <a href="/messaging.html"><button class="message_btn">Message</button></a>
           </div>
       `;
        })
        document.getElementById('get_employees').innerHTML=output;
    });
}
get_Employees()

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


