<?php

        //if you have rol policy set $_session[rols] else not set session

        require_once '../model/data_access/access_view_users_profile.php';
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

        case 'view_users_profile_get':
        if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_view_users_profile::get_view_users_profile();
            controller_main_function::send_result($result);
        break;


            case 'view_users_profile_get_by_id':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_id($_REQUEST["id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_name':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_lastname':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("lastname"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_lastname($_REQUEST["lastname"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_nik_name':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("nik_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_nik_name($_REQUEST["nik_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_user_name':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_user_name($_REQUEST["user_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_pssword':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("pssword"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_pssword($_REQUEST["pssword"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_avatar':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("avatar"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_avatar($_REQUEST["avatar"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_age':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("age"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_age($_REQUEST["age"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_sex':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("sex"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_sex($_REQUEST["sex"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_father_name':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("father_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_father_name($_REQUEST["father_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_mather_name':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("mather_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_mather_name($_REQUEST["mather_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_is_single':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("is_single"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_is_single($_REQUEST["is_single"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_national_code':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_national_code($_REQUEST["national_code"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_email':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("email"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_email($_REQUEST["email"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_tel':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("tel"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_tel($_REQUEST["tel"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_mobile':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("mobile"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_mobile($_REQUEST["mobile"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_fax':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("fax"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_fax($_REQUEST["fax"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_address':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("address"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_address($_REQUEST["address"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_last_password_failed':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_password_failed"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_last_password_failed($_REQUEST["last_password_failed"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_count_password_failed':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("count_password_failed"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_count_password_failed($_REQUEST["count_password_failed"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_last_change_password':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_change_password"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_last_change_password($_REQUEST["last_change_password"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_last_modified':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_modified"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_last_modified($_REQUEST["last_modified"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_created_by':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'view_users_profile_get_by_creationDate':
            if(!isset($userAccess["get_view_users_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_view_users_profile::get_view_users_profile_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            
        }
        }