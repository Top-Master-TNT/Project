var search =
{
    "results" :

    [
        
       {"ID": 1 , "name" : "javascript" , "Description" : "First Session" , "No_Of_Likes" : 100 , "No_Of_Dislikes" : 30 , "No_Of_Views" : 200},
       {"ID": 2 , "name" : "Css" , "Description" : "Second Session" , "No_Of_Likes" : 200 , "No_Of_Dislikes" : 50 , "No_Of_Views" : 400},
       {"ID": 3 , "name" : "Node-Js" , "Description" : "Third Session" , "No_Of_Likes" : 600 , "No_Of_Dislikes" : 60 , "No_Of_Views" : 1000}
  
    ]

}


for(var i = 0 ; i< search.results.length ; i++)
{

   document.write("<tr>")
   document.write("<td>" + search.results[i].ID + "</td>")
   document.write("<td>" + search.results[i].name + "</td>")
   document.write("<td>" + search.results[i].Description + "</td>")
   document.write("<td>" + search.results[i].No_Of_Likes + "</td>")
   document.write("<td>" + search.results[i].No_Of_Dislikes + "</td>")
   document.write("<td>" + search.results[i].No_Of_Views + "</td>")
   document.write("</tr>")

}


if(search.results.length == 0)
{
    document.getElementById("Hide").style.display = "none";
    document.write("No Results were found")
}