<?php
            require_once '../model/database/data.php';
            class access_files_tags {

            //=========== get files_tags 


            public static function get_files_tags() {

            $data = data::selects("`files_tags`", "");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }

            public static function get_files_tags_by_file_id($file_id) {

            $data = data::selects("`files_tags`", "`file_id` = '$file_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_tags_by_tag_id($tag_id) {

            $data = data::selects("`files_tags`", "`tag_id` = '$tag_id'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_tags_by_created_by($created_by) {

            $data = data::selects("`files_tags`", "`created_by` = '$created_by'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }public static function get_files_tags_by_creationDate($creationDate) {

            $data = data::selects("`files_tags`", "`creationDate` = '$creationDate'");
                    if (count($data[0]) != 0) {
                        return $data;
                    } else {
                        return false;
                    }
                }
        //=========== edit files_tags 


        public static function edit_files_tags($file_id , $tag_id , $created_by , $creationDate) {

                 return data::update("`files_tags`", "`file_id`= '$file_id', `tag_id`= '$tag_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`file_id` = $file_id");
                }

            public static function edit_files_tags_by_file_id($file_id , $tag_id , $created_by , $creationDate) {

         return data::update("`files_tags`", "`file_id`= '$file_id', `tag_id`= '$tag_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`file_id` = $file_id");
                }public static function edit_files_tags_by_tag_id($file_id , $tag_id , $created_by , $creationDate) {

         return data::update("`files_tags`", "`file_id`= '$file_id', `tag_id`= '$tag_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`tag_id` = $tag_id");
                }public static function edit_files_tags_by_created_by($file_id , $tag_id , $created_by , $creationDate) {

         return data::update("`files_tags`", "`file_id`= '$file_id', `tag_id`= '$tag_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
                }public static function edit_files_tags_by_creationDate($file_id , $tag_id , $created_by , $creationDate) {

         return data::update("`files_tags`", "`file_id`= '$file_id', `tag_id`= '$tag_id', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
                }public static function edit_files_tags_file_id_by_file_id($file_id, $file_id) {

         return data::update("`files_tags`", "`file_id`= '$file_id'", "`file_id` = $file_id");
                }public static function edit_files_tags_tag_id_by_file_id($file_id, $tag_id) {

         return data::update("`files_tags`", "`tag_id`= '$tag_id'", "`file_id` = $file_id");
                }public static function edit_files_tags_created_by_by_file_id($file_id, $created_by) {

         return data::update("`files_tags`", "`created_by`= '$created_by'", "`file_id` = $file_id");
                }public static function edit_files_tags_creationDate_by_file_id($file_id, $creationDate) {

         return data::update("`files_tags`", "`creationDate`= '$creationDate'", "`file_id` = $file_id");
                }
        //=========== delete files_tags 


        public static function delete_files_tags_by_file_id ($file_id) {

                 return data::delete("`files_tags`", "`file_id` = $file_id");
                }

            
        //=========== set files_tags 


        public static function set_files_tags ($tag_id , $created_by) {

                 return data::insertinto("`files_tags`","tag_id, created_by" , "'$tag_id', '$created_by'");
                }

            
        }