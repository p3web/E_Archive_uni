
         var grid_users_system;
         var users_system_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        users_system_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(users_system_connection.debug_mode){
                console.log(data);
            }
        };
        users_system_connection.get = function (){
            var param = {"act": "users_system_get"};
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_call_back , "POST");
        };
            //_____________ delete function
            users_system_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(users_system_connection.debug_mode){
                console.log(data);
            }
            };

         users_system_connection.delete = function (id){
            var param = {act: "users_system_delete",
            id: id};
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.delete_call_back , "POST");
        };
            //_____________ set function
            users_system_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(users_system_connection.debug_mode){
                console.log(data);
            }
            };

         users_system_connection.set = function (user_id,system_id,token,expire_date,created_by){
            var param = {act: "users_system_set",
            user_id:user_id ,system_id:system_id ,token:token ,expire_date:expire_date ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.set_call_back , "POST");
        };
            //_____________ grid function
            users_system_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(users_system_connection.debug_mode){
            console.log(data);
            }

            grid_users_system = new PSCO_grid('grid_users_system');

            grid_users_system.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_id', hidden: false, type: 'text'},{name: 'system_id', hidden: false, type: 'text'},{name: 'token', hidden: false, type: 'text'},{name: 'expire_date', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_users_system.RightToLeft = false;

       // grid_users_system.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_users_system.data = data;

        grid_users_system.render();

        };
        users_system_connection.get_grid = function (){
            var param = {"act": "users_system_get"};
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        users_system_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_id = function (id){
                var param = {"act": "users_system_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_id_call_back , "POST");
        };

        users_system_connection.get_by_id_grid = function (id){
                var param = {"act": "users_system_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        users_system_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_user_id = function (user_id){
                var param = {"act": "users_system_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_user_id_call_back , "POST");
        };

        users_system_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "users_system_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        users_system_connection.get_by_system_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_system_id = function (system_id){
                var param = {"act": "users_system_get_by_system_id",
            system_id : system_id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_system_id_call_back , "POST");
        };

        users_system_connection.get_by_system_id_grid = function (system_id){
                var param = {"act": "users_system_get_by_system_id",
            system_id : system_id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        users_system_connection.get_by_token_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_token = function (token){
                var param = {"act": "users_system_get_by_token",
            token : token
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_token_call_back , "POST");
        };

        users_system_connection.get_by_token_grid = function (token){
                var param = {"act": "users_system_get_by_token",
            token : token
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        users_system_connection.get_by_expire_date_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_expire_date = function (expire_date){
                var param = {"act": "users_system_get_by_expire_date",
            expire_date : expire_date
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_expire_date_call_back , "POST");
        };

        users_system_connection.get_by_expire_date_grid = function (expire_date){
                var param = {"act": "users_system_get_by_expire_date",
            expire_date : expire_date
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        users_system_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_created_by = function (created_by){
                var param = {"act": "users_system_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_created_by_call_back , "POST");
        };

        users_system_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "users_system_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        users_system_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "users_system_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_by_creationDate_call_back , "POST");
        };

        users_system_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "users_system_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        users_system_connection.edit_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_id = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_id",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_id_call_back , "POST");
        };users_system_connection.edit_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_id_by_id = function (id, id){
                var param = {"act": "users_system_edit_id_by_id",
            id : id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_id_by_id_call_back , "POST");
        };users_system_connection.edit_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_user_id = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_user_id",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_user_id_call_back , "POST");
        };users_system_connection.edit_user_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_user_id_by_id = function (id, user_id){
                var param = {"act": "users_system_edit_user_id_by_id",
            user_id : user_id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_user_id_by_id_call_back , "POST");
        };users_system_connection.edit_by_system_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_system_id = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_system_id",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_system_id_call_back , "POST");
        };users_system_connection.edit_system_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_system_id_by_id = function (id, system_id){
                var param = {"act": "users_system_edit_system_id_by_id",
            system_id : system_id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_system_id_by_id_call_back , "POST");
        };users_system_connection.edit_by_token_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_token = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_token",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_token_call_back , "POST");
        };users_system_connection.edit_token_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_token_by_id = function (id, token){
                var param = {"act": "users_system_edit_token_by_id",
            token : token,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_token_by_id_call_back , "POST");
        };users_system_connection.edit_by_expire_date_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_expire_date = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_expire_date",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_expire_date_call_back , "POST");
        };users_system_connection.edit_expire_date_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_expire_date_by_id = function (id, expire_date){
                var param = {"act": "users_system_edit_expire_date_by_id",
            expire_date : expire_date,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_expire_date_by_id_call_back , "POST");
        };users_system_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_created_by = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_created_by",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_created_by_call_back , "POST");
        };users_system_connection.edit_created_by_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_created_by_by_id = function (id, created_by){
                var param = {"act": "users_system_edit_created_by_by_id",
            created_by : created_by,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_created_by_by_id_call_back , "POST");
        };users_system_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_by_creationDate = function (id,user_id,system_id,token,expire_date,created_by,creationDate){
                var param = {"act": "users_system_edit_by_creationDate",
            id : id ,user_id : user_id ,system_id : system_id ,token : token ,expire_date : expire_date ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_by_creationDate_call_back , "POST");
        };users_system_connection.edit_creationDate_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_system_connection.debug_mode){
                    console.log(data);
                }
            };
        users_system_connection.edit_creationDate_by_id = function (id, creationDate){
                var param = {"act": "users_system_edit_creationDate_by_id",
            creationDate : creationDate,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_system_connection.controller_url , param , users_system_connection.edit_creationDate_by_id_call_back , "POST");
        };