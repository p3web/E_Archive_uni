<?php
            require_once '../model/database/data.php';
            class access_type {

            //=========== get type 


            public static function get_type() {

            $data = data::selects("`type`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_type_by_ID($ID) {

            $data = data::selects("`type`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_type_by_name($name) {

            $data = data::selects("`type`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_type_by_created_by($created_by) {

            $data = data::selects("`type`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_type_by_creationDate($creationDate) {

            $data = data::selects("`type`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit type 


        public static function edit_type($ID , $name , $created_by , $creationDate) {

                 return data::update("`type`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_type_by_ID($ID , $name , $created_by , $creationDate) {

         return data::update("`type`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_type_by_name($ID , $name , $created_by , $creationDate) {

         return data::update("`type`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_type_by_created_by($ID , $name , $created_by , $creationDate) {

         return data::update("`type`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_type_by_creationDate($ID , $name , $created_by , $creationDate) {

         return data::update("`type`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_type_ID_by_ID($ID, $ID) {

         return data::update("`type`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_type_name_by_ID($ID, $name) {

         return data::update("`type`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_type_created_by_by_ID($ID, $created_by) {

         return data::update("`type`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_type_creationDate_by_ID($ID, $creationDate) {

         return data::update("`type`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete type 


        public static function delete_type_by_ID ($ID) {

                 return data::delete("`type`", "`ID` = $ID");
                }

            
        //=========== set type 


        public static function set_type ($name , $created_by) {

                 return data::insertinto("`type`","name, created_by" , "'$name', '$created_by'");
                }

            
        }