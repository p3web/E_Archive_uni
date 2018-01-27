
         var grid_view_users_organization_organization;
         var view_users_organization_organization_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        view_users_organization_organization_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_organization_organization_connection.debug_mode){
                console.log(data);
            }
        };
        view_users_organization_organization_connection.get = function (){
            var param = {"act": "view_users_organization_organization_get"};
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_call_back , "POST");
        };
            //_____________ grid function
            view_users_organization_organization_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_organization_organization_connection.debug_mode){
            console.log(data);
            }

            grid_view_users_organization_organization = new PSCO_grid('grid_view_users_organization_organization');

            grid_view_users_organization_organization.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'user_id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'address', hidden: false, type: 'text'},{name: 'tel', hidden: false, type: 'text'},{name: 'fax', hidden: false, type: 'text'},{name: 'email', hidden: false, type: 'text'},{name: 'comment', hidden: false, type: 'text'},{name: 'rol', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_view_users_organization_organization.RightToLeft = false;

       // grid_view_users_organization_organization.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_view_users_organization_organization.data = data;

        grid_view_users_organization_organization.render();

        };
        view_users_organization_organization_connection.get_grid = function (){
            var param = {"act": "view_users_organization_organization_get"};
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        view_users_organization_organization_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_id = function (id){
                var param = {"act": "view_users_organization_organization_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_id_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_id_grid = function (id){
                var param = {"act": "view_users_organization_organization_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_user_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_user_id = function (user_id){
                var param = {"act": "view_users_organization_organization_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_user_id_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_user_id_grid = function (user_id){
                var param = {"act": "view_users_organization_organization_get_by_user_id",
            user_id : user_id
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_name = function (name){
                var param = {"act": "view_users_organization_organization_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_name_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_name_grid = function (name){
                var param = {"act": "view_users_organization_organization_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_address_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_address = function (address){
                var param = {"act": "view_users_organization_organization_get_by_address",
            address : address
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_address_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_address_grid = function (address){
                var param = {"act": "view_users_organization_organization_get_by_address",
            address : address
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_tel_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_tel = function (tel){
                var param = {"act": "view_users_organization_organization_get_by_tel",
            tel : tel
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_tel_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_tel_grid = function (tel){
                var param = {"act": "view_users_organization_organization_get_by_tel",
            tel : tel
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_fax_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_fax = function (fax){
                var param = {"act": "view_users_organization_organization_get_by_fax",
            fax : fax
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_fax_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_fax_grid = function (fax){
                var param = {"act": "view_users_organization_organization_get_by_fax",
            fax : fax
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_email_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_email = function (email){
                var param = {"act": "view_users_organization_organization_get_by_email",
            email : email
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_email_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_email_grid = function (email){
                var param = {"act": "view_users_organization_organization_get_by_email",
            email : email
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_comment_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_comment = function (comment){
                var param = {"act": "view_users_organization_organization_get_by_comment",
            comment : comment
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_comment_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_comment_grid = function (comment){
                var param = {"act": "view_users_organization_organization_get_by_comment",
            comment : comment
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_rol_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_rol = function (rol){
                var param = {"act": "view_users_organization_organization_get_by_rol",
            rol : rol
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_rol_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_rol_grid = function (rol){
                var param = {"act": "view_users_organization_organization_get_by_rol",
            rol : rol
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_created_by = function (created_by){
                var param = {"act": "view_users_organization_organization_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_created_by_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "view_users_organization_organization_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        view_users_organization_organization_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_organization_organization_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_organization_organization_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "view_users_organization_organization_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_by_creationDate_call_back , "POST");
        };

        view_users_organization_organization_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "view_users_organization_organization_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_organization_organization_connection.controller_url , param , view_users_organization_organization_connection.get_grid_call_back , "POST");
        };
        