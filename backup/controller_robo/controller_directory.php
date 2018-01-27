<?php

        require_once '../model/data_access/access_directory.php';
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

        case 'directory_get':
            if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_directory::get_directory();
            controller_main_function::send_result($result);
        break;


            case 'directory_get_by_ID':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_ID($_REQUEST["ID"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_owner_id':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("owner_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_owner_id($_REQUEST["owner_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_name':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_comment':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("comment"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_comment($_REQUEST["comment"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_url':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("url"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_url($_REQUEST["url"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_partition_id':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("partition_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_partition_id($_REQUEST["partition_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_created_by':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'directory_get_by_creationDate':
                if(!isset($userAccess["get_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::get_directory_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'directory_edit':
            if(!isset($userAccess["edit_directory"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_ID($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_owner_id':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_owner_id($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_name':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_name($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_comment':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_comment($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_url':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_url($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_partition_id':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_partition_id($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_created_by':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_created_by($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_by_creationDate':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_by_creationDate($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_ID_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_ID_by_ID($_REQUEST["ID"],$_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_owner_id_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","owner_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_owner_id_by_ID($_REQUEST["ID"],$_REQUEST["owner_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_name_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_name_by_ID($_REQUEST["ID"],$_REQUEST["name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_comment_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","comment"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_comment_by_ID($_REQUEST["ID"],$_REQUEST["comment"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_url_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","url"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_url_by_ID($_REQUEST["ID"],$_REQUEST["url"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_partition_id_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","partition_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_partition_id_by_ID($_REQUEST["ID"],$_REQUEST["partition_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_created_by_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_created_by_by_ID($_REQUEST["ID"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_edit_creationDate_by_ID':
            if(!isset($userAccess["edit_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::edit_directory_creationDate_by_ID($_REQUEST["ID"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_delete':
            if(!isset($userAccess["delete_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::delete_directory_by_ID($_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'directory_set':
            if(!isset($userAccess["set_directory"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("owner_id" ,"name" ,"comment" ,"url" ,"partition_id" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_directory::set_directory($_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["comment"],$_REQUEST["url"],$_REQUEST["partition_id"],$_REQUEST["created_by"]);
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