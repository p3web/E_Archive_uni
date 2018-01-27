
         var grid_users_organization;
         var users_organization_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        users_organization_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(users_organization_connection.debug_mode){
                console.log(data);
            }
        };
        users_organization_connection.get = function (){
            var param = {"act": "users_organization_get"};
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_call_back , "POST");
        };
            //_____________ delete function
            users_organization_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(users_organization_connection.debug_mode){
                console.log(data);
            }
            };

         users_organization_connection.delete = function (id){
            var param = {act: "users_organization_delete",
            id: id};
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.delete_call_back , "POST");
        };
            //_____________ set function
            users_organization_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(users_organization_connection.debug_mode){
                console.log(data);
            }
            };

         users_organization_connection.set = function (user_id,org_id,rol,created_by){
            var param = {act: "users_organization_set",
            user_id:user_id ,org_id:org_id ,rol:rol ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.set_call_back , "POST");
        };
            //_____________ grid function
            users_organization_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(users_organization_connection.debug_mode){
            console.log(data);
            }

            grid_users_organization = new PSCO_grid('grid_users_organization');

            grid_users_organization.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_id', hidden: false, type: 'text'},{name: 'org_id', hidden: false, type: 'text'},{name: 'rol', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_users_organization.RightToLeft = false;

       // grid_users_organization.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_users_organization.data = data;

        grid_users_organization.render();

        };
        users_organization_connection.get_grid = function (){
            var param = {"act": "users_organization_get"};
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        users_organization_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.get_by_id = function (id){
                var param = {"act": "users_organization_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_by_id_call_back , "POST");
        };

        users_organization_connection.get_by_id_grid = function (id){
                var param = {"act": "users_organization_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        users_organization_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.get_by_user_id = function (user_id){
                var param = {"act": "users_organization_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_by_user_id_call_back , "POST");
        };

        users_organization_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "users_organization_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        users_organization_connection.get_by_org_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.get_by_org_id = function (org_id){
                var param = {"act": "users_organization_get_by_org_id",
            org_id : org_id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_by_org_id_call_back , "POST");
        };

        users_organization_connection.get_by_org_id_grid = function (org_id){
                var param = {"act": "users_organization_get_by_org_id",
            org_id : org_id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        users_organization_connection.get_by_rol_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.get_by_rol = function (rol){
                var param = {"act": "users_organization_get_by_rol",
            rol : rol
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_by_rol_call_back , "POST");
        };

        users_organization_connection.get_by_rol_grid = function (rol){
                var param = {"act": "users_organization_get_by_rol",
            rol : rol
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        users_organization_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.get_by_created_by = function (created_by){
                var param = {"act": "users_organization_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_by_created_by_call_back , "POST");
        };

        users_organization_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "users_organization_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        users_organization_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "users_organization_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_by_creationDate_call_back , "POST");
        };

        users_organization_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "users_organization_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        users_organization_connection.edit_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_by_id = function (id,user_id,org_id,rol,created_by,creationDate){
                var param = {"act": "users_organization_edit_by_id",
            id : id ,user_id : user_id ,org_id : org_id ,rol : rol ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_by_id_call_back , "POST");
        };users_organization_connection.edit_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_id_by_id = function (id, id){
                var param = {"act": "users_organization_edit_id_by_id",
            id : id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_id_by_id_call_back , "POST");
        };users_organization_connection.edit_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_by_user_id = function (id,user_id,org_id,rol,created_by,creationDate){
                var param = {"act": "users_organization_edit_by_user_id",
            id : id ,user_id : user_id ,org_id : org_id ,rol : rol ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_by_user_id_call_back , "POST");
        };users_organization_connection.edit_user_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_user_id_by_id = function (id, user_id){
                var param = {"act": "users_organization_edit_user_id_by_id",
            user_id : user_id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_user_id_by_id_call_back , "POST");
        };users_organization_connection.edit_by_org_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_by_org_id = function (id,user_id,org_id,rol,created_by,creationDate){
                var param = {"act": "users_organization_edit_by_org_id",
            id : id ,user_id : user_id ,org_id : org_id ,rol : rol ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_by_org_id_call_back , "POST");
        };users_organization_connection.edit_org_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_org_id_by_id = function (id, org_id){
                var param = {"act": "users_organization_edit_org_id_by_id",
            org_id : org_id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_org_id_by_id_call_back , "POST");
        };users_organization_connection.edit_by_rol_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_by_rol = function (id,user_id,org_id,rol,created_by,creationDate){
                var param = {"act": "users_organization_edit_by_rol",
            id : id ,user_id : user_id ,org_id : org_id ,rol : rol ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_by_rol_call_back , "POST");
        };users_organization_connection.edit_rol_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_rol_by_id = function (id, rol){
                var param = {"act": "users_organization_edit_rol_by_id",
            rol : rol,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_rol_by_id_call_back , "POST");
        };users_organization_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_by_created_by = function (id,user_id,org_id,rol,created_by,creationDate){
                var param = {"act": "users_organization_edit_by_created_by",
            id : id ,user_id : user_id ,org_id : org_id ,rol : rol ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_by_created_by_call_back , "POST");
        };users_organization_connection.edit_created_by_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_created_by_by_id = function (id, created_by){
                var param = {"act": "users_organization_edit_created_by_by_id",
            created_by : created_by,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_created_by_by_id_call_back , "POST");
        };users_organization_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_by_creationDate = function (id,user_id,org_id,rol,created_by,creationDate){
                var param = {"act": "users_organization_edit_by_creationDate",
            id : id ,user_id : user_id ,org_id : org_id ,rol : rol ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_by_creationDate_call_back , "POST");
        };users_organization_connection.edit_creationDate_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(users_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        users_organization_connection.edit_creationDate_by_id = function (id, creationDate){
                var param = {"act": "users_organization_edit_creationDate_by_id",
            creationDate : creationDate,
            id : id
            };
            ajax.sender_data_json_by_url_callback(users_organization_connection.controller_url , param , users_organization_connection.edit_creationDate_by_id_call_back , "POST");
        };