document.getElementById('employee_update').addEventListener('submit', validate_Update_Form)
document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';



document.getElementById('name_employee_update').value=sessionStorage.getItem('employee_upd_name');
document.getElementById('username_employee_update').value=sessionStorage.getItem('employee_upd_username');
document.getElementById('email_employee_update').value=sessionStorage.getItem('employee_upd_email');
document.getElementById('password_employee_update').value=sessionStorage.getItem('employee_upd_password');
document.getElementById('main_stack_employee_update').value=sessionStorage.getItem('employee_upd_expertise');
document.getElementById('country_employee_update').value=sessionStorage.getItem('employee_upd_country');
document.getElementById('dev_bio_employee_update').value=sessionStorage.getItem('employee_upd_bio');
document.getElementById('other_skills_employee_update').value=sessionStorage.getItem('employee_upd_other_skills');
document.getElementById('work_status_employee_update').value=sessionStorage.getItem('employee_upd_status');

const username = sessionStorage.getItem('employee_username');


function validate_Update_Form(e)
{
    e.preventDefault()
    var regex = /\d/;

    const name_employee_update = document.getElementById('name_employee_update').value;
    const username_employee_update = document.getElementById('username_employee_update').value;
    const email_employee_update = document.getElementById('email_employee_update').value;
    const password_employee_update = document.getElementById('password_employee_update').value;
    const country_employee_update = document.getElementById('country_employee_update').value;
    const main_stack_employee_update = document.getElementById('main_stack_employee_update').value;
    const other_stacks_employee_update = document.getElementById('other_skills_employee_update').value;
    const work_status_employee_update = document.getElementById('work_status_employee_update').value;
    const dev_bio_employee_update = document.getElementById('dev_bio_employee_update').value;

    if(regex.test(name_employee_update)==true)
    {
        $(function()
        {
           
            $('#badFeedBack').show(500);
        }
     )

        document.getElementById('badFeedBack').innerHTML='Name Cannot Be Numeric';
        return false;
    
    }

    if(regex.test(work_status_employee_update)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Work Cannot Be Numeric';
        return false;

    }


    if(regex.test(other_stacks_employee_update)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Other Skills Cannot Be Numeric';
        return false;

    }


    if(regex.test(country_employee_update)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Country Cannot Be Numeric';
        return false;

    }

    if(regex.test(main_stack_employee_update)==true)
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
        
        const name_employee_update = document.getElementById('name_employee_update').value;
        const username_employee_update = document.getElementById('username_employee_update').value;
        const email_employee_update = document.getElementById('email_employee_update').value;
        const password_employee_update = document.getElementById('password_employee_update').value;
        const country_employee_update = document.getElementById('country_employee_update').value;
        const main_stack_employee_update = document.getElementById('main_stack_employee_update').value;
        const other_stacks_employee_update = document.getElementById('other_skills_employee_update').value;
        const work_status_employee_update = document.getElementById('work_status_employee_update').value;
        const dev_bio_employee_update = document.getElementById('dev_bio_employee_update').value;
    
    
        fetch('http://127.0.0.1:3000/employee/'+username+'/update',{
            method:'PUT',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Name":name_employee_update, "Username":username_employee_update, "Email":email_employee_update, "Password":password_employee_update, "Country":country_employee_update, "Main Expertise":main_stack_employee_update, "Other Skills":other_stacks_employee_update, "Developer Biography":dev_bio_employee_update, "Work Status":work_status_employee_update})
    
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

                    window.location="/employee_login.html"
                    sessionStorage.removeItem('employee_upd_name');
                    sessionStorage.removeItem('employee_upd_username');
                    sessionStorage.removeItem('employee_upd_email');
                    sessionStorage.removeItem('employee_upd_password');
                    sessionStorage.removeItem('employee_upd_expertise');
                    sessionStorage.removeItem('employee_upd_country');
                    sessionStorage.removeItem('employee_upd_bio');
                    sessionStorage.removeItem('employee_upd_other_skills');
                    sessionStorage.removeItem('employee_upd_status');

                    sessionStorage.removeItem('employee_username');
                }
            })
           
            return true
    }

}

document.getElementsByClassName('menu_icon_size')[0].addEventListener('click', return_profile)

function return_profile()
{
    window.location="/employee_dashboard.html"
}

document.getElementsByClassName('menu_icon_size_resp')[0].addEventListener('click', return_profile)

function return_profile()
{
    window.location="/employee_dashboard.html"
}