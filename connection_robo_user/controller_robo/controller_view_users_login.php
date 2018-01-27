<?php

        //if you have rol policy set $_session[rols] else not set session

        require_once '../model/data_access/access_view_users_login.php';
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

        case 'view_users_login_get':
        if(!isset($userAccess["get_view_users_login"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_view_users_login::get_view_users_login();
            controller_main_function::send_result($result);
        break;


            case 'view_users_login_get_by_id':
            if(!isset($userAccess["get_view_users_login"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_login::get_view_users_login_by_id($_REQUEST["id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_login_get_by_user_name':
            if(!isset($userAccess["get_view_users_login"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_login::get_view_users_login_by_user_name($_REQUEST["user_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_login_get_by_pssword':
            if(!isset($userAccess["get_view_users_login"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("pssword"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_login::get_view_users_login_by_pssword($_REQUEST["pssword"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_login_get_by_avatar':
            if(!isset($userAccess["get_view_users_login"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("avatar"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_login::get_view_users_login_by_avatar($_REQUEST["avatar"]);
                controller_main_function::send_result($result);
            break;
            
        }
        }