var grid_directory;
var directory_connection = {
    controller_url: 'controller_robo/controller_directory.php' //TODO: set controller url
    , debug_mode: false
    //controller/controller_users.php
};

directory_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get = function () {
    var param = {"act": "directory_get"};
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_call_back, "POST");
};
//_____________ delete function
directory_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};

directory_connection.delete = function (ID) {
    var param = {
        act: "directory_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.delete_call_back, "POST");
};
//_____________ set function
directory_connection.set_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};

directory_connection.set = function (owner_id, name, comment, url, partition_id, created_by) {
    var param = {
        act: "directory_set",
        owner_id: owner_id, name: name, comment: comment, url: url, partition_id: partition_id, created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.set_call_back, "POST");
};
//_____________ grid function
directory_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }

    grid_directory = new PSCO_grid('grid_directory');

    grid_directory.cols = [
        {name: 'ID', hidden: false, type: 'text'}, {name: 'owner_id', hidden: false, type: 'text'}, {
            name: 'name',
            hidden: false,
            type: 'text'
        }, {name: 'comment', hidden: false, type: 'text'}, {
            name: 'url',
            hidden: false,
            type: 'text'
        }, {name: 'partition_id', hidden: false, type: 'text'}, {
            name: 'created_by',
            hidden: false,
            type: 'text'
        }, {name: 'creationDate', hidden: false, type: 'text'}];

    //grid_directory.RightToLeft = false;

    // grid_directory.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];
    grid_directory.actions = [{
        name: 'Edit',
        ClassName: 'glyphicon glyphicon-edit',
        attribute: [{name: 'onclick', value: "Edit(this,'partitionEdit')"}]
    }, {
        name: 'delete',
        ClassName: 'glyphicon glyphicon-remove',
        attribute: [{name: 'onclick', value: "deleteIt(this , 'directory_delete')"}]
    }];
    grid_directory.data = data;

    grid_directory.render();

};
directory_connection.get_grid = function () {
    var param = {"act": "directory_get"};
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
//________________get functions
directory_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_ID = function (ID) {
    var param = {
        "act": "directory_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_ID_call_back, "POST");
};

directory_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "directory_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_owner_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_owner_id = function (owner_id) {
    var param = {
        "act": "directory_get_by_owner_id",
        owner_id: owner_id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_owner_id_call_back, "POST");
};

directory_connection.get_by_owner_id_grid = function (owner_id) {
    var param = {
        "act": "directory_get_by_owner_id",
        owner_id: owner_id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_name = function (name) {
    var param = {
        "act": "directory_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_name_call_back, "POST");
};

directory_connection.get_by_name_grid = function (name) {
    var param = {
        "act": "directory_get_by_name",
        name: name
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_comment_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_comment = function (comment) {
    var param = {
        "act": "directory_get_by_comment",
        comment: comment
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_comment_call_back, "POST");
};

directory_connection.get_by_comment_grid = function (comment) {
    var param = {
        "act": "directory_get_by_comment",
        comment: comment
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_url_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_url = function (url) {
    var param = {
        "act": "directory_get_by_url",
        url: url
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_url_call_back, "POST");
};

directory_connection.get_by_url_grid = function (url) {
    var param = {
        "act": "directory_get_by_url",
        url: url
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_partition_id_call_back = function (data) {
    //TODO: set code after the server response

    if (directory_connection.debug_mode) {
        console.log(data);

    }
};
directory_connection.get_by_partition_id = function (partition_id) {
    var param = {
        "act": "directory_get_by_partition_id",
        partition_id: partition_id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_partition_id_call_back, "POST");
};

directory_connection.get_by_partition_id_grid = function (partition_id) {
    var param = {
        "act": "directory_get_by_partition_id",
        partition_id: partition_id
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_created_by = function (created_by) {
    var param = {
        "act": "directory_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_created_by_call_back, "POST");
};

directory_connection.get_by_created_by_grid = function (created_by) {
    var param = {
        "act": "directory_get_by_created_by",
        created_by: created_by
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};
directory_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "directory_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_by_creationDate_call_back, "POST");
};

directory_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "directory_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.get_grid_call_back, "POST");
};

//________________edit functions
directory_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_ID = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_ID",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_ID_call_back, "POST");
};
directory_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "directory_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_ID_by_ID_call_back, "POST");
};
directory_connection.edit_by_owner_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_owner_id = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_owner_id",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_owner_id_call_back, "POST");
};
directory_connection.edit_owner_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_owner_id_by_ID = function (ID, owner_id) {
    var param = {
        "act": "directory_edit_owner_id_by_ID",
        owner_id: owner_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_owner_id_by_ID_call_back, "POST");
};
directory_connection.edit_by_name_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_name = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_name",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_name_call_back, "POST");
};
directory_connection.edit_name_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_name_by_ID = function (ID, name) {
    var param = {
        "act": "directory_edit_name_by_ID",
        name: name,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_name_by_ID_call_back, "POST");
};
directory_connection.edit_by_comment_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_comment = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_comment",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_comment_call_back, "POST");
};
directory_connection.edit_comment_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_comment_by_ID = function (ID, comment) {
    var param = {
        "act": "directory_edit_comment_by_ID",
        comment: comment,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_comment_by_ID_call_back, "POST");
};
directory_connection.edit_by_url_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_url = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_url",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_url_call_back, "POST");
};
directory_connection.edit_url_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_url_by_ID = function (ID, url) {
    var param = {
        "act": "directory_edit_url_by_ID",
        url: url,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_url_by_ID_call_back, "POST");
};
directory_connection.edit_by_partition_id_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_partition_id = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_partition_id",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_partition_id_call_back, "POST");
};
directory_connection.edit_partition_id_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_partition_id_by_ID = function (ID, partition_id) {
    var param = {
        "act": "directory_edit_partition_id_by_ID",
        partition_id: partition_id,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_partition_id_by_ID_call_back, "POST");
};
directory_connection.edit_by_created_by_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_created_by = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_created_by",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_created_by_call_back, "POST");
};
directory_connection.edit_created_by_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_created_by_by_ID = function (ID, created_by) {
    var param = {
        "act": "directory_edit_created_by_by_ID",
        created_by: created_by,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_created_by_by_ID_call_back, "POST");
};
directory_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_by_creationDate = function (ID, owner_id, name, comment, url, partition_id, created_by, creationDate) {
    var param = {
        "act": "directory_edit_by_creationDate",
        ID: ID,
        owner_id: owner_id,
        name: name,
        comment: comment,
        url: url,
        partition_id: partition_id,
        created_by: created_by,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_by_creationDate_call_back, "POST");
};
directory_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (directory_connection.debug_mode) {
        console.log(data);
    }
};
directory_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "directory_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(directory_connection.controller_url, param, directory_connection.edit_creationDate_by_ID_call_back, "POST");
};