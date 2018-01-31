<?php

        require_once '../model/data_access/access_student.php';
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

        case 'student_get':
            if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_student::get_student();
            controller_main_function::send_result($result);
        break;


            case 'student_get_by_ID':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_ID($_REQUEST["ID"]);
                controller_main_function::send_result($result);
            break;
              case 'student_get_for_grid':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("year_id" , "grade_id" , "field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::student_get_for_grid($_REQUEST["year_id"],$_REQUEST["grade_id"],$_REQUEST["field_of_study_id"]);
                controller_main_function::send_result($result);
            break;

            case 'student_get_by_user_id':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_user_id($_REQUEST["user_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_student_id':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("student_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_student_id($_REQUEST["student_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_grade_id':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_grade_id($_REQUEST["grade_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_year_id':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("year_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_year_id($_REQUEST["year_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_field_of_study_id':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_field_of_study_id($_REQUEST["field_of_study_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_transfer_unit':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("transfer_unit"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_transfer_unit($_REQUEST["transfer_unit"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_accept_unit':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("accept_unit"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_accept_unit($_REQUEST["accept_unit"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_term_graduate':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("term_graduate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_term_graduate($_REQUEST["term_graduate"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_average':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("average"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_average($_REQUEST["average"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_system_type':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("system_type"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_system_type($_REQUEST["system_type"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_date_graduate':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("date_graduate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_date_graduate($_REQUEST["date_graduate"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_created_by':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'student_get_by_creationDate':
                if(!isset($userAccess["get_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::get_student_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'student_edit':
            if(!isset($userAccess["edit_student"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_ID($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_user_id':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_user_id($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                $result = array('data'=> $result);
                controller_main_function::send_result($result);
                //controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_student_id':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_student_id($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_grade_id':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_grade_id($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_year_id':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_year_id($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_field_of_study_id':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_field_of_study_id($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_transfer_unit':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_transfer_unit($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_accept_unit':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_accept_unit($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_term_graduate':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_term_graduate($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_average':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_average($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_system_type':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_system_type($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_date_graduate':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_date_graduate($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_created_by':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_created_by($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_by_creationDate':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_by_creationDate($_REQUEST["ID"],$_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_ID_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_ID_by_ID($_REQUEST["ID"],$_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_user_id_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_user_id_by_ID($_REQUEST["ID"],$_REQUEST["user_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_student_id_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","student_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_student_id_by_ID($_REQUEST["ID"],$_REQUEST["student_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_grade_id_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","grade_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_grade_id_by_ID($_REQUEST["ID"],$_REQUEST["grade_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_year_id_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","year_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_year_id_by_ID($_REQUEST["ID"],$_REQUEST["year_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_field_of_study_id_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","field_of_study_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_field_of_study_id_by_ID($_REQUEST["ID"],$_REQUEST["field_of_study_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_transfer_unit_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","transfer_unit"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_transfer_unit_by_ID($_REQUEST["ID"],$_REQUEST["transfer_unit"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_accept_unit_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","accept_unit"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_accept_unit_by_ID($_REQUEST["ID"],$_REQUEST["accept_unit"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_term_graduate_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","term_graduate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_term_graduate_by_ID($_REQUEST["ID"],$_REQUEST["term_graduate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_average_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","average"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_average_by_ID($_REQUEST["ID"],$_REQUEST["average"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_system_type_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","system_type"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_system_type_by_ID($_REQUEST["ID"],$_REQUEST["system_type"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_date_graduate_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","date_graduate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_date_graduate_by_ID($_REQUEST["ID"],$_REQUEST["date_graduate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_created_by_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_created_by_by_ID($_REQUEST["ID"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_edit_creationDate_by_ID':
            if(!isset($userAccess["edit_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::edit_student_creationDate_by_ID($_REQUEST["ID"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'student_delete':
            if(!isset($userAccess["delete_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::delete_student_by_ID($_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

            case 'student_delete_by_user_id':
            if(!isset($userAccess["student_delete_by_user_id"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::delete_student_by_user_id($_REQUEST["user_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
               // controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;

            case 'student_set':
            if(!isset($userAccess["set_student"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("user_id" ,"student_id" ,"grade_id" ,"year_id" ,"field_of_study_id" ,"transfer_unit" ,"accept_unit" ,"term_graduate" ,"average" ,"system_type" ,"date_graduate" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_student::set_student($_REQUEST["user_id"],$_REQUEST["student_id"],$_REQUEST["grade_id"],$_REQUEST["year_id"],$_REQUEST["field_of_study_id"],$_REQUEST["transfer_unit"],$_REQUEST["accept_unit"],$_REQUEST["term_graduate"],$_REQUEST["average"],$_REQUEST["system_type"],$_REQUEST["date_graduate"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                $result = array('data'=> true);
                controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
               }
        }else {
        //TODO: set page url when not set act
        header('Location: url');
    }