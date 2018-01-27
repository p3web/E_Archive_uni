
         var grid_system;
         var system_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        system_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(system_connection.debug_mode){
                console.log(data);
            }
        };
        system_connection.get = function (){
            var param = {"act": "system_get"};
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_call_back , "POST");
        };
            //_____________ delete function
            system_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(system_connection.debug_mode){
                console.log(data);
            }
            };

         system_connection.delete = function (id){
            var param = {act: "system_delete",
            id: id};
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.delete_call_back , "POST");
        };
            //_____________ set function
            system_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(system_connection.debug_mode){
                console.log(data);
            }
            };

         system_connection.set = function (name,created_by){
            var param = {act: "system_set",
            name:name ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.set_call_back , "POST");
        };
            //_____________ grid function
            system_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(system_connection.debug_mode){
            console.log(data);
            }

            grid_system = new PSCO_grid('grid_system');

            grid_system.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_system.RightToLeft = false;

       // grid_system.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_system.data = data;

        grid_system.render();

        };
        system_connection.get_grid = function (){
            var param = {"act": "system_get"};
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        system_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.get_by_id = function (id){
                var param = {"act": "system_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_by_id_call_back , "POST");
        };

        system_connection.get_by_id_grid = function (id){
                var param = {"act": "system_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_grid_call_back , "POST");
        };
        system_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.get_by_name = function (name){
                var param = {"act": "system_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_by_name_call_back , "POST");
        };

        system_connection.get_by_name_grid = function (name){
                var param = {"act": "system_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_grid_call_back , "POST");
        };
        system_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.get_by_created_by = function (created_by){
                var param = {"act": "system_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_by_created_by_call_back , "POST");
        };

        system_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "system_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_grid_call_back , "POST");
        };
        system_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "system_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_by_creationDate_call_back , "POST");
        };

        system_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "system_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        system_connection.edit_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_by_id = function (id,name,created_by,creationDate){
                var param = {"act": "system_edit_by_id",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_by_id_call_back , "POST");
        };system_connection.edit_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_id_by_id = function (id, id){
                var param = {"act": "system_edit_id_by_id",
            id : id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_id_by_id_call_back , "POST");
        };system_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_by_name = function (id,name,created_by,creationDate){
                var param = {"act": "system_edit_by_name",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_by_name_call_back , "POST");
        };system_connection.edit_name_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_name_by_id = function (id, name){
                var param = {"act": "system_edit_name_by_id",
            name : name,
            id : id
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_name_by_id_call_back , "POST");
        };system_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_by_created_by = function (id,name,created_by,creationDate){
                var param = {"act": "system_edit_by_created_by",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_by_created_by_call_back , "POST");
        };system_connection.edit_created_by_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_created_by_by_id = function (id, created_by){
                var param = {"act": "system_edit_created_by_by_id",
            created_by : created_by,
            id : id
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_created_by_by_id_call_back , "POST");
        };system_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_by_creationDate = function (id,name,created_by,creationDate){
                var param = {"act": "system_edit_by_creationDate",
            id : id ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_by_creationDate_call_back , "POST");
        };system_connection.edit_creationDate_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(system_connection.debug_mode){
                    console.log(data);
                }
            };
        system_connection.edit_creationDate_by_id = function (id, creationDate){
                var param = {"act": "system_edit_creationDate_by_id",
            creationDate : creationDate,
            id : id
            };
            ajax.sender_data_json_by_url_callback(system_connection.controller_url , param , system_connection.edit_creationDate_by_id_call_back , "POST");
        };