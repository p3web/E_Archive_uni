<?php
            require_once '../model/database/data.php';
            class access_view_users_type_typeName {

            //=========== get view_users_type_typeName 


            public static function get_view_users_type_typeName() {

            $data = data::selects("`view_users_type_typeName`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_view_users_type_typeName_by_id($id) {

            $data = data::selects("`view_users_type_typeName`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_type_typeName_by_user_id($user_id) {

            $data = data::selects("`view_users_type_typeName`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_type_typeName_by_type($type) {

            $data = data::selects("`view_users_type_typeName`", "`type` = '$type'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_type_typeName_by_created_by($created_by) {

            $data = data::selects("`view_users_type_typeName`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_type_typeName_by_creationDate($creationDate) {

            $data = data::selects("`view_users_type_typeName`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        }