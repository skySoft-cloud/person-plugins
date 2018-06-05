/**
 * Created by Cloud.chen on 2018/6/1.
 */
/******************************************共通请求类Ajax**********************************************************/

var Ajax = (function ($) {

    // 定义ajax默认配置参数
    var default_options = {
        async: true,                // 是否异步
        disable_cache: true,       // 是否禁用缓存
        timeout: 60000,             // 超时时间
        is_jsonp: false,           // 是否跨域
        dataType: "json",          // 请求格式 json
        // 请求成功后的回调
        sucFunc: function () {

        },
        // 请求失败后回调
        failFunc: function () {

        }
    };


    var priAjaxSend,    // 私有ajax请求方法
        get;            // 封装Ajax GET请求

    /**
     * 私有ajax请求方法
     * @pram options ajax配置参数
     */
    priAjaxSend = function (options) {
        var url = "test/" + options.path;
        // 发起请求
        $.ajax({
            url: url,
            type: options.type,
            data: JSON.stringify(options.data),
            dataType: options.dataType,
            async: options.async,
            timeout: options.timeout,
            // Ajax请求之前
            beforeSend: function () {
                // 如果请求时有参数传递，则打印请求地址+参数
                if (options.data) {
                    console.log(options.path + " Data:" + JSON.parse(options.data));
                }
            },
            // 请求成功后
            success: function (data) {
                // 执行成功后回调
                options.sucFunc(data);
            }
        })
    };

    /**
     * 封装GET请求
     * @pram options 请求参数
     */
    get = function (options) {
        // 设置请求方式为get
        options.type = "GET";
        // 合并默认参数
        options = $.extend({}, default_options, options);
        // 返回执行ajax请求的结果
        return priAjaxSend(options);
    };

    return {
        get: get
    }

})(jQuery);