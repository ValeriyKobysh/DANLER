document.querySelector('#prod_call').onclick=function(){
  var name=$('.p_name').val();
  var email=$('.p_email').val();
  var phone=$('.p_phone').val();
  var prod=1;
  $(".p_name").removeClass('error-input');
  $(".p_email").removeClass('error-input');
  $(".p_phone").removeClass('error-input');
  $('.p_err_name').empty();$('.p_err_email').empty();
  $('.p_err_phone').empty();
$.post("/index.php?p1=/",{func:"getCallback",name:name,email:email,phone:phone,prod:prod},function(data){
  if(data.result.result=='1'){
  $("#mod_show").hide();
  $("#mod_hide").show();
  var timerId = setTimeout(function tick() {
  $(".modal-state-prod").prop("checked",!1).change();
}, 1000);
  }else{
  if(data.result.err.name!=''){$(".p_name").addClass('error-input');
  $('.p_err_name').replaceWith('<label class="error-label err_name">'+data.result.err.name+'</label>');}if(data.result.err.email!=''){$(".p_email").addClass('error-input');
  $('.p_err_email').replaceWith('<label class="error-label err_email">'+data.result.err.email+'</label>');}if(data.result.err.phone!=''){$(".p_phone").addClass('error-input');
  $('.p_err_phone').replaceWith('<label class="error-label err_phone">'+data.result.err.phone+'</label>');}if(data.result.err_cnt!=''){$('.p_err_phone').replaceWith('<label class="error-label err_phone">'+data.result.err_cnt+'</label>');}}},"json");};
  document.querySelector('#main_call').onclick=function(){
    var name=$('.name').val();
    var email=$('.email').val();
    var phone=$('.phone').val();$(".name").removeClass('error-input');
    $(".email").removeClass('error-input');
    $(".phone").removeClass('error-input');
  $('.err_name').empty();$('.err_email').empty();$('.err_phone').empty();$.post("/index.php?p1=/",{func:"getCallback",name:name,email:email,phone:phone},function(data){
  if(data.result.result=='1'){
    $("#mod_show_main").hide();
    $("#mod_hide_main").show();
    var timerId = setTimeout(function tick() {
    $(".modal-state").prop("checked",!1).change();
    }, 1000);
}else{
if(data.result.err.name!=''){
  $(".name").addClass('error-input');
  $('.err_name').replaceWith('<label class="error-label err_name">'+data.result.err.name+'</label>');
}
  if(data.result.err.email!=''){
  $(".email").addClass('error-input');
  $('.err_email').replaceWith('<label class="error-label err_email">'+data.result.err.email+'</label>');
}
if(data.result.err.phone!=''){$(".phone").addClass('error-input');
  $('.err_phone').replaceWith('<label class="error-label err_phone">'+data.result.err.phone+'</label>');
}
if(data.result.err_cnt!=''){
  $('.err_phone').replaceWith('<label class="error-label err_phone">'+data.result.err_cnt+'</label>');}
}
},"json");};
