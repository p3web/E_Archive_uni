var __lang = undefined;

$.getJSON('values/lang/fa.json', function (data) {
    __lang = new lang(data);
});

$.getJSON('values/user.json', function (data) {
    var __user = new users(data);
    __user.set_img();
    __user.set_name();
});

setTimeout(function () {

    /*  $.getJSON('values/menu.json', function (data) {
          var __menu = new menu(data.items);
          __menu.render();
      });*/
    menu1();
}, 1000);


var loadPage = function (url) {
    CreateLoader(true);
    if (url != "") {
        var queryString = url.split('?');

        //---- get Page Name
        var PageName;
        PageName = queryString[0].split('/');

        if (queryString.length == 1) {
            $('#page_body').load(url + ".html", function () {
                setTimeout(function () {
                    removeLoader();
                }, 1000);
            });

            //---- get Page Name
            try {
                document.getElementById('HeaderPageName').innerText = __lang.translate(PageName[1]);
            } catch (e) {
                setTimeout(function () {
                    document.getElementById('HeaderPageName').innerText = __lang.translate(PageName[1]);
                }, 1000)
            }
        } else {
            $('#page_body').load(queryString[0] + ".html?" + queryString[1], function () {
                setTimeout(function () {
                    removeLoader();
                }, 1000);
            });

            //---- get Page Name
            try {
                document.getElementById('HeaderPageName').innerText = __lang.translate(PageName[1]);
            } catch (e) {
                setTimeout(function () {
                    document.getElementById('HeaderPageName').innerText = __lang.translate(PageName[1]);
                }, 1000)

            }
        }
        /*$.get(url + ".html", function (data, status) {
         if (status == 'success') {
         var html = data ;//ejs.render(data, {});
         var mainPageContent = get_elem_id('page_body');
         mainPageContent.innerHTML = html;
         } else {
         console.log("erorr 404 : cannot open page html file. PSCO log :D");
         }
         });*/
    }
}

$(window).on('hashchange', function () {
    var hash = document.location.hash.substring(1);

    if (hash != "" || hash != undefined) {
        loadPage(hash);
        console.log(hash);
    }
});
$(window).trigger("hashchange");

function windows_full_screen() {

    var el = document.documentElement,
        rfs = el.requestFullscreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
            || el.msRequestFullscreen
    ;

    rfs.call(el);
}

var grade_id, field_of_study_id, menulist;

function menu1() {
    var param = {"act": "grade_get"};
    ajax.sender_data_json_by_url_callback('controller_robo/controller_grade.php', param, getGrade, "POST");
    param = {"act": "field_of_study_get"};
    ajax.sender_data_json_by_url_callback('controller_robo/controller_field_of_study.php', param, getfied, "POST");

    param = {"act": "menu_v_list_get"};
    ajax.sender_data_json_by_url_callback('controller_robo/controller_menu_v_list.php', param, getmenu, "POST");

}

function getGrade(data) {
    grade_id = data;
    //console.log(grade_id);
    if (grade_id != undefined && menulist != undefined) {
        createmenu();
    }
}

function getfied(data) {
    field_of_study_id = data;
    // console.log(field_of_study_id);
}

function getmenu(data) {
    menulist = data;
    //console.log(menulist);
    if (grade_id != undefined && menulist != undefined) {
        createmenu();
    }
}

function createmenu() {
    var JsonArray = [{items: [{name: '', items: []}]}];
    var TempJson, link;

var nm;
    for (var i = 0; i < grade_id.length; i++) {
           nm=' '+ grade_id[i].name;
        TempJson = {
            icon: 'glyphicon glyphicon-education',
            name: nm
        };
        TempJson['items'] = [];
        for (var c = 0; c < menulist.length; c++) {
            if (grade_id[i].ID == menulist[c].grade_id) {

                if(menulist[c].name=='لیست منوها')
                {
                    link = '#pages/menulist';
                    TempJson['items'].push({
                        name: menulist[c].name,
                        link: link
                    });
                }else if(menulist[c].name=='لیست زیر منوها'){
                    link = '#pages/submenulist';
                    TempJson['items'].push({
                        name: menulist[c].name,
                        link: link
                    });
                }else {
                    link = '#pages/selectyear?grade_id=' + grade_id[i].ID + '&field_of_study_id=' + menulist[c].field_of_study_id;
                    TempJson['items'].push({
                        name: menulist[c].name,
                        link: link
                    });
                }

            }
        }
        JsonArray[0].items[0].items.push(TempJson);
    }

   // console.log(JsonArray);
    var __menu = new menu(JsonArray[0].items);
    __menu.render();


}