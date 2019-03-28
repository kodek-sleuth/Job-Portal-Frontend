document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

document.getElementById('employer_sign_up').addEventListener('submit', validate_Employer_Form)
function validate_Employer_Form(f)
{
    f.preventDefault()
    var regex = /\d/;

    const name_emp = document.getElementById('name_emp').value;
    const username_emp = document.getElementById('username_emp').value;
    const email_emp = document.getElementById('email_emp').value;
    const password_emp = document.getElementById('password_emp').value;
    const country_emp = document.getElementById('country_emp').value;
    const company_emp = document.getElementById('company_emp').value;
    const dev_bio_emp = document.getElementById('dev_bio_emp').value;

    if(name_emp==null||name_emp=='' && username_emp==null||username_emp=='' && email_emp==null||email_emp=='' && password_emp==null|| password_emp=='' && company_emp==null||company_emp=='' && country_emp==null|| country_emp=='' && dev_bio_emp==null|| dev_bio_emp=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
    }

    if(regex.test(name_emp)==true)
    {
        $(function()
        {
           
            $('#badFeedBack').show(500);
        }
     )

        document.getElementById('badFeedBack').innerHTML='Name Cannot Be Numeric';
        return false;
    
    }

    if(regex.test(company_emp)==true)
    {
        $(function()
        {
           
            $('#badFeedBack').show(500);
        }
     )

        document.getElementById('badFeedBack').innerHTML='Company Cannot Be Numeric';
        return false;
    
    }

   
    if(username_emp.length<4)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Username is Too Short/Empty';
        return false;
    }

    if(regex.test(country_emp)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Country Cannot Be Numeric';
        return false;

    }


    else
    {
        
    const name_emp = document.getElementById('name_emp').value;
    const username_emp = document.getElementById('username_emp').value;
    const email_emp = document.getElementById('email_emp').value;
    const password_emp = document.getElementById('password_emp').value;
    const country_emp = document.getElementById('country_emp').value;
    const company_emp = document.getElementById('company_emp').value;
    const dev_bio_emp = document.getElementById('dev_bio_emp').value;

    
        fetch('https://job-portal-online.herokuapp.com/employer/signup',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Name":name_emp, "Username":username_emp, "Email":email_emp, "Password":password_emp, "Country":country_emp, "Company":company_emp, "Company Biography":dev_bio_emp})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=='You have successfully Created an Employer account')
                {                    
                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
    
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML='Successfully Signed Up'
                    }
                    )

                    window.location="/employer_login.html"
                }
            })
           
            return true
    }

}

document.getElementsByClassName('menu_icon_size')[0].addEventListener('click', revert)

function revert()
{
    window.location='/index.html'
}