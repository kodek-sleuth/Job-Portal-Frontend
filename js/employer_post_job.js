document.getElementById('employer_post_job').addEventListener('submit', validate_Job_Form)
const db_username_emp = sessionStorage.getItem('Username_from_Employer')


function validate_Job_Form(f)
{
    f.preventDefault()
    var regex = /\d/;

    const job_title = document.getElementById('job_title').value;
    const job_description = document.getElementById('job_description').value;
    const job_main_stack = document.getElementById('job_main_stack').value;
    const job_other_stacks = document.getElementById('job_other_stacks').value;
    const job_type = document.getElementById('job_type').value;
        

    if(job_title==null||job_title=='' && job_description==null||job_description=='' && job_main_stack==null|| job_main_stack=='' && job_other_stacks==null|| job_other_stacks=='' && job_type==null|| job_type=='')
    {
        $(function()
            {
               
                $('#feedBack').show(500);
            }
        )
        document.getElementById('feedBack').innerHTML='Make sure you filled all Fields';
    }
   
    else
    {
        
        const job_title = document.getElementById('job_title').value;
        const job_description = document.getElementById('job_description').value;
        const job_main_stack = document.getElementById('job_main_stack').value;
        const job_other_stacks = document.getElementById('job_other_stacks').value;
        const job_type = document.getElementById('job_type').value;
    
        fetch('http://127.0.0.1:3000/employer/'+db_username_emp+'/post',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({"Job Title":job_title, "Job Description":job_description, "Main Skill":job_main_stack, "Other Skills":job_other_stacks, "Job Type":job_type})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message== "You have successfully Posted Job")
                {
                    document.getElementById('feedBack').style.display='none';
                    $(function()
                    {
    
                        $('#feedBack').show(500);
                        document.getElementById('feedBack').innerHTML='You have successfully Posted Job'
                    }
                    )
                }
            })
           
            return true
    }

}