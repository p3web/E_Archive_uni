<?php
            require_once '../model/database/data.php';
            class access_field_of_study {

            //=========== get field_of_study 


            public static function get_field_of_study() {

            $data = data::selects("`field_of_study`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_field_of_study_by_ID($ID) {

            $data = data::selects("`field_of_study`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_field_of_study_by_name($name) {

            $data = data::selects("`field_of_study`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_field_of_study_by_created_by($created_by) {

            $data = data::selects("`field_of_study`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_field_of_study_by_creationDate($creationDate) {

            $data = data::selects("`field_of_study`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit field_of_study 


        public static function edit_field_of_study($ID , $name , $created_by , $creationDate) {

                 return data::update("`field_of_study`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_field_of_study_by_ID($ID , $name , $created_by , $creationDate) {

         return data::update("`field_of_study`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_field_of_study_by_name($ID , $name , $created_by , $creationDate) {

         return data::update("`field_of_study`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_field_of_study_by_created_by($ID , $name , $created_by , $creationDate) {

         return data::update("`field_of_study`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_field_of_study_by_creationDate($ID , $name , $created_by , $creationDate) {

         return data::update("`field_of_study`", "`ID`= '$ID', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_field_of_study_ID_by_ID($ID, $ID) {

         return data::update("`field_of_study`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_field_of_study_name_by_ID($ID, $name) {

         return data::update("`field_of_study`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_field_of_study_created_by_by_ID($ID, $created_by) {

         return data::update("`field_of_study`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_field_of_study_creationDate_by_ID($ID, $creationDate) {

         return data::update("`field_of_study`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete field_of_study 


        public static function delete_field_of_study_by_ID ($ID) {

                 return data::delete("`field_of_study`", "`ID` = $ID");
                }

            
        //=========== set field_of_study 


        public static function set_field_of_study ($name , $created_by) {

                 return data::insertinto("`field_of_study`","name, created_by" , "'$name', '$created_by'");
                }

            
        }