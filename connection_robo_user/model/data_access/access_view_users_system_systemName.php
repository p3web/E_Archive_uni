<?php
            require_once '../model/database/data.php';
            class access_view_users_system_systemName {

            //=========== get view_users_system_systemName 


            public static function get_view_users_system_systemName() {

            $data = data::selects("`view_users_system_systemName`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_view_users_system_systemName_by_id($id) {

            $data = data::selects("`view_users_system_systemName`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_system_systemName_by_user_id($user_id) {

            $data = data::selects("`view_users_system_systemName`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_system_systemName_by_system($system) {

            $data = data::selects("`view_users_system_systemName`", "`system` = '$system'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_system_systemName_by_token($token) {

            $data = data::selects("`view_users_system_systemName`", "`token` = '$token'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_system_systemName_by_expire_date($expire_date) {

            $data = data::selects("`view_users_system_systemName`", "`expire_date` = '$expire_date'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_system_systemName_by_created_by($created_by) {

            $data = data::selects("`view_users_system_systemName`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_system_systemName_by_creationDate($creationDate) {

            $data = data::selects("`view_users_system_systemName`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        }