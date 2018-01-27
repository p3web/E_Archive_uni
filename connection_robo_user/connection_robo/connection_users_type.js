
         var grid_users_type;
         var users_type_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        users_type_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(users_type_connection.debug_mode){
                console.log(data);
            }
        };
        users_type_connection.get = function (){
            var param = {"act": "users_type_get"};
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_call_back , "POST");
        };
            //_____________ delete function
            users_type_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(users_type_connection.debug_mode){
                console.log(data);
            }
            };

         users_type_connection.delete = function (id){
            var param = {act: "users_type_delete",
            id: id};
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.delete_call_back , "POST");
        };
            //_____________ set function
            users_type_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(users_type_connection.debug_mode){
                console.log(data);
            }
            };

         users_type_connection.set = function (user_id,type_id,created_by){
            var param = {act: "users_type_set",
            user_id:user_id ,type_id:type_id ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.set_call_back , "POST");
        };
            //_____________ grid function
            users_type_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(users_type_connection.debug_mode){
            console.log(data);
            }

            grid_users_type = new PSCO_grid('grid_users_type');

            grid_users_type.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_id', hidden: false, type: 'text'},{name: 'type_id', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_users_type.RightToLeft = false;

       // grid_users_type.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_users_type.data = data;

        grid_users_type.render();

        };
        users_type_connection.get_grid = function (){
            var param = {"act": "users_type_get"};
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        users_type_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.get_by_id = function (id){
                var param = {"act": "users_type_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_by_id_call_back , "POST");
        };

        users_type_connection.get_by_id_grid = function (id){
                var param = {"act": "users_type_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_grid_call_back , "POST");
        };
        users_type_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.get_by_user_id = function (user_id){
                var param = {"act": "users_type_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_by_user_id_call_back , "POST");
        };

        users_type_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "users_type_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_grid_call_back , "POST");
        };
        users_type_connection.get_by_type_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.get_by_type_id = function (type_id){
                var param = {"act": "users_type_get_by_type_id",
            type_id : type_id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_by_type_id_call_back , "POST");
        };

        users_type_connection.get_by_type_id_grid = function (type_id){
                var param = {"act": "users_type_get_by_type_id",
            type_id : type_id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_grid_call_back , "POST");
        };
        users_type_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.get_by_created_by = function (created_by){
                var param = {"act": "users_type_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_by_created_by_call_back , "POST");
        };

        users_type_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "users_type_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_grid_call_back , "POST");
        };
        users_type_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "users_type_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_by_creationDate_call_back , "POST");
        };

        users_type_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "users_type_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        users_type_connection.edit_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_by_id = function (id,user_id,type_id,created_by,creationDate){
                var param = {"act": "users_type_edit_by_id",
            id : id ,user_id : user_id ,type_id : type_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_by_id_call_back , "POST");
        };users_type_connection.edit_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_id_by_id = function (id, id){
                var param = {"act": "users_type_edit_id_by_id",
            id : id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_id_by_id_call_back , "POST");
        };users_type_connection.edit_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_by_user_id = function (id,user_id,type_id,created_by,creationDate){
                var param = {"act": "users_type_edit_by_user_id",
            id : id ,user_id : user_id ,type_id : type_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_by_user_id_call_back , "POST");
        };users_type_connection.edit_user_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_user_id_by_id = function (id, user_id){
                var param = {"act": "users_type_edit_user_id_by_id",
            user_id : user_id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_user_id_by_id_call_back , "POST");
        };users_type_connection.edit_by_type_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_by_type_id = function (id,user_id,type_id,created_by,creationDate){
                var param = {"act": "users_type_edit_by_type_id",
            id : id ,user_id : user_id ,type_id : type_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_by_type_id_call_back , "POST");
        };users_type_connection.edit_type_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_type_id_by_id = function (id, type_id){
                var param = {"act": "users_type_edit_type_id_by_id",
            type_id : type_id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_type_id_by_id_call_back , "POST");
        };users_type_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_by_created_by = function (id,user_id,type_id,created_by,creationDate){
                var param = {"act": "users_type_edit_by_created_by",
            id : id ,user_id : user_id ,type_id : type_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_by_created_by_call_back , "POST");
        };users_type_connection.edit_created_by_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_created_by_by_id = function (id, created_by){
                var param = {"act": "users_type_edit_created_by_by_id",
            created_by : created_by,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_created_by_by_id_call_back , "POST");
        };users_type_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_by_creationDate = function (id,user_id,type_id,created_by,creationDate){
                var param = {"act": "users_type_edit_by_creationDate",
            id : id ,user_id : user_id ,type_id : type_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_by_creationDate_call_back , "POST");
        };users_type_connection.edit_creationDate_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_type_connection.debug_mode){
                    console.log(data);
                }
            };
        users_type_connection.edit_creationDate_by_id = function (id, creationDate){
                var param = {"act": "users_type_edit_creationDate_by_id",
            creationDate : creationDate,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_type_connection.controller_url , param , users_type_connection.edit_creationDate_by_id_call_back , "POST");
        };