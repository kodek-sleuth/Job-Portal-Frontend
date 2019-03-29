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
    let profile=''
  
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
                <h3 id="expertise">Username: ${emp.Username} </h3>
                <h3 id="username">Email: ${emp.Email}</h3>
                <h3 id="work_status">Country: ${emp.Country} </h3>
                <h3 id="company">Expertise: ${emp.Expertise}</h3>
                <h3 id="biography">Other Skills: ${emp.Other_Skills}</h3>
                <h3 id="biography">Status: ${emp.Status}</h3>
                <h3 id="biography">Biography: ${emp.Biography}</h3>
                <a href="/employee_update_form.html"><button class="update_profile_btn">Update Profile</button></a>
            </div>`

                output+=`<h4>${emp.Name}</h4>`;

                var employee_upd_Name=emp.Name
                var employee_upd_Username=emp.Username
                var employee_upd_Expertise=emp.Expertise
                var employee_upd_Country=emp.Country
                var employee_upd_Email=emp.Email
                var employee_upd_Password=emp.Password
                var employee_upd_Bio=emp.Biography
                var employee_upd_Status=emp.Status
                var employee_upd_Other_Skills=emp.Other_Skills

                sessionStorage.setItem('employee_upd_name', employee_upd_Name)
                sessionStorage.setItem('employee_upd_username', employee_upd_Username)
                sessionStorage.setItem('employee_upd_email', employee_upd_Email)
                sessionStorage.setItem('employee_upd_country', employee_upd_Country)
                sessionStorage.setItem('employee_upd_expertise', employee_upd_Expertise)
                sessionStorage.setItem('employee_upd_bio', employee_upd_Bio)
                sessionStorage.setItem('employee_upd_password', employee_upd_Password)
                sessionStorage.setItem('employee_upd_status', employee_upd_Status)
                sessionStorage.setItem('employee_upd_other_skills', employee_upd_Other_Skills)
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
        document.getElementById('get_employee_profile').innerHTML=profile;
    });

}
change_names()