document.getElementById('employer_login_form').addEventListener('submit', validateForm)

function validateForm(l)
{
    l.preventDefault()
   
    let username = document.getElementById('username_employer_login').value;
    let password = document.getElementById('password_employer_login').value;

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

    if(username.length<3)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Username should have between 5 to 15 characters';
        return false;
    }


    if(username.length>20)
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
        document.getElementsByClassName('button')[0].value='Please wait....'
        
        let username = document.getElementById('username_employer_login').value;
        let password = document.getElementById('password_employer_login').value;
        
        fetch('https://job-portal-online.herokuapp.com/employer/login',{
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
                            
                    sessionStorage.setItem('employer_username', username)
                    document.getElementById('goodFeedBack').innerHTML='You have successfully Logged In';
                    window.location="/employer_dashboard.html"
                }

                else
                {
                    document.getElementsByClassName('button')[0].value='Submit'
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

document.getElementsByClassName('menu_icon_size')[0].addEventListener('click', revert)

function revert()
{
    window.location='/index.html'
}

document.getElementsByClassName('menu_icon_size_resp')[0].addEventListener('click', return_profile)

function return_profile()
{
    window.location="/index.html"
}