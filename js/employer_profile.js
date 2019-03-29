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
  
    fetch('http://127.0.0.1:3000/employers',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(emp =>{
            if(emp.Username==username)
            {
                profile+=`<div id="demo" class="card">
                <h4>Name: ${emp.Name}</h4>
                <h4>Username: ${emp.Username}</h4>
                <h4>Email: ${emp.Email}</h4>
                <h4>Country: ${emp.Country}</h4>
                <h4>Company: ${emp.Company}</h4>
                <h4>Email: ${emp.Password}</h4>
                <h4>Biography: ${emp.Biography}</h4>

                <a href="/employer_update_form.html"><button class="update_profile_btn">Update Profile</button></a>
            </div>`

                output+=`<h4>${emp.Name}</h4>`;

                var employer_upd_Name=emp.Name
                var employer_upd_Username=emp.Username
                var employer_upd_Company=emp.Company
                var employer_upd_Country=emp.Country
                var employer_upd_Email=emp.Email
                var employer_upd_Password=emp.Password
                var employer_upd_Bio=emp.Biography

                sessionStorage.setItem('employer_upd_name', employer_upd_Name)
                sessionStorage.setItem('employer_upd_username', employer_upd_Username)
                sessionStorage.setItem('employer_upd_email', employer_upd_Email)
                sessionStorage.setItem('employer_upd_company', employer_upd_Company)
                sessionStorage.setItem('employer_upd_country', employer_upd_Country)
                sessionStorage.setItem('employer_upd_bio', employer_upd_Bio)
                sessionStorage.setItem('employer_upd_password', employer_upd_Password)
            }
        })
        document.getElementsByClassName('name_of_user')[0].innerHTML=output;
        document.getElementById('get_employer_profile').innerHTML=profile;
    });

}
change_names()