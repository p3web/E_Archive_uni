<?php
            require_once '../model/database/data.php';
            class access_userAccess {

            //=========== get userAccess 


            public static function get_userAccess() {

            $data = data::selects("`userAccess`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_userAccess_by_userID($userID) {

            $data = data::selects("`userAccess`", "`userID` = '$userID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_userAccess_by_accessID($accessID) {

            $data = data::selects("`userAccess`", "`accessID` = '$accessID'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_userAccess_by_created_by($created_by) {

            $data = data::selects("`userAccess`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_userAccess_by_creationDate($creationDate) {

            $data = data::selects("`userAccess`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit userAccess 


        public static function edit_userAccess($userID , $accessID , $created_by , $creationDate) {

                 return data::update("`userAccess`", "`userID`= '$userID', `accessID`= '$accessID', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`userID` = $userID");
                }

            public static function edit_userAccess_by_userID($userID , $accessID , $created_by , $creationDate) {

         return data::update("`userAccess`", "`userID`= '$userID', `accessID`= '$accessID', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`userID` = $userID");
                }public static function edit_userAccess_by_accessID($userID , $accessID , $created_by , $creationDate) {

         return data::update("`userAccess`", "`userID`= '$userID', `accessID`= '$accessID', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`accessID` = $accessID");
                }public static function edit_userAccess_by_created_by($userID , $accessID , $created_by , $creationDate) {

         return data::update("`userAccess`", "`userID`= '$userID', `accessID`= '$accessID', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_userAccess_by_creationDate($userID , $accessID , $created_by , $creationDate) {

         return data::update("`userAccess`", "`userID`= '$userID', `accessID`= '$accessID', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_userAccess_userID_by_userID($userID, $userID) {

         return data::update("`userAccess`", "`userID`= '$userID'", "`userID` = $userID");
                }public static function edit_userAccess_accessID_by_userID($userID, $accessID) {

         return data::update("`userAccess`", "`accessID`= '$accessID'", "`userID` = $userID");
                }public static function edit_userAccess_created_by_by_userID($userID, $created_by) {

         return data::update("`userAccess`", "`created_by`= '$created_by'", "`userID` = $userID");
                }public static function edit_userAccess_creationDate_by_userID($userID, $creationDate) {

         return data::update("`userAccess`", "`creationDate`= '$creationDate'", "`userID` = $userID");
                }
        //=========== delete userAccess 


        public static function delete_userAccess_by_userID ($userID) {

                 return data::delete("`userAccess`", "`userID` = $userID");
                }

            
        //=========== set userAccess 


        public static function set_userAccess ($accessID , $created_by) {

                 return data::insertinto("`userAccess`","accessID, created_by" , "'$accessID', '$created_by'");
                }

            
        }