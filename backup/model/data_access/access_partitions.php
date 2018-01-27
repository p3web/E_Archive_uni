<?php
            require_once '../model/database/data.php';
            class access_partitions {

            //=========== get partitions 


            public static function get_partitions() {

            $data = data::selects("`partitions`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_partitions_by_ID($ID) {

            $data = data::selects("`partitions`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_by_owner_id($owner_id) {

            $data = data::selects("`partitions`", "`owner_id` = '$owner_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_by_name($name) {

            $data = data::selects("`partitions`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_by_comment($comment) {

            $data = data::selects("`partitions`", "`comment` = '$comment'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_by_url($url) {

            $data = data::selects("`partitions`", "`url` = '$url'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_by_created_by($created_by) {

            $data = data::selects("`partitions`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_partitions_by_creationDate($creationDate) {

            $data = data::selects("`partitions`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit partitions 


        public static function edit_partitions($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

                 return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_partitions_by_ID($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_partitions_by_owner_id($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`owner_id` = $owner_id");
                }public static function edit_partitions_by_name($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_partitions_by_comment($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`comment` = $comment");
                }public static function edit_partitions_by_url($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`url` = $url");
                }public static function edit_partitions_by_created_by($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_partitions_by_creationDate($ID , $owner_id , $name , $comment , $url , $created_by , $creationDate) {

         return data::update("`partitions`", "`ID`= '$ID', `owner_id`= '$owner_id', `name`= '$name', `comment`= '$comment', `url`= '$url', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_partitions_ID_by_ID($ID, $ID) {

         return data::update("`partitions`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_partitions_owner_id_by_ID($ID, $owner_id) {

         return data::update("`partitions`", "`owner_id`= '$owner_id'", "`ID` = $ID");
                }public static function edit_partitions_name_by_ID($ID, $name) {

         return data::update("`partitions`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_partitions_comment_by_ID($ID, $comment) {

         return data::update("`partitions`", "`comment`= '$comment'", "`ID` = $ID");
                }public static function edit_partitions_url_by_ID($ID, $url) {

         return data::update("`partitions`", "`url`= '$url'", "`ID` = $ID");
                }public static function edit_partitions_created_by_by_ID($ID, $created_by) {

         return data::update("`partitions`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_partitions_creationDate_by_ID($ID, $creationDate) {

         return data::update("`partitions`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete partitions 


        public static function delete_partitions_by_ID ($ID) {

                 return data::delete("`partitions`", "`ID` = $ID");
                }

            
        //=========== set partitions 


        public static function set_partitions ($owner_id , $name , $comment , $url , $created_by) {

                 return data::insertinto("`partitions`","owner_id, name, comment, url, created_by" , "'$owner_id', '$name', '$comment', '$url', '$created_by'");
                }

            
        }