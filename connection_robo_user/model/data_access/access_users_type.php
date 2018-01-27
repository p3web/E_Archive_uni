<?php
            require_once '../model/database/data.php';
            class access_users_type {

            //=========== get users_type 


            public static function get_users_type() {

            $data = data::selects("`users_type`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_users_type_by_id($id) {

            $data = data::selects("`users_type`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_type_by_user_id($user_id) {

            $data = data::selects("`users_type`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_type_by_type_id($type_id) {

            $data = data::selects("`users_type`", "`type_id` = '$type_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_type_by_created_by($created_by) {

            $data = data::selects("`users_type`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_type_by_creationDate($creationDate) {

            $data = data::selects("`users_type`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit users_type 


        public static function edit_users_type($id , $user_id , $type_id , $created_by , $creationDate) {

                 return data::update("`users_type`", "`id`= '$id', `user_id`= '$user_id', `type_id`= '$type_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_users_type_by_id($id , $user_id , $type_id , $created_by , $creationDate) {

         return data::update("`users_type`", "`id`= '$id', `user_id`= '$user_id', `type_id`= '$type_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_users_type_by_user_id($id , $user_id , $type_id , $created_by , $creationDate) {

         return data::update("`users_type`", "`id`= '$id', `user_id`= '$user_id', `type_id`= '$type_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_users_type_by_type_id($id , $user_id , $type_id , $created_by , $creationDate) {

         return data::update("`users_type`", "`id`= '$id', `user_id`= '$user_id', `type_id`= '$type_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`type_id` = $type_id");
                }public static function edit_users_type_by_created_by($id , $user_id , $type_id , $created_by , $creationDate) {

         return data::update("`users_type`", "`id`= '$id', `user_id`= '$user_id', `type_id`= '$type_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_users_type_by_creationDate($id , $user_id , $type_id , $created_by , $creationDate) {

         return data::update("`users_type`", "`id`= '$id', `user_id`= '$user_id', `type_id`= '$type_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_users_type_id_by_id($id, $id) {

         return data::update("`users_type`", "`id`= '$id'", "`id` = $id");
                }public static function edit_users_type_user_id_by_id($id, $user_id) {

         return data::update("`users_type`", "`user_id`= '$user_id'", "`id` = $id");
                }public static function edit_users_type_type_id_by_id($id, $type_id) {

         return data::update("`users_type`", "`type_id`= '$type_id'", "`id` = $id");
                }public static function edit_users_type_created_by_by_id($id, $created_by) {

         return data::update("`users_type`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_users_type_creationDate_by_id($id, $creationDate) {

         return data::update("`users_type`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete users_type 


        public static function delete_users_type_by_id ($id) {

                 return data::delete("`users_type`", "`id` = $id");
                }

            
        //=========== set users_type 


        public static function set_users_type ($user_id , $type_id , $created_by) {

                 return data::insertinto("`users_type`","user_id, type_id, created_by" , "'$user_id', '$type_id', '$created_by'");
                }

            
        }