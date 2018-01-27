
         var grid_menu;
         var menu_connection = {
            controller_url : 'controller_robo/controller_menu.php' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        menu_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(menu_connection.debug_mode){
                console.log(data);
            }
        };
        menu_connection.get = function (){
            var param = {"act": "menu_get"};
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_call_back , "POST");
        };
            //_____________ delete function
            menu_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(menu_connection.debug_mode){
                console.log(data);
            }
            };

         menu_connection.delete = function (ID){
            var param = {act: "menu_delete",
            ID: ID};
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.delete_call_back , "POST");
        };
            //_____________ set function
            menu_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(menu_connection.debug_mode){
                console.log(data);
            }
            };

         menu_connection.set = function (grade_id,field_of_study_id,creationDate){
            var param = {act: "menu_set",
            grade_id:grade_id ,field_of_study_id:field_of_study_id ,creationDate:creationDate};
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.set_call_back , "POST");
        };
            //_____________ grid function
            menu_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(menu_connection.debug_mode){
            console.log(data);
            }

            grid_menu = new PSCO_grid('grid_menu');

            grid_menu.cols = [
            {name: 'ID', hidden: false, type: 'text'},{name: 'grade_id', hidden: false, type: 'text'},{name: 'field_of_study_id', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'}];

        grid_menu.RightToLeft = false;

       // grid_menu.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_menu.data = data;

        grid_menu.render();

        };
        menu_connection.get_grid = function (){
            var param = {"act": "menu_get"};
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        menu_connection.get_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.get_by_ID = function (ID){
                var param = {"act": "menu_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_by_ID_call_back , "POST");
        };

        menu_connection.get_by_ID_grid = function (ID){
                var param = {"act": "menu_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_grid_call_back , "POST");
        };
        menu_connection.get_by_grade_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.get_by_grade_id = function (grade_id){
                var param = {"act": "menu_get_by_grade_id",
            grade_id : grade_id
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_by_grade_id_call_back , "POST");
        };

        menu_connection.get_by_grade_id_grid = function (grade_id){
                var param = {"act": "menu_get_by_grade_id",
            grade_id : grade_id
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_grid_call_back , "POST");
        };
        menu_connection.get_by_field_of_study_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.get_by_field_of_study_id = function (field_of_study_id){
                var param = {"act": "menu_get_by_field_of_study_id",
            field_of_study_id : field_of_study_id
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_by_field_of_study_id_call_back , "POST");
        };

        menu_connection.get_by_field_of_study_id_grid = function (field_of_study_id){
                var param = {"act": "menu_get_by_field_of_study_id",
            field_of_study_id : field_of_study_id
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_grid_call_back , "POST");
        };
        menu_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "menu_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_by_creationDate_call_back , "POST");
        };

        menu_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "menu_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_grid_call_back , "POST");
        };
        menu_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.get_by_created_by = function (created_by){
                var param = {"act": "menu_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_by_created_by_call_back , "POST");
        };

        menu_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "menu_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        menu_connection.edit_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_by_ID = function (ID,grade_id,field_of_study_id,creationDate,created_by){
                var param = {"act": "menu_edit_by_ID",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,creationDate : creationDate ,created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_by_ID_call_back , "POST");
        };menu_connection.edit_ID_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_ID_by_ID = function (ID, ID){
                var param = {"act": "menu_edit_ID_by_ID",
            ID : ID,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_ID_by_ID_call_back , "POST");
        };menu_connection.edit_by_grade_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_by_grade_id = function (ID,grade_id,field_of_study_id,creationDate,created_by){
                var param = {"act": "menu_edit_by_grade_id",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,creationDate : creationDate ,created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_by_grade_id_call_back , "POST");
        };menu_connection.edit_grade_id_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_grade_id_by_ID = function (ID, grade_id){
                var param = {"act": "menu_edit_grade_id_by_ID",
            grade_id : grade_id,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_grade_id_by_ID_call_back , "POST");
        };menu_connection.edit_by_field_of_study_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_by_field_of_study_id = function (ID,grade_id,field_of_study_id,creationDate,created_by){
                var param = {"act": "menu_edit_by_field_of_study_id",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,creationDate : creationDate ,created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_by_field_of_study_id_call_back , "POST");
        };menu_connection.edit_field_of_study_id_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_field_of_study_id_by_ID = function (ID, field_of_study_id){
                var param = {"act": "menu_edit_field_of_study_id_by_ID",
            field_of_study_id : field_of_study_id,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_field_of_study_id_by_ID_call_back , "POST");
        };menu_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_by_creationDate = function (ID,grade_id,field_of_study_id,creationDate,created_by){
                var param = {"act": "menu_edit_by_creationDate",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,creationDate : creationDate ,created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_by_creationDate_call_back , "POST");
        };menu_connection.edit_creationDate_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_creationDate_by_ID = function (ID, creationDate){
                var param = {"act": "menu_edit_creationDate_by_ID",
            creationDate : creationDate,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_creationDate_by_ID_call_back , "POST");
        };menu_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_by_created_by = function (ID,grade_id,field_of_study_id,creationDate,created_by){
                var param = {"act": "menu_edit_by_created_by",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,creationDate : creationDate ,created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_by_created_by_call_back , "POST");
        };menu_connection.edit_created_by_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_connection.edit_created_by_by_ID = function (ID, created_by){
                var param = {"act": "menu_edit_created_by_by_ID",
            created_by : created_by,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_connection.controller_url , param , menu_connection.edit_created_by_by_ID_call_back , "POST");
        };