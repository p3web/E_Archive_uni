<?php

        //if you have rol policy set $_session[rols] else not set session

        require_once '../model/data_access/access_view_users_organization_organization.php';
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

        case 'view_users_organization_organization_get':
        if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_view_users_organization_organization::get_view_users_organization_organization();
            controller_main_function::send_result($result);
        break;


            case 'view_users_organization_organization_get_by_id':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_id($_REQUEST["id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_user_id':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_user_id($_REQUEST["user_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_name':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_address':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("address"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_address($_REQUEST["address"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_tel':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("tel"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_tel($_REQUEST["tel"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_fax':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("fax"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_fax($_REQUEST["fax"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_email':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("email"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_email($_REQUEST["email"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_comment':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("comment"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_comment($_REQUEST["comment"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_rol':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("rol"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_rol($_REQUEST["rol"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_created_by':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_organization_organization_get_by_creationDate':
            if(!isset($userAccess["get_view_users_organization_organization"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_organization_organization::get_view_users_organization_organization_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            
        }
        }