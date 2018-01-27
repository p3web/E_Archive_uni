<?php
            require_once '../model/database/data.php';
            class access_student_list {

            //=========== get student_list 


            public static function get_student_list() {

            $data = data::selects("`student_list`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

                public static function student_list_get_for_grid($year_id , $grade_id,$field_of_study_id) {

                    $data = data::selects("`student_list`","`grade_id` = '$grade_id' AND `field_of_study_id` = '$field_of_study_id' AND `year_id` = '$year_id'" );
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
            public static function get_student_list_by_ID($ID) {

            $data = data::selects("`student_list`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_student_id($student_id) {

            $data = data::selects("`student_list`", "`student_id` = '$student_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_user_id($user_id) {

            $data = data::selects("`student_list`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_grade_id($grade_id) {

            $data = data::selects("`student_list`", "`grade_id` = '$grade_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_field_of_study_id($field_of_study_id) {

            $data = data::selects("`student_list`", "`field_of_study_id` = '$field_of_study_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_year_id($year_id) {

            $data = data::selects("`student_list`", "`year_id` = '$year_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_name($name) {

            $data = data::selects("`student_list`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_lastname($lastname) {

            $data = data::selects("`student_list`", "`lastname` = '$lastname'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_list_by_national_code($national_code) {

            $data = data::selects("`student_list`", "`national_code` = '$national_code'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit student_list 


        public static function edit_student_list($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

                 return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`ID` = $ID");
                }

            public static function edit_student_list_by_ID($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`ID` = $ID");
                }public static function edit_student_list_by_student_id($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`student_id` = $student_id");
                }public static function edit_student_list_by_user_id($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`user_id` = $user_id");
                }public static function edit_student_list_by_grade_id($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`grade_id` = $grade_id");
                }public static function edit_student_list_by_field_of_study_id($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`field_of_study_id` = $field_of_study_id");
                }public static function edit_student_list_by_year_id($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`year_id` = $year_id");
                }public static function edit_student_list_by_name($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`name` = $name");
                }public static function edit_student_list_by_lastname($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`lastname` = $lastname");
                }public static function edit_student_list_by_national_code($ID , $student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`ID`= '$ID', `student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`national_code` = $national_code");
                }public static function edit_student_list_ID_by_ID($ID, $ID) {

         return data::update("`student_list`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_student_list_student_id_by_ID($ID, $student_id) {

         return data::update("`student_list`", "`student_id`= '$student_id'", "`ID` = $ID");
                }public static function edit_student_list_user_id_by_ID($ID, $user_id) {

         return data::update("`student_list`", "`user_id`= '$user_id'", "`ID` = $ID");
                }public static function edit_student_list_grade_id_by_ID($ID, $grade_id) {

         return data::update("`student_list`", "`grade_id`= '$grade_id'", "`ID` = $ID");
                }public static function edit_student_list_field_of_study_id_by_ID($ID, $field_of_study_id) {

         return data::update("`student_list`", "`field_of_study_id`= '$field_of_study_id'", "`ID` = $ID");
                }public static function edit_student_list_year_id_by_ID($ID, $year_id) {

         return data::update("`student_list`", "`year_id`= '$year_id'", "`ID` = $ID");
                }public static function edit_student_list_name_by_ID($ID, $name) {

         return data::update("`student_list`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_student_list_lastname_by_ID($ID, $lastname) {

         return data::update("`student_list`", "`lastname`= '$lastname'", "`ID` = $ID");
                }public static function edit_student_list_national_code_by_ID($ID, $national_code) {

         return data::update("`student_list`", "`national_code`= '$national_code'", "`ID` = $ID");
                }
        //=========== delete student_list 


        public static function delete_student_list_by_ID ($ID) {

                 return data::delete("`student_list`", "`ID` = $ID");
                }

            
        //=========== set student_list 


        public static function set_student_list ($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname) {

                 return data::insertinto("`student_list`","student_id, user_id, grade_id, field_of_study_id, year_id, name, lastname" , "'$student_id', '$user_id', '$grade_id', '$field_of_study_id', '$year_id', '$name', '$lastname'");
                }

            
        }