
document.getElementById("searchbutton").onclick = function () {
               var query = document.getElementById("queryvalues").value;
             
               var link = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=" + query + "&site=stackoverflow";

               fetch(link).then(function (response) {
                   // Convert to JSON
                   return response.json();
               }).then(function (j) {
                   // JavaScript object
                   var data = [];
                   data = j;
                   for (var i in data.items) {

                     //  if (data.items[i].is_answered == true) {
                           document.write("User number serial number: " + i +'<br></br>');
                           document.write("UserName: " + data.items[i].owner.display_name + '<br></br>');
                           document.write("UserID: " + data.items[i].owner.user_id + '<br></br>');
                           document.write("Query Title: " + data.items[i].title + '<br></br>');
                           document.write("StackOver flow link: " + '<a href="'+ data.items[i].link +'">View Details</a>' + '<br></br>');
                           document.write("Answer validated over stack overflow: " + data.items[i].is_answered + '<br></br>');
						   document.write("------------------End------------------------ " +'<br></br>');
                           
                     //  }
                   }
               });

           };

