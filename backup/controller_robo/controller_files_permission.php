<?php

        require_once '../model/data_access/access_files_permission.php';
        require_once '../model/data_access/lang.php';
        require_once 'controller_main_function.php';

        ob_start();
        session_cache_expire();
        session_start();


        
        $userAccess = controller_main_function::get_access($_SESSION["user"]["ID"]);
        $debugMode =true;

        if (isset($_REQUEST['act']) && $_REQUEST['act'] != '' && $_REQUEST['act'] != null) {

    switch ($_REQUEST['act']) {

        //______________ get act

        case 'files_permission_get':
            if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_files_permission::get_files_permission();
            controller_main_function::send_result($result);
        break;


            case 'files_permission_get_by_user_id':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_user_id($_REQUEST["user_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'files_permission_get_by_file_id':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("file_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_file_id($_REQUEST["file_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'files_permission_get_by_read':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("read"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_read($_REQUEST["read"]);
                controller_main_function::send_result($result);
            break;
            
            case 'files_permission_get_by_write':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("write"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_write($_REQUEST["write"]);
                controller_main_function::send_result($result);
            break;
            
            case 'files_permission_get_by_delete':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("delete"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_delete($_REQUEST["delete"]);
                controller_main_function::send_result($result);
            break;
            
            case 'files_permission_get_by_created_by':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'files_permission_get_by_creationDate':
                if(!isset($userAccess["get_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::get_files_permission_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'files_permission_edit':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_user_id($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_file_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_file_id($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_read':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_read($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_write':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_write($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_delete':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_delete($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_created_by':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_created_by($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_by_creationDate':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"file_id" ,"read" ,"write" ,"delete" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_by_creationDate($_REQUEST["user_id"],$_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_user_id_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_user_id_by_user_id($_REQUEST["user_id"],$_REQUEST["user_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_file_id_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","file_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_file_id_by_user_id($_REQUEST["user_id"],$_REQUEST["file_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_read_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","read"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_read_by_user_id($_REQUEST["user_id"],$_REQUEST["read"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_write_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","write"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_write_by_user_id($_REQUEST["user_id"],$_REQUEST["write"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_delete_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","delete"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_delete_by_user_id($_REQUEST["user_id"],$_REQUEST["delete"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_created_by_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_created_by_by_user_id($_REQUEST["user_id"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_edit_creationDate_by_user_id':
            if(!isset($userAccess["edit_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::edit_files_permission_creationDate_by_user_id($_REQUEST["user_id"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_delete':
            if(!isset($userAccess["delete_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::delete_files_permission_by_user_id($_REQUEST["user_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'files_permission_set':
            if(!isset($userAccess["set_files_permission"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("file_id" ,"read" ,"write" ,"delete" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_files_permission::set_files_permission($_REQUEST["file_id"],$_REQUEST["read"],$_REQUEST["write"],$_REQUEST["delete"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
               }
        }else {
        //TODO: set page url when not set act
        header('Location: url');
    }