<?php
            require_once '../model/database/data.php';
            class access_view_users_organization_organization {

            //=========== get view_users_organization_organization 


            public static function get_view_users_organization_organization() {

            $data = data::selects("`view_users_organization_organization`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_view_users_organization_organization_by_id($id) {

            $data = data::selects("`view_users_organization_organization`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_user_id($user_id) {

            $data = data::selects("`view_users_organization_organization`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_name($name) {

            $data = data::selects("`view_users_organization_organization`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_address($address) {

            $data = data::selects("`view_users_organization_organization`", "`address` = '$address'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_tel($tel) {

            $data = data::selects("`view_users_organization_organization`", "`tel` = '$tel'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_fax($fax) {

            $data = data::selects("`view_users_organization_organization`", "`fax` = '$fax'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_email($email) {

            $data = data::selects("`view_users_organization_organization`", "`email` = '$email'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_comment($comment) {

            $data = data::selects("`view_users_organization_organization`", "`comment` = '$comment'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_rol($rol) {

            $data = data::selects("`view_users_organization_organization`", "`rol` = '$rol'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_created_by($created_by) {

            $data = data::selects("`view_users_organization_organization`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_organization_organization_by_creationDate($creationDate) {

            $data = data::selects("`view_users_organization_organization`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        }