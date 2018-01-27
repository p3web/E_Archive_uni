<?php
            require_once '../model/database/data.php';
            class access_files_permission {

            //=========== get files_permission 


            public static function get_files_permission() {

            $data = data::selects("`files_permission`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_files_permission_by_user_id($user_id) {

            $data = data::selects("`files_permission`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_permission_by_file_id($file_id) {

            $data = data::selects("`files_permission`", "`file_id` = '$file_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_permission_by_read($read) {

            $data = data::selects("`files_permission`", "`read` = '$read'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_permission_by_write($write) {

            $data = data::selects("`files_permission`", "`write` = '$write'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_permission_by_delete($delete) {

            $data = data::selects("`files_permission`", "`delete` = '$delete'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_permission_by_created_by($created_by) {

            $data = data::selects("`files_permission`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_permission_by_creationDate($creationDate) {

            $data = data::selects("`files_permission`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit files_permission 


        public static function edit_files_permission($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

                 return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }

            public static function edit_files_permission_by_user_id($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_files_permission_by_file_id($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`file_id` = $file_id");
                }public static function edit_files_permission_by_read($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`read` = $read");
                }public static function edit_files_permission_by_write($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`write` = $write");
                }public static function edit_files_permission_by_delete($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`delete` = $delete");
                }public static function edit_files_permission_by_created_by($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_files_permission_by_creationDate($user_id , $file_id , $read , $write , $delete , $created_by , $creationDate) {

         return data::update("`files_permission`", "`user_id`= '$user_id', `file_id`= '$file_id', `read`= '$read', `write`= '$write', `delete`= '$delete', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_files_permission_user_id_by_user_id($user_id, $user_id) {

         return data::update("`files_permission`", "`user_id`= '$user_id'", "`user_id` = $user_id");
                }public static function edit_files_permission_file_id_by_user_id($user_id, $file_id) {

         return data::update("`files_permission`", "`file_id`= '$file_id'", "`user_id` = $user_id");
                }public static function edit_files_permission_read_by_user_id($user_id, $read) {

         return data::update("`files_permission`", "`read`= '$read'", "`user_id` = $user_id");
                }public static function edit_files_permission_write_by_user_id($user_id, $write) {

         return data::update("`files_permission`", "`write`= '$write'", "`user_id` = $user_id");
                }public static function edit_files_permission_delete_by_user_id($user_id, $delete) {

         return data::update("`files_permission`", "`delete`= '$delete'", "`user_id` = $user_id");
                }public static function edit_files_permission_created_by_by_user_id($user_id, $created_by) {

         return data::update("`files_permission`", "`created_by`= '$created_by'", "`user_id` = $user_id");
                }public static function edit_files_permission_creationDate_by_user_id($user_id, $creationDate) {

         return data::update("`files_permission`", "`creationDate`= '$creationDate'", "`user_id` = $user_id");
                }
        //=========== delete files_permission 


        public static function delete_files_permission_by_user_id ($user_id) {

                 return data::delete("`files_permission`", "`user_id` = $user_id");
                }

            
        //=========== set files_permission 


        public static function set_files_permission ($file_id , $read , $write , $delete , $created_by) {

                 return data::insertinto("`files_permission`","file_id, read, write, delete, created_by" , "'$file_id', '$read', '$write', '$delete', '$created_by'");
                }

            
        }