document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

document.getElementById('message').addEventListener('submit', validate_Employer_Form)

function validate_Employer_Form(f)
{
    f.preventDefault()
    var regex = /\d/;

    const the_username = document.getElementById('the_username_message').value;
    const from_username = document.getElementById('from_username').value;
    const message_text = document.getElementById('message_text').value;
    const subject = document.getElementById('subject').value;
        

    if(subject==null||subject=='' && message_text==null||message_text=='' && the_username==null||the_username=='' && from_username==null||from_username=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
    }
   
    if(the_username.length<4)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Username should have between 5 to 15 characters';
        return false;
    }

    if(from_username.length<4)
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
        const the_username = document.getElementById('the_username_message').value;
        const from_username = document.getElementById('from_username').value;
        const message_text = document.getElementById('message_text').value;
        const subject = document.getElementById('subject').value;
    
        fetch('http://127.0.0.1:3000/employer/inbox',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Description":message_text, "Subject":subject, "To <Username>":the_username, "From":from_username})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=="Successfully Sent Message To "+the_username)
                {
                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
    
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML='Successfully Sent Message To '+the_username
                    }
                    )
                }
            })
           
            return true
    }

}