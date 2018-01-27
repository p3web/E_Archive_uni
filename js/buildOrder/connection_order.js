var grid_order;
var order_connection = {
    controller_url: '/controller/controller_order.php'
    , debug_mode: false
};

order_connection.get_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get = function () {
    var param = {"act": "order_get"};
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_call_back, "POST");
};
//_____________ delete function
order_connection.delete_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};

order_connection.delete = function (ID) {
    var param = {
        act: "order_delete",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.delete_call_back, "POST");
};
//_____________ set function
order_connection.set_call_back = function (data) {
    document.getElementById('orderID').value = data.data;

    saveOrderItems();

    if (order_connection.debug_mode) {
        console.log(data);
    }
};

order_connection.set = function (number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy) {
    var param = {
        act: "order_set",
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.set_call_back, "POST");
};
//_____________ grid function
order_connection.get_grid_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }

    grid_order = new PSCO_grid('grid_order');

    grid_order.cols = [
        {name: 'ID', hidden: true, type: 'text'},
        {name: 'number', hidden: false, type: 'text'}, {
            name: 'date',
            hidden: false,
            type: 'text'
        },
        {name: 'customerID', hidden: false, type: 'text'},
        {
            name: 'settlementType',
            hidden: true,
            type: 'text'
        },
        {name: 'checkNumber', hidden: true , type: 'text'},
        {
            name: 'perPayment',
            hidden: true,
            type: 'text'
        }, {name: 'deliverAfterSettlement', hidden: false, type: 'text'},
        {
            name: 'deliverTypeID',
            hidden: false,
            type: 'text'
        }, {name: 'createdBy', hidden: true, type: 'text'},
        {name: 'creationDate', hidden: true, type: 'text'}];


    grid_order.actions =[{
        name: 'showForm',
        ClassName: 'glyphicon glyphicon-eye-open Pointer',
        attribute: [{name: 'onclick', value: 'showForm(this)'}]
    },{
        name: 'customerDetails',
        ClassName: 'glyphicon glyphicon-user Pointer',
        attribute: [{name: 'onclick', value: "UserDetail(this)"}]
    }, {
        name: 'settlementType',
        ClassName: 'glyphicon glyphicon-ok Pointer',
        attribute: [{name: 'onclick', value: "Modal('buy')"}]
    }];

    // ---- for remove time
    for(var i =0 ; i < data.length ; i++){
        data[i]['date'] = data[i]['date'].split(' ');
        data[i]['date'] = data[i]['date'][0];
    }

    grid_order.data = data;

    grid_order.render();

};
order_connection.get_grid = function () {
    var param = {"act": "order_get"};
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
//________________get functions
order_connection.get_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_ID = function (ID) {
    var param = {
        "act": "order_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_ID_call_back, "POST");
};

order_connection.get_by_ID_grid = function (ID) {
    var param = {
        "act": "order_get_by_ID",
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_number = function (number) {
    var param = {
        "act": "order_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_number_call_back, "POST");
};

order_connection.get_by_number_grid = function (number) {
    var param = {
        "act": "order_get_by_number",
        number: number
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_date_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_date = function (date) {
    var param = {
        "act": "order_get_by_date",
        date: date
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_date_call_back, "POST");
};

order_connection.get_by_date_grid = function (date) {
    var param = {
        "act": "order_get_by_date",
        date: date
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_customerID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_customerID = function (customerID) {
    var param = {
        "act": "order_get_by_customerID",
        customerID: customerID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_customerID_call_back, "POST");
};

order_connection.get_by_customerID_grid = function (customerID) {
    var param = {
        "act": "order_get_by_customerID",
        customerID: customerID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_settlementType_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_settlementType = function (settlementType) {
    var param = {
        "act": "order_get_by_settlementType",
        settlementType: settlementType
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_settlementType_call_back, "POST");
};

order_connection.get_by_settlementType_grid = function (settlementType) {
    var param = {
        "act": "order_get_by_settlementType",
        settlementType: settlementType
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_checkNumber_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_checkNumber = function (checkNumber) {
    var param = {
        "act": "order_get_by_checkNumber",
        checkNumber: checkNumber
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_checkNumber_call_back, "POST");
};

order_connection.get_by_checkNumber_grid = function (checkNumber) {
    var param = {
        "act": "order_get_by_checkNumber",
        checkNumber: checkNumber
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_perPayment_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_perPayment = function (perPayment) {
    var param = {
        "act": "order_get_by_perPayment",
        perPayment: perPayment
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_perPayment_call_back, "POST");
};

order_connection.get_by_perPayment_grid = function (perPayment) {
    var param = {
        "act": "order_get_by_perPayment",
        perPayment: perPayment
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_deliverAfterSettlement_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_deliverAfterSettlement = function (deliverAfterSettlement) {
    var param = {
        "act": "order_get_by_deliverAfterSettlement",
        deliverAfterSettlement: deliverAfterSettlement
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_deliverAfterSettlement_call_back, "POST");
};

order_connection.get_by_deliverAfterSettlement_grid = function (deliverAfterSettlement) {
    var param = {
        "act": "order_get_by_deliverAfterSettlement",
        deliverAfterSettlement: deliverAfterSettlement
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_deliverTypeID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_deliverTypeID = function (deliverTypeID) {
    var param = {
        "act": "order_get_by_deliverTypeID",
        deliverTypeID: deliverTypeID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_deliverTypeID_call_back, "POST");
};

order_connection.get_by_deliverTypeID_grid = function (deliverTypeID) {
    var param = {
        "act": "order_get_by_deliverTypeID",
        deliverTypeID: deliverTypeID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_createdBy = function (createdBy) {
    var param = {
        "act": "order_get_by_createdBy",
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_createdBy_call_back, "POST");
};

order_connection.get_by_createdBy_grid = function (createdBy) {
    var param = {
        "act": "order_get_by_createdBy",
        createdBy: createdBy
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};
order_connection.get_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.get_by_creationDate = function (creationDate) {
    var param = {
        "act": "order_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_by_creationDate_call_back, "POST");
};

order_connection.get_by_creationDate_grid = function (creationDate) {
    var param = {
        "act": "order_get_by_creationDate",
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.get_grid_call_back, "POST");
};

//________________edit functions
order_connection.edit_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_ID = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_ID",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_ID_call_back, "POST");
};
order_connection.edit_ID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_ID_by_ID = function (ID, ID) {
    var param = {
        "act": "order_edit_ID_by_ID",
        ID: ID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_ID_by_ID_call_back, "POST");
};
order_connection.edit_by_number_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_number = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_number",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_number_call_back, "POST");
};
order_connection.edit_number_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_number_by_ID = function (ID, number) {
    var param = {
        "act": "order_edit_number_by_ID",
        number: number,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_number_by_ID_call_back, "POST");
};
order_connection.edit_by_date_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_date = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_date",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_date_call_back, "POST");
};
order_connection.edit_date_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_date_by_ID = function (ID, date) {
    var param = {
        "act": "order_edit_date_by_ID",
        date: date,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_date_by_ID_call_back, "POST");
};
order_connection.edit_by_customerID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_customerID = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_customerID",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_customerID_call_back, "POST");
};
order_connection.edit_customerID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_customerID_by_ID = function (ID, customerID) {
    var param = {
        "act": "order_edit_customerID_by_ID",
        customerID: customerID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_customerID_by_ID_call_back, "POST");
};
order_connection.edit_by_settlementType_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_settlementType = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_settlementType",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_settlementType_call_back, "POST");
};
order_connection.edit_settlementType_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_settlementType_by_ID = function (ID, settlementType) {
    var param = {
        "act": "order_edit_settlementType_by_ID",
        settlementType: settlementType,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_settlementType_by_ID_call_back, "POST");
};
order_connection.edit_by_checkNumber_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_checkNumber = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_checkNumber",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_checkNumber_call_back, "POST");
};
order_connection.edit_checkNumber_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_checkNumber_by_ID = function (ID, checkNumber) {
    var param = {
        "act": "order_edit_checkNumber_by_ID",
        checkNumber: checkNumber,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_checkNumber_by_ID_call_back, "POST");
};
order_connection.edit_by_perPayment_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_perPayment = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_perPayment",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_perPayment_call_back, "POST");
};
order_connection.edit_perPayment_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_perPayment_by_ID = function (ID, perPayment) {
    var param = {
        "act": "order_edit_perPayment_by_ID",
        perPayment: perPayment,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_perPayment_by_ID_call_back, "POST");
};
order_connection.edit_by_deliverAfterSettlement_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_deliverAfterSettlement = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_deliverAfterSettlement",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_deliverAfterSettlement_call_back, "POST");
};
order_connection.edit_deliverAfterSettlement_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_deliverAfterSettlement_by_ID = function (ID, deliverAfterSettlement) {
    var param = {
        "act": "order_edit_deliverAfterSettlement_by_ID",
        deliverAfterSettlement: deliverAfterSettlement,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_deliverAfterSettlement_by_ID_call_back, "POST");
};
order_connection.edit_by_deliverTypeID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_deliverTypeID = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_deliverTypeID",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_deliverTypeID_call_back, "POST");
};
order_connection.edit_deliverTypeID_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_deliverTypeID_by_ID = function (ID, deliverTypeID) {
    var param = {
        "act": "order_edit_deliverTypeID_by_ID",
        deliverTypeID: deliverTypeID,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_deliverTypeID_by_ID_call_back, "POST");
};
order_connection.edit_by_createdBy_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_createdBy = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_createdBy",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_createdBy_call_back, "POST");
};
order_connection.edit_createdBy_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_createdBy_by_ID = function (ID, createdBy) {
    var param = {
        "act": "order_edit_createdBy_by_ID",
        createdBy: createdBy,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_createdBy_by_ID_call_back, "POST");
};
order_connection.edit_by_creationDate_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_by_creationDate = function (ID, number, date, customerID, settlementType, checkNumber, perPayment, deliverAfterSettlement, deliverTypeID, createdBy, creationDate) {
    var param = {
        "act": "order_edit_by_creationDate",
        ID: ID,
        number: number,
        date: date,
        customerID: customerID,
        settlementType: settlementType,
        checkNumber: checkNumber,
        perPayment: perPayment,
        deliverAfterSettlement: deliverAfterSettlement,
        deliverTypeID: deliverTypeID,
        createdBy: createdBy,
        creationDate: creationDate
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_by_creationDate_call_back, "POST");
};
order_connection.edit_creationDate_by_ID_call_back = function (data) {
    //TODO: set code after the server response
    if (order_connection.debug_mode) {
        console.log(data);
    }
};
order_connection.edit_creationDate_by_ID = function (ID, creationDate) {
    var param = {
        "act": "order_edit_creationDate_by_ID",
        creationDate: creationDate,
        ID: ID
    };
    ajax.sender_data_json_by_url_callback(order_connection.controller_url, param, order_connection.edit_creationDate_by_ID_call_back, "POST");
};