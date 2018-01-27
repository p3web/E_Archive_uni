
         var grid_files_permission;
         var files_permission_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        files_permission_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(files_permission_connection.debug_mode){
                console.log(data);
            }
        };
        files_permission_connection.get = function (){
            var param = {"act": "files_permission_get"};
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_call_back , "POST");
        };
            //_____________ delete function
            files_permission_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(files_permission_connection.debug_mode){
                console.log(data);
            }
            };

         files_permission_connection.delete = function (user_id){
            var param = {act: "files_permission_delete",
            user_id: user_id};
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.delete_call_back , "POST");
        };
            //_____________ set function
            files_permission_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(files_permission_connection.debug_mode){
                console.log(data);
            }
            };

         files_permission_connection.set = function (file_id,read,write,delete,created_by){
            var param = {act: "files_permission_set",
            file_id:file_id ,read:read ,write:write ,delete:delete ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.set_call_back , "POST");
        };
            //_____________ grid function
            files_permission_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(files_permission_connection.debug_mode){
            console.log(data);
            }

            grid_files_permission = new PSCO_grid('grid_files_permission');

            grid_files_permission.cols = [
            {name: 'user_id', hidden: false, type: 'text'},{name: 'file_id', hidden: false, type: 'text'},{name: 'read', hidden: false, type: 'text'},{name: 'write', hidden: false, type: 'text'},{name: 'delete', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_files_permission.RightToLeft = false;

       // grid_files_permission.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_files_permission.data = data;

        grid_files_permission.render();

        };
        files_permission_connection.get_grid = function (){
            var param = {"act": "files_permission_get"};
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        files_permission_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_user_id = function (user_id){
                var param = {"act": "files_permission_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_user_id_call_back , "POST");
        };

        files_permission_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "files_permission_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        files_permission_connection.get_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_file_id = function (file_id){
                var param = {"act": "files_permission_get_by_file_id",
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_file_id_call_back , "POST");
        };

        files_permission_connection.get_by_file_id_grid = function (file_id){
                var param = {"act": "files_permission_get_by_file_id",
            file_id : file_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        files_permission_connection.get_by_read_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_read = function (read){
                var param = {"act": "files_permission_get_by_read",
            read : read
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_read_call_back , "POST");
        };

        files_permission_connection.get_by_read_grid = function (read){
                var param = {"act": "files_permission_get_by_read",
            read : read
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        files_permission_connection.get_by_write_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_write = function (write){
                var param = {"act": "files_permission_get_by_write",
            write : write
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_write_call_back , "POST");
        };

        files_permission_connection.get_by_write_grid = function (write){
                var param = {"act": "files_permission_get_by_write",
            write : write
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        files_permission_connection.get_by_delete_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_delete = function (delete){
                var param = {"act": "files_permission_get_by_delete",
            delete : delete
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_delete_call_back , "POST");
        };

        files_permission_connection.get_by_delete_grid = function (delete){
                var param = {"act": "files_permission_get_by_delete",
            delete : delete
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        files_permission_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_created_by = function (created_by){
                var param = {"act": "files_permission_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_created_by_call_back , "POST");
        };

        files_permission_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "files_permission_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        files_permission_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "files_permission_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_by_creationDate_call_back , "POST");
        };

        files_permission_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "files_permission_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        files_permission_connection.edit_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_user_id = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_user_id",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_user_id_call_back , "POST");
        };files_permission_connection.edit_user_id_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_user_id_by_user_id = function (user_id, user_id){
                var param = {"act": "files_permission_edit_user_id_by_user_id",
            user_id : user_id,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_user_id_by_user_id_call_back , "POST");
        };files_permission_connection.edit_by_file_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_file_id = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_file_id",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_file_id_call_back , "POST");
        };files_permission_connection.edit_file_id_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_file_id_by_user_id = function (user_id, file_id){
                var param = {"act": "files_permission_edit_file_id_by_user_id",
            file_id : file_id,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_file_id_by_user_id_call_back , "POST");
        };files_permission_connection.edit_by_read_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_read = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_read",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_read_call_back , "POST");
        };files_permission_connection.edit_read_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_read_by_user_id = function (user_id, read){
                var param = {"act": "files_permission_edit_read_by_user_id",
            read : read,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_read_by_user_id_call_back , "POST");
        };files_permission_connection.edit_by_write_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_write = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_write",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_write_call_back , "POST");
        };files_permission_connection.edit_write_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_write_by_user_id = function (user_id, write){
                var param = {"act": "files_permission_edit_write_by_user_id",
            write : write,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_write_by_user_id_call_back , "POST");
        };files_permission_connection.edit_by_delete_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_delete = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_delete",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_delete_call_back , "POST");
        };files_permission_connection.edit_delete_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_delete_by_user_id = function (user_id, delete){
                var param = {"act": "files_permission_edit_delete_by_user_id",
            delete : delete,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_delete_by_user_id_call_back , "POST");
        };files_permission_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_created_by = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_created_by",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_created_by_call_back , "POST");
        };files_permission_connection.edit_created_by_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_created_by_by_user_id = function (user_id, created_by){
                var param = {"act": "files_permission_edit_created_by_by_user_id",
            created_by : created_by,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_created_by_by_user_id_call_back , "POST");
        };files_permission_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_by_creationDate = function (user_id,file_id,read,write,delete,created_by,creationDate){
                var param = {"act": "files_permission_edit_by_creationDate",
            user_id : user_id ,file_id : file_id ,read : read ,write : write ,delete : delete ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_by_creationDate_call_back , "POST");
        };files_permission_connection.edit_creationDate_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(files_permission_connection.debug_mode){
                    console.log(data);
                }
            };
        files_permission_connection.edit_creationDate_by_user_id = function (user_id, creationDate){
                var param = {"act": "files_permission_edit_creationDate_by_user_id",
            creationDate : creationDate,
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(files_permission_connection.controller_url , param , files_permission_connection.edit_creationDate_by_user_id_call_back , "POST");
        };