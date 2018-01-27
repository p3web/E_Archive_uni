
         var grid_view_users_profile;
         var view_users_profile_connection = {
            controller_url : '' //TODO: set controller url
            ,debug_mode : false
            //controller/controller_users.php
        };
        
        view_users_profile_connection.get_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_profile_connection.debug_mode){
                console.log(data);
            }
        };
        view_users_profile_connection.get = function (){
            var param = {"act": "view_users_profile_get"};
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_call_back , "POST");
        };
            //_____________ grid function
            view_users_profile_connection.get_grid_call_back = function (data){
            //TODO: set code after the server response
            if(view_users_profile_connection.debug_mode){
            console.log(data);
            }

            grid_view_users_profile = new PSCO_grid('grid_view_users_profile');

            grid_view_users_profile.cols = [
            {name: 'id', hidden: false, type: 'text'},{name: 'name', hidden: false, type: 'text'},{name: 'lastname', hidden: false, type: 'text'},{name: 'nik_name', hidden: false, type: 'text'},{name: 'user_name', hidden: false, type: 'text'},{name: 'pssword', hidden: false, type: 'text'},{name: 'avatar', hidden: false, type: 'text'},{name: 'age', hidden: false, type: 'text'},{name: 'sex', hidden: false, type: 'text'},{name: 'father_name', hidden: false, type: 'text'},{name: 'mather_name', hidden: false, type: 'text'},{name: 'is_single', hidden: false, type: 'text'},{name: 'national_code', hidden: false, type: 'text'},{name: 'email', hidden: false, type: 'text'},{name: 'tel', hidden: false, type: 'text'},{name: 'mobile', hidden: false, type: 'text'},{name: 'fax', hidden: false, type: 'text'},{name: 'address', hidden: false, type: 'text'},{name: 'last_password_failed', hidden: false, type: 'text'},{name: 'count_password_failed', hidden: false, type: 'text'},{name: 'last_change_password', hidden: false, type: 'text'},{name: 'last_modified', hidden: false, type: 'text'},{name: 'created_by', hidden: false, type: 'text'},{name: 'creationDate', hidden: false, type: 'text'}];

        grid_view_users_profile.RightToLeft = false;

       // grid_view_users_profile.actions = [{name: 'delete', ClassName: 'glyphicon glyphicon-remove', attribute: {onclick: 'deleteIt()'}}];

        grid_view_users_profile.data = data;

        grid_view_users_profile.render();

        };
        view_users_profile_connection.get_grid = function (){
            var param = {"act": "view_users_profile_get"};
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        //________________get functions
        view_users_profile_connection.get_by_id_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_id = function (id){
                var param = {"act": "view_users_profile_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_id_call_back , "POST");
        };

        view_users_profile_connection.get_by_id_grid = function (id){
                var param = {"act": "view_users_profile_get_by_id",
            id : id
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_name = function (name){
                var param = {"act": "view_users_profile_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_name_call_back , "POST");
        };

        view_users_profile_connection.get_by_name_grid = function (name){
                var param = {"act": "view_users_profile_get_by_name",
            name : name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_lastname_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_lastname = function (lastname){
                var param = {"act": "view_users_profile_get_by_lastname",
            lastname : lastname
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_lastname_call_back , "POST");
        };

        view_users_profile_connection.get_by_lastname_grid = function (lastname){
                var param = {"act": "view_users_profile_get_by_lastname",
            lastname : lastname
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_nik_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_nik_name = function (nik_name){
                var param = {"act": "view_users_profile_get_by_nik_name",
            nik_name : nik_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_nik_name_call_back , "POST");
        };

        view_users_profile_connection.get_by_nik_name_grid = function (nik_name){
                var param = {"act": "view_users_profile_get_by_nik_name",
            nik_name : nik_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_user_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_user_name = function (user_name){
                var param = {"act": "view_users_profile_get_by_user_name",
            user_name : user_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_user_name_call_back , "POST");
        };

        view_users_profile_connection.get_by_user_name_grid = function (user_name){
                var param = {"act": "view_users_profile_get_by_user_name",
            user_name : user_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_pssword_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_pssword = function (pssword){
                var param = {"act": "view_users_profile_get_by_pssword",
            pssword : pssword
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_pssword_call_back , "POST");
        };

        view_users_profile_connection.get_by_pssword_grid = function (pssword){
                var param = {"act": "view_users_profile_get_by_pssword",
            pssword : pssword
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_avatar_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_avatar = function (avatar){
                var param = {"act": "view_users_profile_get_by_avatar",
            avatar : avatar
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_avatar_call_back , "POST");
        };

        view_users_profile_connection.get_by_avatar_grid = function (avatar){
                var param = {"act": "view_users_profile_get_by_avatar",
            avatar : avatar
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_age_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_age = function (age){
                var param = {"act": "view_users_profile_get_by_age",
            age : age
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_age_call_back , "POST");
        };

        view_users_profile_connection.get_by_age_grid = function (age){
                var param = {"act": "view_users_profile_get_by_age",
            age : age
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_sex_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_sex = function (sex){
                var param = {"act": "view_users_profile_get_by_sex",
            sex : sex
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_sex_call_back , "POST");
        };

        view_users_profile_connection.get_by_sex_grid = function (sex){
                var param = {"act": "view_users_profile_get_by_sex",
            sex : sex
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_father_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_father_name = function (father_name){
                var param = {"act": "view_users_profile_get_by_father_name",
            father_name : father_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_father_name_call_back , "POST");
        };

        view_users_profile_connection.get_by_father_name_grid = function (father_name){
                var param = {"act": "view_users_profile_get_by_father_name",
            father_name : father_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_mather_name_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_mather_name = function (mather_name){
                var param = {"act": "view_users_profile_get_by_mather_name",
            mather_name : mather_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_mather_name_call_back , "POST");
        };

        view_users_profile_connection.get_by_mather_name_grid = function (mather_name){
                var param = {"act": "view_users_profile_get_by_mather_name",
            mather_name : mather_name
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_is_single_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_is_single = function (is_single){
                var param = {"act": "view_users_profile_get_by_is_single",
            is_single : is_single
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_is_single_call_back , "POST");
        };

        view_users_profile_connection.get_by_is_single_grid = function (is_single){
                var param = {"act": "view_users_profile_get_by_is_single",
            is_single : is_single
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_national_code_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_national_code = function (national_code){
                var param = {"act": "view_users_profile_get_by_national_code",
            national_code : national_code
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_national_code_call_back , "POST");
        };

        view_users_profile_connection.get_by_national_code_grid = function (national_code){
                var param = {"act": "view_users_profile_get_by_national_code",
            national_code : national_code
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_email_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_email = function (email){
                var param = {"act": "view_users_profile_get_by_email",
            email : email
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_email_call_back , "POST");
        };

        view_users_profile_connection.get_by_email_grid = function (email){
                var param = {"act": "view_users_profile_get_by_email",
            email : email
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_tel_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_tel = function (tel){
                var param = {"act": "view_users_profile_get_by_tel",
            tel : tel
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_tel_call_back , "POST");
        };

        view_users_profile_connection.get_by_tel_grid = function (tel){
                var param = {"act": "view_users_profile_get_by_tel",
            tel : tel
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_mobile_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_mobile = function (mobile){
                var param = {"act": "view_users_profile_get_by_mobile",
            mobile : mobile
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_mobile_call_back , "POST");
        };

        view_users_profile_connection.get_by_mobile_grid = function (mobile){
                var param = {"act": "view_users_profile_get_by_mobile",
            mobile : mobile
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_fax_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_fax = function (fax){
                var param = {"act": "view_users_profile_get_by_fax",
            fax : fax
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_fax_call_back , "POST");
        };

        view_users_profile_connection.get_by_fax_grid = function (fax){
                var param = {"act": "view_users_profile_get_by_fax",
            fax : fax
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_address_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_address = function (address){
                var param = {"act": "view_users_profile_get_by_address",
            address : address
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_address_call_back , "POST");
        };

        view_users_profile_connection.get_by_address_grid = function (address){
                var param = {"act": "view_users_profile_get_by_address",
            address : address
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_last_password_failed_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_last_password_failed = function (last_password_failed){
                var param = {"act": "view_users_profile_get_by_last_password_failed",
            last_password_failed : last_password_failed
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_last_password_failed_call_back , "POST");
        };

        view_users_profile_connection.get_by_last_password_failed_grid = function (last_password_failed){
                var param = {"act": "view_users_profile_get_by_last_password_failed",
            last_password_failed : last_password_failed
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_count_password_failed_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_count_password_failed = function (count_password_failed){
                var param = {"act": "view_users_profile_get_by_count_password_failed",
            count_password_failed : count_password_failed
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_count_password_failed_call_back , "POST");
        };

        view_users_profile_connection.get_by_count_password_failed_grid = function (count_password_failed){
                var param = {"act": "view_users_profile_get_by_count_password_failed",
            count_password_failed : count_password_failed
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_last_change_password_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_last_change_password = function (last_change_password){
                var param = {"act": "view_users_profile_get_by_last_change_password",
            last_change_password : last_change_password
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_last_change_password_call_back , "POST");
        };

        view_users_profile_connection.get_by_last_change_password_grid = function (last_change_password){
                var param = {"act": "view_users_profile_get_by_last_change_password",
            last_change_password : last_change_password
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_last_modified_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_last_modified = function (last_modified){
                var param = {"act": "view_users_profile_get_by_last_modified",
            last_modified : last_modified
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_last_modified_call_back , "POST");
        };

        view_users_profile_connection.get_by_last_modified_grid = function (last_modified){
                var param = {"act": "view_users_profile_get_by_last_modified",
            last_modified : last_modified
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_created_by_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_created_by = function (created_by){
                var param = {"act": "view_users_profile_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_created_by_call_back , "POST");
        };

        view_users_profile_connection.get_by_created_by_grid = function (created_by){
                var param = {"act": "view_users_profile_get_by_created_by",
            created_by : created_by
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        view_users_profile_connection.get_by_creationDate_call_back = function (data){
                //TODO: set code after the server response
                if(view_users_profile_connection.debug_mode){
                    console.log(data);
                }
            };
        view_users_profile_connection.get_by_creationDate = function (creationDate){
                var param = {"act": "view_users_profile_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_by_creationDate_call_back , "POST");
        };

        view_users_profile_connection.get_by_creationDate_grid = function (creationDate){
                var param = {"act": "view_users_profile_get_by_creationDate",
            creationDate : creationDate
            };
            ajax.sender_data_json_by_url_callback(view_users_profile_connection.controller_url , param , view_users_profile_connection.get_grid_call_back , "POST");
        };
        