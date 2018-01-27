
         var grid_organization;
         var organization_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        organization_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(organization_connection.debug_mode){
                console.log(data);
            }
        };
        organization_connection.get = function (){
            var param = {"act": "organization_get"};
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_call_back , "POST");
        };
            //_____________ delete function
            organization_connection.delete_call_back = function (data){
            //TODO: set code after the server response
            if(organization_connection.debug_mode){
                console.log(data);
            }
            };

         organization_connection.delete = function (id){
            var param = {act: "organization_delete",
            id: id};
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.delete_call_back , "POST");
        };
            //_____________ set function
            organization_connection.set_call_back = function (data){
            //TODO: set code after the server response
            if(organization_connection.debug_mode){
                console.log(data);
            }
            };

         organization_connection.set = function (name,address,tel,fax,email,comment,created_by){
            var param = {act: "organization_set",
            name:name ,address:address ,tel:tel ,fax:fax ,email:email ,comment:comment ,created_by:created_by};
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.set_call_back , "POST");
        };
            //_____________ grid function
            organization_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(organization_connection.debug_mode){
            console.log(data);
            }

            grid_organization = new PSCO_grid('grid_organization');

            grid_organization.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'address', hidden: false, type: 'text'},{name: 'tel', hidden: false, type: 'text'},{name: 'fax', hidden: false, type: 'text'},{name: 'email', hidden: false, type: 'text'},{name: 'comment', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_organization.RightToLeft = false;

       // grid_organization.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_organization.data = data;

        grid_organization.render();

        };
        organization_connection.get_grid = function (){
            var param = {"act": "organization_get"};
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        organization_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_id = function (id){
                var param = {"act": "organization_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_id_call_back , "POST");
        };

        organization_connection.get_by_id_grid = function (id){
                var param = {"act": "organization_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_name = function (name){
                var param = {"act": "organization_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_name_call_back , "POST");
        };

        organization_connection.get_by_name_grid = function (name){
                var param = {"act": "organization_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_address_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_address = function (address){
                var param = {"act": "organization_get_by_address",
            address : address
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_address_call_back , "POST");
        };

        organization_connection.get_by_address_grid = function (address){
                var param = {"act": "organization_get_by_address",
            address : address
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_tel_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_tel = function (tel){
                var param = {"act": "organization_get_by_tel",
            tel : tel
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_tel_call_back , "POST");
        };

        organization_connection.get_by_tel_grid = function (tel){
                var param = {"act": "organization_get_by_tel",
            tel : tel
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_fax_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_fax = function (fax){
                var param = {"act": "organization_get_by_fax",
            fax : fax
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_fax_call_back , "POST");
        };

        organization_connection.get_by_fax_grid = function (fax){
                var param = {"act": "organization_get_by_fax",
            fax : fax
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_email_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_email = function (email){
                var param = {"act": "organization_get_by_email",
            email : email
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_email_call_back , "POST");
        };

        organization_connection.get_by_email_grid = function (email){
                var param = {"act": "organization_get_by_email",
            email : email
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_comment_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_comment = function (comment){
                var param = {"act": "organization_get_by_comment",
            comment : comment
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_comment_call_back , "POST");
        };

        organization_connection.get_by_comment_grid = function (comment){
                var param = {"act": "organization_get_by_comment",
            comment : comment
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_created_by = function (created_by){
                var param = {"act": "organization_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_created_by_call_back , "POST");
        };

        organization_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "organization_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        organization_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "organization_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_by_creationDate_call_back , "POST");
        };

        organization_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "organization_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.get_grid_call_back , "POST");
        };
        
        //________________edit functions
        organization_connection.edit_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_id = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_id",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_id_call_back , "POST");
        };organization_connection.edit_id_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_id_by_id = function (id, id){
                var param = {"act": "organization_edit_id_by_id",
            id : id,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_id_by_id_call_back , "POST");
        };organization_connection.edit_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_name = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_name",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_name_call_back , "POST");
        };organization_connection.edit_name_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_name_by_id = function (id, name){
                var param = {"act": "organization_edit_name_by_id",
            name : name,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_name_by_id_call_back , "POST");
        };organization_connection.edit_by_address_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_address = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_address",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_address_call_back , "POST");
        };organization_connection.edit_address_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_address_by_id = function (id, address){
                var param = {"act": "organization_edit_address_by_id",
            address : address,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_address_by_id_call_back , "POST");
        };organization_connection.edit_by_tel_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_tel = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_tel",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_tel_call_back , "POST");
        };organization_connection.edit_tel_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_tel_by_id = function (id, tel){
                var param = {"act": "organization_edit_tel_by_id",
            tel : tel,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_tel_by_id_call_back , "POST");
        };organization_connection.edit_by_fax_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_fax = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_fax",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_fax_call_back , "POST");
        };organization_connection.edit_fax_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_fax_by_id = function (id, fax){
                var param = {"act": "organization_edit_fax_by_id",
            fax : fax,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_fax_by_id_call_back , "POST");
        };organization_connection.edit_by_email_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_email = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_email",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_email_call_back , "POST");
        };organization_connection.edit_email_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_email_by_id = function (id, email){
                var param = {"act": "organization_edit_email_by_id",
            email : email,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_email_by_id_call_back , "POST");
        };organization_connection.edit_by_comment_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_comment = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_comment",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_comment_call_back , "POST");
        };organization_connection.edit_comment_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_comment_by_id = function (id, comment){
                var param = {"act": "organization_edit_comment_by_id",
            comment : comment,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_comment_by_id_call_back , "POST");
        };organization_connection.edit_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_created_by = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_created_by",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_created_by_call_back , "POST");
        };organization_connection.edit_created_by_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_created_by_by_id = function (id, created_by){
                var param = {"act": "organization_edit_created_by_by_id",
            created_by : created_by,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_created_by_by_id_call_back , "POST");
        };organization_connection.edit_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_by_creationDate = function (id,name,address,tel,fax,email,comment,created_by,creationDate){
                var param = {"act": "organization_edit_by_creationDate",
            id : id ,name : name ,address : address ,tel : tel ,fax : fax ,email : email ,comment : comment ,created_by : created_by ,creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_by_creationDate_call_back , "POST");
        };organization_connection.edit_creationDate_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(organization_connection.debug_mode){
                    console.log(data);
                }
            };
        organization_connection.edit_creationDate_by_id = function (id, creationDate){
                var param = {"act": "organization_edit_creationDate_by_id",
            creationDate : creationDate,
            id : id
            };
            ajax.sender_data_json_by_url_callback(organization_connection.controller_url , param , organization_connection.edit_creationDate_by_id_call_back , "POST");
        };