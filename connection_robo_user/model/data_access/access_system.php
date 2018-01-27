<?php
            require_once '../model/database/data.php';
            class access_system {

            //=========== get system 


            public static function get_system() {

            $data = data::selects("`system`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_system_by_id($id) {

            $data = data::selects("`system`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_system_by_name($name) {

            $data = data::selects("`system`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_system_by_created_by($created_by) {

            $data = data::selects("`system`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_system_by_creationDate($creationDate) {

            $data = data::selects("`system`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit system 


        public static function edit_system($id , $name , $created_by , $creationDate) {

                 return data::update("`system`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_system_by_id($id , $name , $created_by , $creationDate) {

         return data::update("`system`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_system_by_name($id , $name , $created_by , $creationDate) {

         return data::update("`system`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_system_by_created_by($id , $name , $created_by , $creationDate) {

         return data::update("`system`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_system_by_creationDate($id , $name , $created_by , $creationDate) {

         return data::update("`system`", "`id`= '$id', `name`= '$name', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_system_id_by_id($id, $id) {

         return data::update("`system`", "`id`= '$id'", "`id` = $id");
                }public static function edit_system_name_by_id($id, $name) {

         return data::update("`system`", "`name`= '$name'", "`id` = $id");
                }public static function edit_system_created_by_by_id($id, $created_by) {

         return data::update("`system`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_system_creationDate_by_id($id, $creationDate) {

         return data::update("`system`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete system 


        public static function delete_system_by_id ($id) {

                 return data::delete("`system`", "`id` = $id");
                }

            
        //=========== set system 


        public static function set_system ($name , $created_by) {

                 return data::insertinto("`system`","name, created_by" , "'$name', '$created_by'");
                }

            
        }