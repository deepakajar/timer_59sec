var a=0;
function starttime()
{
    count = setInterval(countstart,1000);
}
function countstart()
{
    if(a==59)
    {
        a=0;
    }
    else
    {
        a++;    
    }
   
    document.getElementById('timercount').innerHTML=a;
    
   
   

}