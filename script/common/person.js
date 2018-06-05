/**
 * Created by skysoft on 2018/5/31.
 */
var person_utils = (function ($) {

    var getPersonInfo,          // 获取用户信息
        createPersonBasicInfo,  // 生成人物信息模板
        filterPersonInfo,       // 筛选需要生成的人物信息
        detailControlEvent;     // 加载更多点击事件

    /**
     * 获取用户信息
     * @pram person_options 用户信息 string | object
     */
    getPersonInfo = function (person_options) {
        // 筛选需要生成的人物信息，因为需要获取到人物信息后才能生成人物信息模板，所以传递函数过去做回调
        filterPersonInfo(person_options, createPersonBasicInfo)
    };

    /**
     * 创建个人基本信息
     * @pram person_basic_info 用户的基本信息
     */
    createPersonBasicInfo = function (person_basic_info) {
        var person_template = "",           // 人物信息模板
            person_template_header = "",    // 人物标题模板
            person_template_content = "";   // 人物主要信息模板
        // 字符串模板生成对应的信息
        person_template_header = `<h2 class="person-title">${person_basic_info["name"]}的个人信息</h2>`;
        person_template_content = `<div class="table-wrap"><table border="1">
        <tr>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
        <th>体重(kg)</th>
        <th>职业</th>
        <th>爱好</th>
        <th class="js-show-detail is_show">经济</th>
        <th class="js-show-detail is_show">对象</th>
        <th class="js-show-detail is_show">评价</th>
        </tr>
        <tbody>
        <tr>
        <td>${person_basic_info["name"]}</td>
        <td>${person_basic_info["sex"]}</td>
        <td>${person_basic_info["age"]}</td>
        <td>${person_basic_info["weight"]}</td>
        <td>${person_basic_info["job"]}</td>
        <td>${person_basic_info["favor"]}</td>
        <td class="js-show-detail is_show">${person_basic_info["detail"]["money"]}</td>
        <td class="js-show-detail is_show">${person_basic_info["detail"]["other"]}</td>
        <td class="js-show-detail is_show">${person_basic_info["detail"]["subscript"]}</td>
        </tr>
        </tbody>
        </table></div><div class="button-wrap"><button id="show_detail">了解更多</button></div>`;
        // 拼接完整人物信息
        person_template += person_template_header + person_template_content;
        // 每次生成人物信息前先清空上一次生成的人物信息
        $("#wrap_table_info").empty().append(person_template);
        // 绑定事件，因为需要dom创建后才能绑定事件
        detailControlEvent();
    };

    /**
     * 筛选对应的人数据
     * @pram person_options person_options 用户信息 string | object
     * @pram callback 创建用户基本信息的方法
     */
    filterPersonInfo = function (person_options, callback) {
        var person_info; // 人物信息
        // 如果是字符串
        if (typeof (person_options) == "string") {
            // 根据人名筛选信息
            switch (person_options) {
                case"Anna":
                {
                    person_info = {
                        name: "Anna Su",
                        sex: "female",
                        age: "24",
                        weight: "55",
                        job: "web worker",
                        favor: "read story",
                        detail: {money: "40000", other: "Cloud", subscript: "拥有一颗小仙女的心."}
                    };
                    break;
                }
                case "Cloud":
                {
                    person_info = {
                        name: "Cloud Chen",
                        sex: "male",
                        age: "24",
                        weight: "51",
                        job: "web worker",
                        favor: "balls sports",
                        detail: {money: "0", other: "Anna", subscript: "强壮的身体."}
                    };
                    break;
                }
                case "James":
                {
                    person_info = {
                        name: "James Luo",
                        sex: "male",
                        age: "26",
                        weight: "62",
                        job: "UI Designer",
                        favor: "study and sports",
                        detail: {money: "unknown", other: "单身狗", subscript: "跳起来打我膝盖啊？"}
                    };
                }
            }
        } else if (typeof (person_options) == "object") {
            // 如果传递的是对象，应该是自定义人物信息
            person_info = {
                name: person_options["name"],
                sex: person_options["sex"],
                age: person_options["age"],
                weight: person_options["weight"],
                job: person_options["job"],
                favor: person_options["favor"]
            };
        } else {
            alert("请输入正确的信息！");
            return;
        }
        // 执行页面人物生成的事件
        callback && callback(person_info);
    };

    /**
     * 控制更多细节的显示隐藏
     */
    detailControlEvent = function () {
        // 显示更多点击事件
        $("#show_detail").on("click", function () {
            // 获取按钮控制显示隐藏的部分
            var $js_show_detail = $(".js-show-detail");
            // 点击时切换其class
            $js_show_detail.toggleClass("is_show");
            // 根据class设置按钮文字显示
            if ($js_show_detail.hasClass("is_show")) {
                // 隐藏时按钮显示为“显示更多”
                $(this).text("显示更多");
            } else {
                // 显示时按钮显示为“隐藏更多”
                $(this).text("隐藏更多");
            }
        })
    };

    return {
        getPersonInfo: getPersonInfo
    }

})(jQuery);