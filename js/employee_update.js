document.getElementById('employee_update').addEventListener('submit', validate_Update_Form)
const db_Username_employee=sessionStorage.getItem('Username_from_Employee')


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
    const other_stacks_employee_update = document.getElementById('other_stacks_employee_update').value;
    const work_status_employee_update = document.getElementById('work_status_employee_update').value;
    const dev_bio_employee_update = document.getElementById('dev_bio_employee_update').value;

    if(regex.test(name_employee_update)==true)
    {
        $(function()
        {
           
            $('#feedBack').show(500);
        }
     )

        document.getElementById('feedBack').innerHTML='Name Cannot Be Numeric';
        return false;
    
    }

    if(regex.test(work_status_employee_update)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Work Cannot Be Numeric';
        return false;

    }


    if(regex.test(other_stacks_employee_update)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Other Skills Cannot Be Numeric';
        return false;

    }


    if(regex.test(country_employee_update)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Country Cannot Be Numeric';
        return false;

    }

    if(regex.test(main_stack_employee_update)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Main Expertise Cannot Be Numeric';
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
        const other_stacks_employee_update = document.getElementById('other_stacks_employee_update').value;
        const work_status_employee_update = document.getElementById('work_status_employee_update').value;
        const dev_bio_employee_update = document.getElementById('dev_bio_employee_update').value;
    
    
        fetch('http://127.0.0.1:3000/employee/'+db_Username_employee+'/update',{
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
                    document.getElementById('feedBack').style.display='none';
                    $(function()
                    {
    
                        $('#feedBack').show(500);
                        document.getElementById('feedBack').innerHTML='Successfully Updated Profile'
                    }
                    )
                }
            })
           
            return true
    }

}