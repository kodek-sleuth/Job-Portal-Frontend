document.getElementById('employer_update').addEventListener('submit', validate_Update_Form)
const db_Username_employer=sessionStorage.getItem('Username_from_Employer')


function validate_Update_Form(e)
{
    e.preventDefault()
    var regex = /\d/;

    const name_employer_update = document.getElementById('name_employer_update').value;
    const username_employer_update = document.getElementById('username_employer_update').value;
    const email_employer_update = document.getElementById('email_employer_update').value;
    const country_employee_update = document.getElementById('country_employee_update').value;
    const password_employer_update = document.getElementById('password_employer_update').value;
    const company_employer_update = document.getElementById('company_employer_update').value;
    const dev_bio_employer_update = document.getElementById('dev_bio_employer_update').value;

    if(regex.test(name_employer_update)==true)
    {
        $(function()
        {
           
            $('#feedBack').show(500);
        }
     )

        document.getElementById('feedBack').innerHTML='Name Cannot Be Numeric';
        return false;
    
    }

    if(regex.test(company_employer_update)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Country Cannot Be Numeric';
        return false;

    }

    if(regex.test(country_employer_update)==true)
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
        
        const name_employer_update = document.getElementById('name_employer_update').value;
        const username_employer_update = document.getElementById('username_employer_update').value;
        const email_employer_update = document.getElementById('email_employer_update').value;
        const country_employer_update = document.getElementById('country_employer_update').value;
        const password_employer_update = document.getElementById('password_employer_update').value;
        const company_employer_update = document.getElementById('company_employer_update').value;
        const dev_bio_employer_update = document.getElementById('dev_bio_employer_update').value;
    
    
        fetch('http://127.0.0.1:3000/employer/'+db_Username_employer+'/update',{
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