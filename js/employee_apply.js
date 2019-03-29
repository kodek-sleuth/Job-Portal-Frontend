document.getElementById('goodFeedBack').style.display='none';
document.getElementById('badFeedBack').style.display='none';

const username = sessionStorage.getItem('employee_username')

document.getElementById('employer_login_form').addEventListener('click', validate_Employer_Form)

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
        const title = document.getElementById('job_title').value;

        fetch('https://job-portal-online.herokuapp.com/employee/'+username+'/apply',{
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
                        window.location="/employee_dashboard.html"
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
    window.location='/employee_dashboard.html'
}