<?php
            require_once '../model/database/data.php';
            class access_profile {

            //=========== get profile 


            public static function get_profile() {

            $data = data::selects("`profile`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_profile_by_id($id) {

            $data = data::selects("`profile`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_user_id($user_id) {

            $data = data::selects("`profile`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_age($age) {

            $data = data::selects("`profile`", "`age` = '$age'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_sex($sex) {

            $data = data::selects("`profile`", "`sex` = '$sex'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_father_name($father_name) {

            $data = data::selects("`profile`", "`father_name` = '$father_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_mather_name($mather_name) {

            $data = data::selects("`profile`", "`mather_name` = '$mather_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_is_single($is_single) {

            $data = data::selects("`profile`", "`is_single` = '$is_single'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_national_code($national_code) {

            $data = data::selects("`profile`", "`national_code` = '$national_code'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_email($email) {

            $data = data::selects("`profile`", "`email` = '$email'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_tel($tel) {

            $data = data::selects("`profile`", "`tel` = '$tel'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_mobile($mobile) {

            $data = data::selects("`profile`", "`mobile` = '$mobile'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_fax($fax) {

            $data = data::selects("`profile`", "`fax` = '$fax'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_address($address) {

            $data = data::selects("`profile`", "`address` = '$address'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_last_modified($last_modified) {

            $data = data::selects("`profile`", "`last_modified` = '$last_modified'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_created_by($created_by) {

            $data = data::selects("`profile`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_profile_by_creationDate($creationDate) {

            $data = data::selects("`profile`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit profile 


        public static function edit_profile($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

                 return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_profile_by_id($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_profile_by_user_id($ID , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`ID`= '$ID', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_profile_by_age($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`age` = $age");
                }public static function edit_profile_by_sex($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`sex` = $sex");
                }public static function edit_profile_by_father_name($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`father_name` = $father_name");
                }public static function edit_profile_by_mather_name($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`mather_name` = $mather_name");
                }public static function edit_profile_by_is_single($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`is_single` = $is_single");
                }public static function edit_profile_by_national_code($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`national_code` = $national_code");
                }public static function edit_profile_by_email($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`email` = $email");
                }public static function edit_profile_by_tel($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`tel` = $tel");
                }public static function edit_profile_by_mobile($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`mobile` = $mobile");
                }public static function edit_profile_by_fax($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`fax` = $fax");
                }public static function edit_profile_by_address($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`address` = $address");
                }public static function edit_profile_by_last_modified($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`last_modified` = $last_modified");
                }public static function edit_profile_by_created_by($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_profile_by_creationDate($id , $user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by , $creationDate) {

         return data::update("`profile`", "`id`= '$id', `user_id`= '$user_id', `age`= '$age', `sex`= '$sex', `father_name`= '$father_name', `mather_name`= '$mather_name', `is_single`= '$is_single', `national_code`= '$national_code', `email`= '$email', `tel`= '$tel', `mobile`= '$mobile', `fax`= '$fax', `address`= '$address', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_profile_id_by_id($id, $id) {

         return data::update("`profile`", "`id`= '$id'", "`id` = $id");
                }public static function edit_profile_user_id_by_id($id, $user_id) {

         return data::update("`profile`", "`user_id`= '$user_id'", "`id` = $id");
                }public static function edit_profile_age_by_id($id, $age) {

         return data::update("`profile`", "`age`= '$age'", "`id` = $id");
                }public static function edit_profile_sex_by_id($id, $sex) {

         return data::update("`profile`", "`sex`= '$sex'", "`id` = $id");
                }public static function edit_profile_father_name_by_id($id, $father_name) {

         return data::update("`profile`", "`father_name`= '$father_name'", "`id` = $id");
                }public static function edit_profile_mather_name_by_id($id, $mather_name) {

         return data::update("`profile`", "`mather_name`= '$mather_name'", "`id` = $id");
                }public static function edit_profile_is_single_by_id($id, $is_single) {

         return data::update("`profile`", "`is_single`= '$is_single'", "`id` = $id");
                }public static function edit_profile_national_code_by_id($id, $national_code) {

         return data::update("`profile`", "`national_code`= '$national_code'", "`id` = $id");
                }public static function edit_profile_email_by_id($id, $email) {

         return data::update("`profile`", "`email`= '$email'", "`id` = $id");
                }public static function edit_profile_tel_by_id($id, $tel) {

         return data::update("`profile`", "`tel`= '$tel'", "`id` = $id");
                }public static function edit_profile_mobile_by_id($id, $mobile) {

         return data::update("`profile`", "`mobile`= '$mobile'", "`id` = $id");
                }public static function edit_profile_fax_by_id($id, $fax) {

         return data::update("`profile`", "`fax`= '$fax'", "`id` = $id");
                }public static function edit_profile_address_by_id($id, $address) {

         return data::update("`profile`", "`address`= '$address'", "`id` = $id");
                }public static function edit_profile_last_modified_by_id($id, $last_modified) {

         return data::update("`profile`", "`last_modified`= '$last_modified'", "`id` = $id");
                }public static function edit_profile_created_by_by_id($id, $created_by) {

         return data::update("`profile`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_profile_creationDate_by_id($id, $creationDate) {

         return data::update("`profile`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete profile 

                public static function delete_profile_by_id ($id) {

                    return data::delete("`profile`", "`id` = $id");
                }


                public static function delete_profile_by_user_id ($id) {

                 return data::delete("`profile`", "`user_id` = $id");
                }


        //=========== set profile


        public static function set_profile ($user_id , $age , $sex , $father_name , $mather_name , $is_single , $national_code , $email , $tel , $mobile , $fax , $address , $last_modified , $created_by) {

                 return data::insertinto("`profile`","user_id, age, sex, father_name, mather_name, is_single, national_code, email, tel, mobile, fax, address, last_modified, created_by" , "'$user_id', '$age', '$sex', '$father_name', '$mather_name', '$is_single', '$national_code', '$email', '$tel', '$mobile', '$fax', '$address', '$last_modified', '$created_by'");
                }

            
        }