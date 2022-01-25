

const body=document.querySelector("body");

function submitData(firstName,email){
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: firstName,
          email: email
        }),
      };
      return fetch("http://localhost:3000/users",configurationObject)
      .then(res=>res.json())
      .then(body=>addToBody(body.id))
      .catch(err=>{
        alert("Unathorized Accesss")
        body.append(err.message)
      })
      
}

function addToBody(newId){
    body.innerHTML=newId;
    //body.append(err.message);
}

