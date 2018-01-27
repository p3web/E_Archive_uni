
         var grid_trash_files;
         var trash_files_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        trash_files_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(trash_files_connection.debug_mode){
                console.log(data);
            }
        };
        trash_files_connection.get = function (){
            var param = {"act": "trash_files_get"};
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_call_back , "POST");
        };
            //_____________ delete function
            trash_files_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(trash_files_connection.debug_mode){
                console.log(data);
            }
            };

         trash_files_connection.delete = function (ID){
            var param = {act: "trash_files_delete",
            ID: ID};
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.delete_call_back , "POST");
        };
            //_____________ set function
            trash_files_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(trash_files_connection.debug_mode){
                console.log(data);
            }
            };

         trash_files_connection.set = function (owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by){
            var param = {act: "trash_files_set",
            owner_id:owner_id ,name:name ,type:type ,parentdir:parentdir ,url:url ,property:property ,lat:lat ,lng:lng ,size:size ,is_delete:is_delete ,modified_by:modified_by ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.set_call_back , "POST");
        };
            //_____________ grid function
            trash_files_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(trash_files_connection.debug_mode){
            console.log(data);
            }

            grid_trash_files = new PSCO_grid('grid_trash_files');

            grid_trash_files.cols = [
            {name: 'ID', hidden: false, type: 'text'},{name: 'owner_id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'type', hidden: false, type: 'text'},{name: 'parentdir', hidden: false, type: 'text'},{name: 'url', hidden: false, type: 'text'},{name: 'property', hidden: false, type: 'text'},{name: 'lat', hidden: false, type: 'text'},{name: 'lng', hidden: false, type: 'text'},{name: 'size', hidden: false, type: 'text'},{name: 'is_delete', hidden: false, type: 'text'},{name: 'modified_by', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_trash_files.RightToLeft = false;

       // grid_trash_files.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_trash_files.data = data;

        grid_trash_files.render();

        };
        trash_files_connection.get_grid = function (){
            var param = {"act": "trash_files_get"};
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        trash_files_connection.get_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_ID = function (ID){
                var param = {"act": "trash_files_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_ID_call_back , "POST");
        };

        trash_files_connection.get_by_ID_grid = function (ID){
                var param = {"act": "trash_files_get_by_ID",
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_owner_id_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_owner_id = function (owner_id){
                var param = {"act": "trash_files_get_by_owner_id",
            owner_id : owner_id
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_owner_id_call_back , "POST");
        };

        trash_files_connection.get_by_owner_id_grid = function (owner_id){
                var param = {"act": "trash_files_get_by_owner_id",
            owner_id : owner_id
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_name = function (name){
                var param = {"act": "trash_files_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_name_call_back , "POST");
        };

        trash_files_connection.get_by_name_grid = function (name){
                var param = {"act": "trash_files_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_type_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_type = function (type){
                var param = {"act": "trash_files_get_by_type",
            type : type
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_type_call_back , "POST");
        };

        trash_files_connection.get_by_type_grid = function (type){
                var param = {"act": "trash_files_get_by_type",
            type : type
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_parentdir_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_parentdir = function (parentdir){
                var param = {"act": "trash_files_get_by_parentdir",
            parentdir : parentdir
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_parentdir_call_back , "POST");
        };

        trash_files_connection.get_by_parentdir_grid = function (parentdir){
                var param = {"act": "trash_files_get_by_parentdir",
            parentdir : parentdir
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_url_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_url = function (url){
                var param = {"act": "trash_files_get_by_url",
            url : url
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_url_call_back , "POST");
        };

        trash_files_connection.get_by_url_grid = function (url){
                var param = {"act": "trash_files_get_by_url",
            url : url
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_property_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_property = function (property){
                var param = {"act": "trash_files_get_by_property",
            property : property
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_property_call_back , "POST");
        };

        trash_files_connection.get_by_property_grid = function (property){
                var param = {"act": "trash_files_get_by_property",
            property : property
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_lat_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_lat = function (lat){
                var param = {"act": "trash_files_get_by_lat",
            lat : lat
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_lat_call_back , "POST");
        };

        trash_files_connection.get_by_lat_grid = function (lat){
                var param = {"act": "trash_files_get_by_lat",
            lat : lat
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_lng_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_lng = function (lng){
                var param = {"act": "trash_files_get_by_lng",
            lng : lng
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_lng_call_back , "POST");
        };

        trash_files_connection.get_by_lng_grid = function (lng){
                var param = {"act": "trash_files_get_by_lng",
            lng : lng
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_size_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_size = function (size){
                var param = {"act": "trash_files_get_by_size",
            size : size
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_size_call_back , "POST");
        };

        trash_files_connection.get_by_size_grid = function (size){
                var param = {"act": "trash_files_get_by_size",
            size : size
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_is_delete_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_is_delete = function (is_delete){
                var param = {"act": "trash_files_get_by_is_delete",
            is_delete : is_delete
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_is_delete_call_back , "POST");
        };

        trash_files_connection.get_by_is_delete_grid = function (is_delete){
                var param = {"act": "trash_files_get_by_is_delete",
            is_delete : is_delete
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_modified_by_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_modified_by = function (modified_by){
                var param = {"act": "trash_files_get_by_modified_by",
            modified_by : modified_by
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_modified_by_call_back , "POST");
        };

        trash_files_connection.get_by_modified_by_grid = function (modified_by){
                var param = {"act": "trash_files_get_by_modified_by",
            modified_by : modified_by
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_created_by = function (created_by){
                var param = {"act": "trash_files_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_created_by_call_back , "POST");
        };

        trash_files_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "trash_files_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        trash_files_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "trash_files_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_by_creationDate_call_back , "POST");
        };

        trash_files_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "trash_files_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        trash_files_connection.edit_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_ID = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_ID",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_ID_call_back , "POST");
        };trash_files_connection.edit_ID_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_ID_by_ID = function (ID, ID){
                var param = {"act": "trash_files_edit_ID_by_ID",
            ID : ID,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_ID_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_owner_id_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_owner_id = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_owner_id",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_owner_id_call_back , "POST");
        };trash_files_connection.edit_owner_id_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_owner_id_by_ID = function (ID, owner_id){
                var param = {"act": "trash_files_edit_owner_id_by_ID",
            owner_id : owner_id,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_owner_id_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_name = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_name",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_name_call_back , "POST");
        };trash_files_connection.edit_name_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_name_by_ID = function (ID, name){
                var param = {"act": "trash_files_edit_name_by_ID",
            name : name,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_name_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_type_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_type = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_type",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_type_call_back , "POST");
        };trash_files_connection.edit_type_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_type_by_ID = function (ID, type){
                var param = {"act": "trash_files_edit_type_by_ID",
            type : type,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_type_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_parentdir_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_parentdir = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_parentdir",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_parentdir_call_back , "POST");
        };trash_files_connection.edit_parentdir_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_parentdir_by_ID = function (ID, parentdir){
                var param = {"act": "trash_files_edit_parentdir_by_ID",
            parentdir : parentdir,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_parentdir_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_url_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_url = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_url",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_url_call_back , "POST");
        };trash_files_connection.edit_url_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_url_by_ID = function (ID, url){
                var param = {"act": "trash_files_edit_url_by_ID",
            url : url,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_url_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_property_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_property = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_property",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_property_call_back , "POST");
        };trash_files_connection.edit_property_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_property_by_ID = function (ID, property){
                var param = {"act": "trash_files_edit_property_by_ID",
            property : property,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_property_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_lat_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_lat = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_lat",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_lat_call_back , "POST");
        };trash_files_connection.edit_lat_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_lat_by_ID = function (ID, lat){
                var param = {"act": "trash_files_edit_lat_by_ID",
            lat : lat,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_lat_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_lng_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_lng = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_lng",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_lng_call_back , "POST");
        };trash_files_connection.edit_lng_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_lng_by_ID = function (ID, lng){
                var param = {"act": "trash_files_edit_lng_by_ID",
            lng : lng,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_lng_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_size_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_size = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_size",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_size_call_back , "POST");
        };trash_files_connection.edit_size_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_size_by_ID = function (ID, size){
                var param = {"act": "trash_files_edit_size_by_ID",
            size : size,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_size_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_is_delete_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_is_delete = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_is_delete",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_is_delete_call_back , "POST");
        };trash_files_connection.edit_is_delete_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_is_delete_by_ID = function (ID, is_delete){
                var param = {"act": "trash_files_edit_is_delete_by_ID",
            is_delete : is_delete,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_is_delete_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_modified_by_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_modified_by = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_modified_by",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_modified_by_call_back , "POST");
        };trash_files_connection.edit_modified_by_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_modified_by_by_ID = function (ID, modified_by){
                var param = {"act": "trash_files_edit_modified_by_by_ID",
            modified_by : modified_by,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_modified_by_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_created_by = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_created_by",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_created_by_call_back , "POST");
        };trash_files_connection.edit_created_by_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_created_by_by_ID = function (ID, created_by){
                var param = {"act": "trash_files_edit_created_by_by_ID",
            created_by : created_by,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_created_by_by_ID_call_back , "POST");
        };trash_files_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_by_creationDate = function (ID,owner_id,name,type,parentdir,url,property,lat,lng,size,is_delete,modified_by,created_by,creationDate){
                var param = {"act": "trash_files_edit_by_creationDate",
            ID : ID ,owner_id : owner_id ,name : name ,type : type ,parentdir : parentdir ,url : url ,property : property ,lat : lat ,lng : lng ,size : size ,is_delete : is_delete ,modified_by : modified_by ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_by_creationDate_call_back , "POST");
        };trash_files_connection.edit_creationDate_by_ID_call_back = function (data){
                //TODO: set code after the server response
                if(trash_files_connection.debug_mode){
                    console.log(data);
                }
            };
        trash_files_connection.edit_creationDate_by_ID = function (ID, creationDate){
                var param = {"act": "trash_files_edit_creationDate_by_ID",
            creationDate : creationDate,
            ID : ID
            };
            ajax.sender_data_json_by_url_callback(trash_files_connection.controller_url , param , trash_files_connection.edit_creationDate_by_ID_call_back , "POST");
        };