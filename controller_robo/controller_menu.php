<?php

        require_once '../model/data_access/access_menu.php';
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

        case 'menu_get':
            if(!isset($userAccess["get_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_menu::get_menu();
            controller_main_function::send_result($result);
        break;


            case 'menu_get_by_ID':
                if(!isset($userAccess["get_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::get_menu_by_ID($_REQUEST["ID"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_get_by_grade_id':
                if(!isset($userAccess["get_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::get_menu_by_grade_id($_REQUEST["grade_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_get_by_field_of_study_id':
                if(!isset($userAccess["get_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::get_menu_by_field_of_study_id($_REQUEST["field_of_study_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_get_by_creationDate':
                if(!isset($userAccess["get_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::get_menu_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_get_by_created_by':
                if(!isset($userAccess["get_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::get_menu_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'menu_edit':
            if(!isset($userAccess["edit_menu"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"creationDate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_by_ID':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"creationDate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_by_ID($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_by_grade_id':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"creationDate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_by_grade_id($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_by_field_of_study_id':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"creationDate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_by_field_of_study_id($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_by_creationDate':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"creationDate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_by_creationDate($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_by_created_by':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"creationDate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_by_created_by($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_ID_by_ID':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_ID_by_ID($_REQUEST["ID"],$_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_grade_id_by_ID':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_grade_id_by_ID($_REQUEST["ID"],$_REQUEST["grade_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_field_of_study_id_by_ID':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_field_of_study_id_by_ID($_REQUEST["ID"],$_REQUEST["field_of_study_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_creationDate_by_ID':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_creationDate_by_ID($_REQUEST["ID"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_edit_created_by_by_ID':
            if(!isset($userAccess["edit_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::edit_menu_created_by_by_ID($_REQUEST["ID"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_delete':
            if(!isset($userAccess["delete_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::delete_menu_by_ID($_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_set':
            if(!isset($userAccess["set_menu"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_id" ,"field_of_study_id" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu::set_menu($_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["creationDate"]);
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