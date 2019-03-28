document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

document.getElementById('employer_login_form').addEventListener('submit', validateForm)

function validateForm(l)
{
    l.preventDefault()
   
    let username = document.getElementById('username_employee_login').value;
    let password = document.getElementById('password_employee_login').value;

    if(username==null||username=='' && password==null||password=='')
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
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

    else
    {
        
        let username = document.getElementById('username_employee_login').value;
        let password = document.getElementById('password_employee_login').value;
        
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
                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
            
                        $('#goodFeedBack').show(500);
                    }
                    )
                            
                    sessionStorage.setItem('employee_username', username)
                    document.getElementById('goodFeedBack').innerHTML='You have successfully Logged In';
                    window.location="/employee_dasboard.html"
                }

                else
                {
                    $(function()
                        {
                            $(function()
                            {
                    
                                $('#badFeedBack').show(500);
                            }
                            )
                            
                            document.getElementById('badFeedBack').innerHTML='Invalid Password or Username';
                        }
                    )
                }
            })
           
            return true
    }
}