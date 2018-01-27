<?php
            require_once '../model/database/data.php';
            class access_partitions_permission {

            //=========== get partitions_permission 


            public static function get_partitions_permission() {

            $data = data::selects("`partitions_permission`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_partitions_permission_by_user_id($user_id) {

            $data = data::selects("`partitions_permission`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_permission_by_partition_id($partition_id) {

            $data = data::selects("`partitions_permission`", "`partition_id` = '$partition_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_permission_by_created_by($created_by) {

            $data = data::selects("`partitions_permission`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_permission_by_creationDate($creationDate) {

            $data = data::selects("`partitions_permission`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit partitions_permission 


        public static function edit_partitions_permission($user_id , $partition_id , $created_by , $creationDate) {

                 return data::update("`partitions_permission`", "`user_id`= '$user_id', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }

            public static function edit_partitions_permission_by_user_id($user_id , $partition_id , $created_by , $creationDate) {

         return data::update("`partitions_permission`", "`user_id`= '$user_id', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_partitions_permission_by_partition_id($user_id , $partition_id , $created_by , $creationDate) {

         return data::update("`partitions_permission`", "`user_id`= '$user_id', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`partition_id` = $partition_id");
                }public static function edit_partitions_permission_by_created_by($user_id , $partition_id , $created_by , $creationDate) {

         return data::update("`partitions_permission`", "`user_id`= '$user_id', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_partitions_permission_by_creationDate($user_id , $partition_id , $created_by , $creationDate) {

         return data::update("`partitions_permission`", "`user_id`= '$user_id', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_partitions_permission_user_id_by_user_id($user_id, $user_id) {

         return data::update("`partitions_permission`", "`user_id`= '$user_id'", "`user_id` = $user_id");
                }public static function edit_partitions_permission_partition_id_by_user_id($user_id, $partition_id) {

         return data::update("`partitions_permission`", "`partition_id`= '$partition_id'", "`user_id` = $user_id");
                }public static function edit_partitions_permission_created_by_by_user_id($user_id, $created_by) {

         return data::update("`partitions_permission`", "`created_by`= '$created_by'", "`user_id` = $user_id");
                }public static function edit_partitions_permission_creationDate_by_user_id($user_id, $creationDate) {

         return data::update("`partitions_permission`", "`creationDate`= '$creationDate'", "`user_id` = $user_id");
                }
        //=========== delete partitions_permission 


        public static function delete_partitions_permission_by_user_id ($user_id) {

                 return data::delete("`partitions_permission`", "`user_id` = $user_id");
                }

            
        //=========== set partitions_permission 


        public static function set_partitions_permission ($partition_id , $created_by) {

                 return data::insertinto("`partitions_permission`","partition_id, created_by" , "'$partition_id', '$created_by'");
                }

            
        }