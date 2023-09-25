//creating a function to navigate pages
export function changePage(pathArray) {
    $("#bread-crumb").html(``); //empty bread crumb
    if (pathArray == "") {
        $.get(`pages/home.html`, (data) => {
            $("#app").html(data);
        }).fail(() => {
            console.log("page not found.");
        });
    } else {
        if (pathArray.length == 1) {
            $.get(`pages/${pathArray}.html`, (data) => {
                if (data) {
                   $("#app").html(data);
                } else {
                    console.log("page not found");
                }
            }).fail(() => {
                console.log("page not found.");
            });
        } else {
            //if subpage exists, display for back navigation
            $("#bread-crumb").html(`<img src="./images/bread-crumbs.png" alt="bread-crumb"/> < <a href = #${pathArray[0]}>
            ${pathArray[0]} </a> >  < / ${pathArray[1]} >`);

            $.get(`pages/${pathArray[1]}.html`, (data) => {
                if (data) {
                   $("#app").html(data);
                } else {
                    console.log("page not found");
                }
            }).fail(() => {
                console.log("page not found.");
        });
      } 
   }  
}


