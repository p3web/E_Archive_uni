<?php
            require_once '../model/database/data.php';
            class access_menu_v_list {

            //=========== get menu_v_list 


            public static function get_menu_v_list() {

            $data = data::selects("`menu_v_list`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_menu_v_list_by_ID($ID) {

            $data = data::selects("`menu_v_list`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_menu_v_list_by_grade_id($grade_id) {

            $data = data::selects("`menu_v_list`", "`grade_id` = '$grade_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_menu_v_list_by_field_of_study_id($field_of_study_id) {

            $data = data::selects("`menu_v_list`", "`field_of_study_id` = '$field_of_study_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_menu_v_list_by_name($name) {

            $data = data::selects("`menu_v_list`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_menu_v_list_by_grade_name($grade_name) {

            $data = data::selects("`menu_v_list`", "`grade_name` = '$grade_name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit menu_v_list 


        public static function edit_menu_v_list($ID , $grade_id , $field_of_study_id , $name , $grade_name) {

                 return data::update("`menu_v_list`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `name`= '$name', `grade_name`= '$grade_name'", "`ID` = $ID");
                }

            public static function edit_menu_v_list_by_ID($ID , $grade_id , $field_of_study_id , $name , $grade_name) {

         return data::update("`menu_v_list`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `name`= '$name', `grade_name`= '$grade_name'", "`ID` = $ID");
                }public static function edit_menu_v_list_by_grade_id($ID , $grade_id , $field_of_study_id , $name , $grade_name) {

         return data::update("`menu_v_list`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `name`= '$name', `grade_name`= '$grade_name'", "`grade_id` = $grade_id");
                }public static function edit_menu_v_list_by_field_of_study_id($ID , $grade_id , $field_of_study_id , $name , $grade_name) {

         return data::update("`menu_v_list`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `name`= '$name', `grade_name`= '$grade_name'", "`field_of_study_id` = $field_of_study_id");
                }public static function edit_menu_v_list_by_name($ID , $grade_id , $field_of_study_id , $name , $grade_name) {

         return data::update("`menu_v_list`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `name`= '$name', `grade_name`= '$grade_name'", "`name` = $name");
                }public static function edit_menu_v_list_by_grade_name($ID , $grade_id , $field_of_study_id , $name , $grade_name) {

         return data::update("`menu_v_list`", "`ID`= '$ID', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `name`= '$name', `grade_name`= '$grade_name'", "`grade_name` = $grade_name");
                }public static function edit_menu_v_list_ID_by_ID($ID, $ID) {

         return data::update("`menu_v_list`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_menu_v_list_grade_id_by_ID($ID, $grade_id) {

         return data::update("`menu_v_list`", "`grade_id`= '$grade_id'", "`ID` = $ID");
                }public static function edit_menu_v_list_field_of_study_id_by_ID($ID, $field_of_study_id) {

         return data::update("`menu_v_list`", "`field_of_study_id`= '$field_of_study_id'", "`ID` = $ID");
                }public static function edit_menu_v_list_name_by_ID($ID, $name) {

         return data::update("`menu_v_list`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_menu_v_list_grade_name_by_ID($ID, $grade_name) {

         return data::update("`menu_v_list`", "`grade_name`= '$grade_name'", "`ID` = $ID");
                }
        //=========== delete menu_v_list 


        public static function delete_menu_v_list_by_ID ($ID) {

                 return data::delete("`menu_v_list`", "`ID` = $ID");
                }

            
        //=========== set menu_v_list 


        public static function set_menu_v_list ($grade_id , $field_of_study_id , $name) {

                 return data::insertinto("`menu_v_list`","grade_id, field_of_study_id, name" , "'$grade_id', '$field_of_study_id', '$name'");
                }

            
        }