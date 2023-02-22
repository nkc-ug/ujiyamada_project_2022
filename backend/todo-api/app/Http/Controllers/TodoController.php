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
    public function calander($area_id, $month){
        $items = DB::table('monthly_days')
        ->join('separations', 'monthly_days.separation_id', '=', 'separations.id')
        ->select('monthly_days.separation_id', 'monthly_days.collection_day')
        ->where('monthly_days.month', $month)
        ->where('monthly_days.area_id', $area_id)
        ->get();


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
