document.querySelector("#logsub").addEventListener("click",()=>{

    
let emailid = document.querySelector("#email").value;
let password = document.querySelector("#pass").value;

fetch (`http://localhost:3000/data`)
.then((res)=>{
    return res.json()
})
.then((Res)=>{
   getdata(Res)
})
.catch((err)=>{
    console.log(err)
})



function getdata(arr){
    let ans = arr.filter((el)=>{
        if(emailid == el.email && password == el.pass){
            return el
        }
    })

        if(ans.length > 0){
            alert("login susccess !!")
        }
        
        else{
            alert("login faild !!")
        }
    }
    
})



