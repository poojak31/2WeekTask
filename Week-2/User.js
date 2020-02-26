const users=[];


function addUser()
{
  const firstName=document.getElementById('fname');
  const lastName=document.getElementById('lname');
  const dOb=document.getElementById('dob');

   console.log(users);
   
   users.push
   ({
    firstname:firstName.value,
    lastname:lastName.value,
    dob:dOb.value
  });

   console.table(users);
} 



