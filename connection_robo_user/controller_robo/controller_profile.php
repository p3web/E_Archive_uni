<?php

        require_once '../model/data_access/access_profile.php';
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

        case 'profile_get':
            if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_profile::get_profile();
            controller_main_function::send_result($result);
        break;


            case 'profile_get_by_id':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_id($_REQUEST["id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_user_id':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_user_id($_REQUEST["user_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_age':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("age"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_age($_REQUEST["age"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_sex':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("sex"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_sex($_REQUEST["sex"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_father_name':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("father_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_father_name($_REQUEST["father_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_mather_name':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("mather_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_mather_name($_REQUEST["mather_name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_is_single':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("is_single"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_is_single($_REQUEST["is_single"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_national_code':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_national_code($_REQUEST["national_code"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_email':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("email"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_email($_REQUEST["email"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_tel':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("tel"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_tel($_REQUEST["tel"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_mobile':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("mobile"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_mobile($_REQUEST["mobile"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_fax':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("fax"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_fax($_REQUEST["fax"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_address':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("address"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_address($_REQUEST["address"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_last_modified':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("last_modified"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_last_modified($_REQUEST["last_modified"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_created_by':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'profile_get_by_creationDate':
                if(!isset($userAccess["get_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::get_profile_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'profile_edit':
            if(!isset($userAccess["edit_profile"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_id($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_user_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_user_id($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_age':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_age($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_sex':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_sex($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_father_name':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_father_name($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_mather_name':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_mather_name($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_is_single':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_is_single($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_national_code':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_national_code($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_email':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_email($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_tel':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_tel($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_mobile':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_mobile($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_fax':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_fax($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_address':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_address($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_last_modified':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_last_modified($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_created_by':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_created_by($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_by_creationDate':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id" ,"user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_by_creationDate($_REQUEST["id"],$_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_id_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_id_by_id($_REQUEST["id"],$_REQUEST["id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_user_id_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_user_id_by_id($_REQUEST["id"],$_REQUEST["user_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_age_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","age"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_age_by_id($_REQUEST["id"],$_REQUEST["age"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_sex_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","sex"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_sex_by_id($_REQUEST["id"],$_REQUEST["sex"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_father_name_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","father_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_father_name_by_id($_REQUEST["id"],$_REQUEST["father_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_mather_name_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","mather_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_mather_name_by_id($_REQUEST["id"],$_REQUEST["mather_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_is_single_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","is_single"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_is_single_by_id($_REQUEST["id"],$_REQUEST["is_single"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_national_code_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_national_code_by_id($_REQUEST["id"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_email_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","email"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_email_by_id($_REQUEST["id"],$_REQUEST["email"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_tel_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","tel"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_tel_by_id($_REQUEST["id"],$_REQUEST["tel"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_mobile_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","mobile"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_mobile_by_id($_REQUEST["id"],$_REQUEST["mobile"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_fax_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","fax"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_fax_by_id($_REQUEST["id"],$_REQUEST["fax"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_address_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","address"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_address_by_id($_REQUEST["id"],$_REQUEST["address"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_last_modified_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","last_modified"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_last_modified_by_id($_REQUEST["id"],$_REQUEST["last_modified"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_created_by_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_created_by_by_id($_REQUEST["id"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_edit_creationDate_by_id':
            if(!isset($userAccess["edit_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::edit_profile_creationDate_by_id($_REQUEST["id"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'profile_delete':
            if(!isset($userAccess["delete_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::delete_profile_by_id($_REQUEST["id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

        case 'profile_delete_by_user_id':
            if(!isset($userAccess["profile_delete_by_user_id"]) && !$debugMode){
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("user_id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_profile::delete_profile_by_user_id($_REQUEST["user_id"]);
            //controller_main_function::send_result($result);
            //$result = array('data'=> true);
            //controller_main_function::send_result($result);
            controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

            case 'profile_set':
            if(!isset($userAccess["set_profile"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"age" ,"sex" ,"father_name" ,"mather_name" ,"is_single" ,"national_code" ,"email" ,"tel" ,"mobile" ,"fax" ,"address" ,"last_modified" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_profile::set_profile($_REQUEST["user_id"],$_REQUEST["age"],$_REQUEST["sex"],$_REQUEST["father_name"],$_REQUEST["mather_name"],$_REQUEST["is_single"],$_REQUEST["national_code"],$_REQUEST["email"],$_REQUEST["tel"],$_REQUEST["mobile"],$_REQUEST["fax"],$_REQUEST["address"],$_REQUEST["last_modified"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                $result = array('data'=> true);
                controller_main_function::send_result($result);
                //controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
               }
        }else {
        //TODO: set page url when not set act
        header('Location: url');
    }