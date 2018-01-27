<?php
            require_once '../model/database/data.php';
            class access_view_users_profile {

            //=========== get view_users_profile 


            public static function get_view_users_profile() {

            $data = data::selects("`view_users_profile`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_view_users_profile_by_id($id) {

            $data = data::selects("`view_users_profile`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_name($name) {

            $data = data::selects("`view_users_profile`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_lastname($lastname) {

            $data = data::selects("`view_users_profile`", "`lastname` = '$lastname'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_nik_name($nik_name) {

            $data = data::selects("`view_users_profile`", "`nik_name` = '$nik_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_user_name($user_name) {

            $data = data::selects("`view_users_profile`", "`user_name` = '$user_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_pssword($pssword) {

            $data = data::selects("`view_users_profile`", "`pssword` = '$pssword'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_avatar($avatar) {

            $data = data::selects("`view_users_profile`", "`avatar` = '$avatar'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_age($age) {

            $data = data::selects("`view_users_profile`", "`age` = '$age'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_sex($sex) {

            $data = data::selects("`view_users_profile`", "`sex` = '$sex'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_father_name($father_name) {

            $data = data::selects("`view_users_profile`", "`father_name` = '$father_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_mather_name($mather_name) {

            $data = data::selects("`view_users_profile`", "`mather_name` = '$mather_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_is_single($is_single) {

            $data = data::selects("`view_users_profile`", "`is_single` = '$is_single'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_national_code($national_code) {

            $data = data::selects("`view_users_profile`", "`national_code` = '$national_code'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_email($email) {

            $data = data::selects("`view_users_profile`", "`email` = '$email'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_tel($tel) {

            $data = data::selects("`view_users_profile`", "`tel` = '$tel'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_mobile($mobile) {

            $data = data::selects("`view_users_profile`", "`mobile` = '$mobile'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_fax($fax) {

            $data = data::selects("`view_users_profile`", "`fax` = '$fax'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_address($address) {

            $data = data::selects("`view_users_profile`", "`address` = '$address'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_last_password_failed($last_password_failed) {

            $data = data::selects("`view_users_profile`", "`last_password_failed` = '$last_password_failed'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_count_password_failed($count_password_failed) {

            $data = data::selects("`view_users_profile`", "`count_password_failed` = '$count_password_failed'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_last_change_password($last_change_password) {

            $data = data::selects("`view_users_profile`", "`last_change_password` = '$last_change_password'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_last_modified($last_modified) {

            $data = data::selects("`view_users_profile`", "`last_modified` = '$last_modified'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_created_by($created_by) {

            $data = data::selects("`view_users_profile`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_view_users_profile_by_creationDate($creationDate) {

            $data = data::selects("`view_users_profile`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        }