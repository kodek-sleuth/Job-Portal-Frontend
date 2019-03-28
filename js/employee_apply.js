document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

const username = sessionStorage.getItem('employee_username')

function validate_Employer_Form(f)
{
    f.preventDefault()
    var regex = /\d/;

    const title = document.getElementById('job_title').value;
    

    if(title==null||title=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
    }

    else
    {
        const title = document.getElementById('title').value;

        fetch('http://127.0.0.1:3000/employee/'+username+'/apply',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Job Title":title})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=="You Have Successfully Applied For This Job")
                {
                    document.getElementById('badFeedBack').style.display='none';
                    $(function()
                    {
    
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML="You Have Successfully Applied For This Job"
                    }
                    )

                    window.location="/employee_dashboard.html"
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