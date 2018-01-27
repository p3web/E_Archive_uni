function datenow(){
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return str;
}
function miladitojalali(y,m,d){
    var year,month,day;
    if(parseInt(m)==10)
    {
        if( parseInt(d)>=11) {
            year = 1300 + parseInt(y) + 622;
        }else{
            year=1300+parseInt(y)+621;

        }
    }else{
        if(parseInt(m)>10)
        {
            year = 1300 + parseInt(y) + 622;
        }
        if(parseInt(m)<10)
        {
            year=1300+parseInt(y)+621;
        }
    }

    if(parseInt(m)>6)
    {
        if(parseInt(d)<=10)
        {
            day=parseInt(d)+20;
        }else {
            day =parseInt(d) - 10;
        }
    }else{
        if(parseInt(d)<10)
        {
            day=parseInt(d)+22;
        }else {
            day = parseInt(d) - 10;
        }
    }
    if(parseInt(m)<10)
    {
        month = parseInt(m)+3;
    }else {
        month = parseInt(m) - 9;
    }
    return [year,month,day];
}

