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



function get_Employees_csharp()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employees',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
           if(emp.Expertise=='Csharp')
           {
                output+=`
                <div id="demo" class="card">
                    <h4>Name: ${emp.Name}</h4>
                    <h4>Expertise: ${emp.Expertise}</h4>
                    <h4>Username: ${emp.Username}</h4>
                    <h4>Work Status: ${emp.Status}</h4>
                    <a href="/messaging.html"><button class="message_btn">Message</button></a>
                </div>`;
                document.getElementById('get_employees_csharp').innerHTML=output;
           }
           
        })
        
    });
}
get_Employees_csharp()
