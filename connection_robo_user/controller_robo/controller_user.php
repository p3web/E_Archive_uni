<?php

        require_once '../model/data_access/access_user.php';
        require_once '../model/data_access/lang.php';
        require_once 'controller_main_function.php';

        ob_start();
        session_cache_expire();
        session_start();


        
        $userAccess =array(''); //controller_main_function::get_access($_SESSION["user"]["ID"]);
        $debugMode =true;

        if (isset($_REQUEST['act']) && $_REQUEST['act'] != '' && $_REQUEST['act'] != null) {

    switch ($_REQUEST['act']) {

        //______________ get act

        case 'user_get':
            if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_user::get_user();
            controller_main_function::send_result($result);
        break;


            case 'user_get_by_id':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_id($_REQUEST["ID"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_name':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;


            case 'user_get_by_lastname':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("lastname"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_lastname($_REQUEST["lastname"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_nik_name':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("nik_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_nik_name($_REQUEST["nik_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_user_name':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_user_name($_REQUEST["user_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_pssword':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("pssword"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_pssword($_REQUEST["pssword"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_avatar':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("avatar"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_avatar($_REQUEST["avatar"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_last_password_failed':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_password_failed"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_last_password_failed($_REQUEST["last_password_failed"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_count_password_failed':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("count_password_failed"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_count_password_failed($_REQUEST["count_password_failed"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_last_change_password':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_change_password"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_last_change_password($_REQUEST["last_change_password"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_last_modified':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_modified"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_last_modified($_REQUEST["last_modified"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_created_by':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'user_get_by_creationDate':
                if(!isset($userAccess["get_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::get_user_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'user_edit':
            if(!isset($userAccess["edit_user"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user($_REQUEST["ID"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                $result = array('data'=> $result);
                //controller_main_function::send_result($result);
                //controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_id($_REQUEST["ID"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
               $result = array('data'=> $result);
                controller_main_function::send_result($result);
               controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_name':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_name($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_lastname':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_lastname($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_nik_name':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_nik_name($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_user_name':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_user_name($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_pssword':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_pssword($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_avatar':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_avatar($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_last_password_failed':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_last_password_failed($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_count_password_failed':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_count_password_failed($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_last_change_password':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_last_change_password($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_last_modified':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_last_modified($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_created_by':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_created_by($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_by_creationDate':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_by_creationDate($_REQUEST["id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_id_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_id_by_id($_REQUEST["id"],$_REQUEST["id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_name_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_name_by_id($_REQUEST["id"],$_REQUEST["name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_lastname_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","lastname"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_lastname_by_id($_REQUEST["id"],$_REQUEST["lastname"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_nik_name_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","nik_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_nik_name_by_id($_REQUEST["id"],$_REQUEST["nik_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_user_name_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","user_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_user_name_by_id($_REQUEST["id"],$_REQUEST["user_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_pssword_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","pssword"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_pssword_by_id($_REQUEST["id"],$_REQUEST["pssword"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_avatar_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","avatar"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_avatar_by_id($_REQUEST["id"],$_REQUEST["avatar"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_last_password_failed_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","last_password_failed"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_last_password_failed_by_id($_REQUEST["id"],$_REQUEST["last_password_failed"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_count_password_failed_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","count_password_failed"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_count_password_failed_by_id($_REQUEST["id"],$_REQUEST["count_password_failed"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_last_change_password_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","last_change_password"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_last_change_password_by_id($_REQUEST["id"],$_REQUEST["last_change_password"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_last_modified_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","last_modified"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_last_modified_by_id($_REQUEST["id"],$_REQUEST["last_modified"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_created_by_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_created_by_by_id($_REQUEST["id"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_edit_creationDate_by_id':
            if(!isset($userAccess["edit_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::edit_user_creationDate_by_id($_REQUEST["id"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'user_delete':
            if(!isset($userAccess["delete_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::delete_user_by_id($_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
               // controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;



            case 'user_set':
            if(!isset($userAccess["set_user"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name" ,"lastname" ,"nik_name" ,"user_name" ,"pssword" ,"avatar" ,"last_password_failed" ,"count_password_failed" ,"last_change_password" ,"last_modified" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_user::set_user($_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["nik_name"],$_REQUEST["user_name"],$_REQUEST["pssword"],$_REQUEST["avatar"],$_REQUEST["last_password_failed"],$_REQUEST["count_password_failed"],$_REQUEST["last_change_password"],$_REQUEST["last_modified"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                $result = array('data'=> $result);
                controller_main_function::send_result($result);
                //controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
               }
        }else {
        //TODO: set page url when not set act
        header('Location: url');
    }