<?php
            require_once '../model/database/data.php';
            class access_type {

            //=========== get type 


            public static function get_type() {

            $data = data::selects("`type`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_type_by_id($id) {

            $data = data::selects("`type`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_type_by_name($name) {

            $data = data::selects("`type`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_type_by_created_by($created_by) {

            $data = data::selects("`type`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_type_by_creationDate($creationDate) {

            $data = data::selects("`type`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit type 


        public static function edit_type($id , $name , $created_by , $creationDate) {

                 return data::update("`type`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_type_by_id($id , $name , $created_by , $creationDate) {

         return data::update("`type`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_type_by_name($id , $name , $created_by , $creationDate) {

         return data::update("`type`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_type_by_created_by($id , $name , $created_by , $creationDate) {

         return data::update("`type`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_type_by_creationDate($id , $name , $created_by , $creationDate) {

         return data::update("`type`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_type_id_by_id($id, $id) {

         return data::update("`type`", "`id`= '$id'", "`id` = $id");
                }public static function edit_type_name_by_id($id, $name) {

         return data::update("`type`", "`name`= '$name'", "`id` = $id");
                }public static function edit_type_created_by_by_id($id, $created_by) {

         return data::update("`type`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_type_creationDate_by_id($id, $creationDate) {

         return data::update("`type`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete type 


        public static function delete_type_by_id ($id) {

                 return data::delete("`type`", "`id` = $id");
                }

            
        //=========== set type 


        public static function set_type ($name , $created_by) {

                 return data::insertinto("`type`","name, created_by" , "'$name', '$created_by'");
                }

            
        }