
         var grid_type;
         var type_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        type_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(type_connection.debug_mode){
                console.log(data);
            }
        };
        type_connection.get = function (){
            var param = {"act": "type_get"};
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_call_back , "POST");
        };
            //_____________ delete function
            type_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(type_connection.debug_mode){
                console.log(data);
            }
            };

         type_connection.delete = function (ID){
            var param = {act: "type_delete",
            ID: ID};
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.delete_call_back , "POST");
        };
            //_____________ set function
            type_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(type_connection.debug_mode){
                console.log(data);
            }
            };

         type_connection.set = function (name,created_by){
            var param = {act: "type_set",
            name:name ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.set_call_back , "POST");
        };
            //_____________ grid function
            type_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(type_connection.debug_mode){
            console.log(data);
            }

            grid_type = new PSCO_grid('grid_type');

            grid_type.cols = [
            {name: 'ID', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_type.RightToLeft = false;

       // grid_type.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_type.data = data;

        grid_type.render();

        };
        type_connection.get_grid = function (){
            var param = {"act": "type_get"};
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        type_connection.get_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.get_by_ID = function (ID){
                var param = {"act": "type_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_by_ID_call_back , "POST");
        };

        type_connection.get_by_ID_grid = function (ID){
                var param = {"act": "type_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_grid_call_back , "POST");
        };
        type_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.get_by_name = function (name){
                var param = {"act": "type_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_by_name_call_back , "POST");
        };

        type_connection.get_by_name_grid = function (name){
                var param = {"act": "type_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_grid_call_back , "POST");
        };
        type_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.get_by_created_by = function (created_by){
                var param = {"act": "type_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_by_created_by_call_back , "POST");
        };

        type_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "type_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_grid_call_back , "POST");
        };
        type_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "type_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_by_creationDate_call_back , "POST");
        };

        type_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "type_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        type_connection.edit_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_by_ID = function (ID,name,created_by,creationDate){
                var param = {"act": "type_edit_by_ID",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_by_ID_call_back , "POST");
        };type_connection.edit_ID_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_ID_by_ID = function (ID, ID){
                var param = {"act": "type_edit_ID_by_ID",
            ID : ID,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_ID_by_ID_call_back , "POST");
        };type_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_by_name = function (ID,name,created_by,creationDate){
                var param = {"act": "type_edit_by_name",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_by_name_call_back , "POST");
        };type_connection.edit_name_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_name_by_ID = function (ID, name){
                var param = {"act": "type_edit_name_by_ID",
            name : name,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_name_by_ID_call_back , "POST");
        };type_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_by_created_by = function (ID,name,created_by,creationDate){
                var param = {"act": "type_edit_by_created_by",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_by_created_by_call_back , "POST");
        };type_connection.edit_created_by_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_created_by_by_ID = function (ID, created_by){
                var param = {"act": "type_edit_created_by_by_ID",
            created_by : created_by,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_created_by_by_ID_call_back , "POST");
        };type_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_by_creationDate = function (ID,name,created_by,creationDate){
                var param = {"act": "type_edit_by_creationDate",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_by_creationDate_call_back , "POST");
        };type_connection.edit_creationDate_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(type_connection.debug_mode){
                    console.log(data);
                }
            };
        type_connection.edit_creationDate_by_ID = function (ID, creationDate){
                var param = {"act": "type_edit_creationDate_by_ID",
            creationDate : creationDate,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(type_connection.controller_url , param , type_connection.edit_creationDate_by_ID_call_back , "POST");
        };