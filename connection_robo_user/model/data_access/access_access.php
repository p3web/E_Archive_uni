<?php
            require_once '../model/database/data.php';
            class access_access {

            //=========== get access 


            public static function get_access() {

            $data = data::selects("`access`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_access_by_id($id) {

            $data = data::selects("`access`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_access_by_name($name) {

            $data = data::selects("`access`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_access_by_created_by($created_by) {

            $data = data::selects("`access`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_access_by_creationDate($creationDate) {

            $data = data::selects("`access`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit access 


        public static function edit_access($id , $name , $created_by , $creationDate) {

                 return data::update("`access`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_access_by_id($id , $name , $created_by , $creationDate) {

         return data::update("`access`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_access_by_name($id , $name , $created_by , $creationDate) {

         return data::update("`access`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_access_by_created_by($id , $name , $created_by , $creationDate) {

         return data::update("`access`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_access_by_creationDate($id , $name , $created_by , $creationDate) {

         return data::update("`access`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_access_id_by_id($id, $id) {

         return data::update("`access`", "`id`= '$id'", "`id` = $id");
                }public static function edit_access_name_by_id($id, $name) {

         return data::update("`access`", "`name`= '$name'", "`id` = $id");
                }public static function edit_access_created_by_by_id($id, $created_by) {

         return data::update("`access`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_access_creationDate_by_id($id, $creationDate) {

         return data::update("`access`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete access 


        public static function delete_access_by_id ($id) {

                 return data::delete("`access`", "`id` = $id");
                }

            
        //=========== set access 


        public static function set_access ($name , $created_by) {

                 return data::insertinto("`access`","name, created_by" , "'$name', '$created_by'");
                }

            
        }