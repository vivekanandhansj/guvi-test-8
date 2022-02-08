const request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()

request.onload = function()
{
if(request.status==200)
{
    var countryData=JSON.parse(request.responseText);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}}