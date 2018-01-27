<?php
            require_once '../model/database/data.php';
            class access_directorys_permission {

            //=========== get directorys_permission 


            public static function get_directorys_permission() {

            $data = data::selects("`directorys_permission`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_directorys_permission_by_user_id($user_id) {

            $data = data::selects("`directorys_permission`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directorys_permission_by_directory_id($directory_id) {

            $data = data::selects("`directorys_permission`", "`directory_id` = '$directory_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directorys_permission_by_created_by($created_by) {

            $data = data::selects("`directorys_permission`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directorys_permission_by_creationDate($creationDate) {

            $data = data::selects("`directorys_permission`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit directorys_permission 


        public static function edit_directorys_permission($user_id , $directory_id , $created_by , $creationDate) {

                 return data::update("`directorys_permission`", "`user_id`= '$user_id', `directory_id`= '$directory_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }

            public static function edit_directorys_permission_by_user_id($user_id , $directory_id , $created_by , $creationDate) {

         return data::update("`directorys_permission`", "`user_id`= '$user_id', `directory_id`= '$directory_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_directorys_permission_by_directory_id($user_id , $directory_id , $created_by , $creationDate) {

         return data::update("`directorys_permission`", "`user_id`= '$user_id', `directory_id`= '$directory_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`directory_id` = $directory_id");
                }public static function edit_directorys_permission_by_created_by($user_id , $directory_id , $created_by , $creationDate) {

         return data::update("`directorys_permission`", "`user_id`= '$user_id', `directory_id`= '$directory_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_directorys_permission_by_creationDate($user_id , $directory_id , $created_by , $creationDate) {

         return data::update("`directorys_permission`", "`user_id`= '$user_id', `directory_id`= '$directory_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_directorys_permission_user_id_by_user_id($user_id, $user_id) {

         return data::update("`directorys_permission`", "`user_id`= '$user_id'", "`user_id` = $user_id");
                }public static function edit_directorys_permission_directory_id_by_user_id($user_id, $directory_id) {

         return data::update("`directorys_permission`", "`directory_id`= '$directory_id'", "`user_id` = $user_id");
                }public static function edit_directorys_permission_created_by_by_user_id($user_id, $created_by) {

         return data::update("`directorys_permission`", "`created_by`= '$created_by'", "`user_id` = $user_id");
                }public static function edit_directorys_permission_creationDate_by_user_id($user_id, $creationDate) {

         return data::update("`directorys_permission`", "`creationDate`= '$creationDate'", "`user_id` = $user_id");
                }
        //=========== delete directorys_permission 


        public static function delete_directorys_permission_by_user_id ($user_id) {

                 return data::delete("`directorys_permission`", "`user_id` = $user_id");
                }

            
        //=========== set directorys_permission 


        public static function set_directorys_permission ($directory_id , $created_by) {

                 return data::insertinto("`directorys_permission`","directory_id, created_by" , "'$directory_id', '$created_by'");
                }

            
        }