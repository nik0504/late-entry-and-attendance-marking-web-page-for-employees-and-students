<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "late_entry".
 *
 * @property int $s_no
 * @property int|null $id
 * @property string $date
 * @property int $late
 */
class LateEntry extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
      //     public function fields() {
      //    return [
      //       'id',
      //       'late',
      //       //PHP callback
      //       'datetime' => function($model) {
      //          return date("d:m:Y H:i:s");
      //       }
      //    ];
      // }
    
    
    public static function tableName()
    {
        return 'late_entry';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'late'], 'integer'],
            [['date'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            's_no' => 'S No',
            'id' => 'ID',
            'date' => 'Date',
            'late' => 'Late',
        ];
    }
}
