var grid_student_list;
var student_list_connection = {
    controller_url: 'controller_robo/controller_student_list.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

student_list_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get = function () {
    var param = {"act": "student_list_get"};
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_call_back, "POST");
};
//_____________ delete function
student_list_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};

student_list_connection.delete = function (student_id) {
    var param = {
        act: "student_list_delete",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.delete_call_back, "POST");
};
//_____________ set function
student_list_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};

student_list_connection.set = function (user_id, grade_id, field_of_study_id, year_id, name, lastname) {
    var param = {
        act: "student_list_set",
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.set_call_back, "POST");
};
//_____________ grid function
student_list_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }

    grid_student_list = new PSCO_grid('grid_student_list');

    grid_student_list.cols = [
        {name: 'student_id', hidden: false, type: 'text'}, {
            name: 'user_id',
            hidden: true,
            type: 'text'
        }, {name: 'grade_id', hidden: true, type: 'text'}, {
            name: 'field_of_study_id',
            hidden: true,
            type: 'text'
        }, {name: 'year_id', hidden: true, type: 'text'}, {
            name: 'name',
            hidden: false,
            type: 'text'
        }, {name: 'lastname', hidden: false, type: 'text'}, {name: 'national_code', hidden: false, type: 'text'}];

    // grid_student_list.RightToLeft = false;

    // grid_student_list.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_student_list.actions = [{
        name: 'file',
        ClassName: 'glyphicon glyphicon-file',
        attribute: [{name: 'onclick', value: "file(this , 'partitions_file')"}]
    }, {
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'partitionSet')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'partitions_delete')"}]
    }
    ];
    grid_student_list.data = data;

    grid_student_list.render();

};
student_list_connection.get_grid = function () {
    var param = {"act": "student_list_get"};
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};

//________________get functions
student_list_connection.get_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_student_id = function (student_id) {
    var param = {
        "act": "student_list_get_by_student_id",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_student_id_call_back, "POST");
};
student_list_connection.student_list_get_for_grid = function (year_id, grade_id, field_of_study_id) {
    var param = {
        "act": "student_list_get_for_grid",
        year_id: year_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id

    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_student_id_grid = function (student_id) {
    var param = {
        "act": "student_list_get_by_student_id",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_user_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_user_id = function (user_id) {
    var param = {
        "act": "student_list_get_by_user_id",
        user_id: user_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_user_id_call_back, "POST");
};

student_list_connection.get_by_user_id_grid = function (user_id) {
    var param = {
        "act": "student_list_get_by_user_id",
        user_id: user_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_grade_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_grade_id = function (grade_id) {
    var param = {
        "act": "student_list_get_by_grade_id",
        grade_id: grade_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_grade_id_call_back, "POST");
};

student_list_connection.get_by_grade_id_grid = function (grade_id) {
    var param = {
        "act": "student_list_get_by_grade_id",
        grade_id: grade_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_field_of_study_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_field_of_study_id = function (field_of_study_id) {
    var param = {
        "act": "student_list_get_by_field_of_study_id",
        field_of_study_id: field_of_study_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_field_of_study_id_call_back, "POST");
};

student_list_connection.get_by_field_of_study_id_grid = function (field_of_study_id) {
    var param = {
        "act": "student_list_get_by_field_of_study_id",
        field_of_study_id: field_of_study_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_year_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_year_id = function (year_id) {
    var param = {
        "act": "student_list_get_by_year_id",
        year_id: year_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_year_id_call_back, "POST");
};

student_list_connection.get_by_year_id_grid = function (year_id) {
    var param = {
        "act": "student_list_get_by_year_id",
        year_id: year_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_name = function (name) {
    var param = {
        "act": "student_list_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_name_call_back, "POST");
};

student_list_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "student_list_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_lastname_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_lastname = function (lastname) {
    var param = {
        "act": "student_list_get_by_lastname",
        lastname: lastname
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_lastname_call_back, "POST");
};

student_list_connection.get_by_lastname_grid = function (lastname) {
    var param = {
        "act": "student_list_get_by_lastname",
        lastname: lastname
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};
student_list_connection.get_by_national_code_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.get_by_national_code = function (national_code) {
    var param = {
        "act": "student_list_get_by_national_code",
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_by_national_code_call_back, "POST");
};

student_list_connection.get_by_national_code_grid = function (national_code) {
    var param = {
        "act": "student_list_get_by_national_code",
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.get_grid_call_back, "POST");
};

//________________edit functions
student_list_connection.edit_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_student_id = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_student_id",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_student_id_call_back, "POST");
};
student_list_connection.edit_student_id_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_student_id_by_student_id = function (student_id, student_id) {
    var param = {
        "act": "student_list_edit_student_id_by_student_id",
        student_id: student_id,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_student_id_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_user_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_user_id = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_user_id",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_user_id_call_back, "POST");
};
student_list_connection.edit_user_id_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_user_id_by_student_id = function (student_id, user_id) {
    var param = {
        "act": "student_list_edit_user_id_by_student_id",
        user_id: user_id,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_user_id_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_grade_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_grade_id = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_grade_id",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_grade_id_call_back, "POST");
};
student_list_connection.edit_grade_id_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_grade_id_by_student_id = function (student_id, grade_id) {
    var param = {
        "act": "student_list_edit_grade_id_by_student_id",
        grade_id: grade_id,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_grade_id_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_field_of_study_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_field_of_study_id = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_field_of_study_id",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_field_of_study_id_call_back, "POST");
};
student_list_connection.edit_field_of_study_id_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_field_of_study_id_by_student_id = function (student_id, field_of_study_id) {
    var param = {
        "act": "student_list_edit_field_of_study_id_by_student_id",
        field_of_study_id: field_of_study_id,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_field_of_study_id_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_year_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_year_id = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_year_id",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_year_id_call_back, "POST");
};
student_list_connection.edit_year_id_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_year_id_by_student_id = function (student_id, year_id) {
    var param = {
        "act": "student_list_edit_year_id_by_student_id",
        year_id: year_id,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_year_id_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_name = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_name",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_name_call_back, "POST");
};
student_list_connection.edit_name_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_name_by_student_id = function (student_id, name) {
    var param = {
        "act": "student_list_edit_name_by_student_id",
        name: name,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_name_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_lastname_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_lastname = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_lastname",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_lastname_call_back, "POST");
};
student_list_connection.edit_lastname_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_lastname_by_student_id = function (student_id, lastname) {
    var param = {
        "act": "student_list_edit_lastname_by_student_id",
        lastname: lastname,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_lastname_by_student_id_call_back, "POST");
};
student_list_connection.edit_by_national_code_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_by_national_code = function (student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname, national_code) {
    var param = {
        "act": "student_list_edit_by_national_code",
        student_id: student_id,
        user_id: user_id,
        grade_id: grade_id,
        field_of_study_id: field_of_study_id,
        year_id: year_id,
        name: name,
        lastname: lastname,
        national_code: national_code
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_by_national_code_call_back, "POST");
};
student_list_connection.edit_national_code_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_list_connection.debug_mode) {
        console.log(data);
    }
};
student_list_connection.edit_national_code_by_student_id = function (student_id, national_code) {
    var param = {
        "act": "student_list_edit_national_code_by_student_id",
        national_code: national_code,
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_list_connection.controller_url, param, student_list_connection.edit_national_code_by_student_id_call_back, "POST");
};