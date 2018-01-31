var flag = false;
var tags = '';
var xx = 0;
var j;
var ie;
var FlagObj = [];
var gradeid;
var field_array = [];
//field_array=[0,0];
var test=1;
var inumber;
grade_connection.get();

function run() {
    try {

        var element = document.getElementById('number');
        element.remove();
        for (var ee = 0; ee < ie; ee++) {
            var element2 = document.getElementById('dis1' + ee);
            element2.remove();
        }
        for (var zz = 1; zz < j; zz++) {
            var element3 = document.getElementById('nm' + zz);
            element3.remove();
        }
    } catch (e) {
    }
    var tag = '<label for="name"> انتخاب تعداد زیر منو برای ساخت\n' +
        '                    <input list="num" id="numb" class="form-control" onchange="createlist();flag=false;">\n' +
        '                    <datalist id="num" style="color: #000000;" >\n' +
        '\n' +
        '\n' +
        '                    </datalist>\n' +
        '\n' +
        '                </label>';
    var x = document.createElement("div");
    x.setAttribute("id", 'number');
    x.setAttribute("class", 'col-xs-6 pull-right');
    document.getElementById('new').appendChild(x);
    document.getElementById('number').innerHTML = tag;
    field_of_study_connection.get();
    grade_connection.get_by_name(document.getElementById('grade_name').value);

}

function createlist() {

    try {


        for (var ee = 0; ee < ie; ee++) {
            var element2 = document.getElementById('dis1' + ee);
            element2.remove();
        }
        for (var zz = 1; zz < j; zz++) {
            var element3 = document.getElementById('nm' + zz);
            element3.remove();
        }
    } catch (e) {
    }

    try {
        menu_connection.get_by_grade_id(gradeid);

    } catch (e) {

    }
    test=1;
    checkmnu();

}

function checkmnu() {

    test=test+1;
    if (flag == true || test==50) {
        if(test==50)
        {
            try{
                for(var ar=0;ar<field_array.length;ar++)
                {
                    field_array[ar]='';
                }
                field_array.length=0;
            }catch (e){}
        }
        var inum = document.getElementById('numb').value;
        ///////////////////////////////////////////////////
        xx = 0;
        for (ie = 0; ie < field_array.length; ie++) {
            field_of_study_connection.get_by_ID(field_array[ie]);

            var x = document.createElement("div");
            x.setAttribute("id", 'dis1' + ie);
            document.getElementById('dis').appendChild(x);

            setTimeout('', 1000);
        }

        ///////////////////////////////////////////////////
        var anumber = parseInt(inumber) - field_array.length;
        if (inum < anumber) {
            anumber = inum;
            document.getElementById('numb').value = anumber;
        } else {

            document.getElementById('numb').value = anumber;
            alert('شما نمی توانید بیشتر از' + anumber + 'زیر منو ثبت کنید')
        }
        for (j = 1; j <= anumber; j++) {
            var tag = '<label for="name">انتخاب زیر منو\n' +
                '                    <input list="of_study" id="names" class="form-control" >\n' +
                '                    <datalist id="of_study" style="color: #000000;" >\n' +
                '\n' +
                '\n' +
                '                    </datalist>\n' +
                '\n' +
                '                </label>';
            var x = document.createElement("div");
            x.setAttribute("id", 'nm' + j);
            x.setAttribute("class", 'col-xs-6 pull-right');
            document.getElementById('saveForm').appendChild(x);
            document.getElementById('nm' + j).innerHTML = tag;

        }
        field_of_study_connection.get();
        flag = false;
    } else {

        setTimeout(checkmnu, 100)
    }

}
///////////////////////////////////////////////////////////////

try {
    var arr=[];
    for (var i = 0; i <data.length ; i++) {
        for (var j = 0; j <field_array.length; j++) {
            if (data[i].ID == field_array[j]) {

                data.splice(i,1);

            }
        }
    }

    for (var i = 0; i < data.length; i++) {
        tagg += '<option value="' + data[i].name + '"style="color: #000000;" >' + data[i].name + '</option>';
    }
    document.getElementById('of_study').innerHTML = tagg;


} catch (e) {
}