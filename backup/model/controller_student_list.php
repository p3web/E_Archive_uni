<?php

        require_once '../model/data_access/access_student_list.php';
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

        case 'student_list_get':
            if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_student_list::get_student_list();
            controller_main_function::send_result($result);
        break;


            case 'student_list_get_by_student_id':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_student_id($_REQUEST["student_id"]);
                controller_main_function::send_result($result);
            break;

        case 'student_list_get_for_grid':
            if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                controller_main_function::send_msg(lang::$not_access, lang::$error);
            }
            $valid_data = controller_main_function::check_validation(array("year_id" , "grade_id" , "field_of_study_id"));
            if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                controller_main_function::send_msg(lang::$invalid_data, lang::$error);
            }
            $result = access_student_list::student_list_get_for_grid($_REQUEST["year_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"]);
            controller_main_function::send_result($result);
            break;


        case 'student_list_get_by_user_id':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_user_id($_REQUEST["user_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_list_get_by_grade_id':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_grade_id($_REQUEST["grade_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_list_get_by_field_of_study_id':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_field_of_study_id($_REQUEST["field_of_study_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_list_get_by_year_id':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("year_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_year_id($_REQUEST["year_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_list_get_by_name':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_list_get_by_lastname':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("lastname"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_lastname($_REQUEST["lastname"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_list_get_by_national_code':
                if(!isset($userAccess["get_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::get_student_list_by_national_code($_REQUEST["national_code"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'student_list_edit':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_student_id($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_user_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_user_id($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_grade_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_grade_id($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_field_of_study_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_field_of_study_id($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_year_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_year_id($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_name':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_name($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_lastname':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_lastname($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_by_national_code':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id" ,"user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname" ,"national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_by_national_code($_REQUEST["student_id"],$_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_student_id_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","student_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_student_id_by_student_id($_REQUEST["student_id"],$_REQUEST["student_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_user_id_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_user_id_by_student_id($_REQUEST["student_id"],$_REQUEST["user_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_grade_id_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_grade_id_by_student_id($_REQUEST["student_id"],$_REQUEST["grade_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_field_of_study_id_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_field_of_study_id_by_student_id($_REQUEST["student_id"],$_REQUEST["field_of_study_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_year_id_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","year_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_year_id_by_student_id($_REQUEST["student_id"],$_REQUEST["year_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_name_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_name_by_student_id($_REQUEST["student_id"],$_REQUEST["name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_lastname_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","lastname"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_lastname_by_student_id($_REQUEST["student_id"],$_REQUEST["lastname"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_edit_national_code_by_student_id':
            if(!isset($userAccess["edit_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id","national_code"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::edit_student_list_national_code_by_student_id($_REQUEST["student_id"],$_REQUEST["national_code"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_delete':
            if(!isset($userAccess["delete_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::delete_student_list_by_student_id($_REQUEST["student_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_list_set':
            if(!isset($userAccess["set_student_list"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"grade_id" ,"field_of_study_id" ,"year_id" ,"name" ,"lastname"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student_list::set_student_list($_REQUEST["user_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"],$_REQUEST["year_id"],$_REQUEST["name"],$_REQUEST["lastname"]);
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