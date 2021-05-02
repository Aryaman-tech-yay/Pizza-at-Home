menu_list_array = ["Mushroom Corn Pizza","Soya Paneer+Mushroom Corn pizza with fries and coke combo","Deluxe chicken Pizza","Cheese Extravaganza Pizza","Spicy Italian Fries","Veggie Chese Burger","Choco Lava Cake","750Ml Coke,Pepsi,Fanta,Sprite,Mirinda,7UP,Mountain Dew"];
    
    function getmenu(){
        var htmldata;
        htmldata="<ol class='menulist'>"
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        }
         htmldata=htmldata+"</ol>"
         document.getElementById("display_menu").innerHTML = htmldata;
    }

    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){

            htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
        }
          htmldata=htmldata+"</section>"
          document.getElementById("display_addedmenu").innerHTML = htmldata;
    }