<?php
            require_once '../model/database/data.php';
            class access_student_v_list {

            //=========== get student_v_list 


            public static function get_student_v_list() {

            $data = data::selects("`student_v_list`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_student_v_list_by_student_id($student_id) {

            $data = data::selects("`student_v_list`", "`student_id` = '$student_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_v_list_by_name($name) {

            $data = data::selects("`student_v_list`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_v_list_by_lastname($lastname) {

            $data = data::selects("`student_v_list`", "`lastname` = '$lastname'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_student_v_list_by_national_code($national_code) {

            $data = data::selects("`student_v_list`", "`national_code` = '$national_code'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit student_v_list 


        public static function edit_student_v_list($student_id , $name , $lastname , $national_code) {

                 return data::update("`student_v_list`", "`student_id`= '$student_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`student_id` = $student_id");
                }

            public static function edit_student_v_list_by_student_id($student_id , $name , $lastname , $national_code) {

         return data::update("`student_v_list`", "`student_id`= '$student_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`student_id` = $student_id");
                }public static function edit_student_v_list_by_name($student_id , $name , $lastname , $national_code) {

         return data::update("`student_v_list`", "`student_id`= '$student_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`name` = $name");
                }public static function edit_student_v_list_by_lastname($student_id , $name , $lastname , $national_code) {

         return data::update("`student_v_list`", "`student_id`= '$student_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`lastname` = $lastname");
                }public static function edit_student_v_list_by_national_code($student_id , $name , $lastname , $national_code) {

         return data::update("`student_v_list`", "`student_id`= '$student_id', `name`= '$name', `lastname`= '$lastname', `national_code`= '$national_code'", "`national_code` = $national_code");
                }public static function edit_student_v_list_student_id_by_student_id($student_id, $student_id) {

         return data::update("`student_v_list`", "`student_id`= '$student_id'", "`student_id` = $student_id");
                }public static function edit_student_v_list_name_by_student_id($student_id, $name) {

         return data::update("`student_v_list`", "`name`= '$name'", "`student_id` = $student_id");
                }public static function edit_student_v_list_lastname_by_student_id($student_id, $lastname) {

         return data::update("`student_v_list`", "`lastname`= '$lastname'", "`student_id` = $student_id");
                }public static function edit_student_v_list_national_code_by_student_id($student_id, $national_code) {

         return data::update("`student_v_list`", "`national_code`= '$national_code'", "`student_id` = $student_id");
                }
        //=========== delete student_v_list 


        public static function delete_student_v_list_by_student_id ($student_id) {

                 return data::delete("`student_v_list`", "`student_id` = $student_id");
                }

            
        //=========== set student_v_list 


        public static function set_student_v_list ($name , $lastname) {

                 return data::insertinto("`student_v_list`","name, lastname" , "'$name', '$lastname'");
                }

            
        }