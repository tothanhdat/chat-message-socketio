/*
Template Name: Monster Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(document).ready(function () {
    var ctx1 = document.getElementById("chart1").getContext("2d");
    var data1 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"]
        , datasets: [
            {
                label: "My First dataset"
                , fillColor: "#458ab6"
                , strokeColor: "#458ab6"
                , pointColor: "#458ab6"
                , pointStrokeColor: "#fff"
                , pointHighlightFill: "#fff"
                , pointHighlightStroke: "#458ab6"
                , data: [65, 59, 80, 81, 56, 55, 40]
            }
            , {
                label: "My Second dataset"
                , fillColor: "#45b6ab"
                , strokeColor: "#45b6ab"
                , pointColor: "#45b6ab"
                , pointStrokeColor: "#fff"
                , pointHighlightFill: "#fff"
                , pointHighlightStroke: "#45b6ab"
                , data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var chart1 = new Chart(ctx1).Line(data1, {
        scaleShowGridLines: true
        , scaleGridLineColor: "rgba(0,0,0,.05)"
        , scaleGridLineWidth: 1
        , scaleShowHorizontalLines: true
        , scaleShowVerticalLines: true
        , bezierCurve: true
        , bezierCurveTension: 0.4
        , pointDot: true
        , pointDotRadius: 4
        , pointDotStrokeWidth: 1
        , pointHitDetectionRadius: 2
        , datasetStroke: true
        , tooltipCornerRadius: 2
        , datasetStrokeWidth: 1
        , datasetFill: true
        , legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        , responsive: true
    });
    var ctx2 = document.getElementById("chart2").getContext("2d");
    var data2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"]
        , datasets: [
            {
                label: "My First dataset"
                , fillColor: "#458ab6"
                , strokeColor: "#458ab6"
                , highlightFill: "#458ab6"
                , highlightStroke: "#458ab6"
                , data: [10, 30, 80, 61, 26, 75, 40]
            }
            , {
                label: "My Second dataset"
                , fillColor: "#45b6ab"
                , strokeColor: "#45b6ab"
                , highlightFill: "#45b6ab"
                , highlightStroke: "#45b6ab"
                , data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
        
    };
    
    var chart2 = new Chart(ctx2).Bar(data2, {
        scaleBeginAtZero: true
        , scaleShowGridLines: true
        
        , scaleGridLineColor: "rgba(0,0,0,.05)"
        , scaleGridLineWidth: 1
        , scaleShowHorizontalLines: true
        , scaleShowVerticalLines: true
        , barShowStroke: false
        , bar: 0.5
        , tooltipCornerRadius: 2
        , barDatasetSpacing: 100
        , legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        , responsive: true
    });
    var ctx3 = document.getElementById("chart3").getContext("2d");
    var data3 = [
        {
            value: 300
            , color: "#458ab6"
            , highlight: "#458ab6"
            , label: "Blue"
        }
        , {
            value: 50
            , color: "#45b6ab"
            , highlight: "#45b6ab"
            , label: "Primary"
        }
        , {
            value: 50
            , color: "#99d683"
            , highlight: "#99d683"
            , label: "Green"
        }
        , {
            value: 50
            , color: "#ffbab9"
            , highlight: "#ffbab9"
            , label: "Red"
        }
        , {
            value: 100
            , color: "#4c5667"
            , highlight: "#4c5667"
            , label: "Dark"
        }
    ];
    var myPieChart = new Chart(ctx3).Pie(data3, {
        segmentShowStroke: true
        , segmentStrokeColor: "#fff"
        , segmentStrokeWidth: 0.1
        , animationSteps: 100
        , tooltipCornerRadius: 2
        , animationEasing: "easeOutBounce"
        , animateRotate: true
        , animateScale: false
        , legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        , responsive: true
    });
    var ctx4 = document.getElementById("chart4").getContext("2d");
    var data4 = [
        {
            value: 300
            , color: "#45b6ab"
            , highlight: "#45b6ab"
            , label: "Primary"
        }
        , {
            value: 50
            , color: "#458ab6"
            , highlight: "#458ab6"
            , label: "Blue"
        }
        , {
            value: 100
            , color: "#4c5667"
            , highlight: "#4c5667"
            , label: "Dark"
        }
    ];
    var myDoughnutChart = new Chart(ctx4).Doughnut(data4, {
        segmentShowStroke: true
        , segmentStrokeColor: "#fff"
        , segmentStrokeWidth: 2
        , animationSteps: 100
        , tooltipCornerRadius: 2
        , animationEasing: "easeOutBounce"
        , animateRotate: true
        , animateScale: false
        , legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        , responsive: true
    });
    var ctx5 = document.getElementById("chart5").getContext("2d");
    var data5 = [
        {
            value: 300
            , color: "#45b6ab"
            , highlight: "#45b6ab"
            , label: "Megna"
        }
        , {
            value: 50
            , color: "#458ab6"
            , highlight: "#458ab6"
            , label: "Blue"
        }
        , {
            value: 100
            , color: "#ffbab9"
            , highlight: "#ffbab9"
            , label: "Red"
        }
        , {
            value: 40
            , color: "#4c5667"
            , highlight: "#4c5667"
            , label: "Grey"
        }

    ];
    var myPolarArea = new Chart(ctx5).PolarArea(data5, {
        scaleShowLabelBackdrop: true
        , scaleBackdropColor: "rgba(255,255,255,0.75)"
        , scaleBeginAtZero: true
        , scaleBackdropPaddingY: 2
        , scaleBackdropPaddingX: 2
        , scaleShowLine: true
        , segmentShowStroke: true
        , segmentStrokeColor: "#fff"
        , segmentStrokeWidth: 2
        , animationSteps: 100
        , tooltipCornerRadius: 2
        , animationEasing: "easeOutBounce"
        , animateRotate: true
        , animateScale: false
        , legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        , responsive: true
    });
    var ctx6 = document.getElementById("chart6").getContext("2d");
    var data6 = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"]
        , datasets: [
            {
                label: "My First dataset"
                , fillColor: "#458ab6"
                , strokeColor: "#458ab6"
                , pointColor: "#458ab6"
                , pointStrokeColor: "#fff"
                , pointHighlightFill: "#fff"
                , pointHighlightStroke: "#458ab6"
                , data: [65, 59, 90, 81, 56, 55, 40]
            }
            , {
                label: "My Second dataset"
                , fillColor: "#45b6ab"
                , strokeColor: "#45b6ab"
                , pointColor: "#45b6ab"
                , pointStrokeColor: "#fff"
                , pointHighlightFill: "#fff"
                , pointHighlightStroke: "#45b6ab"
                , data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
    var myRadarChart = new Chart(ctx6).Radar(data6, {
        scaleShowLine: true
        , angleShowLineOut: true
        , scaleShowLabels: false
        , scaleBeginAtZero: true
        , angleLineColor: "rgba(0,0,0,.1)"
        , angleLineWidth: 1
        , pointLabelFontFamily: "'Arial'"
        , pointLabelFontStyle: "normal"
        , pointLabelFontSize: 10
        , pointLabelFontColor: "#666"
        , pointDot: true
        , pointDotRadius: 3
        , tooltipCornerRadius: 2
        , pointDotStrokeWidth: 1
        , pointHitDetectionRadius: 20
        , datasetStroke: true
        , datasetStrokeWidth: 2
        , datasetFill: true
        , legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        , responsive: true
    });
});