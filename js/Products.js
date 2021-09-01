var search =
{
    "results" :

    [ 

      {"Images": "Images/Iphone12pro.jpg" , "Phone_name" : "Iphone 12 Pro" , "Screen_Size" : "5.78 Inches" , "Memory" : "128 GB"},
      {"Images": "Images/Iphonexjpg" , "Phone_name" : "Iphone X" , "Screen_Size" : "5.85 Inches" , "Memory" : "64 GB"},
      {"Images": "Images/SamsungGalaxyS21.jpg" , "Phone_name" : "Samsung Galaxy S21" , "Screen_Size" : "5.79 Inches" , "Memory" : "128 GB"}
    
    ]

}


for(var i = 0 ; i< search.results.length ; i++)
{

  document.write("<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12'>")
  document.write("<div class='Phone_style'>")
  document.write("<img src=" + search.results[i].Images + "alt='img not found' width='80%' height='80%'>")
  document.write("<h1 style='margin-left: 90px;'>" + search.results[i].Phone_name + "</h1>")
  document.write("<p style='margin-left: 90px;'>" + search.results[i].Screen_Size + "</p>")
  document.write("<p style='margin-left: 90px;'>" + search.results[i].Memory + "</p>")
  document.write("</div>")
  document.write("</div>")

}


if(search.results.length == 0)
{
    document.write("Product is not found")
}