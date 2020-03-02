function getUsers()
{
    getUsersDetails(usersInformation);
}

async function getUsersDetails(callback)
{ 
const resp = await fetch('https://reqres.in/api/users?');
output = await resp.json();
callback(output); 
} 

function usersInformation(output)
{
 try
 {
  const arr=[];

  output.data.map((d)=> arr.push(d));

  console.log("My local array using callback function");

  console.log(JSON.stringify(arr));
}
catch
{
    console.log("Oh No!!! Error is occured");
}
}


