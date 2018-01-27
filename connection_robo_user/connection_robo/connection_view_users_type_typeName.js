
         var grid_view_users_type_typeName;
         var view_users_type_typeName_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        view_users_type_typeName_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_type_typeName_connection.debug_mode){
                console.log(data);
            }
        };
        view_users_type_typeName_connection.get = function (){
            var param = {"act": "view_users_type_typeName_get"};
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_call_back , "POST");
        };
            //_____________ grid function
            view_users_type_typeName_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_type_typeName_connection.debug_mode){
            console.log(data);
            }

            grid_view_users_type_typeName = new PSCO_grid('grid_view_users_type_typeName');

            grid_view_users_type_typeName.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_id', hidden: false, type: 'text'},{name: 'type', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_view_users_type_typeName.RightToLeft = false;

       // grid_view_users_type_typeName.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_view_users_type_typeName.data = data;

        grid_view_users_type_typeName.render();

        };
        view_users_type_typeName_connection.get_grid = function (){
            var param = {"act": "view_users_type_typeName_get"};
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        view_users_type_typeName_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_type_typeName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_type_typeName_connection.get_by_id = function (id){
                var param = {"act": "view_users_type_typeName_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_by_id_call_back , "POST");
        };

        view_users_type_typeName_connection.get_by_id_grid = function (id){
                var param = {"act": "view_users_type_typeName_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_grid_call_back , "POST");
        };
        view_users_type_typeName_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_type_typeName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_type_typeName_connection.get_by_user_id = function (user_id){
                var param = {"act": "view_users_type_typeName_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_by_user_id_call_back , "POST");
        };

        view_users_type_typeName_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "view_users_type_typeName_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_grid_call_back , "POST");
        };
        view_users_type_typeName_connection.get_by_type_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_type_typeName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_type_typeName_connection.get_by_type = function (type){
                var param = {"act": "view_users_type_typeName_get_by_type",
            type : type
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_by_type_call_back , "POST");
        };

        view_users_type_typeName_connection.get_by_type_grid = function (type){
                var param = {"act": "view_users_type_typeName_get_by_type",
            type : type
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_grid_call_back , "POST");
        };
        view_users_type_typeName_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_type_typeName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_type_typeName_connection.get_by_created_by = function (created_by){
                var param = {"act": "view_users_type_typeName_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_by_created_by_call_back , "POST");
        };

        view_users_type_typeName_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "view_users_type_typeName_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_grid_call_back , "POST");
        };
        view_users_type_typeName_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_type_typeName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_type_typeName_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "view_users_type_typeName_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_by_creationDate_call_back , "POST");
        };

        view_users_type_typeName_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "view_users_type_typeName_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_type_typeName_connection.controller_url , param , view_users_type_typeName_connection.get_grid_call_back , "POST");
        };
        