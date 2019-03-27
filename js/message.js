document.getElementById('message').addEventListener('submit', validate_Employer_Form)
const db_username = sessionStorage.getItem('Username_from_Employer')


function validate_Employer_Form(f)
{
    f.preventDefault()
    var regex = /\d/;

    const the_username = document.getElementById('the_username_message').value;
    const message_text = document.getElementById('message_text').value;
    const subject = document.getElementById('subject').value;
        

    if(message_text==null||message_text=='' && the_username==null||the_username=='')
    {
        $(function()
            {
               
                $('#feedBack').show(500);
            }
        )
        document.getElementById('feedBack').innerHTML='Make sure you filled all Fields';
    }
   
    if(username_emp.length<4)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Username should have between 5 to 15 characters';
        return false;
    }
    

    else
    {
        
        const the_username = document.getElementById('the_username_message').value;
        const message_text = document.getElementById('message_text').value;
        const subject = document.getElementById('subject').value;
    
        fetch('http://127.0.0.1:3000/employer/'+db_username+'/inbox',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Description":message_text, "Subject":subject, "To <Username>":the_username})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message== "Successfully Sent Message To "+the_username)
                {
                    document.getElementById('feedBack').style.display='none';
                    $(function()
                    {
    
                        $('#feedBack').show(500);
                        document.getElementById('feedBack').innerHTML='Successfully Sent Message To '+the_username
                    }
                    )
                }
            })
           
            return true
    }

}