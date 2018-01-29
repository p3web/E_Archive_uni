<?php
            require_once '../model/database/data.php';
            class access_menu {

            //=========== get menu 


            public static function get_menu() {

            $data = data::selects("`menu`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_menu_by_ID($ID) {

            $data = data::selects("`menu`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
                public static function get_menu_by_grade_id($grade_id) {

            $data = data::selects("`menu`", "`grade_id` = '$grade_id'");

                       if (count($data[0]) != 0) {
                           return $data;
                       } else {
                           return false;
                       }

                }public static function get_menu_by_field_of_study_id($field_of_study_id) {

            $data = data::selects("`menu`", "`field_of_study_id` = '$field_of_study_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_menu_by_creationDate($creationDate) {

            $data = data::selects("`menu`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_menu_by_created_by($created_by) {

            $data = data::selects("`menu`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit menu 


        public static function edit_menu($ID , $grade_id , $field_of_study_id , $creationDate , $created_by) {

                 return data::update("`menu`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `creationDate`= '$creationDate', `created_by`= '$created_by'", "`ID` = $ID");
                }

            public static function edit_menu_by_ID($ID , $grade_id , $field_of_study_id , $creationDate , $created_by) {

         return data::update("`menu`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `creationDate`= '$creationDate', `created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_menu_by_grade_id($ID , $grade_id , $field_of_study_id , $creationDate , $created_by) {

         return data::update("`menu`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `creationDate`= '$creationDate', `created_by`= '$created_by'", "`grade_id` = $grade_id");
                }public static function edit_menu_by_field_of_study_id($ID , $grade_id , $field_of_study_id , $creationDate , $created_by) {

         return data::update("`menu`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `creationDate`= '$creationDate', `created_by`= '$created_by'", "`field_of_study_id` = $field_of_study_id");
                }public static function edit_menu_by_creationDate($ID , $grade_id , $field_of_study_id , $creationDate , $created_by) {

         return data::update("`menu`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `creationDate`= '$creationDate', `created_by`= '$created_by'", "`creationDate` = $creationDate");
                }public static function edit_menu_by_created_by($ID , $grade_id , $field_of_study_id , $creationDate , $created_by) {

         return data::update("`menu`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `creationDate`= '$creationDate', `created_by`= '$created_by'", "`created_by` = $created_by");
                }public static function edit_menu_ID_by_ID($ID, $ID) {

         return data::update("`menu`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_menu_grade_id_by_ID($ID, $grade_id) {

         return data::update("`menu`", "`grade_id`= '$grade_id'", "`ID` = $ID");
                }public static function edit_menu_field_of_study_id_by_ID($ID, $field_of_study_id) {

         return data::update("`menu`", "`field_of_study_id`= '$field_of_study_id'", "`ID` = $ID");
                }public static function edit_menu_creationDate_by_ID($ID, $creationDate) {

         return data::update("`menu`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_menu_created_by_by_ID($ID, $created_by) {

         return data::update("`menu`", "`created_by`= '$created_by'", "`ID` = $ID");
                }
        //=========== delete menu 


        public static function delete_menu_by_ID ($ID) {

                 return data::delete("`menu`", "`ID` = $ID");
                }

            
        //=========== set menu 


        public static function set_menu ($grade_id , $field_of_study_id , $creationDate) {

                 return data::insertinto("`menu`","grade_id, field_of_study_id, creationDate" , "'$grade_id', '$field_of_study_id', '$creationDate'");
                }

            
        }