
         var grid_logs;
         var logs_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        logs_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(logs_connection.debug_mode){
                console.log(data);
            }
        };
        logs_connection.get = function (){
            var param = {"act": "logs_get"};
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_call_back , "POST");
        };
            //_____________ delete function
            logs_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(logs_connection.debug_mode){
                console.log(data);
            }
            };

         logs_connection.delete = function (ID){
            var param = {act: "logs_delete",
            ID: ID};
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.delete_call_back , "POST");
        };
            //_____________ set function
            logs_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(logs_connection.debug_mode){
                console.log(data);
            }
            };

         logs_connection.set = function (act,table,log,created_by){
            var param = {act: "logs_set",
            act:act ,table:table ,log:log ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.set_call_back , "POST");
        };
            //_____________ grid function
            logs_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(logs_connection.debug_mode){
            console.log(data);
            }

            grid_logs = new PSCO_grid('grid_logs');

            grid_logs.cols = [
            {name: 'ID', hidden: false, type: 'text'},{name: 'act', hidden: false, type: 'text'},{name: 'table', hidden: false, type: 'text'},{name: 'log', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_logs.RightToLeft = false;

       // grid_logs.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_logs.data = data;

        grid_logs.render();

        };
        logs_connection.get_grid = function (){
            var param = {"act": "logs_get"};
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        logs_connection.get_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.get_by_ID = function (ID){
                var param = {"act": "logs_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_by_ID_call_back , "POST");
        };

        logs_connection.get_by_ID_grid = function (ID){
                var param = {"act": "logs_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        logs_connection.get_by_act_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.get_by_act = function (act){
                var param = {"act": "logs_get_by_act",
            act : act
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_by_act_call_back , "POST");
        };

        logs_connection.get_by_act_grid = function (act){
                var param = {"act": "logs_get_by_act",
            act : act
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        logs_connection.get_by_table_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.get_by_table = function (table){
                var param = {"act": "logs_get_by_table",
            table : table
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_by_table_call_back , "POST");
        };

        logs_connection.get_by_table_grid = function (table){
                var param = {"act": "logs_get_by_table",
            table : table
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        logs_connection.get_by_log_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.get_by_log = function (log){
                var param = {"act": "logs_get_by_log",
            log : log
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_by_log_call_back , "POST");
        };

        logs_connection.get_by_log_grid = function (log){
                var param = {"act": "logs_get_by_log",
            log : log
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        logs_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.get_by_created_by = function (created_by){
                var param = {"act": "logs_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_by_created_by_call_back , "POST");
        };

        logs_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "logs_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        logs_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "logs_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_by_creationDate_call_back , "POST");
        };

        logs_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "logs_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        logs_connection.edit_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_by_ID = function (ID,act,table,log,created_by,creationDate){
                var param = {"act": "logs_edit_by_ID",
            ID : ID ,act : act ,table : table ,log : log ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_by_ID_call_back , "POST");
        };logs_connection.edit_ID_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_ID_by_ID = function (ID, ID){
                var param = {"act": "logs_edit_ID_by_ID",
            ID : ID,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_ID_by_ID_call_back , "POST");
        };logs_connection.edit_by_act_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_by_act = function (ID,act,table,log,created_by,creationDate){
                var param = {"act": "logs_edit_by_act",
            ID : ID ,act : act ,table : table ,log : log ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_by_act_call_back , "POST");
        };logs_connection.edit_act_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_act_by_ID = function (ID, act){
                var param = {"act": "logs_edit_act_by_ID",
            act : act,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_act_by_ID_call_back , "POST");
        };logs_connection.edit_by_table_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_by_table = function (ID,act,table,log,created_by,creationDate){
                var param = {"act": "logs_edit_by_table",
            ID : ID ,act : act ,table : table ,log : log ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_by_table_call_back , "POST");
        };logs_connection.edit_table_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_table_by_ID = function (ID, table){
                var param = {"act": "logs_edit_table_by_ID",
            table : table,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_table_by_ID_call_back , "POST");
        };logs_connection.edit_by_log_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_by_log = function (ID,act,table,log,created_by,creationDate){
                var param = {"act": "logs_edit_by_log",
            ID : ID ,act : act ,table : table ,log : log ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_by_log_call_back , "POST");
        };logs_connection.edit_log_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_log_by_ID = function (ID, log){
                var param = {"act": "logs_edit_log_by_ID",
            log : log,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_log_by_ID_call_back , "POST");
        };logs_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_by_created_by = function (ID,act,table,log,created_by,creationDate){
                var param = {"act": "logs_edit_by_created_by",
            ID : ID ,act : act ,table : table ,log : log ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_by_created_by_call_back , "POST");
        };logs_connection.edit_created_by_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_created_by_by_ID = function (ID, created_by){
                var param = {"act": "logs_edit_created_by_by_ID",
            created_by : created_by,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_created_by_by_ID_call_back , "POST");
        };logs_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_by_creationDate = function (ID,act,table,log,created_by,creationDate){
                var param = {"act": "logs_edit_by_creationDate",
            ID : ID ,act : act ,table : table ,log : log ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_by_creationDate_call_back , "POST");
        };logs_connection.edit_creationDate_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(logs_connection.debug_mode){
                    console.log(data);
                }
            };
        logs_connection.edit_creationDate_by_ID = function (ID, creationDate){
                var param = {"act": "logs_edit_creationDate_by_ID",
            creationDate : creationDate,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(logs_connection.controller_url , param , logs_connection.edit_creationDate_by_ID_call_back , "POST");
        };