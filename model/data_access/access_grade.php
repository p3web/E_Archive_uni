<?php
            require_once '../model/database/data.php';
            class access_grade {

            //=========== get grade 


            public static function get_grade() {

            $data = data::selects("`grade`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_grade_by_ID($ID) {

            $data = data::selects("`grade`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_grade_by_name($name) {

            $data = data::selects("`grade`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_grade_by_created_by($created_by) {

            $data = data::selects("`grade`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_grade_by_creationDate($creationDate) {

            $data = data::selects("`grade`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit grade 


        public static function edit_grade($ID , $name , $created_by , $creationDate) {

                 return data::update("`grade`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_grade_by_ID($ID , $name , $created_by , $creationDate) {

         return data::update("`grade`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_grade_by_name($ID , $name , $created_by , $creationDate) {

         return data::update("`grade`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_grade_by_created_by($ID , $name , $created_by , $creationDate) {

         return data::update("`grade`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_grade_by_creationDate($ID , $name , $created_by , $creationDate) {

         return data::update("`grade`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_grade_ID_by_ID($ID, $ID) {

         return data::update("`grade`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_grade_name_by_ID($ID, $name) {

         return data::update("`grade`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_grade_created_by_by_ID($ID, $created_by) {

         return data::update("`grade`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_grade_creationDate_by_ID($ID, $creationDate) {

         return data::update("`grade`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete grade 


        public static function delete_grade_by_ID ($ID) {

                 return data::delete("`grade`", "`ID` = $ID");
                }

            
        //=========== set grade 


        public static function set_grade ($name , $created_by) {

                 return data::insertinto("`grade`","name, created_by" , "'$name', '$created_by'");
                }

            
        }