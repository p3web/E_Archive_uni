
         var grid_files_tags;
         var files_tags_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        files_tags_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(files_tags_connection.debug_mode){
                console.log(data);
            }
        };
        files_tags_connection.get = function (){
            var param = {"act": "files_tags_get"};
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_call_back , "POST");
        };
            //_____________ delete function
            files_tags_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(files_tags_connection.debug_mode){
                console.log(data);
            }
            };

         files_tags_connection.delete = function (file_id){
            var param = {act: "files_tags_delete",
            file_id: file_id};
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.delete_call_back , "POST");
        };
            //_____________ set function
            files_tags_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(files_tags_connection.debug_mode){
                console.log(data);
            }
            };

         files_tags_connection.set = function (tag_id,created_by){
            var param = {act: "files_tags_set",
            tag_id:tag_id ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.set_call_back , "POST");
        };
            //_____________ grid function
            files_tags_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(files_tags_connection.debug_mode){
            console.log(data);
            }

            grid_files_tags = new PSCO_grid('grid_files_tags');

            grid_files_tags.cols = [
            {name: 'file_id', hidden: false, type: 'text'},{name: 'tag_id', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_files_tags.RightToLeft = false;

       // grid_files_tags.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_files_tags.data = data;

        grid_files_tags.render();

        };
        files_tags_connection.get_grid = function (){
            var param = {"act": "files_tags_get"};
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        files_tags_connection.get_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.get_by_file_id = function (file_id){
                var param = {"act": "files_tags_get_by_file_id",
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_by_file_id_call_back , "POST");
        };

        files_tags_connection.get_by_file_id_grid = function (file_id){
                var param = {"act": "files_tags_get_by_file_id",
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_grid_call_back , "POST");
        };
        files_tags_connection.get_by_tag_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.get_by_tag_id = function (tag_id){
                var param = {"act": "files_tags_get_by_tag_id",
            tag_id : tag_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_by_tag_id_call_back , "POST");
        };

        files_tags_connection.get_by_tag_id_grid = function (tag_id){
                var param = {"act": "files_tags_get_by_tag_id",
            tag_id : tag_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_grid_call_back , "POST");
        };
        files_tags_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.get_by_created_by = function (created_by){
                var param = {"act": "files_tags_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_by_created_by_call_back , "POST");
        };

        files_tags_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "files_tags_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_grid_call_back , "POST");
        };
        files_tags_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "files_tags_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_by_creationDate_call_back , "POST");
        };

        files_tags_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "files_tags_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        files_tags_connection.edit_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_by_file_id = function (file_id,tag_id,created_by,creationDate){
                var param = {"act": "files_tags_edit_by_file_id",
            file_id : file_id ,tag_id : tag_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_by_file_id_call_back , "POST");
        };files_tags_connection.edit_file_id_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_file_id_by_file_id = function (file_id, file_id){
                var param = {"act": "files_tags_edit_file_id_by_file_id",
            file_id : file_id,
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_file_id_by_file_id_call_back , "POST");
        };files_tags_connection.edit_by_tag_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_by_tag_id = function (file_id,tag_id,created_by,creationDate){
                var param = {"act": "files_tags_edit_by_tag_id",
            file_id : file_id ,tag_id : tag_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_by_tag_id_call_back , "POST");
        };files_tags_connection.edit_tag_id_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_tag_id_by_file_id = function (file_id, tag_id){
                var param = {"act": "files_tags_edit_tag_id_by_file_id",
            tag_id : tag_id,
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_tag_id_by_file_id_call_back , "POST");
        };files_tags_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_by_created_by = function (file_id,tag_id,created_by,creationDate){
                var param = {"act": "files_tags_edit_by_created_by",
            file_id : file_id ,tag_id : tag_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_by_created_by_call_back , "POST");
        };files_tags_connection.edit_created_by_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_created_by_by_file_id = function (file_id, created_by){
                var param = {"act": "files_tags_edit_created_by_by_file_id",
            created_by : created_by,
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_created_by_by_file_id_call_back , "POST");
        };files_tags_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_by_creationDate = function (file_id,tag_id,created_by,creationDate){
                var param = {"act": "files_tags_edit_by_creationDate",
            file_id : file_id ,tag_id : tag_id ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_by_creationDate_call_back , "POST");
        };files_tags_connection.edit_creationDate_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_tags_connection.debug_mode){
                    console.log(data);
                }
            };
        files_tags_connection.edit_creationDate_by_file_id = function (file_id, creationDate){
                var param = {"act": "files_tags_edit_creationDate_by_file_id",
            creationDate : creationDate,
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_tags_connection.controller_url , param , files_tags_connection.edit_creationDate_by_file_id_call_back , "POST");
        };