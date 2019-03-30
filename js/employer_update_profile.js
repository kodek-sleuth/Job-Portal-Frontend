document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

document.getElementById('name_employer_update').value=sessionStorage.getItem('employer_upd_name');
document.getElementById('username_employer_update').value=sessionStorage.getItem('employer_upd_username');
document.getElementById('email_employer_update').value=sessionStorage.getItem('employer_upd_email');
document.getElementById('password_employer_update').value=sessionStorage.getItem('employer_upd_password');
document.getElementById('company_employer_update').value=sessionStorage.getItem('employer_upd_company');
document.getElementById('country_employer_update').value=sessionStorage.getItem('employer_upd_country');
document.getElementById('dev_bio_employer_update').value=sessionStorage.getItem('employer_upd_bio');


const username = sessionStorage.getItem('employer_username');



document.getElementById('employer_update').addEventListener('submit', validate_Update_Form)

function validate_Update_Form(e)
{
    e.preventDefault()
    var regex = /\d/;

    const name_employer_update = document.getElementById('name_employer_update').value;
    const username_employer_update = document.getElementById('username_employer_update').value;
    const email_employer_update = document.getElementById('email_employer_update').value;
    const country_employee_update = document.getElementById('country_employer_update').value;
    const password_employer_update = document.getElementById('password_employer_update').value;
    const company_employer_update = document.getElementById('company_employer_update').value;
    const dev_bio_employer_update = document.getElementById('dev_bio_employer_update').value;

    if(regex.test(name_employer_update)==true)
    {
        $(function()
        {
           
            $('#badFeedBack').show(500);
        }
     )

        document.getElementById('badFeedBack').innerHTML='Name Cannot Be Numeric';
        return false;
    
    }

    if(regex.test(company_employer_update)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Country Cannot Be Numeric';
        return false;

    }

    if(regex.test(country_employer_update)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Main Expertise Cannot Be Numeric';
        return false;
    }

    else
    {
        document.getElementsByClassName('button')[0].value='Please wait...'
        
        const name_employer_update = document.getElementById('name_employer_update').value;
        const username_employer_update = document.getElementById('username_employer_update').value;
        const email_employer_update = document.getElementById('email_employer_update').value;
        const country_employer_update = document.getElementById('country_employer_update').value;
        const password_employer_update = document.getElementById('password_employer_update').value;
        const company_employer_update = document.getElementById('company_employer_update').value;
        const dev_bio_employer_update = document.getElementById('dev_bio_employer_update').value;
    
    
        fetch('https://job-portal-online.herokuapp.com/employer/'+username+'/update',{
            method:'PUT',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Name":name_employer_update, "Company":company_employer_update, "Username":username_employer_update, "Email":email_employer_update, "Password":password_employer_update, "Country":country_employer_update, "Company Biography":dev_bio_employer_update})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=='Successfully Updated Profile')
                {
                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
    
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML='Successfully Updated Profile'
                    }
                    )

                    window.location="/employer_login.html"
                    sessionStorage.getItem('employer_upd_name');
                    sessionStorage.removeItem('employer_upd_username');
                    sessionStorage.removeItem('employer_upd_email');
                    sessionStorage.removeItem('employer_upd_password');
                    sessionStorage.removeItem('employer_upd_company');
                    sessionStorage.removeItem('employer_upd_country');
                    sessionStorage.removeItem('employer_upd_bio');
                    sessionStorage.removeItem('employer_username');
                }

                else
                {
                    $(function()
                    {
    
                        $('#badFeedBack').show(500);
                        document.getElementById('badFeedBack').innerHTML='Failed To Update Profile';
                    }
                    )

                    document.getElementsByClassName('button')[0].value='Update'
                }
            })
           
            return true
    }

}


document.getElementsByClassName('menu_icon_size')[0].addEventListener('click', return_profile)

function return_profile()
{
    window.location="/employer_dashboard.html"
}


document.getElementsByClassName('menu_icon_size_resp')[0].addEventListener('click', return_profile)

function return_profile()
{
    window.location="/employer_dashboard.html"
}