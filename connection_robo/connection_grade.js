var grid_grade;
var grade_connection = {
    controller_url: 'controller_robo/controller_grade.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

grade_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    try{
        var tag = "";
        for (var i = 0; i < data.length; i++) {
            tag += '<option value="' + data[i].name + '"style="color: #000000;">' + data[i].name + '</option>';

        }
        document.getElementById('grade').innerHTML = tag;


        flag=true;
    }catch (e){}
try{
    if (flag) {
        FlagObj.push('S');
    }
}catch (e){}

    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.get = function () {
    var param = {"act": "grade_get"};
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_call_back, "POST");
};
//_____________ delete function
grade_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};

grade_connection.delete = function (ID) {
    var param = {
        act: "grade_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.delete_call_back, "POST");
};
//_____________ set function
grade_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};

grade_connection.set = function (name, created_by) {
    var param = {
        act: "grade_set",
        name: name, created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.set_call_back, "POST");
};
//_____________ grid function
grade_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }

    grid_grade = new PSCO_grid('grid_grade');

    grid_grade.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'created_by',
            hidden: true,
            type: 'text'
        }, {name: 'creationDate', hidden: true, type: 'text'}];

    //  grid_grade.RightToLeft = false;

    // grid_grade.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_grade.actions = [{
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'setyear')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'menu_v_list_delete')"}]
    }
    ];
    grid_grade.data = data;

    grid_grade.render();

};
grade_connection.get_grid = function () {
    var param = {"act": "grade_get"};
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_grid_call_back, "POST");
};
//________________get functions
grade_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    var id = data[0].name;
    document.getElementById('grade_id').value = id;
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.get_by_ID = function (ID) {
    var param = {
        "act": "grade_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_by_ID_call_back, "POST");
};

grade_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "grade_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_grid_call_back, "POST");
};
grade_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    try{
    document.getElementById('grade_id').value = data[0].ID;
    }catch (e){}
    try{
        gradeid='';
    gradeid=data[0].ID;
    flag=true;
    }catch (e){}
    g = true;
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.get_by_name = function (name) {
    var param = {
        "act": "grade_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_by_name_call_back, "POST");
};

grade_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "grade_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_grid_call_back, "POST");
};
grade_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "grade_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_by_created_by_call_back, "POST");
};

grade_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "grade_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_grid_call_back, "POST");
};
grade_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "grade_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_by_creationDate_call_back, "POST");
};

grade_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "grade_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.get_grid_call_back, "POST");
};

//________________edit functions
grade_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_by_ID = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "grade_edit_by_ID",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_by_ID_call_back, "POST");
};
grade_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "grade_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_ID_by_ID_call_back, "POST");
};
grade_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_by_name = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "grade_edit_by_name",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_by_name_call_back, "POST");
};
grade_connection.edit_name_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_name_by_ID = function (ID, name) {
    var param = {
        "act": "grade_edit_name_by_ID",
        name: name,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_name_by_ID_call_back, "POST");
};
grade_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_by_created_by = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "grade_edit_by_created_by",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_by_created_by_call_back, "POST");
};
grade_connection.edit_created_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_created_by_by_ID = function (ID, created_by) {
    var param = {
        "act": "grade_edit_created_by_by_ID",
        created_by: created_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_created_by_by_ID_call_back, "POST");
};
grade_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_by_creationDate = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "grade_edit_by_creationDate",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_by_creationDate_call_back, "POST");
};
grade_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (grade_connection.debug_mode) {
        console.log(data);
    }
};
grade_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "grade_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(grade_connection.controller_url, param, grade_connection.edit_creationDate_by_ID_call_back, "POST");
};