var Numbers=new Array();

function insertNumbersInArray()
{
for(let i=0;i<=100;i++)
{
Numbers.push(i);
}
console.log(Numbers);
}

function displayContentsOfArray()
{

for(let i=0;i<Numbers.length;i++)
{
console.log(Numbers[i]);
}

}

function checkArray(Numbers)
{
for(let i=0;i<=Numbers;i++)
{
if(i%3===0 && i%5===0)
{
console.log("Fizz Buzz");
}
else if(i%3===0)
{
console.log("Fizz");
}
else if(i%5===0)
{
console.log("Buzz");
}
else{
console.log(i);
}  
}
}

