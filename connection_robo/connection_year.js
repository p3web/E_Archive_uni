var grid_year;
var year_connection = {
    controller_url: 'controller_robo/controller_year.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

year_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    var tag = "";

    for (var i = 0; i < data.length; i++) {
        tag += '<option value="' + data[i].name + '"style="color: #000000;">' + data[i].name + '</option>';
    }
    document.getElementById('year').innerHTML = tag;
    if(flag){
        FlagObj.push('S');
    }
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.get = function () {
    var param = {"act": "year_get"};
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_call_back, "POST");
};
//_____________ delete function
year_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};

year_connection.delete = function (ID) {
    var param = {
        act: "year_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.delete_call_back, "POST");
};
//_____________ set function
year_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};

year_connection.set = function (name, created_by) {
    var param = {
        act: "year_set",
        name: name, created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.set_call_back, "POST");
};
//_____________ grid function
year_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }

    grid_year = new PSCO_grid('grid_year');

    grid_year.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'created_by',
            hidden: true,
            type: 'text'
        }, {name: 'creationDate', hidden: true, type: 'text'}];

    // grid_year.RightToLeft = false;

    // grid_year.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_year.actions = [{
        name: 'Select',
        ClassName: 'glyphicon glyphicon-ok-sign',
        attribute: [{name: 'onclick', value: "Select(this,'studentlist')"}]
    }, {
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'setyear')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'year_delete')"}]
    }
    ];
    grid_year.data = data;

    grid_year.render();

};
year_connection.get_grid = function () {
    var param = {"act": "year_get"};
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_grid_call_back, "POST");
};
//________________get functions
year_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    var id=data[0].name;
    document.getElementById('year_id').value=id;
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.get_by_ID = function (ID) {
    var param = {
        "act": "year_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_by_ID_call_back, "POST");
};

year_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "year_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_grid_call_back, "POST");
};
year_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    document.getElementById('year_id').value=data[0].ID;
    y=true;
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.get_by_name = function (name) {
    var param = {
        "act": "year_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_by_name_call_back, "POST");
};

year_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "year_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_grid_call_back, "POST");
};
year_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "year_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_by_created_by_call_back, "POST");
};

year_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "year_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_grid_call_back, "POST");
};
year_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "year_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_by_creationDate_call_back, "POST");
};

year_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "year_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.get_grid_call_back, "POST");
};

//________________edit functions
year_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_by_ID = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "year_edit_by_ID",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_by_ID_call_back, "POST");
};
year_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "year_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_ID_by_ID_call_back, "POST");
};
year_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_by_name = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "year_edit_by_name",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_by_name_call_back, "POST");
};
year_connection.edit_name_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_name_by_ID = function (ID, name) {
    var param = {
        "act": "year_edit_name_by_ID",
        name: name,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_name_by_ID_call_back, "POST");
};
year_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_by_created_by = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "year_edit_by_created_by",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_by_created_by_call_back, "POST");
};
year_connection.edit_created_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_created_by_by_ID = function (ID, created_by) {
    var param = {
        "act": "year_edit_created_by_by_ID",
        created_by: created_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_created_by_by_ID_call_back, "POST");
};
year_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_by_creationDate = function (ID, name, created_by, creationDate) {
    var param = {
        "act": "year_edit_by_creationDate",
        ID: ID, name: name, created_by: created_by, creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_by_creationDate_call_back, "POST");
};
year_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (year_connection.debug_mode) {
        console.log(data);
    }
};
year_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "year_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(year_connection.controller_url, param, year_connection.edit_creationDate_by_ID_call_back, "POST");
};