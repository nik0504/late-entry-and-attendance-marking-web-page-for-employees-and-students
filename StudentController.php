<?php
   namespace app\modules\hello\controllers;
   use yii\rest\Controller;
   
   class StudentController extends Controller {
      public function actionIndex(){
         return "sfgsfdg";
      }
       public function actionGetEmployeeReport(){
         $params =\Yii::$app->getRequest()->getBodyParams();
         // $temp = json_decode($params, true);

         // print_r($temp)adsfadfadsd");

         if(isset($params['date']) && isset($params['date']['date1']) && isset($params['date']['date2']) && $params['date']['date1'] && $params['date']['date2']){
            $start_date = $params['date']['date1'];
            $end_date = $params['date']['date2'];

            $rows = (new \yii\db\Query())
             ->select('Employee_Name, count(late_entry.id) AS t')
             ->from('employee')
             ->leftJoin('late_entry', 'employee.Employee_Id=late_entry.id')
             ->where("late_entry.late = 1 AND DATE(late_entry.date) >='".$start_date."' AND DATE(late_entry.date) <='".$end_date."'")
             ->groupBY('late_entry.id')
             ->orderBY('t DESC')
             ->all();
             return $rows;
          }

          return json_encode(array('status' => 0, 'message' => 'Data not found'));

          // select emp loyee.Employee_Name, late_entry.date from employee left join late_entry on employee.Employee_Id=late_entry.id where late_entry.late = 1 AND DATE(late_entry.date) >= '2020-01-20' AND DATE(late_entry.date) <='2020-01-20'
      }

      public function actionGetEmployee(){

        $rows = (new \yii\db\Query())
        ->select('Employee_Id,Employee_Name')
        ->from('employee')
        ->all();
             return $rows;

       }
      // public function actionGetEmployee(){

      //   $rows = (new \yii\db\Query())
      //   ->select('Employee_Id,Employee_Name')
      //   ->from('employee')
      //   ->all();
      //        return $rows;

      //  }


      // public function actionPutEmployeeInfo(){
      //    $params =\Yii::$app->getRequest()->getBodyParams();

      //    //to to
      //    //validation function write in model 

      // $employee = \app\modules\hello\models\Employee;
      // $data = $employee->validateName($params['first_name']);


      //    // $employee = \app\modules\hello\models\Employee::find()->where('Employee_Name = :employee_name', [':employee_name' => $params['first_name'].' '.$params['last_name']])->one();


      //    //  $employee->Employee_Name = $params['first_name'].' sharma';
      //    // if($employee->validate()){
      //    //    $employee->update();
      //    // }else{
      //    //    echo "<pre>";
      //    //    print_r($employee->getErrors());
      //    // }

      //    // print_r($employee);
      //    // die();

      //    // $employee = new \app\modules\hello\models\Employee;
      //    // $employee->Employee_Name = $params['first_name'].' '.$params['last_name'];
      //    // if($employee->validate()){
      //    //    $employee->save();
      //    // }else{
      //    //    echo "<pre>";
      //    //    print_r($employee->getErrors());
      //    // }
      // }
   }