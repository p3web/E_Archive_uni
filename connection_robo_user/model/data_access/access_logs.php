<?php
            require_once '../model/database/data.php';
            class access_logs {

            //=========== get logs 


            public static function get_logs() {

            $data = data::selects("`logs`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_logs_by_id($id) {

            $data = data::selects("`logs`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_logs_by_act($act) {

            $data = data::selects("`logs`", "`act` = '$act'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_logs_by_table($table) {

            $data = data::selects("`logs`", "`table` = '$table'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_logs_by_log($log) {

            $data = data::selects("`logs`", "`log` = '$log'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_logs_by_created_by($created_by) {

            $data = data::selects("`logs`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_logs_by_creationDate($creationDate) {

            $data = data::selects("`logs`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit logs 


        public static function edit_logs($id , $act , $table , $log , $created_by , $creationDate) {

                 return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_logs_by_id($id , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_logs_by_act($id , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`act` = $act");
                }public static function edit_logs_by_table($id , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`table` = $table");
                }public static function edit_logs_by_log($id , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`log` = $log");
                }public static function edit_logs_by_created_by($id , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_logs_by_creationDate($id , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`id`= '$id', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_logs_id_by_id($id, $id) {

         return data::update("`logs`", "`id`= '$id'", "`id` = $id");
                }public static function edit_logs_act_by_id($id, $act) {

         return data::update("`logs`", "`act`= '$act'", "`id` = $id");
                }public static function edit_logs_table_by_id($id, $table) {

         return data::update("`logs`", "`table`= '$table'", "`id` = $id");
                }public static function edit_logs_log_by_id($id, $log) {

         return data::update("`logs`", "`log`= '$log'", "`id` = $id");
                }public static function edit_logs_created_by_by_id($id, $created_by) {

         return data::update("`logs`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_logs_creationDate_by_id($id, $creationDate) {

         return data::update("`logs`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete logs 


        public static function delete_logs_by_id ($id) {

                 return data::delete("`logs`", "`id` = $id");
                }

            
        //=========== set logs 


        public static function set_logs ($act , $table , $log , $created_by) {

                 return data::insertinto("`logs`","act, table, log, created_by" , "'$act', '$table', '$log', '$created_by'");
                }

            
        }