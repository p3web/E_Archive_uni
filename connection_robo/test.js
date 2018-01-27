/*var grade , field_of_study;
undefined
grade = [{
    ID:1,name:'کارشناسی' },{ID:2,name:'کاردانی'}]
(2) [{…}, {…}]
field_of_study = [{ID:1, grade_id : '1' , field_id : '1' , nameFS : 'برق'}, {ID:1, grade_id : '1' , field_id : '2' , nameFS : 'الکترونیک'}و{ID:1, grade_id : '2' , field_id : '1' , nameFS : 'برق'}, {ID:1, grade_id : '2' , field_id : '2' , nameFS : 'الکترونیک'}]
VM2240:1 Uncaught SyntaxError: Unexpected identifier
field_of_study = [{ID:1, grade_id : '1' , field_id : '1' , nameFS : 'برق'}, {ID:2, grade_id : '1' , field_id : '2' , nameFS : 'الکترونیک'},{ID:3, grade_id : '2' , field_id : '1' , nameFS : 'برق'}, {ID:4, grade_id : '2' , field_id : '2' , nameFS : 'الکترونیک'}]
(4) [{…}, {…}, {…}, {…}]
var JsonArray;
undefined
var JsonArray =[]
undefined
var TempJson;
for(var i =0 ; i < grade.length ; i++){
    TempJson = {name : grade[i].name};
    for(var c = 0 ; c < field_of_study.length ; c++){
        TempJson['items'] = [];
        if(grade[i].ID == field_of_study[c].grade_id){
            TempJson['items'].push({
                name : field_of_study[c].name,
                link : '#sample?grdae_id='+grade[i].ID + 'field=' + field_of_study[c].field_id
            });
        }
        JsonArray.push(TempJson);
        VM2632:12 Uncaught SyntaxError: Unexpected end of input
        var TempJson;
        for(var i =0 ; i < grade.length ; i++){
            TempJson = {name : grade[i].name};
            for(var c = 0 ; c < field_of_study.length ; c++){
                TempJson['items'] = [];
                if(grade[i].ID == field_of_study[c].grade_id){
                    TempJson['items'].push({
                        name : field_of_study[c].name,
                        link : '#sample?grdae_id='+grade[i].ID + 'field=' + field_of_study[c].field_id
                    });
                }
            }
            JsonArray.push(TempJson);
        }
        2
        JsonArray
        (2) [{…}, {…}]
        0
    :
        items
            :
            []
        name
            :
            "کارشناسی"
        __proto__
            :
            Object
        1
    :
        items
            :
            Array(1)
        0
    :
        link
            :
            "#sample?grdae_id=2field=2"
        name
            :
            undefined
        __proto__
            :
            Object
        length
            :
            1
        __proto__
            :
            Array(0)
        name
            :
            "کاردانی"
        __proto__
            :
            Object
        length
            :
            2
        __proto__
            :
            Array(0)*/