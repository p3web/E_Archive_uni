<?php

        //if you have rol policy set $_session[rols] else not set session

        require_once '../model/data_access/access_view_users_system_systemName.php';
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

        case 'view_users_system_systemName_get':
        if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_view_users_system_systemName::get_view_users_system_systemName();
            controller_main_function::send_result($result);
        break;


            case 'view_users_system_systemName_get_by_id':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_id($_REQUEST["id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_system_systemName_get_by_user_id':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_user_id($_REQUEST["user_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_system_systemName_get_by_system':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("system"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_system($_REQUEST["system"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_system_systemName_get_by_token':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("token"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_token($_REQUEST["token"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_system_systemName_get_by_expire_date':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("expire_date"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_expire_date($_REQUEST["expire_date"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_system_systemName_get_by_created_by':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_system_systemName_get_by_creationDate':
            if(!isset($userAccess["get_view_users_system_systemName"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_system_systemName::get_view_users_system_systemName_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            
        }
        }