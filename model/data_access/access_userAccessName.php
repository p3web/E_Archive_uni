<?php
require_once '../model/database/data.php';

class access_userAccessName
{

    //=========== get userAccessName


    public static function get_userAccessName()
    {

        $data = data::selects("`userAccessName`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userAccessName_by_userID($userID)
    {

        $data = data::selects("`userAccessName`", "`userID` = '$userID'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userAccessName_by_access($access)
    {

        $data = data::selects("`userAccessName`", "`access` = '$access'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userAccessName_by_createdBy($createdBy)
    {

        $data = data::selects("`userAccessName`", "`createdBy` = '$createdBy'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_userAccessName_by_creationDate($creationDate)
    {

        $data = data::selects("`userAccessName`", "`creationDate` = '$creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }
}