function get_messages_from_employee()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employer/inbox/bonnie/received',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_3">
           <div id="demo_3" class="card">
           <div class="card_type">
               <h3 id="subject">Subject: ${mes.Subject}</h3>
               <h4 class="job_date">${mes.Date_Posted}</h4>
           </div>
          <h3 id="description">Des: ${mes.Description}</h3>
          <h3 id="from">From: ${mes.From}</h3>
          <a href="/messaging.html"><button class="message_btn">Reply</button></a>
      </div>`;
        })
        document.getElementById('get_messages_from_employee').innerHTML=output;
    });
}

get_messages_from_employee()

function get_messages_sent_to_employee()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employer/inbox/bonnie/sent',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_3" class="card">
            <div class="card_type">
                <h3 id="subject">Subject: ${mes.Subject}</h3>
                <h3 class="job_date">${mes.Date_Posted}</h3>
            </div>
           <h3 id="description">Des: ${mes.Description}</h3>
           <h3 id="from">To: ${mes.To}</h3>
       </div>`;
        })
        document.getElementById('get_messages_sent_to_employee').innerHTML=output;
    });
}

get_messages_sent_to_employee()