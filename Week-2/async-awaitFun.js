async function fetchUsers()
{
    try{

        const resp = await fetch('https://reqres.in/api/users?');

        const output = await resp.json();

        let arr=[];
    
        output.data.map((r)=> arr.push(r));
    
        console.log("My local array using async-await function");

        console.table(JSON.stringify(arr));

    }
    catch(e)
    {
      console.log("Oh No!!! Error is occured");    
    }
    
  
}