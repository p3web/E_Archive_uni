<?php

        require_once '../model/data_access/access_trash_files.php';
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

        case 'trash_files_get':
            if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
            $result = access_trash_files::get_trash_files();
            controller_main_function::send_result($result);
        break;


            case 'trash_files_get_by_ID':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_ID($_REQUEST["ID"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_owner_id':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("owner_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_owner_id($_REQUEST["owner_id"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_name':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_name($_REQUEST["name"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_type':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("type"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_type($_REQUEST["type"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_parentdir':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("parentdir"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_parentdir($_REQUEST["parentdir"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_url':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("url"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_url($_REQUEST["url"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_property':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("property"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_property($_REQUEST["property"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_lat':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("lat"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_lat($_REQUEST["lat"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_lng':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("lng"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_lng($_REQUEST["lng"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_size':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("size"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_size($_REQUEST["size"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_is_delete':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("is_delete"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_is_delete($_REQUEST["is_delete"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_modified_by':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("modified_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_modified_by($_REQUEST["modified_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_created_by':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_created_by($_REQUEST["created_by"]);
                controller_main_function::send_result($result);
            break;
            
            case 'trash_files_get_by_creationDate':
                if(!isset($userAccess["get_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::get_trash_files_by_creationDate($_REQUEST["creationDate"]);
                controller_main_function::send_result($result);
            break;
            //_____________update act

            case 'trash_files_edit':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode ){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_ID($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_owner_id':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_owner_id($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_name':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_name($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_type':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_type($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_parentdir':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_parentdir($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_url':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_url($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_property':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_property($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_lat':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_lat($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_lng':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_lng($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_size':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_size($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_is_delete':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_is_delete($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_modified_by':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_modified_by($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_created_by':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_created_by($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_by_creationDate':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID" ,"owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by" ,"creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_by_creationDate($_REQUEST["ID"],$_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_ID_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_ID_by_ID($_REQUEST["ID"],$_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_owner_id_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","owner_id"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_owner_id_by_ID($_REQUEST["ID"],$_REQUEST["owner_id"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_name_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","name"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_name_by_ID($_REQUEST["ID"],$_REQUEST["name"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_type_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","type"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_type_by_ID($_REQUEST["ID"],$_REQUEST["type"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_parentdir_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","parentdir"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_parentdir_by_ID($_REQUEST["ID"],$_REQUEST["parentdir"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_url_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","url"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_url_by_ID($_REQUEST["ID"],$_REQUEST["url"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_property_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","property"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_property_by_ID($_REQUEST["ID"],$_REQUEST["property"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_lat_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","lat"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_lat_by_ID($_REQUEST["ID"],$_REQUEST["lat"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_lng_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","lng"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_lng_by_ID($_REQUEST["ID"],$_REQUEST["lng"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_size_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","size"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_size_by_ID($_REQUEST["ID"],$_REQUEST["size"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_is_delete_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","is_delete"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_is_delete_by_ID($_REQUEST["ID"],$_REQUEST["is_delete"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_modified_by_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","modified_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_modified_by_by_ID($_REQUEST["ID"],$_REQUEST["modified_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_created_by_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_created_by_by_ID($_REQUEST["ID"],$_REQUEST["created_by"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_edit_creationDate_by_ID':
            if(!isset($userAccess["edit_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID","creationDate"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::edit_trash_files_creationDate_by_ID($_REQUEST["ID"],$_REQUEST["creationDate"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_delete':
            if(!isset($userAccess["delete_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("ID"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::delete_trash_files_by_ID($_REQUEST["ID"]);
                //controller_main_function::send_result($result);
                //$result = array('data'=> true);
                //controller_main_function::send_result($result);
                controller_main_function::send_msg(lang::$success, lang::$message, "success");
            break;
            
            case 'trash_files_set':
            if(!isset($userAccess["set_trash_files"]) && !$debugMode){
                    controller_main_function::send_msg(lang::$not_access, lang::$error);
                    }
                $valid_data = controller_main_function::check_validation(array("owner_id" ,"name" ,"type" ,"parentdir" ,"url" ,"property" ,"lat" ,"lng" ,"size" ,"is_delete" ,"modified_by" ,"created_by"));
                if (!isset($valid_data['is_valid']) || $valid_data['is_valid'] == false) {
                    controller_main_function::send_msg(lang::$invalid_data, lang::$error);
                }
                $result = access_trash_files::set_trash_files($_REQUEST["owner_id"],$_REQUEST["name"],$_REQUEST["type"],$_REQUEST["parentdir"],$_REQUEST["url"],$_REQUEST["property"],$_REQUEST["lat"],$_REQUEST["lng"],$_REQUEST["size"],$_REQUEST["is_delete"],$_REQUEST["modified_by"],$_REQUEST["created_by"]);
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