/**
 * Created by Cloud.chen on 2018/6/8.
 */
/*******************************************页面验证、格式化相关**************************************************/
// 一些验证的正则表达式集合
var reg_map = {
    reg_blank: /\s*/g,
    reg_word: /^[a-zA-Z]$/,
    reg_num: /^[1-9]\d*/
};


/**输入框格式化方法*/
(function ($) {

    // 增加原型方法
    $.fn.addValidRules = function (options) {
        $.each(options,function(item){
            $("#"+item).addClass("js-valid");
        })
    };

    /**页面私有方法集合*/
    var initPriEvent,        // 初始化页面私有方法
        priFormatInputSpace; // 输入框自动去除空格

    /**
     * 输入框自动去除空格
     */
    priFormatInputSpace = function () {
        $(".form-horizontal").on("blur", "input", function () {
            // 获取格式化后的value值
            var format_val = $(this).val().replace(reg_map.reg_blank, "");
            // 显示在输入框上
            $(this).val(format_val);
        })
    };

    /**
     * 初始化页面私有方法
     */
    initPriEvent = function () {
        // 执行输入框自动去除空格的方法
        priFormatInputSpace();
    };

    initPriEvent();

})(jQuery);

/**验证相关方法*/
var valid_utils = (function ($) {

    var check_result,       // 验证结果
        checkIsEmpty,       // 验证输入是否为空
        checkNumber;        // 验证数字

    /**
     * 验证输入是否为空
     */
    checkIsEmpty = function ($ele) {
        // 有值就返回空字串，为空就返回错误信息
        check_result = $ele.val().length != 0 ? "" : "Can not empty!";
        // 返回错误信息
        return check_result;
    };
    /**
     * 检查输入是否为number
     */
    checkNumber = function ($ele) {
        var check_empty_result = checkIsEmpty($ele);
        // 验证是否为空
        if (check_empty_result != "") {
            $ele.nextAll(".err-msg").text("");
            return check_empty_result;
        } else {
            // 验证输入是否为数字
            if (reg_map.reg_num.test($ele.val())) {
                check_result = "";
            } else {
                check_result = "Must be a number!";
            }
            // 返回验证结果
            $ele.nextAll(".err-msg").text("");
            return check_result;
        }
    };

    return {
        checkNumber: checkNumber
    }
})(jQuery);