<?php
            require_once '../model/database/data.php';
            class access_users_system {

            //=========== get users_system 


            public static function get_users_system() {

            $data = data::selects("`users_system`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_users_system_by_id($id) {

            $data = data::selects("`users_system`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_system_by_user_id($user_id) {

            $data = data::selects("`users_system`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_system_by_system_id($system_id) {

            $data = data::selects("`users_system`", "`system_id` = '$system_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_system_by_token($token) {

            $data = data::selects("`users_system`", "`token` = '$token'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_system_by_expire_date($expire_date) {

            $data = data::selects("`users_system`", "`expire_date` = '$expire_date'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_system_by_created_by($created_by) {

            $data = data::selects("`users_system`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_system_by_creationDate($creationDate) {

            $data = data::selects("`users_system`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit users_system 


        public static function edit_users_system($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

                 return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_users_system_by_id($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_users_system_by_user_id($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_users_system_by_system_id($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`system_id` = $system_id");
                }public static function edit_users_system_by_token($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`token` = $token");
                }public static function edit_users_system_by_expire_date($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`expire_date` = $expire_date");
                }public static function edit_users_system_by_created_by($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_users_system_by_creationDate($id , $user_id , $system_id , $token , $expire_date , $created_by , $creationDate) {

         return data::update("`users_system`", "`id`= '$id', `user_id`= '$user_id', `system_id`= '$system_id', `token`= '$token', `expire_date`= '$expire_date', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_users_system_id_by_id($id, $id) {

         return data::update("`users_system`", "`id`= '$id'", "`id` = $id");
                }public static function edit_users_system_user_id_by_id($id, $user_id) {

         return data::update("`users_system`", "`user_id`= '$user_id'", "`id` = $id");
                }public static function edit_users_system_system_id_by_id($id, $system_id) {

         return data::update("`users_system`", "`system_id`= '$system_id'", "`id` = $id");
                }public static function edit_users_system_token_by_id($id, $token) {

         return data::update("`users_system`", "`token`= '$token'", "`id` = $id");
                }public static function edit_users_system_expire_date_by_id($id, $expire_date) {

         return data::update("`users_system`", "`expire_date`= '$expire_date'", "`id` = $id");
                }public static function edit_users_system_created_by_by_id($id, $created_by) {

         return data::update("`users_system`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_users_system_creationDate_by_id($id, $creationDate) {

         return data::update("`users_system`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete users_system 


        public static function delete_users_system_by_id ($id) {

                 return data::delete("`users_system`", "`id` = $id");
                }

            
        //=========== set users_system 


        public static function set_users_system ($user_id , $system_id , $token , $expire_date , $created_by) {

                 return data::insertinto("`users_system`","user_id, system_id, token, expire_date, created_by" , "'$user_id', '$system_id', '$token', '$expire_date', '$created_by'");
                }

            
        }