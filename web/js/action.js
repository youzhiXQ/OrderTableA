
var data = [
    { startDate: "2018-6-10", name: "事件1" },
    { startDate: "2018-7-10", name: "事件1" },
    { startDate: "2018-8-10", name: "事件1" },
    { startDate: "2018-9-10", name: "事件1" },
    { startDate: "2018-10-10", name: "事件1" },
    { startDate: "2018-11-1", name: "事件2" },
    { startDate: "2018-11-1", name: "事件11" },
    { startDate: "2018-12-1", name: "事件12" },
    { startDate: "2018-12-1", name: "事件13" },
    { startDate: "2018-12-1", name: "事14" },
    { startDate: "2019-1-10", name: "事件14" },
    { startDate: "2019-2-10", name: "事件14" },
    { startDate: "2019-3-10", name: "事件14" },
    { startDate: "2019-4-10", name: "事件14" },
    { startDate: "2019-5-10", name: "事件14" },
    { startDate: "2019-6-10", name: "事件14" },
    { startDate: "2019-7-10", name: "事件14" },
    { startDate: "2019-8-10", name: "事件14" },
    { startDate: "2019-9-10", name: "事件14" },
    { startDate: "2019-10-10", name: "事件14" },
    { startDate: "2019-11-10", name: "事件14" },
    { startDate: "2019-12-10", name: "事件14" },
    { startDate: "2020-1-10", name: "事件14" },
    { startDate: "2020-2-10", name: "事件14" },
]

$("#calendar").calendar({
    data: data,
    mode: "month",
    //  maxEvent: 3,
    //showModeBtn: false
    //  newDate: "2018-04-1",
    cellClick: function (events) {
        //viewCell的事件列表
    },
})