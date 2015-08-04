/**
 * Created by Helen on 2015/5/21.
 */

var helenTime = {
    now: new Date(),

    getFullDate: function(){
        return this.now.getFullYear() + '年' + (this.now.getMonth() + 1) + '月' + this.now.getDate() + '日';
    },

    getFullTime: function(){
        return this.now.getHours() + ':' + this.now.getMinutes() + ':' + this.now.getSeconds();
    },

    toString: function(){
        return this.getFullDate() + ' ' + this.getFullTime();
    }
};

