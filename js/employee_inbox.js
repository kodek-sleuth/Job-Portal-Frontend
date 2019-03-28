function get_messages_from_employer()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/inbox/pascal/received',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_8">
           <h3 id="from">${mes.From}</h3>
           <h3 id="date">${mes.Date_Posted}</h3>
           <h3 id="subject">${mes.Subject}</h3>
           <h3 id="description">${mes.Description}</h3>
           <button>Reply</button>
       </div>`;
        })
        document.getElementById('get_messages_from_employer').innerHTML=output;
    });
}

get_messages_from_employer()

function get_messages_sent_to_employer()
{
    let output='';
  
    fetch('http://127.0.0.1:3000/employee/inbox/pascal/sent',{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(mes =>{
        
           output+=`<div id="demo_9">
           <h3 id="from">${mes.To}</h3>
           <h3 id="date">${mes.Date_Posted}</h3>
           <h3 id="subject">${mes.Subject}</h3>
           <h3 id="description">${mes.Description}</h3>
       </div>`;
        })
        document.getElementById('get_messages_sent_to_employer').innerHTML=output;
    });
}

get_messages_sent_to_employer()