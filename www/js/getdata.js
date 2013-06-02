/**
 * Created with JetBrains WebStorm.
 * User: wangshucheng
 * Date: 13-05-12
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */
var URLInfo;
URLInfo = {
    baseurl:'',
    keywords:'',
    value:''


};



function goback(){

    $('#page_'+localStorage.getItem('current_page_id')).children().show();
    $('.detail_view').hide();
}

function gohome(){
    $.mobile.changePage('#page_1');
}

function setting(){
    console.log("clicked");
    $('.setting').toggle();
}




