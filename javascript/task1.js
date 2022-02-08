const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function()
{
if(request.status==200)
{
    let country = JSON.parse(request.responseText)
    const asia=country.filter((element)=>{
        if(element.region==="Asia"){
            return element.name;}
     })
     console.log(asia);
}
else{
    request.onerror=function(){
        console.log("error")
    }}
}