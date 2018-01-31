<?php
require_once '../model/database/data.php';

class access_user
{

    //=========== get user


    public static function get_user()
    {

        $data = data::selects("`user`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_id($ID)
    {

        $data = data::selects("`user`", "`ID` = '$ID'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_name($name)
    {

        $data = data::selects("`user`", "`name` = '$name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_lastname($lastname)
    {

        $data = data::selects("`user`", "`lastname` = '$lastname'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_nik_name($nik_name)
    {

        $data = data::selects("`user`", "`nik_name` = '$nik_name'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_user_name($user_name)
    {

        $data = data::selects("`user`", "`user_name` = '$user_name'");
        if (count($data) != 0) {
            return $data;
        } else {
            $arr['res'] = false;
            return $arr;
        }
    }

    public static function get_user_by_pssword($pssword)
    {

        $data = data::selects("`user`", "`pssword` = '$pssword'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_avatar($avatar)
    {

        $data = data::selects("`user`", "`avatar` = '$avatar'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_last_password_failed($last_password_failed)
    {

        $data = data::selects("`user`", "`last_password_failed` = '$last_password_failed'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_count_password_failed($count_password_failed)
    {

        $data = data::selects("`user`", "`count_password_failed` = '$count_password_failed'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_last_change_password($last_change_password)
    {

        $data = data::selects("`user`", "`last_change_password` = '$last_change_password'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_last_modified($last_modified)
    {

        $data = data::selects("`user`", "`last_modified` = '$last_modified'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_created_by($created_by)
    {

        $data = data::selects("`user`", "`created_by` = '$created_by'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_user_by_creationDate($creationDate)
    {

        $data = data::selects("`user`", "`creationDate` = '$creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit user


    public static function edit_user($ID, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`ID`= '$ID', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
    }

    public static function edit_user_by_id($ID, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`ID`= '$ID', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
    }

    public static function edit_user_by_name($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`name` = $name");
    }

    public static function edit_user_by_lastname($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`lastname` = $lastname");
    }

    public static function edit_user_by_nik_name($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`nik_name` = $nik_name");
    }

    public static function edit_user_by_user_name($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_name` = $user_name");
    }

    public static function edit_user_by_pssword($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`pssword` = $pssword");
    }

    public static function edit_user_by_avatar($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`avatar` = $avatar");
    }

    public static function edit_user_by_last_password_failed($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`last_password_failed` = $last_password_failed");
    }

    public static function edit_user_by_count_password_failed($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`count_password_failed` = $count_password_failed");
    }

    public static function edit_user_by_last_change_password($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`last_change_password` = $last_change_password");
    }

    public static function edit_user_by_last_modified($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`last_modified` = $last_modified");
    }

    public static function edit_user_by_created_by($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
    }

    public static function edit_user_by_creationDate($id, $name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by, $creationDate)
    {

        return data::update("`user`", "`id`= '$id', `name`= '$name', `lastname`= '$lastname', `nik_name`= '$nik_name', `user_name`= '$user_name', `pssword`= '$pssword', `avatar`= '$avatar', `last_password_failed`= '$last_password_failed', `count_password_failed`= '$count_password_failed', `last_change_password`= '$last_change_password', `last_modified`= '$last_modified', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
    }

    public static function edit_user_id_by_id($id, $id)
    {

        return data::update("`user`", "`id`= '$id'", "`id` = $id");
    }

    public static function edit_user_name_by_id($id, $name)
    {

        return data::update("`user`", "`name`= '$name'", "`id` = $id");
    }

    public static function edit_user_lastname_by_id($id, $lastname)
    {

        return data::update("`user`", "`lastname`= '$lastname'", "`id` = $id");
    }

    public static function edit_user_nik_name_by_id($id, $nik_name)
    {

        return data::update("`user`", "`nik_name`= '$nik_name'", "`id` = $id");
    }

    public static function edit_user_user_name_by_id($id, $user_name)
    {

        return data::update("`user`", "`user_name`= '$user_name'", "`id` = $id");
    }

    public static function edit_user_pssword_by_id($id, $pssword)
    {

        return data::update("`user`", "`pssword`= '$pssword'", "`id` = $id");
    }

    public static function edit_user_avatar_by_id($id, $avatar)
    {

        return data::update("`user`", "`avatar`= '$avatar'", "`id` = $id");
    }

    public static function edit_user_last_password_failed_by_id($id, $last_password_failed)
    {

        return data::update("`user`", "`last_password_failed`= '$last_password_failed'", "`id` = $id");
    }

    public static function edit_user_count_password_failed_by_id($id, $count_password_failed)
    {

        return data::update("`user`", "`count_password_failed`= '$count_password_failed'", "`id` = $id");
    }

    public static function edit_user_last_change_password_by_id($id, $last_change_password)
    {

        return data::update("`user`", "`last_change_password`= '$last_change_password'", "`id` = $id");
    }

    public static function edit_user_last_modified_by_id($id, $last_modified)
    {

        return data::update("`user`", "`last_modified`= '$last_modified'", "`id` = $id");
    }

    public static function edit_user_created_by_by_id($id, $created_by)
    {

        return data::update("`user`", "`created_by`= '$created_by'", "`id` = $id");
    }

    public static function edit_user_creationDate_by_id($id, $creationDate)
    {

        return data::update("`user`", "`creationDate`= '$creationDate'", "`id` = $id");
    }

    //=========== delete user


    public static function delete_user_by_id($id)
    {

        return data::delete("`user`", "`ID` = $id");
    }

    //=========== set user


    public static function set_user($name, $lastname, $nik_name, $user_name, $pssword, $avatar, $last_password_failed, $count_password_failed, $last_change_password, $last_modified, $created_by)
    {

        return data::insertinto("`user`", "name, lastname, nik_name, user_name, pssword, avatar, last_password_failed, count_password_failed, last_change_password, last_modified, created_by", "'$name', '$lastname', '$nik_name', '$user_name', '$pssword', '$avatar', '$last_password_failed', '$count_password_failed', '$last_change_password', '$last_modified', '$created_by'");
    }


}