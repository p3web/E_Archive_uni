var grid_user;
var user_connection = {
    controller_url: 'connection_robo_user/controller_robo/controller_user.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

user_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get = function () {
    var param = {"act": "user_get"};
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_call_back, "POST");
};
//_____________ delete function
user_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};

user_connection.delete_user = function (id) {
    var param = {
        act: "user_delete",
        ID: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.delete_call_back, "POST");
};

//_____________ set function
user_connection.set_call_back = function (data) {
    //TODO: set code after the server response

    if (user_connection.debug_mode) {
        console.log(data);
    }
};

user_connection.set = function (name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by) {
    var param = {
        act: "user_set",
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.set_call_back, "POST");
};
//_____________ grid function
user_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response

    if (user_connection.debug_mode) {
        console.log(data);
    }

    grid_user = new PSCO_grid('grid_user');

    grid_user.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'name', hidden: false, type: 'text'}, {
            name: 'lastname',
            hidden: false,
            type: 'text'
        }, {name: 'nik_name', hidden: false, type: 'text'}, {
            name: 'user_name',
            hidden: false,
            type: 'text'
        }, {name: 'pssword', hidden: true, type: 'text'}, {
            name: 'avatar',
            hidden: false,
            type: 'text'
        }, {name: 'last_password_failed', hidden: true, type: 'text'}, {
            name: 'count_password_failed',
            hidden: true,
            type: 'text'
        }, {name: 'last_change_password', hidden: true, type: 'text'}, {
            name: 'last_modified',
            hidden: true,
            type: 'text'
        }, {name: 'created_by', hidden: true, type: 'text'}, {name: 'creationDate', hidden: true, type: 'text'}];

    // grid_user.RightToLeft = false;

    // grid_user.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_user.actions = [{
        name: 'like',
        ClassName: 'glyphicon glyphicon-ok',
        attribute: [{name: 'onclick', value: "like(this , 'student_set_profile')"}]
    }, {
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'edit_user')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'user_delete')"}]
    }
    ];
    grid_user.data = data;

    grid_user.render();

};
user_connection.get_grid = function () {
    var param = {"act": "user_get"};
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
//________________get functions
user_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_id = function (ID) {
    var param = {
        "act": "user_get_by_id",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_id_call_back, "POST");
};

user_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "user_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};

user_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_name = function (name) {
    var param = {
        "act": "user_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_name_call_back, "POST");
};

user_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "user_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_lastname_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_lastname = function (lastname) {
    var param = {
        "act": "user_get_by_lastname",
        lastname: lastname
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_lastname_call_back, "POST");
};

user_connection.get_by_lastname_grid = function (lastname) {
    var param = {
        "act": "user_get_by_lastname",
        lastname: lastname
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_nik_name_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_nik_name = function (nik_name) {
    var param = {
        "act": "user_get_by_nik_name",
        nik_name: nik_name
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_nik_name_call_back, "POST");
};

user_connection.get_by_nik_name_grid = function (nik_name) {
    var param = {
        "act": "user_get_by_nik_name",
        nik_name: nik_name
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_user_name_call_back = function (data) {
    //TODO: set code after the server response
    res=data.res;
    if(res !=false)
    {
        var un=data[0].ID;
        document.getElementById('user_name1').value=un;
    }

    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_user_name = function (user_name) {
    var param = {
        "act": "user_get_by_user_name",
        user_name: user_name
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_user_name_call_back, "POST");
};

user_connection.get_by_user_name_grid = function (user_name) {
    var param = {
        "act": "user_get_by_user_name",
        user_name: user_name
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_pssword_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_pssword = function (pssword) {
    var param = {
        "act": "user_get_by_pssword",
        pssword: pssword
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_pssword_call_back, "POST");
};

user_connection.get_by_pssword_grid = function (pssword) {
    var param = {
        "act": "user_get_by_pssword",
        pssword: pssword
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_avatar_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_avatar = function (avatar) {
    var param = {
        "act": "user_get_by_avatar",
        avatar: avatar
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_avatar_call_back, "POST");
};

user_connection.get_by_avatar_grid = function (avatar) {
    var param = {
        "act": "user_get_by_avatar",
        avatar: avatar
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_last_password_failed_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_last_password_failed = function (last_password_failed) {
    var param = {
        "act": "user_get_by_last_password_failed",
        last_password_failed: last_password_failed
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_last_password_failed_call_back, "POST");
};

user_connection.get_by_last_password_failed_grid = function (last_password_failed) {
    var param = {
        "act": "user_get_by_last_password_failed",
        last_password_failed: last_password_failed
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_count_password_failed_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_count_password_failed = function (count_password_failed) {
    var param = {
        "act": "user_get_by_count_password_failed",
        count_password_failed: count_password_failed
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_count_password_failed_call_back, "POST");
};

user_connection.get_by_count_password_failed_grid = function (count_password_failed) {
    var param = {
        "act": "user_get_by_count_password_failed",
        count_password_failed: count_password_failed
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_last_change_password_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_last_change_password = function (last_change_password) {
    var param = {
        "act": "user_get_by_last_change_password",
        last_change_password: last_change_password
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_last_change_password_call_back, "POST");
};

user_connection.get_by_last_change_password_grid = function (last_change_password) {
    var param = {
        "act": "user_get_by_last_change_password",
        last_change_password: last_change_password
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_last_modified_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_last_modified = function (last_modified) {
    var param = {
        "act": "user_get_by_last_modified",
        last_modified: last_modified
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_last_modified_call_back, "POST");
};

user_connection.get_by_last_modified_grid = function (last_modified) {
    var param = {
        "act": "user_get_by_last_modified",
        last_modified: last_modified
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "user_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_created_by_call_back, "POST");
};

user_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "user_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};
user_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "user_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_by_creationDate_call_back, "POST");
};

user_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "user_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.get_grid_call_back, "POST");
};

//________________edit functions
user_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_id = function (ID, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_id",
        ID: ID,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_id_call_back, "POST");
};
user_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "user_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_id_by_id_call_back, "POST");
};
user_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_name = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_name",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_name_call_back, "POST");
};
user_connection.edit_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_name_by_id = function (id, name) {
    var param = {
        "act": "user_edit_name_by_id",
        name: name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_name_by_id_call_back, "POST");
};
user_connection.edit_by_lastname_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_lastname = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_lastname",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_lastname_call_back, "POST");
};
user_connection.edit_lastname_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_lastname_by_id = function (id, lastname) {
    var param = {
        "act": "user_edit_lastname_by_id",
        lastname: lastname,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_lastname_by_id_call_back, "POST");
};
user_connection.edit_by_nik_name_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_nik_name = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_nik_name",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_nik_name_call_back, "POST");
};
user_connection.edit_nik_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_nik_name_by_id = function (id, nik_name) {
    var param = {
        "act": "user_edit_nik_name_by_id",
        nik_name: nik_name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_nik_name_by_id_call_back, "POST");
};
user_connection.edit_by_user_name_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_user_name = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_user_name",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_user_name_call_back, "POST");
};
user_connection.edit_user_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_user_name_by_id = function (id, user_name) {
    var param = {
        "act": "user_edit_user_name_by_id",
        user_name: user_name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_user_name_by_id_call_back, "POST");
};
user_connection.edit_by_pssword_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_pssword = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_pssword",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_pssword_call_back, "POST");
};
user_connection.edit_pssword_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_pssword_by_id = function (id, pssword) {
    var param = {
        "act": "user_edit_pssword_by_id",
        pssword: pssword,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_pssword_by_id_call_back, "POST");
};
user_connection.edit_by_avatar_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_avatar = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_avatar",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_avatar_call_back, "POST");
};
user_connection.edit_avatar_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_avatar_by_id = function (id, avatar) {
    var param = {
        "act": "user_edit_avatar_by_id",
        avatar: avatar,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_avatar_by_id_call_back, "POST");
};
user_connection.edit_by_last_password_failed_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_last_password_failed = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_last_password_failed",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_last_password_failed_call_back, "POST");
};
user_connection.edit_last_password_failed_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_last_password_failed_by_id = function (id, last_password_failed) {
    var param = {
        "act": "user_edit_last_password_failed_by_id",
        last_password_failed: last_password_failed,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_last_password_failed_by_id_call_back, "POST");
};
user_connection.edit_by_count_password_failed_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_count_password_failed = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_count_password_failed",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_count_password_failed_call_back, "POST");
};
user_connection.edit_count_password_failed_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_count_password_failed_by_id = function (id, count_password_failed) {
    var param = {
        "act": "user_edit_count_password_failed_by_id",
        count_password_failed: count_password_failed,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_count_password_failed_by_id_call_back, "POST");
};
user_connection.edit_by_last_change_password_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_last_change_password = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_last_change_password",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_last_change_password_call_back, "POST");
};
user_connection.edit_last_change_password_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_last_change_password_by_id = function (id, last_change_password) {
    var param = {
        "act": "user_edit_last_change_password_by_id",
        last_change_password: last_change_password,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_last_change_password_by_id_call_back, "POST");
};
user_connection.edit_by_last_modified_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_last_modified = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_last_modified",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_last_modified_call_back, "POST");
};
user_connection.edit_last_modified_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_last_modified_by_id = function (id, last_modified) {
    var param = {
        "act": "user_edit_last_modified_by_id",
        last_modified: last_modified,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_last_modified_by_id_call_back, "POST");
};
user_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_created_by = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_created_by",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_created_by_call_back, "POST");
};
user_connection.edit_created_by_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_created_by_by_id = function (id, created_by) {
    var param = {
        "act": "user_edit_created_by_by_id",
        created_by: created_by,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_created_by_by_id_call_back, "POST");
};
user_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_by_creationDate = function (id, name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by, creationDate) {
    var param = {
        "act": "user_edit_by_creationDate",
        id: id,
        name: name,
        lastname: lastname,
        nik_name: nik_name,
        user_name: user_name,
        pssword: pssword,
        avatar: avatar,
        last_password_failed: last_password_failed,
        count_password_failed: count_password_failed,
        last_change_password: last_change_password,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_by_creationDate_call_back, "POST");
};
user_connection.edit_creationDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (user_connection.debug_mode) {
        console.log(data);
    }
};
user_connection.edit_creationDate_by_id = function (id, creationDate) {
    var param = {
        "act": "user_edit_creationDate_by_id",
        creationDate: creationDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(user_connection.controller_url, param, user_connection.edit_creationDate_by_id_call_back, "POST");
};