
         var grid_menu_v_list;
         var menu_v_list_connection = {
            controller_url : 'controller_robo/controller_menu_v_list.php' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        menu_v_list_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(menu_v_list_connection.debug_mode){
                console.log(data);
            }
        };
        menu_v_list_connection.get = function (){
            var param = {"act": "menu_v_list_get"};
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_call_back , "POST");
        };
            //_____________ delete function
            menu_v_list_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(menu_v_list_connection.debug_mode){
                console.log(data);
            }
            };

         menu_v_list_connection.delete = function (ID){
            var param = {act: "menu_v_list_delete",
            ID: ID};
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.delete_call_back , "POST");
        };
            //_____________ set function
            menu_v_list_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(menu_v_list_connection.debug_mode){
                console.log(data);
            }
            };

         menu_v_list_connection.set = function (grade_id,field_of_study_id,name){
            var param = {act: "menu_v_list_set",
            grade_id:grade_id ,field_of_study_id:field_of_study_id ,name:name};
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.set_call_back , "POST");
        };
            //_____________ grid function
            menu_v_list_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(menu_v_list_connection.debug_mode){
            console.log(data);
            }

            grid_menu_v_list = new PSCO_grid('grid_menu_v_list');

            grid_menu_v_list.cols = [
            {name: 'ID', hidden: false, type: 'text'},{name: 'grade_id', hidden: false, type: 'text'},{name: 'field_of_study_id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'grade_name', hidden: false, type: 'text'}];

        grid_menu_v_list.RightToLeft = false;

       // grid_menu_v_list.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_menu_v_list.data = data;

        grid_menu_v_list.render();

        };
        menu_v_list_connection.get_grid = function (){
            var param = {"act": "menu_v_list_get"};
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        menu_v_list_connection.get_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.get_by_ID = function (ID){
                var param = {"act": "menu_v_list_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_by_ID_call_back , "POST");
        };

        menu_v_list_connection.get_by_ID_grid = function (ID){
                var param = {"act": "menu_v_list_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_grid_call_back , "POST");
        };
        menu_v_list_connection.get_by_grade_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.get_by_grade_id = function (grade_id){
                var param = {"act": "menu_v_list_get_by_grade_id",
            grade_id : grade_id
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_by_grade_id_call_back , "POST");
        };

        menu_v_list_connection.get_by_grade_id_grid = function (grade_id){
                var param = {"act": "menu_v_list_get_by_grade_id",
            grade_id : grade_id
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_grid_call_back , "POST");
        };
        menu_v_list_connection.get_by_field_of_study_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.get_by_field_of_study_id = function (field_of_study_id){
                var param = {"act": "menu_v_list_get_by_field_of_study_id",
            field_of_study_id : field_of_study_id
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_by_field_of_study_id_call_back , "POST");
        };

        menu_v_list_connection.get_by_field_of_study_id_grid = function (field_of_study_id){
                var param = {"act": "menu_v_list_get_by_field_of_study_id",
            field_of_study_id : field_of_study_id
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_grid_call_back , "POST");
        };
        menu_v_list_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.get_by_name = function (name){
                var param = {"act": "menu_v_list_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_by_name_call_back , "POST");
        };

        menu_v_list_connection.get_by_name_grid = function (name){
                var param = {"act": "menu_v_list_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_grid_call_back , "POST");
        };
        menu_v_list_connection.get_by_grade_name_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.get_by_grade_name = function (grade_name){
                var param = {"act": "menu_v_list_get_by_grade_name",
            grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_by_grade_name_call_back , "POST");
        };

        menu_v_list_connection.get_by_grade_name_grid = function (grade_name){
                var param = {"act": "menu_v_list_get_by_grade_name",
            grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        menu_v_list_connection.edit_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_by_ID = function (ID,grade_id,field_of_study_id,name,grade_name){
                var param = {"act": "menu_v_list_edit_by_ID",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,name : name ,grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_by_ID_call_back , "POST");
        };menu_v_list_connection.edit_ID_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_ID_by_ID = function (ID, ID){
                var param = {"act": "menu_v_list_edit_ID_by_ID",
            ID : ID,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_ID_by_ID_call_back , "POST");
        };menu_v_list_connection.edit_by_grade_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_by_grade_id = function (ID,grade_id,field_of_study_id,name,grade_name){
                var param = {"act": "menu_v_list_edit_by_grade_id",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,name : name ,grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_by_grade_id_call_back , "POST");
        };menu_v_list_connection.edit_grade_id_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_grade_id_by_ID = function (ID, grade_id){
                var param = {"act": "menu_v_list_edit_grade_id_by_ID",
            grade_id : grade_id,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_grade_id_by_ID_call_back , "POST");
        };menu_v_list_connection.edit_by_field_of_study_id_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_by_field_of_study_id = function (ID,grade_id,field_of_study_id,name,grade_name){
                var param = {"act": "menu_v_list_edit_by_field_of_study_id",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,name : name ,grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_by_field_of_study_id_call_back , "POST");
        };menu_v_list_connection.edit_field_of_study_id_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_field_of_study_id_by_ID = function (ID, field_of_study_id){
                var param = {"act": "menu_v_list_edit_field_of_study_id_by_ID",
            field_of_study_id : field_of_study_id,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_field_of_study_id_by_ID_call_back , "POST");
        };menu_v_list_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_by_name = function (ID,grade_id,field_of_study_id,name,grade_name){
                var param = {"act": "menu_v_list_edit_by_name",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,name : name ,grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_by_name_call_back , "POST");
        };menu_v_list_connection.edit_name_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_name_by_ID = function (ID, name){
                var param = {"act": "menu_v_list_edit_name_by_ID",
            name : name,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_name_by_ID_call_back , "POST");
        };menu_v_list_connection.edit_by_grade_name_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_by_grade_name = function (ID,grade_id,field_of_study_id,name,grade_name){
                var param = {"act": "menu_v_list_edit_by_grade_name",
            ID : ID ,grade_id : grade_id ,field_of_study_id : field_of_study_id ,name : name ,grade_name : grade_name
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_by_grade_name_call_back , "POST");
        };menu_v_list_connection.edit_grade_name_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(menu_v_list_connection.debug_mode){
                    console.log(data);
                }
            };
        menu_v_list_connection.edit_grade_name_by_ID = function (ID, grade_name){
                var param = {"act": "menu_v_list_edit_grade_name_by_ID",
            grade_name : grade_name,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(menu_v_list_connection.controller_url , param , menu_v_list_connection.edit_grade_name_by_ID_call_back , "POST");
        };