<?php
            require_once '../model/database/data.php';
            class access_tags {

            //=========== get tags 


            public static function get_tags() {

            $data = data::selects("`tags`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_tags_by_ID($ID) {

            $data = data::selects("`tags`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_tags_by_name($name) {

            $data = data::selects("`tags`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_tags_by_created_by($created_by) {

            $data = data::selects("`tags`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_tags_by_creationDate($creationDate) {

            $data = data::selects("`tags`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit tags 


        public static function edit_tags($ID , $name , $created_by , $creationDate) {

                 return data::update("`tags`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_tags_by_ID($ID , $name , $created_by , $creationDate) {

         return data::update("`tags`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_tags_by_name($ID , $name , $created_by , $creationDate) {

         return data::update("`tags`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_tags_by_created_by($ID , $name , $created_by , $creationDate) {

         return data::update("`tags`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_tags_by_creationDate($ID , $name , $created_by , $creationDate) {

         return data::update("`tags`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_tags_ID_by_ID($ID, $ID) {

         return data::update("`tags`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_tags_name_by_ID($ID, $name) {

         return data::update("`tags`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_tags_created_by_by_ID($ID, $created_by) {

         return data::update("`tags`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_tags_creationDate_by_ID($ID, $creationDate) {

         return data::update("`tags`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete tags 


        public static function delete_tags_by_ID ($ID) {

                 return data::delete("`tags`", "`ID` = $ID");
                }

            
        //=========== set tags 


        public static function set_tags ($name , $created_by) {

                 return data::insertinto("`tags`","name, created_by" , "'$name', '$created_by'");
                }

            
        }