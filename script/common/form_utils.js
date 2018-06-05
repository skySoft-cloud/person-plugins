/**
 * Created by Cloud.chen on 2018/5/31.
 */

/****************************************************页面表单赋值共通方法*****************************************************************/
var form_utils = (function ($) {

    var selectOptions; // 根据值选中下拉框选项

    /**
     * 根据值选中下拉框项
     * @pram $ele jquery元素对象
     * @pram sel_option_val 选项的value值
     * @pram flag 默认false,不触发事件 true 触发事件
     */
    selectOptions = function ($ele, sel_option_val, trigger_flag) {
        // 判断传递的值类型
        if (typeof sel_option_val === "number") {
            // 传递的值为数字则直接选中第几项
            $ele.get(0).selectedIndex = sel_option_val;
        } else if (typeof sel_option_val === "string") {
            // 传递的值为字符串则选中value对应的项
            $ele.val(sel_option_val);
        } else {
            // 都不是则打印错误
            console.log("The value type is 'string' or 'number'");
            return;
        }
        // 如果传递参数true，则触发事件
        if (trigger_flag) {
            // 触发下拉框绑定的change事件
            $ele.trigger("change");
        }
    };

    return {
        selectOptions: selectOptions
    }
})(jQuery);