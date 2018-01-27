<?php
            require_once '../model/database/data.php';
            class access_rols {

            //=========== get rols 


            public static function get_rols() {

            $data = data::selects("`rols`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_rols_by_ID($ID) {

            $data = data::selects("`rols`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_rols_by_name($name) {

            $data = data::selects("`rols`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_rols_by_created_by($created_by) {

            $data = data::selects("`rols`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_rols_by_creationDate($creationDate) {

            $data = data::selects("`rols`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit rols 


        public static function edit_rols($ID , $name , $created_by , $creationDate) {

                 return data::update("`rols`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_rols_by_ID($ID , $name , $created_by , $creationDate) {

         return data::update("`rols`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_rols_by_name($ID , $name , $created_by , $creationDate) {

         return data::update("`rols`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_rols_by_created_by($ID , $name , $created_by , $creationDate) {

         return data::update("`rols`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_rols_by_creationDate($ID , $name , $created_by , $creationDate) {

         return data::update("`rols`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_rols_ID_by_ID($ID, $ID) {

         return data::update("`rols`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_rols_name_by_ID($ID, $name) {

         return data::update("`rols`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_rols_created_by_by_ID($ID, $created_by) {

         return data::update("`rols`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_rols_creationDate_by_ID($ID, $creationDate) {

         return data::update("`rols`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete rols 


        public static function delete_rols_by_ID ($ID) {

                 return data::delete("`rols`", "`ID` = $ID");
                }

            
        //=========== set rols 


        public static function set_rols ($name , $created_by) {

                 return data::insertinto("`rols`","name, created_by" , "'$name', '$created_by'");
                }

            
        }