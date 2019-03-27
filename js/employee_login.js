document.getElementById('employee_login_form').addEventListener('submit', validateForm)


function validateForm(l)
{
    l.preventDefault()
   
    let username = document.getElementById('username_employee_login').value;
    let password = document.getElementById('password_employee_login').value;

    if(username==null||username=='' && password==null||password=='')
    {
        document.getElementById('login').innerHTML='Make sure you filled all Fields';
        return false;
    }

    if(username.length<4)
    {
        $(function()
        {
            
            $('#login').show(500);
        }
        )

        document.getElementById('login').innerHTML='Username should have between 5 to 15 characters';
        return false;
    }


    if(username.length>10)
    {
        $(function()
        {
            
            $('#login').show(500);
        }
        )

        document.getElementById('login').innerHTML='Username should have between 5 to 15 characters';
        return false;
    }

    else
    {
        
        let username = document.getElementById('username_employee_login').value;
        let password = document.getElementById('password_employee_login').value;
        
        sessionStorage.setItem('Username_from_Employee', username)
        
        fetch('http://127.0.0.1:3000/employee/login',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({Username:username, Password:password})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=='You have successfully Logged In')
                {
                    sessionStorage.setItem('employee_username', username)
                    document.getElementById('login').innerHTML='You have successfully Logged In';
                }

                else
                {
                    $(function()
                        {
                            $('#login').show(500);
                            document.getElementById('login').innerHTML='Invalid Password or Username';
                        }
                    )
                }
            })
           
            return true
    }
}