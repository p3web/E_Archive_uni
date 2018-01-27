<?php
            require_once '../model/database/data.php';
            class access_users_organization {

            //=========== get users_organization 


            public static function get_users_organization() {

            $data = data::selects("`users_organization`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_users_organization_by_id($id) {

            $data = data::selects("`users_organization`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_organization_by_user_id($user_id) {

            $data = data::selects("`users_organization`", "`user_id` = '$user_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_organization_by_org_id($org_id) {

            $data = data::selects("`users_organization`", "`org_id` = '$org_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_organization_by_rol($rol) {

            $data = data::selects("`users_organization`", "`rol` = '$rol'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_organization_by_created_by($created_by) {

            $data = data::selects("`users_organization`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_users_organization_by_creationDate($creationDate) {

            $data = data::selects("`users_organization`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit users_organization 


        public static function edit_users_organization($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

                 return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_users_organization_by_id($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

         return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_users_organization_by_user_id($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

         return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
                }public static function edit_users_organization_by_org_id($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

         return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`org_id` = $org_id");
                }public static function edit_users_organization_by_rol($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

         return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`rol` = $rol");
                }public static function edit_users_organization_by_created_by($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

         return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_users_organization_by_creationDate($id , $user_id , $org_id , $rol , $created_by , $creationDate) {

         return data::update("`users_organization`", "`id`= '$id', `user_id`= '$user_id', `org_id`= '$org_id', `rol`= '$rol', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_users_organization_id_by_id($id, $id) {

         return data::update("`users_organization`", "`id`= '$id'", "`id` = $id");
                }public static function edit_users_organization_user_id_by_id($id, $user_id) {

         return data::update("`users_organization`", "`user_id`= '$user_id'", "`id` = $id");
                }public static function edit_users_organization_org_id_by_id($id, $org_id) {

         return data::update("`users_organization`", "`org_id`= '$org_id'", "`id` = $id");
                }public static function edit_users_organization_rol_by_id($id, $rol) {

         return data::update("`users_organization`", "`rol`= '$rol'", "`id` = $id");
                }public static function edit_users_organization_created_by_by_id($id, $created_by) {

         return data::update("`users_organization`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_users_organization_creationDate_by_id($id, $creationDate) {

         return data::update("`users_organization`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete users_organization 


        public static function delete_users_organization_by_id ($id) {

                 return data::delete("`users_organization`", "`id` = $id");
                }

            
        //=========== set users_organization 


        public static function set_users_organization ($user_id , $org_id , $rol , $created_by) {

                 return data::insertinto("`users_organization`","user_id, org_id, rol, created_by" , "'$user_id', '$org_id', '$rol', '$created_by'");
                }

            
        }