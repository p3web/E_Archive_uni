
         var grid_view_users_system_systemName;
         var view_users_system_systemName_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        view_users_system_systemName_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_system_systemName_connection.debug_mode){
                console.log(data);
            }
        };
        view_users_system_systemName_connection.get = function (){
            var param = {"act": "view_users_system_systemName_get"};
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_call_back , "POST");
        };
            //_____________ grid function
            view_users_system_systemName_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_system_systemName_connection.debug_mode){
            console.log(data);
            }

            grid_view_users_system_systemName = new PSCO_grid('grid_view_users_system_systemName');

            grid_view_users_system_systemName.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_id', hidden: false, type: 'text'},{name: 'system', hidden: false, type: 'text'},{name: 'token', hidden: false, type: 'text'},{name: 'expire_date', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_view_users_system_systemName.RightToLeft = false;

       // grid_view_users_system_systemName.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_view_users_system_systemName.data = data;

        grid_view_users_system_systemName.render();

        };
        view_users_system_systemName_connection.get_grid = function (){
            var param = {"act": "view_users_system_systemName_get"};
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        view_users_system_systemName_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_id = function (id){
                var param = {"act": "view_users_system_systemName_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_id_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_id_grid = function (id){
                var param = {"act": "view_users_system_systemName_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        view_users_system_systemName_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_user_id = function (user_id){
                var param = {"act": "view_users_system_systemName_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_user_id_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "view_users_system_systemName_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        view_users_system_systemName_connection.get_by_system_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_system = function (system){
                var param = {"act": "view_users_system_systemName_get_by_system",
            system : system
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_system_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_system_grid = function (system){
                var param = {"act": "view_users_system_systemName_get_by_system",
            system : system
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        view_users_system_systemName_connection.get_by_token_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_token = function (token){
                var param = {"act": "view_users_system_systemName_get_by_token",
            token : token
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_token_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_token_grid = function (token){
                var param = {"act": "view_users_system_systemName_get_by_token",
            token : token
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        view_users_system_systemName_connection.get_by_expire_date_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_expire_date = function (expire_date){
                var param = {"act": "view_users_system_systemName_get_by_expire_date",
            expire_date : expire_date
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_expire_date_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_expire_date_grid = function (expire_date){
                var param = {"act": "view_users_system_systemName_get_by_expire_date",
            expire_date : expire_date
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        view_users_system_systemName_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_created_by = function (created_by){
                var param = {"act": "view_users_system_systemName_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_created_by_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "view_users_system_systemName_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        view_users_system_systemName_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_system_systemName_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_system_systemName_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "view_users_system_systemName_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_by_creationDate_call_back , "POST");
        };

        view_users_system_systemName_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "view_users_system_systemName_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_system_systemName_connection.controller_url , param , view_users_system_systemName_connection.get_grid_call_back , "POST");
        };
        