
         var grid_directorys_permission;
         var directorys_permission_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        directorys_permission_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(directorys_permission_connection.debug_mode){
                console.log(data);
            }
        };
        directorys_permission_connection.get = function (){
            var param = {"act": "directorys_permission_get"};
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_call_back , "POST");
        };
            //_____________ delete function
            directorys_permission_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(directorys_permission_connection.debug_mode){
                console.log(data);
            }
            };

         directorys_permission_connection.delete = function (user_id){
            var param = {act: "directorys_permission_delete",
            user_id: user_id};
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.delete_call_back , "POST");
        };
            //_____________ set function
            directorys_permission_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(directorys_permission_connection.debug_mode){
                console.log(data);
            }
            };

         directorys_permission_connection.set = function (directory_id,created_by){
            var param = {act: "directorys_permission_set",
            directory_id:directory_id ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.set_call_back , "POST");
        };
            //_____________ grid function
            directorys_permission_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(directorys_permission_connection.debug_mode){
            console.log(data);
            }

            grid_directorys_permission = new PSCO_grid('grid_directorys_permission');

            grid_directorys_permission.cols = [
            {name: 'user_id', hidden: false, type: 'text'},{name: 'directory_id', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_directorys_permission.RightToLeft = false;

       // grid_directorys_permission.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_directorys_permission.data = data;

        grid_directorys_permission.render();

        };
        directorys_permission_connection.get_grid = function (){
            var param = {"act": "directorys_permission_get"};
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        directorys_permission_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.get_by_user_id = function (user_id){
                var param = {"act": "directorys_permission_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_by_user_id_call_back , "POST");
        };

        directorys_permission_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "directorys_permission_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_grid_call_back , "POST");
        };
        directorys_permission_connection.get_by_directory_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.get_by_directory_id = function (directory_id){
                var param = {"act": "directorys_permission_get_by_directory_id",
            directory_id : directory_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_by_directory_id_call_back , "POST");
        };

        directorys_permission_connection.get_by_directory_id_grid = function (directory_id){
                var param = {"act": "directorys_permission_get_by_directory_id",
            directory_id : directory_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_grid_call_back , "POST");
        };
        directorys_permission_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.get_by_created_by = function (created_by){
                var param = {"act": "directorys_permission_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_by_created_by_call_back , "POST");
        };

        directorys_permission_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "directorys_permission_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_grid_call_back , "POST");
        };
        directorys_permission_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "directorys_permission_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_by_creationDate_call_back , "POST");
        };

        directorys_permission_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "directorys_permission_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        directorys_permission_connection.edit_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_by_user_id = function (user_id,directory_id,created_by,creationDate){
                var param = {"act": "directorys_permission_edit_by_user_id",
            user_id : user_id ,directory_id : directory_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_by_user_id_call_back , "POST");
        };directorys_permission_connection.edit_user_id_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_user_id_by_user_id = function (user_id, user_id){
                var param = {"act": "directorys_permission_edit_user_id_by_user_id",
            user_id : user_id,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_user_id_by_user_id_call_back , "POST");
        };directorys_permission_connection.edit_by_directory_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_by_directory_id = function (user_id,directory_id,created_by,creationDate){
                var param = {"act": "directorys_permission_edit_by_directory_id",
            user_id : user_id ,directory_id : directory_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_by_directory_id_call_back , "POST");
        };directorys_permission_connection.edit_directory_id_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_directory_id_by_user_id = function (user_id, directory_id){
                var param = {"act": "directorys_permission_edit_directory_id_by_user_id",
            directory_id : directory_id,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_directory_id_by_user_id_call_back , "POST");
        };directorys_permission_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_by_created_by = function (user_id,directory_id,created_by,creationDate){
                var param = {"act": "directorys_permission_edit_by_created_by",
            user_id : user_id ,directory_id : directory_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_by_created_by_call_back , "POST");
        };directorys_permission_connection.edit_created_by_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_created_by_by_user_id = function (user_id, created_by){
                var param = {"act": "directorys_permission_edit_created_by_by_user_id",
            created_by : created_by,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_created_by_by_user_id_call_back , "POST");
        };directorys_permission_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_by_creationDate = function (user_id,directory_id,created_by,creationDate){
                var param = {"act": "directorys_permission_edit_by_creationDate",
            user_id : user_id ,directory_id : directory_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_by_creationDate_call_back , "POST");
        };directorys_permission_connection.edit_creationDate_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(directorys_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        directorys_permission_connection.edit_creationDate_by_user_id = function (user_id, creationDate){
                var param = {"act": "directorys_permission_edit_creationDate_by_user_id",
            creationDate : creationDate,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(directorys_permission_connection.controller_url , param , directorys_permission_connection.edit_creationDate_by_user_id_call_back , "POST");
        };