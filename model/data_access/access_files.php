<?php
            require_once '../model/database/data.php';
            class access_files {

            //=========== get files 


            public static function get_files() {

            $data = data::selects("`files`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_files_by_ID($ID) {

            $data = data::selects("`files`", "`ID` = '$ID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_student_id($student_id) {

            $data = data::selects("`files`", "`student_id` = '$student_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_name($name) {

            $data = data::selects("`files`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_type($type) {

            $data = data::selects("`files`", "`type` = '$type'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_url($url) {

            $data = data::selects("`files`", "`url` = '$url'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_property($property) {

            $data = data::selects("`files`", "`property` = '$property'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_size($size) {

            $data = data::selects("`files`", "`size` = '$size'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_is_delete($is_delete) {

            $data = data::selects("`files`", "`is_delete` = '$is_delete'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_modified_by($modified_by) {

            $data = data::selects("`files`", "`modified_by` = '$modified_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_created_by($created_by) {

            $data = data::selects("`files`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_by_creationDate($creationDate) {

            $data = data::selects("`files`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit files 


        public static function edit_files($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

                 return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_files_by_ID($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_files_by_student_id($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`student_id` = $student_id");
                }public static function edit_files_by_name($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_files_by_type($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`type` = $type");
                }public static function edit_files_by_url($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`url` = $url");
                }public static function edit_files_by_property($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`property` = $property");
                }public static function edit_files_by_size($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`size` = $size");
                }public static function edit_files_by_is_delete($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`is_delete` = $is_delete");
                }public static function edit_files_by_modified_by($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`modified_by` = $modified_by");
                }public static function edit_files_by_created_by($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_files_by_creationDate($ID , $student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by , $creationDate) {

         return data::update("`files`", "`ID`= '$ID', `student_id`= '$student_id', `name`= '$name', `type`= '$type', `url`= '$url', `property`= '$property', `size`= '$size', `is_delete`= '$is_delete', `modified_by`= '$modified_by', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_files_ID_by_ID($ID, $ID) {

         return data::update("`files`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_files_student_id_by_ID($ID, $student_id) {

         return data::update("`files`", "`student_id`= '$student_id'", "`ID` = $ID");
                }public static function edit_files_name_by_ID($ID, $name) {

         return data::update("`files`", "`name`= '$name'", "`ID` = $ID");
                }public static function edit_files_type_by_ID($ID, $type) {

         return data::update("`files`", "`type`= '$type'", "`ID` = $ID");
                }public static function edit_files_url_by_ID($ID, $url) {

         return data::update("`files`", "`url`= '$url'", "`ID` = $ID");
                }public static function edit_files_property_by_ID($ID, $property) {

         return data::update("`files`", "`property`= '$property'", "`ID` = $ID");
                }public static function edit_files_size_by_ID($ID, $size) {

         return data::update("`files`", "`size`= '$size'", "`ID` = $ID");
                }public static function edit_files_is_delete_by_ID($ID, $is_delete) {

         return data::update("`files`", "`is_delete`= '$is_delete'", "`ID` = $ID");
                }public static function edit_files_modified_by_by_ID($ID, $modified_by) {

         return data::update("`files`", "`modified_by`= '$modified_by'", "`ID` = $ID");
                }public static function edit_files_created_by_by_ID($ID, $created_by) {

         return data::update("`files`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_files_creationDate_by_ID($ID, $creationDate) {

         return data::update("`files`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete files 


        public static function delete_files_by_ID ($ID) {

                 return data::delete("`files`", "`ID` = $ID");
                }

            
        //=========== set files 


        public static function set_files ($student_id , $name , $type , $url , $property , $size , $is_delete , $modified_by , $created_by) {

                 return data::insertinto("`files`","student_id, name, type, url, property, size, is_delete, modified_by, created_by" , "'$student_id', '$name', '$type', '$url', '$property', '$size', '$is_delete', '$modified_by', '$created_by'");
                }

            
        }