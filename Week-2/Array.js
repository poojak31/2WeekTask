const Numbers=new Array();

for(let i=0;i<=100;i++)
{
    Numbers.push(i);
}
function insertNumbers()
{
    console.log(Numbers);
}

function displayContents()
{
    for(let i=0;i<Numbers.length;i++)
    {
        console.log(Numbers[i]);
    }
}

const dualDivisibleNumbers=[];

function checkArray()
{  
    for(let i=0;i<Numbers.length;i++)
{
    if(isFizzBuzz(i))
    {
        console.log("Fizz Buzz");
        dualDivisibleNumbers.push(i);
        console.log(dualDivisibleNumbers);
    }
    else if(isFizz(i))
    {
        console.log("Fizz");
    }
    else if(isBuzz(i))
    {
    console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}
}


    function  isFizzBuzz(i)
{
    if(i%3===0 && i%5===0)
    {
    return true;
    }
    else
    {
        return false;
    }
}


    function  isFizz(i)
{
    if(i%3===0)
    {
    return true;
    }
    else
    {
        return false;
    }
}



function  isBuzz(i)
{
    if(i%5===0)
    {
      return true;
    }
    else
    {
       return false;
    }
}


 

  