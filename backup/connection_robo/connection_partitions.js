var grid_partitions;
var partitions_connection = {
    controller_url: 'controller_robo/controller_partitions.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

partitions_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get = function () {
    var param = {"act": "partitions_get"};
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_call_back, "POST");
};
//_____________ delete function
partitions_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};

partitions_connection.delete = function (ID) {
    var param = {
        act: "partitions_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.delete_call_back, "POST");
};
//_____________ set function
partitions_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};

partitions_connection.set = function (owner_id, name, comment, url, created_by) {
    var param = {
        act: "partitions_set",
        owner_id: owner_id, name: name, comment: comment, url: url, created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.set_call_back, "POST");
};
//_____________ grid function
partitions_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }

    grid_partitions = new PSCO_grid('grid_partitions');

    grid_partitions.cols = [
        {name: 'ID', hidden: true, type: 'text'}, {name: 'owner_id', hidden: true, type: 'text'}, {
            name: 'name',
            hidden: false,
            type: 'text'
        }, {name: 'comment', hidden: true, type: 'text'}, {
            name: 'url',
            hidden: true,
            type: 'text'
        }, {name: 'created_by', hidden: true, type: 'text'}, {name: 'creationDate', hidden: true, type: 'text'}];

    // grid_partitions.RightToLeft = false;

    // grid_partitions.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_partitions.actions = [{
        name: 'Select',
        ClassName: 'glyphicon glyphicon-ok-sign',
        attribute: [{name: 'onclick', value: "Select(this,'studentlist')"}]
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
    grid_partitions.data = data;

    grid_partitions.render();

};
partitions_connection.get_grid = function () {
    var param = {"act": "partitions_get"};
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
//________________get functions
partitions_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_ID = function (ID) {
    var param = {
        "act": "partitions_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_ID_call_back, "POST");
};

partitions_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "partitions_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
partitions_connection.get_by_owner_id_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_owner_id = function (owner_id) {
    var param = {
        "act": "partitions_get_by_owner_id",
        owner_id: owner_id
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_owner_id_call_back, "POST");
};

partitions_connection.get_by_owner_id_grid = function (owner_id) {
    var param = {
        "act": "partitions_get_by_owner_id",
        owner_id: owner_id
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
partitions_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_name = function (name) {
    var param = {
        "act": "partitions_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_name_call_back, "POST");
};

partitions_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "partitions_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
partitions_connection.get_by_comment_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_comment = function (comment) {
    var param = {
        "act": "partitions_get_by_comment",
        comment: comment
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_comment_call_back, "POST");
};

partitions_connection.get_by_comment_grid = function (comment) {
    var param = {
        "act": "partitions_get_by_comment",
        comment: comment
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
partitions_connection.get_by_url_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_url = function (url) {
    var param = {
        "act": "partitions_get_by_url",
        url: url
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_url_call_back, "POST");
};

partitions_connection.get_by_url_grid = function (url) {
    var param = {
        "act": "partitions_get_by_url",
        url: url
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
partitions_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "partitions_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_created_by_call_back, "POST");
};

partitions_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "partitions_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};
partitions_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "partitions_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_by_creationDate_call_back, "POST");
};

partitions_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "partitions_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.get_grid_call_back, "POST");
};

//________________edit functions
partitions_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_ID = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_ID",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_ID_call_back, "POST");
};
partitions_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "partitions_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_ID_by_ID_call_back, "POST");
};
partitions_connection.edit_by_owner_id_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_owner_id = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_owner_id",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_owner_id_call_back, "POST");
};
partitions_connection.edit_owner_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_owner_id_by_ID = function (ID, owner_id) {
    var param = {
        "act": "partitions_edit_owner_id_by_ID",
        owner_id: owner_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_owner_id_by_ID_call_back, "POST");
};
partitions_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_name = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_name",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_name_call_back, "POST");
};
partitions_connection.edit_name_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_name_by_ID = function (ID, name) {
    var param = {
        "act": "partitions_edit_name_by_ID",
        name: name,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_name_by_ID_call_back, "POST");
};
partitions_connection.edit_by_comment_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_comment = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_comment",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_comment_call_back, "POST");
};
partitions_connection.edit_comment_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_comment_by_ID = function (ID, comment) {
    var param = {
        "act": "partitions_edit_comment_by_ID",
        comment: comment,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_comment_by_ID_call_back, "POST");
};
partitions_connection.edit_by_url_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_url = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_url",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_url_call_back, "POST");
};
partitions_connection.edit_url_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_url_by_ID = function (ID, url) {
    var param = {
        "act": "partitions_edit_url_by_ID",
        url: url,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_url_by_ID_call_back, "POST");
};
partitions_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_created_by = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_created_by",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_created_by_call_back, "POST");
};
partitions_connection.edit_created_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_created_by_by_ID = function (ID, created_by) {
    var param = {
        "act": "partitions_edit_created_by_by_ID",
        created_by: created_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_created_by_by_ID_call_back, "POST");
};
partitions_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_by_creationDate = function (ID, owner_id, name, comment, url, created_by, creationDate) {
    var param = {
        "act": "partitions_edit_by_creationDate",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_by_creationDate_call_back, "POST");
};
partitions_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (partitions_connection.debug_mode) {
        console.log(data);
    }
};
partitions_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "partitions_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(partitions_connection.controller_url, param, partitions_connection.edit_creationDate_by_ID_call_back, "POST");
};