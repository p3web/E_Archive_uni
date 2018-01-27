<?php

        require_once '../model/data_access/access_menu_v_list.php';
        require_once '../model/data_access/lang.php';
        require_once 'controller_main_function.php';

        ob_start();
        session_cache_expire();
        session_start();


        
        $userAccess = array(''); //controller_main_function::get_access($_SESSION["user"]["ID"]);
        $debugMode =true;

        if (isset($_REQUEST['act']) && $_REQUEST['act'] != '' && $_REQUEST['act'] != null) {

    switch ($_REQUEST['act']) {

        //______________ get act

        case 'menu_v_list_get':
            if(!isset($userAccess["get_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_menu_v_list::get_menu_v_list();
            controller_main_function::send_result($result);
        break;


            case 'menu_v_list_get_by_ID':
                if(!isset($userAccess["get_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::get_menu_v_list_by_ID($_REQUEST["ID"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_v_list_get_by_grade_id':
                if(!isset($userAccess["get_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::get_menu_v_list_by_grade_id($_REQUEST["grade_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_v_list_get_by_field_of_study_id':
                if(!isset($userAccess["get_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::get_menu_v_list_by_field_of_study_id($_REQUEST["field_of_study_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_v_list_get_by_name':
                if(!isset($userAccess["get_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::get_menu_v_list_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'menu_v_list_get_by_grade_name':
                if(!isset($userAccess["get_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::get_menu_v_list_by_grade_name($_REQUEST["grade_name"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'menu_v_list_edit':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"name" ,"grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_by_ID':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"name" ,"grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_by_ID($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_by_grade_id':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"name" ,"grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_by_grade_id($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_by_field_of_study_id':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"name" ,"grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_by_field_of_study_id($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_by_name':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"name" ,"grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_by_name($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_by_grade_name':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"grade_id" ,"field_of_study_id" ,"name" ,"grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_by_grade_name($_REQUEST["ID"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_ID_by_ID':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_ID_by_ID($_REQUEST["ID"],$_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_grade_id_by_ID':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_grade_id_by_ID($_REQUEST["ID"],$_REQUEST["grade_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_field_of_study_id_by_ID':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_field_of_study_id_by_ID($_REQUEST["ID"],$_REQUEST["field_of_study_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_name_by_ID':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_name_by_ID($_REQUEST["ID"],$_REQUEST["name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_edit_grade_name_by_ID':
            if(!isset($userAccess["edit_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","grade_name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::edit_menu_v_list_grade_name_by_ID($_REQUEST["ID"],$_REQUEST["grade_name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_delete':
            if(!isset($userAccess["delete_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::delete_menu_v_list_by_ID($_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'menu_v_list_set':
            if(!isset($userAccess["set_menu_v_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_id" ,"field_of_study_id" ,"name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_menu_v_list::set_menu_v_list($_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["name"]);
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