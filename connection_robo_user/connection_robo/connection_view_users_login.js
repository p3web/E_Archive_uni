
         var grid_view_users_login;
         var view_users_login_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        view_users_login_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_login_connection.debug_mode){
                console.log(data);
            }
        };
        view_users_login_connection.get = function (){
            var param = {"act": "view_users_login_get"};
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_call_back , "POST");
        };
            //_____________ grid function
            view_users_login_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_login_connection.debug_mode){
            console.log(data);
            }

            grid_view_users_login = new PSCO_grid('grid_view_users_login');

            grid_view_users_login.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_name', hidden: false, type: 'text'},{name: 'pssword', hidden: false, type: 'text'},{name: 'avatar', hidden: false, type: 'text'}];

        grid_view_users_login.RightToLeft = false;

       // grid_view_users_login.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_view_users_login.data = data;

        grid_view_users_login.render();

        };
        view_users_login_connection.get_grid = function (){
            var param = {"act": "view_users_login_get"};
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        view_users_login_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_login_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_login_connection.get_by_id = function (id){
                var param = {"act": "view_users_login_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_by_id_call_back , "POST");
        };

        view_users_login_connection.get_by_id_grid = function (id){
                var param = {"act": "view_users_login_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_grid_call_back , "POST");
        };
        view_users_login_connection.get_by_user_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_login_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_login_connection.get_by_user_name = function (user_name){
                var param = {"act": "view_users_login_get_by_user_name",
            user_name : user_name
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_by_user_name_call_back , "POST");
        };

        view_users_login_connection.get_by_user_name_grid = function (user_name){
                var param = {"act": "view_users_login_get_by_user_name",
            user_name : user_name
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_grid_call_back , "POST");
        };
        view_users_login_connection.get_by_pssword_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_login_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_login_connection.get_by_pssword = function (pssword){
                var param = {"act": "view_users_login_get_by_pssword",
            pssword : pssword
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_by_pssword_call_back , "POST");
        };

        view_users_login_connection.get_by_pssword_grid = function (pssword){
                var param = {"act": "view_users_login_get_by_pssword",
            pssword : pssword
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_grid_call_back , "POST");
        };
        view_users_login_connection.get_by_avatar_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_login_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_login_connection.get_by_avatar = function (avatar){
                var param = {"act": "view_users_login_get_by_avatar",
            avatar : avatar
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_by_avatar_call_back , "POST");
        };

        view_users_login_connection.get_by_avatar_grid = function (avatar){
                var param = {"act": "view_users_login_get_by_avatar",
            avatar : avatar
            };
            ajax.sender_data_json_by_url_callback(view_users_login_connection.controller_url , param , view_users_login_connection.get_grid_call_back , "POST");
        };
        