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

            public static function get_logs_by_ID($ID) {

            $data = data::selects("`logs`", "`ID` = '$ID'");
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


        public static function edit_logs($ID , $act , $table , $log , $created_by , $creationDate) {

                 return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }

            public static function edit_logs_by_ID($ID , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
                }public static function edit_logs_by_act($ID , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`act` = $act");
                }public static function edit_logs_by_table($ID , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`table` = $table");
                }public static function edit_logs_by_log($ID , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`log` = $log");
                }public static function edit_logs_by_created_by($ID , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_logs_by_creationDate($ID , $act , $table , $log , $created_by , $creationDate) {

         return data::update("`logs`", "`ID`= '$ID', `act`= '$act', `table`= '$table', `log`= '$log', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_logs_ID_by_ID($ID, $ID) {

         return data::update("`logs`", "`ID`= '$ID'", "`ID` = $ID");
                }public static function edit_logs_act_by_ID($ID, $act) {

         return data::update("`logs`", "`act`= '$act'", "`ID` = $ID");
                }public static function edit_logs_table_by_ID($ID, $table) {

         return data::update("`logs`", "`table`= '$table'", "`ID` = $ID");
                }public static function edit_logs_log_by_ID($ID, $log) {

         return data::update("`logs`", "`log`= '$log'", "`ID` = $ID");
                }public static function edit_logs_created_by_by_ID($ID, $created_by) {

         return data::update("`logs`", "`created_by`= '$created_by'", "`ID` = $ID");
                }public static function edit_logs_creationDate_by_ID($ID, $creationDate) {

         return data::update("`logs`", "`creationDate`= '$creationDate'", "`ID` = $ID");
                }
        //=========== delete logs 


        public static function delete_logs_by_ID ($ID) {

                 return data::delete("`logs`", "`ID` = $ID");
                }

            
        //=========== set logs 


        public static function set_logs ($act , $table , $log , $created_by) {

                 return data::insertinto("`logs`","act, table, log, created_by" , "'$act', '$table', '$log', '$created_by'");
                }

            
        }