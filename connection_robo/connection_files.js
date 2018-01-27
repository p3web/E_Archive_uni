var grid_files;
var files_connection = {
    controller_url: 'controller_robo/controller_files.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

files_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    var tag = "";
    for (var i = 0; i < data.length; i++) {
        tag += '<input id="' + data[i].data + '"style="color: #000000;"/>';
    }
    document.getElementById('2a').innerHTML = tag;
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get = function () {
    var param = {"act": "files_get"};
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_call_back, "POST");
};
//_____________ delete function
files_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};

files_connection.delete = function (ID) {
    var param = {
        act: "files_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.delete_call_back, "POST");
};
//_____________ set function
files_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};

files_connection.set = function (student_id, name, type, url, property, size, is_delete, modified_by, created_by) {
    var param = {
        act: "files_set",
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.set_call_back, "POST");
};
//_____________ grid function
files_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }

    grid_files = new PSCO_grid('grid_files');

    grid_files.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'student_id', hidden: true, type: 'text'}, {
            name: 'name',
            hidden: false,
            type: 'text'
        }, {name: 'type', hidden: true, type: 'text'}, {name: 'url', hidden: false, type: 'text'}, {
            name: 'property',
            hidden: false,
            type: 'text'
        }, {name: 'size', hidden: true, type: 'text'}, {
            name: 'is_delete',
            hidden: true,
            type: 'text'
        }, {name: 'modified_by', hidden: true, type: 'text'}, {
            name: 'created_by',
            hidden: true,
            type: 'text'
        }, {name: 'creationDate', hidden: true, type: 'text'}];

    //grid_files.RightToLeft = false;

    // grid_files.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

    grid_files.actions = [ {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'files_delete')"}]
    }
    ];

    grid_files.data = data;

    grid_files.render();

};
files_connection.get_grid = function () {
    var param = {"act": "files_get"};
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
//________________get functions
files_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_ID = function (ID) {
    var param = {
        "act": "files_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_ID_call_back, "POST");
};

files_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "files_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_student_id = function (student_id) {
    var param = {
        "act": "files_get_by_student_id",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_student_id_call_back, "POST");
};

files_connection.get_by_student_id_grid = function (student_id) {
    var param = {
        "act": "files_get_by_student_id",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_name = function (name) {
    var param = {
        "act": "files_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_name_call_back, "POST");
};

files_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "files_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_type = function (type) {
    var param = {
        "act": "files_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_type_call_back, "POST");
};

files_connection.get_by_type_grid = function (type) {
    var param = {
        "act": "files_get_by_type",
        type: type
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_url_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_url = function (url) {
    var param = {
        "act": "files_get_by_url",
        url: url
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_url_call_back, "POST");
};

files_connection.get_by_url_grid = function (url) {
    var param = {
        "act": "files_get_by_url",
        url: url
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_property_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_property = function (property) {
    var param = {
        "act": "files_get_by_property",
        property: property
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_property_call_back, "POST");
};

files_connection.get_by_property_grid = function (property) {
    var param = {
        "act": "files_get_by_property",
        property: property
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_size_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_size = function (size) {
    var param = {
        "act": "files_get_by_size",
        size: size
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_size_call_back, "POST");
};

files_connection.get_by_size_grid = function (size) {
    var param = {
        "act": "files_get_by_size",
        size: size
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_is_delete_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_is_delete = function (is_delete) {
    var param = {
        "act": "files_get_by_is_delete",
        is_delete: is_delete
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_is_delete_call_back, "POST");
};

files_connection.get_by_is_delete_grid = function (is_delete) {
    var param = {
        "act": "files_get_by_is_delete",
        is_delete: is_delete
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_modified_by_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_modified_by = function (modified_by) {
    var param = {
        "act": "files_get_by_modified_by",
        modified_by: modified_by
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_modified_by_call_back, "POST");
};

files_connection.get_by_modified_by_grid = function (modified_by) {
    var param = {
        "act": "files_get_by_modified_by",
        modified_by: modified_by
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "files_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_created_by_call_back, "POST");
};

files_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "files_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};
files_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "files_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_by_creationDate_call_back, "POST");
};

files_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "files_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.get_grid_call_back, "POST");
};

//________________edit functions
files_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_ID = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_ID",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_ID_call_back, "POST");
};
files_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "files_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_ID_by_ID_call_back, "POST");
};
files_connection.edit_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_student_id = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_student_id",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_student_id_call_back, "POST");
};
files_connection.edit_student_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_student_id_by_ID = function (ID, student_id) {
    var param = {
        "act": "files_edit_student_id_by_ID",
        student_id: student_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_student_id_by_ID_call_back, "POST");
};
files_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_name = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_name",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_name_call_back, "POST");
};
files_connection.edit_name_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_name_by_ID = function (ID, name) {
    var param = {
        "act": "files_edit_name_by_ID",
        name: name,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_name_by_ID_call_back, "POST");
};
files_connection.edit_by_type_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_type = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_type",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_type_call_back, "POST");
};
files_connection.edit_type_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_type_by_ID = function (ID, type) {
    var param = {
        "act": "files_edit_type_by_ID",
        type: type,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_type_by_ID_call_back, "POST");
};
files_connection.edit_by_url_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_url = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_url",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_url_call_back, "POST");
};
files_connection.edit_url_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_url_by_ID = function (ID, url) {
    var param = {
        "act": "files_edit_url_by_ID",
        url: url,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_url_by_ID_call_back, "POST");
};
files_connection.edit_by_property_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_property = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_property",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_property_call_back, "POST");
};
files_connection.edit_property_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_property_by_ID = function (ID, property) {
    var param = {
        "act": "files_edit_property_by_ID",
        property: property,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_property_by_ID_call_back, "POST");
};
files_connection.edit_by_size_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_size = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_size",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_size_call_back, "POST");
};
files_connection.edit_size_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_size_by_ID = function (ID, size) {
    var param = {
        "act": "files_edit_size_by_ID",
        size: size,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_size_by_ID_call_back, "POST");
};
files_connection.edit_by_is_delete_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_is_delete = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_is_delete",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_is_delete_call_back, "POST");
};
files_connection.edit_is_delete_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_is_delete_by_ID = function (ID, is_delete) {
    var param = {
        "act": "files_edit_is_delete_by_ID",
        is_delete: is_delete,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_is_delete_by_ID_call_back, "POST");
};
files_connection.edit_by_modified_by_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_modified_by = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_modified_by",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_modified_by_call_back, "POST");
};
files_connection.edit_modified_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_modified_by_by_ID = function (ID, modified_by) {
    var param = {
        "act": "files_edit_modified_by_by_ID",
        modified_by: modified_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_modified_by_by_ID_call_back, "POST");
};
files_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_created_by = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_created_by",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_created_by_call_back, "POST");
};
files_connection.edit_created_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_created_by_by_ID = function (ID, created_by) {
    var param = {
        "act": "files_edit_created_by_by_ID",
        created_by: created_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_created_by_by_ID_call_back, "POST");
};
files_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_by_creationDate = function (ID, student_id, name, type, url, property, size, is_delete, modified_by, created_by, creationDate) {
    var param = {
        "act": "files_edit_by_creationDate",
        ID: ID,
        student_id: student_id,
        name: name,
        type: type,
        url: url,
        property: property,
        size: size,
        is_delete: is_delete,
        modified_by: modified_by,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_by_creationDate_call_back, "POST");
};
files_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (files_connection.debug_mode) {
        console.log(data);
    }
};
files_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "files_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(files_connection.controller_url, param, files_connection.edit_creationDate_by_ID_call_back, "POST");
};