/**
 * Created by skysoft on 2018/5/31.
 */
/****************************************************页面加载方法*****************************************************************/

var Page = (function ($) {

    var init; // 页面初始化方法

    /**
     * 页面初始化方法
     * @pram Curpage  页面Curpage对象
     */
    init = function (Curpage) {
        // 遍历页面事件方法
        for (var eventFunc in Curpage.Event) {
            // 执行事件方法
            Curpage.Event[eventFunc]();
        }
        // 遍历页面数据方法
        for (var dataFunc in Curpage.Data) {
            // 执行数据方法
            Curpage.Data[dataFunc]();
        }
    };

    return {
        init: init
    }
})(jQuery);