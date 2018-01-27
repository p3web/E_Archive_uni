var grid_profile;
var profile_connection = {
    controller_url: 'connection_robo_user/controller_robo/controller_profile.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

profile_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get = function () {
    var param = {"act": "profile_get"};
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_call_back, "POST");
};
//_____________ delete function
profile_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};

profile_connection.delete = function (id) {
    var param = {
        act: "profile_delete",
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.delete_call_back, "POST");
};
profile_connection.delete_profile_by_user_id = function (id) {
    var param = {
        act: "profile_delete_by_user_id",
        user_id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.delete_call_back, "POST");
};
//_____________ set function
profile_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};

profile_connection.set = function (user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by) {

    var param = {
        act: "profile_set",
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.set_call_back, "POST");
};
//_____________ grid function
profile_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }

    grid_profile = new PSCO_grid('grid_profile');

    grid_profile.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'user_id', hidden: true, type: 'text'}, {
            name: 'age',
            hidden: false,
            type: 'text'
        }, {name: 'sex', hidden: false, type: 'text'}, {
            name: 'father_name',
            hidden: false,
            type: 'text'
        }, {name: 'mather_name', hidden: false, type: 'text'}, {
            name: 'is_single',
            hidden: false,
            type: 'text'
        }, {name: 'national_code', hidden: false, type: 'text'}, {
            name: 'email',
            hidden: false,
            type: 'text'
        }, {name: 'tel', hidden: false, type: 'text'}, {name: 'mobile', hidden: false, type: 'text'}, {
            name: 'fax',
            hidden: false,
            type: 'text'
        }, {name: 'address', hidden: false, type: 'text'}, {
            name: 'last_modified',
            hidden: true,
            type: 'text'
        }, {name: 'created_by', hidden: true, type: 'text'}, {name: 'creationDate', hidden: true, type: 'text'}];

    //grid_profile.RightToLeft = false;

    // grid_profile.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_profile.actions = [{
        name: 'like',
        ClassName: 'glyphicon glyphicon-ok',
        attribute: [{name: 'onclick', value: "like(this , 'student_set')"}]
    }, {
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'edit_profile')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'profile_delete')"}]
    }
    ];
    grid_profile.data = data;

    grid_profile.render();

};
profile_connection.get_grid = function () {
    var param = {"act": "profile_get"};
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
//________________get functions
profile_connection.get_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_id = function (id) {
    var param = {
        "act": "profile_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_id_call_back, "POST");
};

profile_connection.get_by_id_grid = function (id) {
    var param = {
        "act": "profile_get_by_id",
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_user_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_user_id = function (user_id) {
    var param = {
        "act": "profile_get_by_user_id",
        user_id: user_id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_user_id_call_back, "POST");
};

profile_connection.get_by_user_id_grid = function (user_id) {
    var param = {
        "act": "profile_get_by_user_id",
        user_id: user_id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_age_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_age = function (age) {
    var param = {
        "act": "profile_get_by_age",
        age: age
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_age_call_back, "POST");
};

profile_connection.get_by_age_grid = function (age) {
    var param = {
        "act": "profile_get_by_age",
        age: age
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_sex_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_sex = function (sex) {
    var param = {
        "act": "profile_get_by_sex",
        sex: sex
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_sex_call_back, "POST");
};

profile_connection.get_by_sex_grid = function (sex) {
    var param = {
        "act": "profile_get_by_sex",
        sex: sex
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_father_name_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_father_name = function (father_name) {
    var param = {
        "act": "profile_get_by_father_name",
        father_name: father_name
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_father_name_call_back, "POST");
};

profile_connection.get_by_father_name_grid = function (father_name) {
    var param = {
        "act": "profile_get_by_father_name",
        father_name: father_name
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_mather_name_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_mather_name = function (mather_name) {
    var param = {
        "act": "profile_get_by_mather_name",
        mather_name: mather_name
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_mather_name_call_back, "POST");
};

profile_connection.get_by_mather_name_grid = function (mather_name) {
    var param = {
        "act": "profile_get_by_mather_name",
        mather_name: mather_name
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_is_single_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_is_single = function (is_single) {
    var param = {
        "act": "profile_get_by_is_single",
        is_single: is_single
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_is_single_call_back, "POST");
};

profile_connection.get_by_is_single_grid = function (is_single) {
    var param = {
        "act": "profile_get_by_is_single",
        is_single: is_single
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_national_code_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_national_code = function (national_code) {
    var param = {
        "act": "profile_get_by_national_code",
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_national_code_call_back, "POST");
};

profile_connection.get_by_national_code_grid = function (national_code) {
    var param = {
        "act": "profile_get_by_national_code",
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_email_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_email = function (email) {
    var param = {
        "act": "profile_get_by_email",
        email: email
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_email_call_back, "POST");
};

profile_connection.get_by_email_grid = function (email) {
    var param = {
        "act": "profile_get_by_email",
        email: email
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_tel_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_tel = function (tel) {
    var param = {
        "act": "profile_get_by_tel",
        tel: tel
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_tel_call_back, "POST");
};

profile_connection.get_by_tel_grid = function (tel) {
    var param = {
        "act": "profile_get_by_tel",
        tel: tel
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_mobile_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_mobile = function (mobile) {
    var param = {
        "act": "profile_get_by_mobile",
        mobile: mobile
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_mobile_call_back, "POST");
};

profile_connection.get_by_mobile_grid = function (mobile) {
    var param = {
        "act": "profile_get_by_mobile",
        mobile: mobile
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_fax_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_fax = function (fax) {
    var param = {
        "act": "profile_get_by_fax",
        fax: fax
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_fax_call_back, "POST");
};

profile_connection.get_by_fax_grid = function (fax) {
    var param = {
        "act": "profile_get_by_fax",
        fax: fax
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_address_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_address = function (address) {
    var param = {
        "act": "profile_get_by_address",
        address: address
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_address_call_back, "POST");
};

profile_connection.get_by_address_grid = function (address) {
    var param = {
        "act": "profile_get_by_address",
        address: address
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_last_modified_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_last_modified = function (last_modified) {
    var param = {
        "act": "profile_get_by_last_modified",
        last_modified: last_modified
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_last_modified_call_back, "POST");
};

profile_connection.get_by_last_modified_grid = function (last_modified) {
    var param = {
        "act": "profile_get_by_last_modified",
        last_modified: last_modified
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "profile_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_created_by_call_back, "POST");
};

profile_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "profile_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};
profile_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "profile_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_by_creationDate_call_back, "POST");
};

profile_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "profile_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.get_grid_call_back, "POST");
};

//________________edit functions
profile_connection.edit_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_id = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_id",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_id_call_back, "POST");
};
profile_connection.edit_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_id_by_id = function (id, id) {
    var param = {
        "act": "profile_edit_id_by_id",
        id: id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_id_by_id_call_back, "POST");
};
profile_connection.edit_by_user_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_user_id = function (ID, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_user_id",
        ID: ID,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_user_id_call_back, "POST");
};
profile_connection.edit_user_id_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_user_id_by_id = function (id, user_id) {
    var param = {
        "act": "profile_edit_user_id_by_id",
        user_id: user_id,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_user_id_by_id_call_back, "POST");
};
profile_connection.edit_by_age_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_age = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_age",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_age_call_back, "POST");
};
profile_connection.edit_age_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_age_by_id = function (id, age) {
    var param = {
        "act": "profile_edit_age_by_id",
        age: age,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_age_by_id_call_back, "POST");
};
profile_connection.edit_by_sex_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_sex = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_sex",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_sex_call_back, "POST");
};
profile_connection.edit_sex_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_sex_by_id = function (id, sex) {
    var param = {
        "act": "profile_edit_sex_by_id",
        sex: sex,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_sex_by_id_call_back, "POST");
};
profile_connection.edit_by_father_name_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_father_name = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_father_name",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_father_name_call_back, "POST");
};
profile_connection.edit_father_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_father_name_by_id = function (id, father_name) {
    var param = {
        "act": "profile_edit_father_name_by_id",
        father_name: father_name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_father_name_by_id_call_back, "POST");
};
profile_connection.edit_by_mather_name_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_mather_name = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_mather_name",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_mather_name_call_back, "POST");
};
profile_connection.edit_mather_name_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_mather_name_by_id = function (id, mather_name) {
    var param = {
        "act": "profile_edit_mather_name_by_id",
        mather_name: mather_name,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_mather_name_by_id_call_back, "POST");
};
profile_connection.edit_by_is_single_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_is_single = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_is_single",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_is_single_call_back, "POST");
};
profile_connection.edit_is_single_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_is_single_by_id = function (id, is_single) {
    var param = {
        "act": "profile_edit_is_single_by_id",
        is_single: is_single,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_is_single_by_id_call_back, "POST");
};
profile_connection.edit_by_national_code_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_national_code = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_national_code",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_national_code_call_back, "POST");
};
profile_connection.edit_national_code_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_national_code_by_id = function (id, national_code) {
    var param = {
        "act": "profile_edit_national_code_by_id",
        national_code: national_code,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_national_code_by_id_call_back, "POST");
};
profile_connection.edit_by_email_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_email = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_email",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_email_call_back, "POST");
};
profile_connection.edit_email_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_email_by_id = function (id, email) {
    var param = {
        "act": "profile_edit_email_by_id",
        email: email,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_email_by_id_call_back, "POST");
};
profile_connection.edit_by_tel_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_tel = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_tel",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_tel_call_back, "POST");
};
profile_connection.edit_tel_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_tel_by_id = function (id, tel) {
    var param = {
        "act": "profile_edit_tel_by_id",
        tel: tel,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_tel_by_id_call_back, "POST");
};
profile_connection.edit_by_mobile_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_mobile = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_mobile",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_mobile_call_back, "POST");
};
profile_connection.edit_mobile_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_mobile_by_id = function (id, mobile) {
    var param = {
        "act": "profile_edit_mobile_by_id",
        mobile: mobile,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_mobile_by_id_call_back, "POST");
};
profile_connection.edit_by_fax_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_fax = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_fax",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_fax_call_back, "POST");
};
profile_connection.edit_fax_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_fax_by_id = function (id, fax) {
    var param = {
        "act": "profile_edit_fax_by_id",
        fax: fax,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_fax_by_id_call_back, "POST");
};
profile_connection.edit_by_address_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_address = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_address",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_address_call_back, "POST");
};
profile_connection.edit_address_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_address_by_id = function (id, address) {
    var param = {
        "act": "profile_edit_address_by_id",
        address: address,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_address_by_id_call_back, "POST");
};
profile_connection.edit_by_last_modified_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_last_modified = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_last_modified",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_last_modified_call_back, "POST");
};
profile_connection.edit_last_modified_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_last_modified_by_id = function (id, last_modified) {
    var param = {
        "act": "profile_edit_last_modified_by_id",
        last_modified: last_modified,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_last_modified_by_id_call_back, "POST");
};
profile_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_created_by = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_created_by",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_created_by_call_back, "POST");
};
profile_connection.edit_created_by_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_created_by_by_id = function (id, created_by) {
    var param = {
        "act": "profile_edit_created_by_by_id",
        created_by: created_by,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_created_by_by_id_call_back, "POST");
};
profile_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_by_creationDate = function (id, user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by, creationDate) {
    var param = {
        "act": "profile_edit_by_creationDate",
        id: id,
        user_id: user_id,
        age: age,
        sex: sex,
        father_name: father_name,
        mather_name: mather_name,
        is_single: is_single,
        national_code: national_code,
        email: email,
        tel: tel,
        mobile: mobile,
        fax: fax,
        address: address,
        last_modified: last_modified,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_by_creationDate_call_back, "POST");
};
profile_connection.edit_creationDate_by_id_call_back = function (data) {
    //TODO: set code after the server response
    if (profile_connection.debug_mode) {
        console.log(data);
    }
};
profile_connection.edit_creationDate_by_id = function (id, creationDate) {
    var param = {
        "act": "profile_edit_creationDate_by_id",
        creationDate: creationDate,
        id: id
    };
    ajax.sender_data_json_by_url_callback(profile_connection.controller_url, param, profile_connection.edit_creationDate_by_id_call_back, "POST");
};