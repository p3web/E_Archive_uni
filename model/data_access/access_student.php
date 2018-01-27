<?php
require_once '../model/database/data.php';

class access_student
{

    //=========== get student


    public static function get_student()
    {

        $data = data::selects("`student`", "");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_ID($ID)
    {

        $data = data::selects("`student`", "`ID` = '$ID'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }
    public static function student_get_for_grid($year_id , $grade_id,$field_of_study_id)
    {

        $data = data::selects("`student`", "`year_id` = '$year_id' AND `grade_id` = '$grade_id' AND `field_of_study_id` = '$field_of_study_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_user_id($user_id)
    {

        $data = data::selects("`student`", "`user_id` = '$user_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_student_id($student_id)
    {

        $data = data::selects("`student`", "`student_id` = '$student_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_grade_id($grade_id)
    {

        $data = data::selects("`student`", "`grade_id` = '$grade_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_year_id($year_id)
    {

        $data = data::selects("`student`", "`year_id` = '$year_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_field_of_study_id($field_of_study_id)
    {

        $data = data::selects("`student`", "`field_of_study_id` = '$field_of_study_id'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_transfer_unit($transfer_unit)
    {

        $data = data::selects("`student`", "`transfer_unit` = '$transfer_unit'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_accept_unit($accept_unit)
    {

        $data = data::selects("`student`", "`accept_unit` = '$accept_unit'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_term_graduate($term_graduate)
    {

        $data = data::selects("`student`", "`term_graduate` = '$term_graduate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_average($average)
    {

        $data = data::selects("`student`", "`average` = '$average'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_system_type($system_type)
    {

        $data = data::selects("`student`", "`system_type` = '$system_type'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_date_graduate($date_graduate)
    {

        $data = data::selects("`student`", "`date_graduate` = '$date_graduate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_created_by($created_by)
    {

        $data = data::selects("`student`", "`created_by` = '$created_by'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    public static function get_student_by_creationDate($creationDate)
    {

        $data = data::selects("`student`", "`creationDate` = '$creationDate'");
        if (count($data[0]) != 0) {
            return $data;
        } else {
            return false;
        }
    }

    //=========== edit student


    public static function edit_student($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
    }

    public static function edit_student_by_ID($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`ID` = $ID");
    }

    public static function edit_student_by_user_id($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`user_id` = $user_id");
    }

    public static function edit_student_by_student_id($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`student_id` = $student_id");
    }

    public static function edit_student_by_grade_id($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`grade_id` = $grade_id");
    }

    public static function edit_student_by_year_id($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`year_id` = $year_id");
    }

    public static function edit_student_by_field_of_study_id($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`field_of_study_id` = $field_of_study_id");
    }

    public static function edit_student_by_transfer_unit($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`transfer_unit` = $transfer_unit");
    }

    public static function edit_student_by_accept_unit($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`accept_unit` = $accept_unit");
    }

    public static function edit_student_by_term_graduate($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`term_graduate` = $term_graduate");
    }

    public static function edit_student_by_average($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`average` = $average");
    }

    public static function edit_student_by_system_type($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`system_type` = $system_type");
    }

    public static function edit_student_by_date_graduate($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`date_graduate` = $date_graduate");
    }

    public static function edit_student_by_created_by($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`created_by` = $created_by");
    }

    public static function edit_student_by_creationDate($ID, $user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by, $creationDate)
    {

        return data::update("`student`", "`ID`= '$ID', `user_id`= '$user_id', `student_id`= '$student_id', `grade_id`= '$grade_id', `year_id`= '$year_id', `field_of_study_id`= '$field_of_study_id', `transfer_unit`= '$transfer_unit', `accept_unit`= '$accept_unit', `term_graduate`= '$term_graduate', `average`= '$average', `system_type`= '$system_type', `date_graduate`= '$date_graduate', `created_by`= '$created_by', `creationDate`= '$creationDate'", "`creationDate` = $creationDate");
    }

    public static function edit_student_ID_by_ID($ID, $ID)
    {

        return data::update("`student`", "`ID`= '$ID'", "`ID` = $ID");
    }

    public static function edit_student_user_id_by_ID($ID, $user_id)
    {

        return data::update("`student`", "`user_id`= '$user_id'", "`ID` = $ID");
    }

    public static function edit_student_student_id_by_ID($ID, $student_id)
    {

        return data::update("`student`", "`student_id`= '$student_id'", "`ID` = $ID");
    }

    public static function edit_student_grade_id_by_ID($ID, $grade_id)
    {

        return data::update("`student`", "`grade_id`= '$grade_id'", "`ID` = $ID");
    }

    public static function edit_student_year_id_by_ID($ID, $year_id)
    {

        return data::update("`student`", "`year_id`= '$year_id'", "`ID` = $ID");
    }

    public static function edit_student_field_of_study_id_by_ID($ID, $field_of_study_id)
    {

        return data::update("`student`", "`field_of_study_id`= '$field_of_study_id'", "`ID` = $ID");
    }

    public static function edit_student_transfer_unit_by_ID($ID, $transfer_unit)
    {

        return data::update("`student`", "`transfer_unit`= '$transfer_unit'", "`ID` = $ID");
    }

    public static function edit_student_accept_unit_by_ID($ID, $accept_unit)
    {

        return data::update("`student`", "`accept_unit`= '$accept_unit'", "`ID` = $ID");
    }

    public static function edit_student_term_graduate_by_ID($ID, $term_graduate)
    {

        return data::update("`student`", "`term_graduate`= '$term_graduate'", "`ID` = $ID");
    }

    public static function edit_student_average_by_ID($ID, $average)
    {

        return data::update("`student`", "`average`= '$average'", "`ID` = $ID");
    }

    public static function edit_student_system_type_by_ID($ID, $system_type)
    {

        return data::update("`student`", "`system_type`= '$system_type'", "`ID` = $ID");
    }

    public static function edit_student_date_graduate_by_ID($ID, $date_graduate)
    {

        return data::update("`student`", "`date_graduate`= '$date_graduate'", "`ID` = $ID");
    }

    public static function edit_student_created_by_by_ID($ID, $created_by)
    {

        return data::update("`student`", "`created_by`= '$created_by'", "`ID` = $ID");
    }

    public static function edit_student_creationDate_by_ID($ID, $creationDate)
    {

        return data::update("`student`", "`creationDate`= '$creationDate'", "`ID` = $ID");
    }

    //=========== delete student


    public static function delete_student_by_ID($ID)
    {

        return data::delete("`student`", "`ID` = $ID");
    }
    public static function delete_student_by_user_id($ID)
    {

        return data::delete("`student`", "`user_id` = $ID");
    }


    //=========== set student


    public static function set_student($user_id, $student_id, $grade_id, $year_id, $field_of_study_id, $transfer_unit, $accept_unit, $term_graduate, $average, $system_type, $date_graduate, $created_by)
    {

        return data::insertinto("`student`", "user_id, student_id, grade_id, year_id, field_of_study_id, transfer_unit, accept_unit, term_graduate, average, system_type, date_graduate, created_by", "'$user_id', '$student_id', '$grade_id', '$year_id', '$field_of_study_id', '$transfer_unit', '$accept_unit', '$term_graduate', '$average', '$system_type', '$date_graduate', '$created_by'");
    }


}