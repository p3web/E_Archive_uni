
         var grid_partitions_permission;
         var partitions_permission_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        partitions_permission_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(partitions_permission_connection.debug_mode){
                console.log(data);
            }
        };
        partitions_permission_connection.get = function (){
            var param = {"act": "partitions_permission_get"};
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_call_back , "POST");
        };
            //_____________ delete function
            partitions_permission_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(partitions_permission_connection.debug_mode){
                console.log(data);
            }
            };

         partitions_permission_connection.delete = function (user_id){
            var param = {act: "partitions_permission_delete",
            user_id: user_id};
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.delete_call_back , "POST");
        };
            //_____________ set function
            partitions_permission_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(partitions_permission_connection.debug_mode){
                console.log(data);
            }
            };

         partitions_permission_connection.set = function (partition_id,created_by){
            var param = {act: "partitions_permission_set",
            partition_id:partition_id ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.set_call_back , "POST");
        };
            //_____________ grid function
            partitions_permission_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(partitions_permission_connection.debug_mode){
            console.log(data);
            }

            grid_partitions_permission = new PSCO_grid('grid_partitions_permission');

            grid_partitions_permission.cols = [
            {name: 'user_id', hidden: false, type: 'text'},{name: 'partition_id', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_partitions_permission.RightToLeft = false;

       // grid_partitions_permission.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_partitions_permission.data = data;

        grid_partitions_permission.render();

        };
        partitions_permission_connection.get_grid = function (){
            var param = {"act": "partitions_permission_get"};
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        partitions_permission_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.get_by_user_id = function (user_id){
                var param = {"act": "partitions_permission_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_by_user_id_call_back , "POST");
        };

        partitions_permission_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "partitions_permission_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_grid_call_back , "POST");
        };
        partitions_permission_connection.get_by_partition_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.get_by_partition_id = function (partition_id){
                var param = {"act": "partitions_permission_get_by_partition_id",
            partition_id : partition_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_by_partition_id_call_back , "POST");
        };

        partitions_permission_connection.get_by_partition_id_grid = function (partition_id){
                var param = {"act": "partitions_permission_get_by_partition_id",
            partition_id : partition_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_grid_call_back , "POST");
        };
        partitions_permission_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.get_by_created_by = function (created_by){
                var param = {"act": "partitions_permission_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_by_created_by_call_back , "POST");
        };

        partitions_permission_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "partitions_permission_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_grid_call_back , "POST");
        };
        partitions_permission_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "partitions_permission_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_by_creationDate_call_back , "POST");
        };

        partitions_permission_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "partitions_permission_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        partitions_permission_connection.edit_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_by_user_id = function (user_id,partition_id,created_by,creationDate){
                var param = {"act": "partitions_permission_edit_by_user_id",
            user_id : user_id ,partition_id : partition_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_by_user_id_call_back , "POST");
        };partitions_permission_connection.edit_user_id_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_user_id_by_user_id = function (user_id, user_id){
                var param = {"act": "partitions_permission_edit_user_id_by_user_id",
            user_id : user_id,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_user_id_by_user_id_call_back , "POST");
        };partitions_permission_connection.edit_by_partition_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_by_partition_id = function (user_id,partition_id,created_by,creationDate){
                var param = {"act": "partitions_permission_edit_by_partition_id",
            user_id : user_id ,partition_id : partition_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_by_partition_id_call_back , "POST");
        };partitions_permission_connection.edit_partition_id_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_partition_id_by_user_id = function (user_id, partition_id){
                var param = {"act": "partitions_permission_edit_partition_id_by_user_id",
            partition_id : partition_id,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_partition_id_by_user_id_call_back , "POST");
        };partitions_permission_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_by_created_by = function (user_id,partition_id,created_by,creationDate){
                var param = {"act": "partitions_permission_edit_by_created_by",
            user_id : user_id ,partition_id : partition_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_by_created_by_call_back , "POST");
        };partitions_permission_connection.edit_created_by_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_created_by_by_user_id = function (user_id, created_by){
                var param = {"act": "partitions_permission_edit_created_by_by_user_id",
            created_by : created_by,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_created_by_by_user_id_call_back , "POST");
        };partitions_permission_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_by_creationDate = function (user_id,partition_id,created_by,creationDate){
                var param = {"act": "partitions_permission_edit_by_creationDate",
            user_id : user_id ,partition_id : partition_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_by_creationDate_call_back , "POST");
        };partitions_permission_connection.edit_creationDate_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(partitions_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        partitions_permission_connection.edit_creationDate_by_user_id = function (user_id, creationDate){
                var param = {"act": "partitions_permission_edit_creationDate_by_user_id",
            creationDate : creationDate,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(partitions_permission_connection.controller_url , param , partitions_permission_connection.edit_creationDate_by_user_id_call_back , "POST");
        };