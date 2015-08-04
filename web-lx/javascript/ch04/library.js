/**
 * Created by Helen on 2015/5/20.
 */

/*
* 根据年和月得到这个月有多少天
*
* 参数：
*      year   四位的年份，
*      month  真实的月份 1 - 12
*
* 返回值：天数
*
**/
function getDaysOfMonth(year, month){

    year = parseInt(year);
    month = parseInt(month);

    var days = 0;
    switch (month){

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;

        case 2:
            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
                days = 29;
            }else{
                days = 28;
            }
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;

        default:

            break;
    }
    return days;
}

/*
* 根据具体的年月日得到星期
*
* 参数：
*      year   四位的年份，
*      month  真实的月份 1 - 12,
*      date   日期 从1开始
*
* 返回：0(星期日)-6(星期六)
* */
function getDayFromCalendar(year, month, date){

    var calendar = new Date();
    calendar.setFullYear(year);
    calendar.setMonth(month - 1);
    calendar.setDate(date);
    return calendar.getDay();
}



function printCalendar(year, month){

    var days = getDaysOfMonth(year, month);
    var emptyTd = getDayFromCalendar(year, month, 1);

    // 循环开始：1
    // 循环结束：days
    // 循环迭代：+1
    var str = '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';

    for(var current = 1; current <= days; /*不迭代*/){

        str += '<tr>';

        for(var b = 1; b <= 7; b++){

            if(emptyTd>0){//打印空td
                str += '<td></td>';
                emptyTd--;
            }else if(current <= days){//打印具体日期
                str += '<td>';
                str += current;
                str += '</td>';
                current++;
            }else{//剩余空格
                str += '<td></td>';
            }
        }
        str += '</tr>';
    }

    var calendar = document.getElementById('calendar');
    calendar.innerHTML = str;
}

/*
* 加载并显示日历
 */
function loadCalendar(){
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    printCalendar(year, month);
}