$(document).ready(function(){
    $('.filter').click(function(){
        let attr = $(this).atr('data-nombre')
        if(attr == 'todos'){
            $('.imagen').show('1000')
        }else{
            $('.imagen').not('.'+attr).hide('1000')
            $('.imagen').filter('.'+attr).show('1000')
        }
    })
})