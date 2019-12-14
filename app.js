let d = document;
// window.addEventListener("scroll", function(e){-
//     });

// Lessons JQUERY:
$(document).ready(function(){

    // получить все элемент li с классом first $("li.first")
    // console.log("Выбрали li с классом first", $("li.first"));

    // получить последний элемент li $("li")
    // console.log("получить последний элемент li", $("li").last());

    // получить 5-й элемент с классом ba-menu-item $(".ba-menu-item").eq(4);
    // $(".ba-menu-item").eq(4);

    // получить элемент li с 4 по 6 $("li").slice(3,6)
    // 

    // получить следующий элемент после элемента с классом first
    // console.log($(".first").next());

    // получить все элементы li с классом test $("li.first") и задать им бордер
    // $("li.first").css("border", "2px dashed tomato");
    // console.log("получить элементы li с 4 по 6", $("li").slice(3,6));

    // $(".ba-hero__title").css({
    //     "border": "1px solid red",
    //     "font-size": "14px"
    // });
    $(".ba-hero__title").on("click", function(){
        console.log(this);
        console.log((this));

        $(this).next().addClass("nextH1");

    });

    $("#classFirst").on("click", function(){
        console.log("Выбрали li с классом first", $("li.first"));
    });

    $("#first").on("click", function(){
        console.log("получить первый элемент li", $("li").first());
    });

    $("#five").on("click", function(){
        console.log($(".ba-menu-item").eq(4));
    })

    $("#threeToFive").on("click", function(){
        console.log("получить элементы li с 4 по 6", $("li").slice(3,6));
    });

    $("#first").on("click", function(){
        console.log($(".first").next());
    });

    $("#first").on("click", function(){
        $("li.first").css("border", "2px dashed tomato");
        // console.log("получить элементы li с 4 по 6", $("li").slice(3,6));
    });
    //         //  1-st
    // console.log($('.ba-dish__head').first()); 

    //             // 2-st
    // console.log($('.ba-dish__info').prev());

    // console.log($('.ba-hero').nextAll()); 

    // console.log($(".ba-menu a").parent());
    
    // console.log($(".ba-hero").children());

    // console.log($(".ba-menu-item").siblings(':not(.first)'));

    // console.log($("a").closest("div").addClass("parentOfLink"));

    $(".ba-menu__link").on("click", function(e){
    e.preventDefault(); //отменяем переход по ссылке
    
    console.log($(this).attr("href")); //выводим сообщение, что ссылка была нажата
        });

    $(".ba-dish__img").on("click", function(){
        $(this).parent().siblings().find(".ba-dish__title").text($(this).attr("src")); //при нажатии src картинки становиться в текст
    });
    

     let btnNew = $(".ba-btn").first();
     btnNew.on("click", function() {
    let creatNewList = $(".ba-menu-list");
    let creatli = $("<li>").addClass("ba-menu-item");
    let creatdiv = $("<div>").addClass("ba-menu-item__info");
    let creatH3 = $("<h3>").addClass("ba-menu-item__title").text("Voluptate cillum fugiat.");
    let creatP = $("<p>").addClass("ba-menu-item__desc").text("Cheese, tomato, mushrooms, onions.");
    let creatStrong = $("<Strong>").addClass("ba-menu-item__price").text("$50");
    creatdiv.append(creatH3);
    creatdiv.append(creatP);
    creatli.append(creatdiv);
    creatli.append(creatStrong);
    creatNewList.append(creatli);

});

    
});

// let firstLi = $("li.first");
// console.log(firstLi);