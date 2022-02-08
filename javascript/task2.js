const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function()
{
if(request.status==200)
{
    var Data = JSON.parse(request.responseText)
    const pop=Data.filter((element)=>{
        return element.population<200000;
    })
    console.log(pop);}
else{
    request.onerror=function(){
        console.log("error") }}
}