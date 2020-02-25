var Number=new Array();

function InsertNumberIntoArray()
{
for(let i=0;i<=100;i++)
{
    Number.push(i);
}
    console.log(Number);
}

function DisplayContentsOfTheArray()
{
    for(let i=0;i<=100;i++)
    {
        Number.push(i);
    }

    for(let i=0;i<Number.length;i++)
    {
        console.log(Number[i]);
    }
}

