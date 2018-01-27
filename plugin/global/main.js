/**
 * Created by peymanvalikhanli on 4/17/17 AD.
 */
function get_elem_id(id) {
    return document.getElementById(id);
}
function get_elem_name(name) {
    return document.getElementsByName(name);
}
function get_elem_class(classname) {
    return document.getElementsByClassName(classname);
}

function set_elem(elem) {
    return document.createElement(elem);
}

// ---- check login
var userDetails = {};
/*function CheckLogin(CallBack) {
    if (CallBack == null)
        CallBack = redirect;
    ajax.sender_data_json_by_url_callback('controller/controller_global.php', {act: 'check_login'}, CallBack)
}
function redirect(Data) {
    if (Data == undefined || Data == null || Data == '') {
        window.location.href = 'login.html';
    } else {
        userDetails = Data;
    }
}
*/
setInterval(function () {
    try {
        CheckLogin();
    } catch (e) {
    }
}, 120000);


//----- get query string
function get_query_string_by_param(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


//----- get data (for fill form)
function GetEditData(queryStringName, param, url,key) {
    var queryStringValue = get_query_string_by_param(queryStringName);

    if (queryStringValue != null && queryStringValue != '') {
        // create hidden input for id
        var idInput = document.createElement('input');
        idInput.setAttribute('type', 'hidden');
        idInput.setAttribute('id', 'ID');
        document.getElementById('saveForm').appendChild(idInput);

        //----- set id in param
        if(key == null)
        param['ID'] = queryStringValue;
        else
            param[key] = queryStringValue;

        if (url == null) {
            url = ajax.url;
        }
        ajax.sender_data_json_by_url_callback(url, param, fillForm);
    }
}

//----- fill Edit form
var fillDone = false;
function fillForm(Data) {
    var DataKeys;
    for (var i = 0; i < Data.length; i++) {
        DataKeys = Object.keys(Data[i]);
        for (var a = 0; a < DataKeys.length; a++) {
            try {
                if (DataKeys[a] != 'Pasword') {
                    document.getElementById(DataKeys[a]).value = Data[i][DataKeys[a]];
                }
            } catch (e) {
            }
        }
    }
    fillDone = true;
}

//----- checkVerificationAgain
function CheckVerificationAgain(FormId) {

    var fields = document.querySelectorAll('#' + FormId + ' input , #' + FormId + ' select');
    var func , passFlag=false;
    for (var i = 0; i < fields.length; i++) {
        //---- get verification func from onkeyup or onchange
        func = fields[i].getAttribute('onkeyup');
        if (func == null) {
            func = fields[i].getAttribute('onchange');
        }
        if (func != null) {
            //---- this step func = "checkVerification(this.id , 'username')"
            func = func.split('(');
            func = func[1].split("'");
            //---- there func is = ["", "username", ")"]
            //---- for repeatPass
            if(func.length > 3)
                passFlag = true;
            func = func[1].trim();
            //---- there func is ="username"
            if(!passFlag) {
                checkVerification(fields[i].getAttribute('id'), func);
            }else{
                checkVerification(fields[i].getAttribute('id'), func , 'Password');
                passFlag = false;
            }
        }
    }
}
//----- set form value
function setForm(FormId, act, url, callback) {
    //--- checkVerification before sending data;
    try {
        CheckVerificationAgain(FormId);
    }catch(e){}
    var check = document.querySelectorAll('#'+FormId+' input[type="hidden"]');
    var Flag = true;
    for (var i = 0; i < check.length; i++) {
        if (check[i].value == 'false') {
            Flag = false;
            $('.form-group [data-original-title]').tooltip('show');
            try{
            document.getElementById('Error').innerText = __lang.translate('fill_inputs_correctly');
            setTimeout(function () {
                document.getElementById('Error').innerText = '';
            }, 5000);}catch(e){}
            break;

        }
    }
    if (Flag) {
        var values = document.querySelectorAll('#' + FormId + ' input , #' + FormId + ' select , #'+FormId+ ' textarea');

        var parameters = {};
        var paramename;
        for (var i = 0; i < values.length; i++) {
            paramename = values[i].getAttribute('data-realID');
            if (paramename == '' || paramename == null) {
                paramename = values[i].getAttribute('id');
            }
            parameters[paramename] = values[i].value;
        }
        parameters['act'] = act;
        if (callback == null) {
            ajax.sender_data_json_by_url_callback(url, parameters, console.log);
        } else {
            ajax.sender_data_json_by_url_callback(url, parameters, callback);
        }
    }

}

//---- create select

function createSelectTags(Data, id, valueParam, textParam) {
    if (valueParam == null) {
        valueParam = 'ID';
    }
    if (textParam == null) {
        textParam = 'name';
    }
    var dataKeys = Object.keys(Data);
    var opt = '<option value="">انتخاب کنید</option>';
    for (var i = 0; i < dataKeys.length; i++) {
        opt += '<option value="' + Data[dataKeys[i]][valueParam] + '">' + Data[dataKeys[i]][textParam] + '</option>';
    }
    document.getElementById(id).innerHTML = opt;
}

//---- CKFinder

function openKCFinder_singleFile(inputId,callBack) {
    window.KCFinder = {};
    window.KCFinder.callBack = function(url) {
        document.getElementById(inputId).value = url;
        window.KCFinder = null;
        if(callBack != null)
            callBack();
    };
    window.open('plugin/kcfinder/browse.php', 'kcfinder_single' , 'width=800,height=700');
}

function openKCFinder_multipleFiles() {
    window.KCFinder = {};
    window.KCFinder.callBackMultiple = function(files) {
        for (var i; i < files.length; i++) {
            // Actions with files[i] here
        }
        window.KCFinder = null;
    };
    window.open('plugin/kcfinder/browse.php', 'kcfinder_multiple' , 'width=800,height=700');
}