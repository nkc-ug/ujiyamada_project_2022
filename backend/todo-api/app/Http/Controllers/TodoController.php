<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
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
        $daily_form = array('day_location' => int(NULL) , 
                            'date' => int(NULL) , 
                            'isholiday' => False ,
                            'discardable_id' => int[]
                            );
        
        $lastday = date('t', strtotime($year."/".$month."/01"));
        $firstday_week = date('w', strtotime( $year.'-'.$month.'-01'));

        $json_array = array_fill( 1 , $lastday , $daily_form );
        
        for( $day_count = 1 ; $day_count <= $lastday ; $day_count++ ) {
            $json_array[$day_count]['day_location'] = $day_count + $firstday_week;
            $json_array[$day_count]['date'] = $day_count;

            if( $day_count%7 == $weekly_array[1] or $day_count%7 == $weekly_array[2] ) {
                $burn_id = DB::table('separations')
                ->select('id')
                ->where('name','燃えるごみ')
                ->get();
                //6は燃えるゴミのseparartions_id
                $json_array[$day_count]['discardable_id'].push($burn_id);
            }
            else if( $day_count%7 == $weekly_array[3] ){
                $plastic_id = DB::table('separations')
                ->select('id')
                ->where('name','プラスチック製容器包装')
                ->get();
                //4はプラスチックのseparartions_id
                $json_array[$day_count]['discardable_id'].push($plastic_id);
            }
            //collection_day列を参照して該当する日にちデータにseparartions_idを追加
            $separation_count = 1;
            foreach( $monthly_table as $separational_data ) {
                if( separational_data[2] == day_count ) {
                    $json_array[$day_count]['discardable_id'].push(separation_count);
                }
                $separation_count++;
            }
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
