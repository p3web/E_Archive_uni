<?php
            require_once '../model/database/data.php';
            class access_year {

            //=========== get year 


            public static function get_year() {

            $data = data::selects("`year`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_year_by_ID($ID) {

            $data = data::selects("`year`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_year_by_name($name) {

            $data = data::selects("`year`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_year_by_created_by($created_by) {

            $data = data::selects("`year`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_year_by_creationDate($creationDate) {

            $data = data::selects("`year`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit year 


        public static function edit_year($ID , $name , $created_by , $creationDate) {

                 return data::update("`year`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_year_by_ID($ID , $name , $created_by , $creationDate) {

         return data::update("`year`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_year_by_name($ID , $name , $created_by , $creationDate) {

         return data::update("`year`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_year_by_created_by($ID , $name , $created_by , $creationDate) {

         return data::update("`year`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_year_by_creationDate($ID , $name , $created_by , $creationDate) {

         return data::update("`year`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_year_ID_by_ID($ID, $ID) {

         return data::update("`year`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_year_name_by_ID($ID, $name) {

         return data::update("`year`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_year_created_by_by_ID($ID, $created_by) {

         return data::update("`year`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_year_creationDate_by_ID($ID, $creationDate) {

         return data::update("`year`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete year 


        public static function delete_year_by_ID ($ID) {

                 return data::delete("`year`", "`ID` = $ID");
                }

            
        //=========== set year 


        public static function set_year ($name , $created_by) {

                 return data::insertinto("`year`","name, created_by" , "'$name', '$created_by'");
                }

            
        }