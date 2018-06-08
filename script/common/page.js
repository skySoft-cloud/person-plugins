/**
 * Created by skysoft on 2018/5/31.
 */
/****************************************************页面加载方法*****************************************************************/

var Page = (function ($) {

    var init,               // 页面初始化方法
        clickClearBtnEvent; // 页面clear按钮点击事件

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

        // 页面私有方法执行
        clickClearBtnEvent();
    };

    /**
     * 页面表单点击clear按钮清空事件
     */
    clickClearBtnEvent = function () {
        // id 必须命名为clear，绑定点击事件
        $("#clear").on("click", function () {
            // 获取所在表单的父级容器
            var $parents_form = $(this).parent().parent();
            // 设置input框为空
            $parents_form.find("input").val("");
        })
    };

    return {
        init: init
    }
})(jQuery);