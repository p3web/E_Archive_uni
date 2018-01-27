<?php
            require_once '../model/database/data.php';
            class access_organization {

            //=========== get organization 


            public static function get_organization() {

            $data = data::selects("`organization`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_organization_by_id($id) {

            $data = data::selects("`organization`", "`id` = '$id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_name($name) {

            $data = data::selects("`organization`", "`name` = '$name'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_address($address) {

            $data = data::selects("`organization`", "`address` = '$address'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_tel($tel) {

            $data = data::selects("`organization`", "`tel` = '$tel'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_fax($fax) {

            $data = data::selects("`organization`", "`fax` = '$fax'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_email($email) {

            $data = data::selects("`organization`", "`email` = '$email'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_comment($comment) {

            $data = data::selects("`organization`", "`comment` = '$comment'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_created_by($created_by) {

            $data = data::selects("`organization`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_organization_by_creationDate($creationDate) {

            $data = data::selects("`organization`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit organization 


        public static function edit_organization($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

                 return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }

            public static function edit_organization_by_id($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`id` = $id");
                }public static function edit_organization_by_name($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
                }public static function edit_organization_by_address($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`address` = $address");
                }public static function edit_organization_by_tel($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`tel` = $tel");
                }public static function edit_organization_by_fax($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`fax` = $fax");
                }public static function edit_organization_by_email($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`email` = $email");
                }public static function edit_organization_by_comment($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`comment` = $comment");
                }public static function edit_organization_by_created_by($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_organization_by_creationDate($id , $name , $address , $tel , $fax , $email , $comment , $created_by , $creationDate) {

         return data::update("`organization`", "`id`= '$id', `name`= '$name', `address`= '$address', `tel`= '$tel', `fax`= '$fax', `email`= '$email', `comment`= '$comment', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_organization_id_by_id($id, $id) {

         return data::update("`organization`", "`id`= '$id'", "`id` = $id");
                }public static function edit_organization_name_by_id($id, $name) {

         return data::update("`organization`", "`name`= '$name'", "`id` = $id");
                }public static function edit_organization_address_by_id($id, $address) {

         return data::update("`organization`", "`address`= '$address'", "`id` = $id");
                }public static function edit_organization_tel_by_id($id, $tel) {

         return data::update("`organization`", "`tel`= '$tel'", "`id` = $id");
                }public static function edit_organization_fax_by_id($id, $fax) {

         return data::update("`organization`", "`fax`= '$fax'", "`id` = $id");
                }public static function edit_organization_email_by_id($id, $email) {

         return data::update("`organization`", "`email`= '$email'", "`id` = $id");
                }public static function edit_organization_comment_by_id($id, $comment) {

         return data::update("`organization`", "`comment`= '$comment'", "`id` = $id");
                }public static function edit_organization_created_by_by_id($id, $created_by) {

         return data::update("`organization`", "`created_by`= '$created_by'", "`id` = $id");
                }public static function edit_organization_creationDate_by_id($id, $creationDate) {

         return data::update("`organization`", "`creationDate`= '$creationDate'", "`id` = $id");
                }
        //=========== delete organization 


        public static function delete_organization_by_id ($id) {

                 return data::delete("`organization`", "`id` = $id");
                }

            
        //=========== set organization 


        public static function set_organization ($name , $address , $tel , $fax , $email , $comment , $created_by) {

                 return data::insertinto("`organization`","name, address, tel, fax, email, comment, created_by" , "'$name', '$address', '$tel', '$fax', '$email', '$comment', '$created_by'");
                }

            
        }