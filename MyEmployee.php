<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "employee".
 *
 * @property int $Emp_Id
 * @property string|null $Emp_Name
 */
class MyEmployee extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    // public function fields() {
    //      return [
    //         'Employee_Id',
    //         'Employee_Name',
    //         //PHP callback
    //         'datetime' => function($model) {
    //            return date("d:m:Y H:i:s");
    //         }
    //      ];
    //   } 
    public static function tableName()
    {
        return 'employee';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['Employee_Name'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'Employee_Id' => 'Emp ID',
            'Employee_Name' => 'Emp Name',
        ];
    }
}
