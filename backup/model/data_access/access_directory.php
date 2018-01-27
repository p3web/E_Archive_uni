<?php
            require_once '../model/database/data.php';
            class access_directory {

            //=========== get directory 


            public static function get_directory() {

            $data = data::selects("`directory`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_directory_by_ID($ID) {

            $data = data::selects("`directory`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_owner_id($owner_id) {

            $data = data::selects("`directory`", "`owner_id` = '$owner_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_name($name) {

            $data = data::selects("`directory`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_comment($comment) {

            $data = data::selects("`directory`", "`comment` = '$comment'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_url($url) {

            $data = data::selects("`directory`", "`url` = '$url'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_partition_id($partition_id) {

            $data = data::selects("`directory`", "`partition_id` = '$partition_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_created_by($created_by) {

            $data = data::selects("`directory`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_directory_by_creationDate($creationDate) {

            $data = data::selects("`directory`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit directory 


        public static function edit_directory($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

                 return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_directory_by_ID($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_directory_by_owner_id($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`owner_id` = $owner_id");
                }public static function edit_directory_by_name($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_directory_by_comment($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`comment` = $comment");
                }public static function edit_directory_by_url($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`url` = $url");
                }public static function edit_directory_by_partition_id($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`partition_id` = $partition_id");
                }public static function edit_directory_by_created_by($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_directory_by_creationDate($ID , $owner_id , $name , $comment , $url , $partition_id , $created_by , $creationDate) {

         return data::update("`directory`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `partition_id`= '$partition_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_directory_ID_by_ID($ID, $ID) {

         return data::update("`directory`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_directory_owner_id_by_ID($ID, $owner_id) {

         return data::update("`directory`", "`owner_id`= '$owner_id'", "`ID` = $ID");
                }public static function edit_directory_name_by_ID($ID, $name) {

         return data::update("`directory`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_directory_comment_by_ID($ID, $comment) {

         return data::update("`directory`", "`comment`= '$comment'", "`ID` = $ID");
                }public static function edit_directory_url_by_ID($ID, $url) {

         return data::update("`directory`", "`url`= '$url'", "`ID` = $ID");
                }public static function edit_directory_partition_id_by_ID($ID, $partition_id) {

         return data::update("`directory`", "`partition_id`= '$partition_id'", "`ID` = $ID");
                }public static function edit_directory_created_by_by_ID($ID, $created_by) {

         return data::update("`directory`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_directory_creationDate_by_ID($ID, $creationDate) {

         return data::update("`directory`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete directory 


        public static function delete_directory_by_ID ($ID) {

                 return data::delete("`directory`", "`ID` = $ID");
                }

            
        //=========== set directory 


        public static function set_directory ($owner_id , $name , $comment , $url , $partition_id , $created_by) {

                 return data::insertinto("`directory`","owner_id, name, comment, url, partition_id, created_by" , "'$owner_id', '$name', '$comment', '$url', '$partition_id', '$created_by'");
                }

            
        }