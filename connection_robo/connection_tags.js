
         var grid_tags;
         var tags_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        tags_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(tags_connection.debug_mode){
                console.log(data);
            }
        };
        tags_connection.get = function (){
            var param = {"act": "tags_get"};
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_call_back , "POST");
        };
            //_____________ delete function
            tags_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(tags_connection.debug_mode){
                console.log(data);
            }
            };

         tags_connection.delete = function (ID){
            var param = {act: "tags_delete",
            ID: ID};
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.delete_call_back , "POST");
        };
            //_____________ set function
            tags_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(tags_connection.debug_mode){
                console.log(data);
            }
            };

         tags_connection.set = function (name,created_by){
            var param = {act: "tags_set",
            name:name ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.set_call_back , "POST");
        };
            //_____________ grid function
            tags_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(tags_connection.debug_mode){
            console.log(data);
            }

            grid_tags = new PSCO_grid('grid_tags');

            grid_tags.cols = [
            {name: 'ID', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_tags.RightToLeft = false;

       // grid_tags.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_tags.data = data;

        grid_tags.render();

        };
        tags_connection.get_grid = function (){
            var param = {"act": "tags_get"};
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        tags_connection.get_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.get_by_ID = function (ID){
                var param = {"act": "tags_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_by_ID_call_back , "POST");
        };

        tags_connection.get_by_ID_grid = function (ID){
                var param = {"act": "tags_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_grid_call_back , "POST");
        };
        tags_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.get_by_name = function (name){
                var param = {"act": "tags_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_by_name_call_back , "POST");
        };

        tags_connection.get_by_name_grid = function (name){
                var param = {"act": "tags_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_grid_call_back , "POST");
        };
        tags_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.get_by_created_by = function (created_by){
                var param = {"act": "tags_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_by_created_by_call_back , "POST");
        };

        tags_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "tags_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_grid_call_back , "POST");
        };
        tags_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "tags_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_by_creationDate_call_back , "POST");
        };

        tags_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "tags_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        tags_connection.edit_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_by_ID = function (ID,name,created_by,creationDate){
                var param = {"act": "tags_edit_by_ID",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_by_ID_call_back , "POST");
        };tags_connection.edit_ID_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_ID_by_ID = function (ID, ID){
                var param = {"act": "tags_edit_ID_by_ID",
            ID : ID,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_ID_by_ID_call_back , "POST");
        };tags_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_by_name = function (ID,name,created_by,creationDate){
                var param = {"act": "tags_edit_by_name",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_by_name_call_back , "POST");
        };tags_connection.edit_name_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_name_by_ID = function (ID, name){
                var param = {"act": "tags_edit_name_by_ID",
            name : name,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_name_by_ID_call_back , "POST");
        };tags_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_by_created_by = function (ID,name,created_by,creationDate){
                var param = {"act": "tags_edit_by_created_by",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_by_created_by_call_back , "POST");
        };tags_connection.edit_created_by_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_created_by_by_ID = function (ID, created_by){
                var param = {"act": "tags_edit_created_by_by_ID",
            created_by : created_by,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_created_by_by_ID_call_back , "POST");
        };tags_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_by_creationDate = function (ID,name,created_by,creationDate){
                var param = {"act": "tags_edit_by_creationDate",
            ID : ID ,name : name ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_by_creationDate_call_back , "POST");
        };tags_connection.edit_creationDate_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(tags_connection.debug_mode){
                    console.log(data);
                }
            };
        tags_connection.edit_creationDate_by_ID = function (ID, creationDate){
                var param = {"act": "tags_edit_creationDate_by_ID",
            creationDate : creationDate,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(tags_connection.controller_url , param , tags_connection.edit_creationDate_by_ID_call_back , "POST");
        };