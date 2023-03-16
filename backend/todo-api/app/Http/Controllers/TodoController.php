<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\DB;
use Yasumi\Yasumi;

class TodoController extends Controller
{
    /**
 * @var array[] $daily_form
 * @property int $day_location
 * @property int|null $date
 * @property bool $isholiday
 * @property int[] $discardable_id
 */
     public function calander($area_id,$year,$month){
        $monthly_table = DB::table('monthly_days')
        ->join('separations', 'monthly_days.separation_id', '=', 'separations.id')
        ->select('monthly_days.separation_id', 'monthly_days.collection_day')
        ->where('monthly_days.month', $month)
        ->where('monthly_days.area_id', $area_id)
        ->get();

        $weekly_array = DB::table('areas')
        ->select('burnable_day_01','burnable_day_02','plastic_day')
        ->where('id', $area_id)
        ->get();

        //日ごとのJSONデータの標本
        $daily_form = array(
                        'day_location' => 0 ,
                        'date' => NULL ,
                        'isholiday' => False ,
                        'discardable_id' => []
        );

        $lastday = date('t', strtotime($year."/".$month."/01"));
        $firstday_week = date('w', strtotime( $year.'-'.$month.'-01'));

        $array_qty = ($lastday/7 +1)*7;
        $json_array = [];
        $holidays = Yasumi::create('Japan', $year, 'ja_JP');

        for( $day_count = 1 ; $day_count <= $array_qty ; $day_count++ ) {
            $daily_data = $daily_form;
            $daily_data['day_location'] = $day_count;
            if( $day_count < $firstday_week || $lastday < $day_count) continue;
            else $daily_data['date'] = $day_count-$firstday_week;
            // 休日判定
            $daily_data['isholiday'] = $holidays->isHoliday( (string) $year."-".(string) $month."-".(string) $day_count);

            if( $day_count%7 == $weekly_array[1] or $day_count%7 == $weekly_array[2] ) {
                $burn_id = DB::table('separations')
                ->select('id')
                ->where('name','燃えるごみ')
                ->get();
                //6は燃えるゴミのseparartions_id
                array_push($daily_data['discardable_id'],$burn_id);
            }
            if( $day_count%7 == $weekly_array[3] ){
                $plastic_id = DB::table('separations')
                ->select('id')
                ->where('name','プラスチック製容器包装')
                ->get();
                //4はプラスチックのseparartions_id
                array_push($daily_data['discardable_id'],$plastic_id);
            }
            //collection_day列を参照して該当する日にちデータにseparartions_idを追加
            $separation_count = 1;
            foreach( $monthly_table as $separational_data ) {
                if( $separational_data[2] == $day_count ) {
                    array_push($json_array[$day_count]['discardable_id'],$separation_count);
                }
                $separation_count++;
            }
            array_push($json_array,$daily_data);
        }
        return json_encode($json_array, JSON_UNESCAPED_UNICODE);
    }


    public function divide($item_name)
    {
        $items = DB::table('items')->select('name')->where('name', 'like', $item_name.'%')->get();
        $array = $items->pluck('name')->toArray();
        $result = json_encode($array,JSON_UNESCAPED_UNICODE);
        return $result;
    }
    public function getItem($item_name)
    {
        $items = DB::table('items')->select('type','description')->where('name', '=', $item_name)->get();
        return json_encode($items, JSON_UNESCAPED_UNICODE);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
?>