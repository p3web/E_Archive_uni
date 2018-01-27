var grid_student;
var student_connection = {
    controller_url: 'controller_robo/controller_student.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

student_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get = function () {
    var param = {"act": "student_get"};
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_call_back, "POST");
};
//_____________ delete function
student_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};

student_connection.delete = function (ID) {
    var param = {
        act: "student_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.delete_call_back, "POST");
};
student_connection.delete_by_user_id = function (ID) {
    var param = {
        act: "student_delete_by_user_id",
        user_id: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.delete_call_back, "POST");
};
//_____________ set function
student_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};

student_connection.set = function (user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by) {
    var param = {
        act: "student_set",
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.set_call_back, "POST");
};
//_____________ grid function
student_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }

    grid_student = new PSCO_grid('grid_student');

    grid_student.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'user_id', hidden: true, type: 'text'}, {
            name: 'student_id',
            hidden: true,
            type: 'text'
        }, {name: 'grade_id', hidden: true, type: 'text'}, {
            name: 'year_id',
            hidden: true,
            type: 'text'
        }, {name: 'field_of_study_id', hidden: true, type: 'text'}, {
            name: 'transfer_unit',
            hidden: true,
            type: 'text'
        }, {name: 'accept_unit', hidden: false, type: 'text'}, {
            name: 'term_graduate',
            hidden: false,
            type: 'text'
        }, {name: 'average', hidden: false, type: 'text'}, {
            name: 'system_type',
            hidden: false,
            type: 'text'
        }, {name: 'date_graduate', hidden: false, type: 'text'}, {
            name: 'created_by',
            hidden: true,
            type: 'text'
        }, {name: 'creationDate', hidden: true, type: 'text'}];

    // grid_student.RightToLeft = false;

    // grid_student.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_student.actions = [{
        name: 'like',
        ClassName: 'glyphicon glyphicon-ok',
        attribute: [{name: 'onclick', value: "like(this , 'student_set_user')"}]
    },
         {
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'edit_student')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'student_delete')"}]
    }
    ];
    grid_student.data = data;

    grid_student.render();

};
student_connection.get_grid = function () {
    var param = {"act": "student_get"};
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.student_get_for_grid = function (year_id , grade_id , field_of_study_id) {
    var param = {
        "act": "student_get_for_grid",
        "year_id" : year_id,
        "grade_id":grade_id,
        "field_of_study_id":field_of_study_id

    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
//________________get functions
student_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_ID = function (ID) {
    var param = {
        "act": "student_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_ID_call_back, "POST");
};

student_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "student_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_user_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_user_id = function (user_id) {
    var param = {
        "act": "student_get_by_user_id",
        user_id: user_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_user_id_call_back, "POST");
};

student_connection.get_by_user_id_grid = function (user_id) {
    var param = {
        "act": "student_get_by_user_id",
        user_id: user_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_student_id = function (student_id) {
    var param = {
        "act": "student_get_by_student_id",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_student_id_call_back, "POST");
};

student_connection.get_by_student_id_grid = function (student_id) {
    var param = {
        "act": "student_get_by_student_id",
        student_id: student_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_grade_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_grade_id = function (grade_id) {
    var param = {
        "act": "student_get_by_grade_id",
        grade_id: grade_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_grade_id_call_back, "POST");
};

student_connection.get_by_grade_id_grid = function (grade_id) {
    var param = {
        "act": "student_get_by_grade_id",
        grade_id: grade_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_year_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_year_id = function (year_id) {
    var param = {
        "act": "student_get_by_year_id",
        year_id: year_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_year_id_call_back, "POST");
};

student_connection.get_by_year_id_grid = function (year_id) {
    var param = {
        "act": "student_get_by_year_id",
        year_id: year_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_field_of_study_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_field_of_study_id = function (field_of_study_id) {
    var param = {
        "act": "student_get_by_field_of_study_id",
        field_of_study_id: field_of_study_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_field_of_study_id_call_back, "POST");
};

student_connection.get_by_field_of_study_id_grid = function (field_of_study_id) {
    var param = {
        "act": "student_get_by_field_of_study_id",
        field_of_study_id: field_of_study_id
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_transfer_unit_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_transfer_unit = function (transfer_unit) {
    var param = {
        "act": "student_get_by_transfer_unit",
        transfer_unit: transfer_unit
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_transfer_unit_call_back, "POST");
};

student_connection.get_by_transfer_unit_grid = function (transfer_unit) {
    var param = {
        "act": "student_get_by_transfer_unit",
        transfer_unit: transfer_unit
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_accept_unit_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_accept_unit = function (accept_unit) {
    var param = {
        "act": "student_get_by_accept_unit",
        accept_unit: accept_unit
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_accept_unit_call_back, "POST");
};

student_connection.get_by_accept_unit_grid = function (accept_unit) {
    var param = {
        "act": "student_get_by_accept_unit",
        accept_unit: accept_unit
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_term_graduate_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_term_graduate = function (term_graduate) {
    var param = {
        "act": "student_get_by_term_graduate",
        term_graduate: term_graduate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_term_graduate_call_back, "POST");
};

student_connection.get_by_term_graduate_grid = function (term_graduate) {
    var param = {
        "act": "student_get_by_term_graduate",
        term_graduate: term_graduate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_average_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_average = function (average) {
    var param = {
        "act": "student_get_by_average",
        average: average
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_average_call_back, "POST");
};

student_connection.get_by_average_grid = function (average) {
    var param = {
        "act": "student_get_by_average",
        average: average
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_system_type_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_system_type = function (system_type) {
    var param = {
        "act": "student_get_by_system_type",
        system_type: system_type
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_system_type_call_back, "POST");
};

student_connection.get_by_system_type_grid = function (system_type) {
    var param = {
        "act": "student_get_by_system_type",
        system_type: system_type
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_date_graduate_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_date_graduate = function (date_graduate) {
    var param = {
        "act": "student_get_by_date_graduate",
        date_graduate: date_graduate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_date_graduate_call_back, "POST");
};

student_connection.get_by_date_graduate_grid = function (date_graduate) {
    var param = {
        "act": "student_get_by_date_graduate",
        date_graduate: date_graduate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "student_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_created_by_call_back, "POST");
};

student_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "student_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};
student_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "student_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_by_creationDate_call_back, "POST");
};

student_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "student_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.get_grid_call_back, "POST");
};

//________________edit functions
student_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_ID = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_ID",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_ID_call_back, "POST");
};
student_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "student_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_ID_by_ID_call_back, "POST");
};
student_connection.edit_by_user_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_user_id = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_user_id",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_user_id_call_back, "POST");
};
student_connection.edit_user_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_user_id_by_ID = function (ID, user_id) {
    var param = {
        "act": "student_edit_user_id_by_ID",
        user_id: user_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_user_id_by_ID_call_back, "POST");
};
student_connection.edit_by_student_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_student_id = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_student_id",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_student_id_call_back, "POST");
};
student_connection.edit_student_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_student_id_by_ID = function (ID, student_id) {
    var param = {
        "act": "student_edit_student_id_by_ID",
        student_id: student_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_student_id_by_ID_call_back, "POST");
};
student_connection.edit_by_grade_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_grade_id = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_grade_id",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_grade_id_call_back, "POST");
};
student_connection.edit_grade_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_grade_id_by_ID = function (ID, grade_id) {
    var param = {
        "act": "student_edit_grade_id_by_ID",
        grade_id: grade_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_grade_id_by_ID_call_back, "POST");
};
student_connection.edit_by_year_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_year_id = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_year_id",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_year_id_call_back, "POST");
};
student_connection.edit_year_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_year_id_by_ID = function (ID, year_id) {
    var param = {
        "act": "student_edit_year_id_by_ID",
        year_id: year_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_year_id_by_ID_call_back, "POST");
};
student_connection.edit_by_field_of_study_id_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_field_of_study_id = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_field_of_study_id",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_field_of_study_id_call_back, "POST");
};
student_connection.edit_field_of_study_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_field_of_study_id_by_ID = function (ID, field_of_study_id) {
    var param = {
        "act": "student_edit_field_of_study_id_by_ID",
        field_of_study_id: field_of_study_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_field_of_study_id_by_ID_call_back, "POST");
};
student_connection.edit_by_transfer_unit_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_transfer_unit = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_transfer_unit",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_transfer_unit_call_back, "POST");
};
student_connection.edit_transfer_unit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_transfer_unit_by_ID = function (ID, transfer_unit) {
    var param = {
        "act": "student_edit_transfer_unit_by_ID",
        transfer_unit: transfer_unit,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_transfer_unit_by_ID_call_back, "POST");
};
student_connection.edit_by_accept_unit_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_accept_unit = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_accept_unit",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_accept_unit_call_back, "POST");
};
student_connection.edit_accept_unit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_accept_unit_by_ID = function (ID, accept_unit) {
    var param = {
        "act": "student_edit_accept_unit_by_ID",
        accept_unit: accept_unit,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_accept_unit_by_ID_call_back, "POST");
};
student_connection.edit_by_term_graduate_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_term_graduate = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_term_graduate",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_term_graduate_call_back, "POST");
};
student_connection.edit_term_graduate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_term_graduate_by_ID = function (ID, term_graduate) {
    var param = {
        "act": "student_edit_term_graduate_by_ID",
        term_graduate: term_graduate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_term_graduate_by_ID_call_back, "POST");
};
student_connection.edit_by_average_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_average = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_average",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_average_call_back, "POST");
};
student_connection.edit_average_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_average_by_ID = function (ID, average) {
    var param = {
        "act": "student_edit_average_by_ID",
        average: average,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_average_by_ID_call_back, "POST");
};
student_connection.edit_by_system_type_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_system_type = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_system_type",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_system_type_call_back, "POST");
};
student_connection.edit_system_type_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_system_type_by_ID = function (ID, system_type) {
    var param = {
        "act": "student_edit_system_type_by_ID",
        system_type: system_type,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_system_type_by_ID_call_back, "POST");
};
student_connection.edit_by_date_graduate_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_date_graduate = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_date_graduate",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_date_graduate_call_back, "POST");
};
student_connection.edit_date_graduate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_date_graduate_by_ID = function (ID, date_graduate) {
    var param = {
        "act": "student_edit_date_graduate_by_ID",
        date_graduate: date_graduate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_date_graduate_by_ID_call_back, "POST");
};
student_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_created_by = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_created_by",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_created_by_call_back, "POST");
};
student_connection.edit_created_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_created_by_by_ID = function (ID, created_by) {
    var param = {
        "act": "student_edit_created_by_by_ID",
        created_by: created_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_created_by_by_ID_call_back, "POST");
};
student_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_by_creationDate = function (ID, user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by, creationDate) {
    var param = {
        "act": "student_edit_by_creationDate",
        ID: ID,
        user_id: user_id,
        student_id: student_id,
        grade_id: grade_id,
        year_id: year_id,
        field_of_study_id: field_of_study_id,
        transfer_unit: transfer_unit,
        accept_unit: accept_unit,
        term_graduate: term_graduate,
        average: average,
        system_type: system_type,
        date_graduate: date_graduate,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_by_creationDate_call_back, "POST");
};
student_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (student_connection.debug_mode) {
        console.log(data);
    }
};
student_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "student_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(student_connection.controller_url, param, student_connection.edit_creationDate_by_ID_call_back, "POST");
};