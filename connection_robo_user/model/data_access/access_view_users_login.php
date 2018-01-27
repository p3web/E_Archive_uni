<?php
            require_once '../model/database/data.php';
            class access_view_users_login {

            //=========== get view_users_login 


            public static function get_view_users_login() {

            $data = data::selects("`view_users_login`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_view_users_login_by_id($id) {

            $data = data::selects("`view_users_login`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_login_by_user_name($user_name) {

            $data = data::selects("`view_users_login`", "`user_name` = '$user_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_login_by_pssword($pssword) {

            $data = data::selects("`view_users_login`", "`pssword` = '$pssword'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_login_by_avatar($avatar) {

            $data = data::selects("`view_users_login`", "`avatar` = '$avatar'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        }