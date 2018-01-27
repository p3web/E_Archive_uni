
         var grid_userAccess;
         var userAccess_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        userAccess_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(userAccess_connection.debug_mode){
                console.log(data);
            }
        };
        userAccess_connection.get = function (){
            var param = {"act": "userAccess_get"};
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_call_back , "POST");
        };
            //_____________ delete function
            userAccess_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(userAccess_connection.debug_mode){
                console.log(data);
            }
            };

         userAccess_connection.delete = function (userID){
            var param = {act: "userAccess_delete",
            userID: userID};
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.delete_call_back , "POST");
        };
            //_____________ set function
            userAccess_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(userAccess_connection.debug_mode){
                console.log(data);
            }
            };

         userAccess_connection.set = function (accessID,created_by){
            var param = {act: "userAccess_set",
            accessID:accessID ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.set_call_back , "POST");
        };
            //_____________ grid function
            userAccess_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(userAccess_connection.debug_mode){
            console.log(data);
            }

            grid_userAccess = new PSCO_grid('grid_userAccess');

            grid_userAccess.cols = [
            {name: 'userID', hidden: false, type: 'text'},{name: 'accessID', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_userAccess.RightToLeft = false;

       // grid_userAccess.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_userAccess.data = data;

        grid_userAccess.render();

        };
        userAccess_connection.get_grid = function (){
            var param = {"act": "userAccess_get"};
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        userAccess_connection.get_by_userID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.get_by_userID = function (userID){
                var param = {"act": "userAccess_get_by_userID",
            userID : userID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_by_userID_call_back , "POST");
        };

        userAccess_connection.get_by_userID_grid = function (userID){
                var param = {"act": "userAccess_get_by_userID",
            userID : userID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_grid_call_back , "POST");
        };
        userAccess_connection.get_by_accessID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.get_by_accessID = function (accessID){
                var param = {"act": "userAccess_get_by_accessID",
            accessID : accessID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_by_accessID_call_back , "POST");
        };

        userAccess_connection.get_by_accessID_grid = function (accessID){
                var param = {"act": "userAccess_get_by_accessID",
            accessID : accessID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_grid_call_back , "POST");
        };
        userAccess_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.get_by_created_by = function (created_by){
                var param = {"act": "userAccess_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_by_created_by_call_back , "POST");
        };

        userAccess_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "userAccess_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_grid_call_back , "POST");
        };
        userAccess_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "userAccess_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_by_creationDate_call_back , "POST");
        };

        userAccess_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "userAccess_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        userAccess_connection.edit_by_userID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_by_userID = function (userID,accessID,created_by,creationDate){
                var param = {"act": "userAccess_edit_by_userID",
            userID : userID ,accessID : accessID ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_by_userID_call_back , "POST");
        };userAccess_connection.edit_userID_by_userID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_userID_by_userID = function (userID, userID){
                var param = {"act": "userAccess_edit_userID_by_userID",
            userID : userID,
            userID : userID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_userID_by_userID_call_back , "POST");
        };userAccess_connection.edit_by_accessID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_by_accessID = function (userID,accessID,created_by,creationDate){
                var param = {"act": "userAccess_edit_by_accessID",
            userID : userID ,accessID : accessID ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_by_accessID_call_back , "POST");
        };userAccess_connection.edit_accessID_by_userID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_accessID_by_userID = function (userID, accessID){
                var param = {"act": "userAccess_edit_accessID_by_userID",
            accessID : accessID,
            userID : userID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_accessID_by_userID_call_back , "POST");
        };userAccess_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_by_created_by = function (userID,accessID,created_by,creationDate){
                var param = {"act": "userAccess_edit_by_created_by",
            userID : userID ,accessID : accessID ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_by_created_by_call_back , "POST");
        };userAccess_connection.edit_created_by_by_userID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_created_by_by_userID = function (userID, created_by){
                var param = {"act": "userAccess_edit_created_by_by_userID",
            created_by : created_by,
            userID : userID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_created_by_by_userID_call_back , "POST");
        };userAccess_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_by_creationDate = function (userID,accessID,created_by,creationDate){
                var param = {"act": "userAccess_edit_by_creationDate",
            userID : userID ,accessID : accessID ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_by_creationDate_call_back , "POST");
        };userAccess_connection.edit_creationDate_by_userID_call_back = function (data){
                //TODO: set code after the server response
                if(userAccess_connection.debug_mode){
                    console.log(data);
                }
            };
        userAccess_connection.edit_creationDate_by_userID = function (userID, creationDate){
                var param = {"act": "userAccess_edit_creationDate_by_userID",
            creationDate : creationDate,
            userID : userID
            };
            ajax.sender_data_json_by_url_callback(userAccess_connection.controller_url , param , userAccess_connection.edit_creationDate_by_userID_call_back , "POST");
        };