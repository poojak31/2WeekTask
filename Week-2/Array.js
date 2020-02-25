var Numbers=new Array();

function insertNumbersIntoArray()
{
for(let i=0;i<=100;i++)
{
Numbers.push(i);
}
console.log(Numbers);
}

function displayContentsOfTheArray()
{

for(let i=0;i<Numbers.length;i++)
{
    console.log(Numbers[i]);
}

}

