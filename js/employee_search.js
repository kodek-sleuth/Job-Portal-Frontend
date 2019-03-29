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

document.getElementById('search_employee').addEventListener('submit', search_employers)
function search_employers(e)
{
    e.preventDefault()
    let output = ''
    var result=document.getElementById('search').value;
    fetch('https://job-portal-online.herokuapp.com/employers',{
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

