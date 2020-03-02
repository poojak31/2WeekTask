function fetchDetails(url) {
   
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
  
      req.onload = function() {
    
        if (req.status == 200) {
          resolve(req.response);
        }
        else {
          reject(Error(req.statusText));
        }
      }
          req.send();
    });
  }

  function promiseFun() {
    fetchDetails('https://reqres.in/api/users?').then(function(response) {
    
        try{

            let arr=[];
    
            arr = JSON.parse(response).data;

            console.log("My local array using promise function");
    
            console.log(JSON.stringify(arr));
    
        }
        catch(e)
        {
            console.log("Oh No!!! Error is occured");    
        }

       }
    
    )
  }
