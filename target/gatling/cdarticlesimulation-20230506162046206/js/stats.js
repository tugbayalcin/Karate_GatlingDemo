var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "352",
        "ok": "352",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8183",
        "ok": "8183",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1051",
        "ok": "1051",
        "ko": "-"
    },
    "percentiles1": {
        "total": "352",
        "ok": "352",
        "ko": "-"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3882",
        "ok": "3882",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4911",
        "ok": "4911",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 328,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 7
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.677",
        "ok": "5.677",
        "ko": "-"
    }
},
contents: {
"req_create-and-dele-5c840": {
        type: "REQUEST",
        name: "Create And Delete Article",
path: "Create And Delete Article",
pathFormatted: "req_create-and-dele-5c840",
stats: {
    "name": "Create And Delete Article",
    "numberOfRequests": {
        "total": "176",
        "ok": "176",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5085",
        "ok": "5085",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "437",
        "ok": "437",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "500",
        "ok": "500",
        "ko": "-"
    },
    "percentiles1": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "percentiles2": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "percentiles3": {
        "total": "530",
        "ok": "530",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3338",
        "ok": "3338",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 172,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.839",
        "ok": "2.839",
        "ko": "-"
    }
}
    },"req_delete-api-arti-9e94f": {
        type: "REQUEST",
        name: "DELETE api/articles/{articleId}",
path: "DELETE api/articles/{articleId}",
pathFormatted: "req_delete-api-arti-9e94f",
stats: {
    "name": "DELETE api/articles/{articleId}",
    "numberOfRequests": {
        "total": "176",
        "ok": "176",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "324",
        "ok": "324",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8183",
        "ok": "8183",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1372",
        "ok": "1372",
        "ko": "-"
    },
    "percentiles1": {
        "total": "351",
        "ok": "351",
        "ko": "-"
    },
    "percentiles2": {
        "total": "380",
        "ok": "380",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4652",
        "ok": "4652",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5353",
        "ok": "5353",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 156,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.839",
        "ok": "2.839",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
