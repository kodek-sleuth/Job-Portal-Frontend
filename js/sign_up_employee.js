document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

document.getElementById('employee_sign_up').addEventListener('submit', validate_Employee_Form)

function validate_Employee_Form(e)
{
    e.preventDefault()
    var regex = /\d/;

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
    const main_stack = document.getElementById('main_stack').value;
    const other_stacks = document.getElementById('other_stacks').value;
    const work_status = document.getElementById('work_status').value;
    const dev_bio = document.getElementById('dev_bio').value;

    if(name==null||name=='' && username==null||username=='' && email==null||email=='' && password==null|| password=='' && country==null||country=='' && main_stack==null|| main_stack=='' && other_stacks==null|| other_stacks=='' && work_status==null|| work_status=='' && dev_bio==null|| dev_bio=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
    }

    if(regex.test(name)==true)
    {
        $(function()
        {
           
            $('#badFeedBack').show(500);
        }
     )

        document.getElementById('badFeedBack').innerHTML='Name Cannot Be Numeric';
        return false;
    
    }

    if(regex.test(work_status)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Work Cannot Be Numeric';
        return false;

    }


    if(regex.test(other_stacks)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Other Skills Cannot Be Numeric';
        return false;

    }

    if(username.length<4)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Username should have between 5 to 15 characters';
        return false;
    }

    if(regex.test(country)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Country Cannot Be Numeric';
        return false;

    }

    if(regex.test(main_stack)==true)
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
        
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const country = document.getElementById('country').value;
        const main_stack = document.getElementById('main_stack').value;
        const other_stacks = document.getElementById('other_stacks').value;
        const work_status = document.getElementById('work_status').value;
        const dev_bio = document.getElementById('dev_bio').value;
    
        fetch('http://127.0.0.1:3000/employee/signup',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Name":name, "Username":username, "Email":email, "Password":password, "Country":country, "Main Expertise":main_stack, "Other Skills":other_stacks, "Developer Biography":dev_bio, "Work Status":work_status})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=='You have successfully Created an Employee account')
                {
                   
                    localStorage.setItem('dbName', name)
                    localStorage.setItem('dbUsername', username)
                    localStorage.setItem('dbPassword', password)
                    localStorage.setItem('dbStatus', status)
                    localStorage.setItem('dbCountry', country)
                    localStorage.setItem('dbEmail', email)
                    localStorage.setItem('dbDevBio', dev_bio)
                    localStorage.setItem('dbOthers', other_stacks)
                    localStorage.setItem('dbSkill', main_stack)


                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
    
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML='Successfully Signed Up'
                    }
                    )
                }
            })
           
            return true
    }

}