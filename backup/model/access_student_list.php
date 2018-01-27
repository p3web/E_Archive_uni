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
            public static function get_student_list_by_student_id($student_id) {

            $data = data::selects("`student_list`", "`student_id` = '$student_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
                public static function get_student_list_by_user_id($user_id) {

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


        public static function edit_student_list($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

                 return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`student_id` = $student_id");
                }

            public static function edit_student_list_by_student_id($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`student_id` = $student_id");
                }public static function edit_student_list_by_user_id($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`user_id` = $user_id");
                }public static function edit_student_list_by_grade_id($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`grade_id` = $grade_id");
                }public static function edit_student_list_by_field_of_study_id($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`field_of_study_id` = $field_of_study_id");
                }public static function edit_student_list_by_year_id($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`year_id` = $year_id");
                }public static function edit_student_list_by_name($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`name` = $name");
                }public static function edit_student_list_by_lastname($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`lastname` = $lastname");
                }public static function edit_student_list_by_national_code($student_id , $user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname , $national_code) {

         return data::update("`student_list`", "`student_id`= '$student_id', `user_id`= '$user_id', `grade_id`= '$grade_id', `field_of_study_id`= '$field_of_study_id', `year_id`= '$year_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`national_code` = $national_code");
                }public static function edit_student_list_student_id_by_student_id($student_id, $student_id) {

         return data::update("`student_list`", "`student_id`= '$student_id'", "`student_id` = $student_id");
                }public static function edit_student_list_user_id_by_student_id($student_id, $user_id) {

         return data::update("`student_list`", "`user_id`= '$user_id'", "`student_id` = $student_id");
                }public static function edit_student_list_grade_id_by_student_id($student_id, $grade_id) {

         return data::update("`student_list`", "`grade_id`= '$grade_id'", "`student_id` = $student_id");
                }public static function edit_student_list_field_of_study_id_by_student_id($student_id, $field_of_study_id) {

         return data::update("`student_list`", "`field_of_study_id`= '$field_of_study_id'", "`student_id` = $student_id");
                }public static function edit_student_list_year_id_by_student_id($student_id, $year_id) {

         return data::update("`student_list`", "`year_id`= '$year_id'", "`student_id` = $student_id");
                }public static function edit_student_list_name_by_student_id($student_id, $name) {

         return data::update("`student_list`", "`name`= '$name'", "`student_id` = $student_id");
                }public static function edit_student_list_lastname_by_student_id($student_id, $lastname) {

         return data::update("`student_list`", "`lastname`= '$lastname'", "`student_id` = $student_id");
                }public static function edit_student_list_national_code_by_student_id($student_id, $national_code) {

         return data::update("`student_list`", "`national_code`= '$national_code'", "`student_id` = $student_id");
                }
        //=========== delete student_list 


        public static function delete_student_list_by_student_id ($student_id) {

                 return data::delete("`student_list`", "`student_id` = $student_id");
                }

            
        //=========== set student_list 


        public static function set_student_list ($user_id , $grade_id , $field_of_study_id , $year_id , $name , $lastname) {

                 return data::insertinto("`student_list`","user_id, grade_id, field_of_study_id, year_id, name, lastname" , "'$user_id', '$grade_id', '$field_of_study_id', '$year_id', '$name', '$lastname'");
                }

            
        }