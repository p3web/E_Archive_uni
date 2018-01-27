
         var grid_access;
         var access_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        access_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(access_connection.debug_mode){
                console.log(data);
            }
        };
        access_connection.get = function (){
            var param = {"act": "access_get"};
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_call_back , "POST");
        };
            //_____________ delete function
            access_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(access_connection.debug_mode){
                console.log(data);
            }
            };

         access_connection.delete = function (id){
            var param = {act: "access_delete",
            id: id};
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.delete_call_back , "POST");
        };
            //_____________ set function
            access_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(access_connection.debug_mode){
                console.log(data);
            }
            };

         access_connection.set = function (name,created_by){
            var param = {act: "access_set",
            name:name ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.set_call_back , "POST");
        };
            //_____________ grid function
            access_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(access_connection.debug_mode){
            console.log(data);
            }

            grid_access = new PSCO_grid('grid_access');

            grid_access.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_access.RightToLeft = false;

       // grid_access.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_access.data = data;

        grid_access.render();

        };
        access_connection.get_grid = function (){
            var param = {"act": "access_get"};
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        access_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.get_by_id = function (id){
                var param = {"act": "access_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_by_id_call_back , "POST");
        };

        access_connection.get_by_id_grid = function (id){
                var param = {"act": "access_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_grid_call_back , "POST");
        };
        access_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.get_by_name = function (name){
                var param = {"act": "access_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_by_name_call_back , "POST");
        };

        access_connection.get_by_name_grid = function (name){
                var param = {"act": "access_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_grid_call_back , "POST");
        };
        access_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.get_by_created_by = function (created_by){
                var param = {"act": "access_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_by_created_by_call_back , "POST");
        };

        access_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "access_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_grid_call_back , "POST");
        };
        access_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "access_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_by_creationDate_call_back , "POST");
        };

        access_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "access_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        access_connection.edit_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_by_id = function (id,name,created_by,creationDate){
                var param = {"act": "access_edit_by_id",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_by_id_call_back , "POST");
        };access_connection.edit_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_id_by_id = function (id, id){
                var param = {"act": "access_edit_id_by_id",
            id : id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_id_by_id_call_back , "POST");
        };access_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_by_name = function (id,name,created_by,creationDate){
                var param = {"act": "access_edit_by_name",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_by_name_call_back , "POST");
        };access_connection.edit_name_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_name_by_id = function (id, name){
                var param = {"act": "access_edit_name_by_id",
            name : name,
            id : id
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_name_by_id_call_back , "POST");
        };access_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_by_created_by = function (id,name,created_by,creationDate){
                var param = {"act": "access_edit_by_created_by",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_by_created_by_call_back , "POST");
        };access_connection.edit_created_by_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_created_by_by_id = function (id, created_by){
                var param = {"act": "access_edit_created_by_by_id",
            created_by : created_by,
            id : id
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_created_by_by_id_call_back , "POST");
        };access_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_by_creationDate = function (id,name,created_by,creationDate){
                var param = {"act": "access_edit_by_creationDate",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_by_creationDate_call_back , "POST");
        };access_connection.edit_creationDate_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(access_connection.debug_mode){
                    console.log(data);
                }
            };
        access_connection.edit_creationDate_by_id = function (id, creationDate){
                var param = {"act": "access_edit_creationDate_by_id",
            creationDate : creationDate,
            id : id
            };
            ajax.sender_data_json_by_url_callback(access_connection.controller_url , param , access_connection.edit_creationDate_by_id_call_back , "POST");
        };