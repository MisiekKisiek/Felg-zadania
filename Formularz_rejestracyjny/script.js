$(function() {
  
  $("input[name='postalcode'").change(function () {
    $.getJSON(`http://kodpocztowy.intami.pl/api/${$("input[name='postalcode'").val()}`)
    .done(res => {
        const $streetElements = res.map(e=>{
          return(e.ulica?`<option>${e.ulica}</option>`:null);
        })
        $('#streetList').append($streetElements);
    })
    .fail(() => {
      $('#streetList').children('option').remove();
    })
  });
  $('form').submit((e)=>{
    e.preventDefault();
    const submitForm = new Promise((resolve,reject)=>{
      $('.submitButton').addClass('active');
      setTimeout(() => {
        $('input').val("");
        $('.submitButton').removeClass('active');
        $('.messageCurtine').css('display','block');
        resolve()
      }, 6000);
    });
    submitForm().then(val=>{

    })
  });
  $('.disableMessage').click(function () {
    $('.messageCurtine').css('display','none');
  })
});