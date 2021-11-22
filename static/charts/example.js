

function myFunction(val)
{
    var genderBox = document.getElementById('genderBox');
    if(val.value == "Demographic features")
    {
        genderBox.innerHTML = '';
        var opt = document.createElement("option");
        opt.innerHTML = "Gender";

        var opt1 = document.createElement("option");
        opt1.innerHTML = "Gender-Grade";

        var opt2 = document.createElement("option");
        opt2.innerHTML = "Nationality";

        var opt3 = document.createElement("option");
        opt3.innerHTML = "Nationality-Grade";

        var opt4 = document.createElement("option");
        opt4.innerHTML = "Birthplace";

        var opt5 = document.createElement("option");
        opt5.innerHTML = "Birthplace-Grade";


        genderBox.appendChild(opt);
        genderBox.appendChild(opt1);
        genderBox.appendChild(opt2);
        genderBox.appendChild(opt3);
        genderBox.appendChild(opt4);
        genderBox.appendChild(opt5);

    }

    if(val.value == "AboutParents features")
    {
        genderBox.innerHTML = '';

        var opt = document.createElement("option");
        opt.innerHTML = "Parent responsible for student-Grade";

        var opt1 = document.createElement("option");
        opt1.innerHTML = "ParentAnsweringSurvey-Grade";

        var opt2 = document.createElement("option");
        opt2.innerHTML = "ParentschoolSatisfaction-Grade";

        genderBox.appendChild(opt);
        genderBox.appendChild(opt1);
        genderBox.appendChild(opt2);



    }

    if(val.value == "Academic background features")
    {
        genderBox.innerHTML = '';
        var opt = document.createElement("option");
        opt.innerHTML = "Educationalstage-Grade";

        var opt1 = document.createElement("option");
        opt1.innerHTML = "GradeLevels-Grade";

        var opt2 = document.createElement("option");
        opt2.innerHTML = "SectionID-Grade";

        var opt3 = document.createElement("option");
        opt3.innerHTML = "Topic-Grade";

        var opt4 = document.createElement("option");
        opt4.innerHTML = "Semester-Grade";

        genderBox.appendChild(opt);
        genderBox.appendChild(opt1);
        genderBox.appendChild(opt2);
        genderBox.appendChild(opt3);
        genderBox.appendChild(opt4);

    }

    if(val.value == "Behavior features")
    {
        genderBox.innerHTML = '';
        var opt = document.createElement("option");
        opt.innerHTML = "RaiseHand-Grade";

        var opt1 = document.createElement("option");
        opt1.innerHTML = "VistedResources-Grade";

        var opt2 = document.createElement("option");
        opt2.innerHTML = "VewingAnnouncements-Grade";

        var opt3 = document.createElement("option");
        opt3.innerHTML = "Discussion-Grade";

        var opt4 = document.createElement("option");
        opt4.innerHTML = "StudentAbsenceDays-Grade";



        genderBox.appendChild(opt);
        genderBox.appendChild(opt1);
        genderBox.appendChild(opt2);
        genderBox.appendChild(opt3);
        genderBox.appendChild(opt4);




    }

    console.log(val.value);
}



function newFunction(val)
{
    console.log(val.value);
    if(val.value=="Gender")
    {
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Gender'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Male',
                            y: 305,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Female',
                            y: 175

                        }]
                }]
        });
    }

    if(val.value=="Female-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Female-Grade'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'High',
                        y: 75,

                    }, {
                        name: 'Medium',
                        y: 76

                    }, {
                        name: 'Low',
                        y: 24


                        }]
                }]
        });
    }

    if(val.value=="Male-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Male-Grade'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'High',
                            y: 67,

                        }, {
                            name: 'Medium',
                            y: 135

                        }, {
                            name: 'Low',
                            y: 103


                        }]
                }]
        });
    }

    if(val.value=="Gender-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Gender-Grade'
            },
            xAxis: {
                categories: ['Male', 'Female']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [103, 24]

            }, {
                name: 'Medium',
                data: [135, 76]

            }, {
                name: 'High',
                data: [67, 75]


            }]
        });
    }

    if(val.value=="Nationality")
    {
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Nationality'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Kuwait',
                            y: 179,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Jordan',
                            y: 172,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Palestine',
                            y: 28
                        }, {
                            name: 'Iraq',
                            y: 22
                        }, {
                            name: 'Lebanon',
                            y: 17
                        }, {
                            name: 'Tunis',
                            y: 12
                        }, {
                            name: 'Saudi Arabia',
                            y: 11
                        }, {
                            name: 'Egypt',
                            y: 9
                        }, {
                            name: 'Syria',
                            y: 7
                        }, {

                            name: 'USA',
                            y: 6
                        }, {
                            name: 'Tran',
                            y: 6
                        }, {
                            name: 'Libya',
                            y: 6
                        }, {
                            name: 'Morocco',
                            y: 4
                        }, {
                            name: 'Venezuela',
                            y: 1
                        }]
                }]
        });

    }

    if(val.value=="Nationality-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Nationality-Grade'
            },
            subtitle: {
                text: 'source:Kalboard 360'
            },
            xAxis: {
                categories: [
                    'Kuwait',
                    'Jordan',
                    'Palestine',
                    'Iraq',
                    'Lebanon',
                    'Tunis',
                    'SaudiArabia',
                    'Egypt',
                    'Syria',
                    'USA',
                    'Iran',
                    'Lybia',
                    'Morrocco',
                    'Venzuela',
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'count'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Low',
                    data: [68, 37, 0, 0, 2, 4, 1, 3, 2, 1, 2, 6, 1, 0]

                }, {
                    name: 'Medium',
                    data: [75, 82, 16, 8, 6, 5, 4, 4, 3, 2, 4, 0, 2, 0]

                }, {
                    name: 'High',
                    data: [36, 53, 12, 14, 9, 3, 6, 2, 2, 3, 0, 0, 1, 1]


                }]
        });
    }

    if(val.value=="Birthplace")
    {
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Place of Birth'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Kuwait',
                        y: 180,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Jordan',
                        y: 176,
                        sliced: true,
                        selected: true
                    }, {

                        name: 'Iraq',
                        y: 22
                    }, {
                        name: 'Lebanon',
                        y: 19
                    }, {
                        name: 'USA',
                        y: 16
                    }, {
                        name: 'Saudi Arabia',
                        y: 16
                    }, {
                        name: 'Palestine',
                        y: 10
                    }, {
                        name: 'Tunis',
                        y: 9
                    }, {

                        name: 'Egypt',
                        y: 9
                    }, {
                        name: 'Syria',
                        y: 6
                    }, {


                        name: 'Iran',
                        y: 6
                    }, {
                        name: 'Libya',
                        y: 6
                    }, {
                        name: 'Morocco',
                        y: 4
                    }, {
                        name: 'Venezuela',
                        y: 1
                        }]
                }]
        });
    }

    if(val.value=="Birthplace-Grade")
    {

        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Birthplace-Grade'
            },
            subtitle: {
                text: 'Source:Kalboard 360'
            },
            xAxis: {
                categories: [
                'Kuwait',
                'Jordan',
                'Iraq',
                'Lebanon',
                'SaudiArabia',
                'Palestine',
                'Egypt',
                'Iran',
                'Lybia',
                'Morocco',
                'Tunis',
                'USA',
                'Syria',
                'Venzuela'

            ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Low',
                    data: [69, 34, 0, 2, 4, 0, 3, 2, 6, 1, 3, 2, 1, 0]

                }, {
                    name: 'Medium',
                    data: [76, 89, 8, 6, 5, 4, 3, 4, 0, 2, 3, 8, 3, 0]

                }, {
                    name: 'High',
                    data: [35, 53, 14, 11, 7, 6, 3, 0, 0, 1, 3, 6, 2, 1]



                }]
        });
    }

    if(val.value=="Relation")
    {
        Highcharts.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Relation'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Father',
                            y: 58.9,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Mather',
                            y: 41.1

                        }]
                }]
        });

    }

    if(val.value=="Parent responsible for student-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Parent responsible for student-Grade'
            },
            xAxis: {
                categories: ['Father', 'Mom']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                    name: 'Low',
                    data: [104, 23]

                }, {
                    name: 'Medium',
                    data: [137, 74]

                }, {
                    name: 'High',
                    data: [42, 100]



                }]
        });
    }

    if(val.value=="ParentAnsweringSurvey-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Parent Answering Survey-Grade'
            },
            xAxis: {
                categories: ['Yes', 'No']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [28,99]
            }, {
                name: 'Medium',
                data: [128,83]
            }, {
                name: 'High',
                data: [114,28]
            }]
        });
    }


    if(val.value=="ParentschoolSatisfaction-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Parent school Satisfaction-Grade'
            },
            xAxis: {
                categories: ['Good', 'Bad']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [43,84]
            }, {
                name: 'Medium',
                data: [131,80]
            }, {
                name: 'High',
                data: [118,24]
            }]
        });
    }

    if(val.value=="RaiseHand-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Behavior-RaiseHand-Grade'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['Low', 'Medium', 'High'],
                title: {
                    text: 'Experiment No.'
                }
            },

            yAxis: {
                title: {
                    text: 'Observations'
                },
                plotLines: [{
                        value: 51,
                        color: 'red',
                        width: 1,
                        label: {
                            text: 'mean: 50',
                            align: 'space-around',
                            style: {
                                color: 'gray'
                            }
                        }
                    }]
            },

            series: [{
                    name: 'Observations',
                    data: [
                        [0, 5, 10, 20.5, 43.75],
                        [0, 24, 50, 72, 100],
                        [24.25, 61, 75, 85.5, 100]

                    ],
                    tooltip: {
                        headerFormat: '<em>Experiment No {point.key}</em><br/>'
                    }
                }, {
                    name: 'Outlier',
                    color: Highcharts.getOptions().colors[0],
                    type: 'scatter',
                    data: [// x, y positions where 0 is the first category
                        [0, 49],
                        [0, 50],
                        [0, 52],
                        [0, 55],
                        [0, 69],
                        [0, 70],
                        [0, 70],
                        [0, 72],
                        [0, 75],
                        [0, 80],
                        [2, 10],
                        [2, 13],
                        [2, 13], [2, 14],
                        [2, 14],
                        [2, 15],
                        [2, 15],
                        [2, 15], [2, 19],
                        [2, 22],
                        [2, 23],
                    ],
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                        pointFormat: 'Observation: {point.y}'
                    }
                }]

        });
    }

    if(val.value=="VistedResources-Grade")
    {
        Highcharts.chart('container', {

            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Behavior-VisitTedresource-Grade'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['Low', 'Medium', 'High'],
                title: {
                    text: 'Experiment No.'
                }
            },

            yAxis: {
                title: {
                    text: 'Observations'
                },
                plotLines: [{
                        value: 65,
                        color: 'red',
                        width: 1,
                        label: {
                            text: 'mean: 65',
                            align: 'space-around',
                            style: {
                                color: 'gray'
                            }
                        }
                    }]
            },

            series: [{
                    name: 'Observations',
                    data: [
                        [0, 7.5, 11, 23, 46.25],
                        [0, 36.5, 71.5, 82.5, 100],
                        [41.75, 71, 84, 90.5, 100]

                    ],
                    tooltip: {
                        headerFormat: '<em>Experiment No {point.key}</em><br/>'
                    }
                }, {
                    name: 'Outlier',
                    color: Highcharts.getOptions().colors[0],
                    type: 'scatter',
                    data: [// x, y positions where 0 is the first category
                        [0, 50],
                        [0, 50],
                        [0, 51],
                        [0, 51],
                        [0, 52],
                        [0, 60],
                        [0, 60],
                        [0, 61],
                        [0, 62],
                        [0, 65],
                        [0, 70],
                        [0, 72],
                        [0, 74],
                        [0, 76],
                        [0, 90],
                        [2, 4],
                        [2, 6],
                        [2, 12],
                        [2, 17],
                        [2, 20],
                        [2, 21],
                        [2, 29],
                        [2, 31],
                    ],
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                        pointFormat: 'Observation: {point.y}'
                    }
                }]

        });
    }

    if(val.value=="VewingAnnouncements-Grade")
    {
        Highcharts.chart('container', {

            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Behavior-VewingAnnouncements-Grade'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['Low', 'Medium', 'High'],
                title: {
                    text: 'Experiment No.'
                }
            },

            yAxis: {
                title: {
                    text: 'Observations'
                },
                plotLines: [{
                        value: 33,
                        color: 'red',
                        width: 1,
                        label: {
                            text: 'mean: 33',
                            align: 'space-around',
                            style: {
                                color: 'gray'
                            }
                        }
                    }]
            },

            series: [{
                    name: 'Observations',
                    data: [
                        [0, 4, 11, 20, 44],
                        [0, 21, 37.5, 58.5, 100],
                        [0, 34, 52, 76, 100]

                    ],
                    tooltip: {
                        headerFormat: '<em>Experiment No {point.key}</em><br/>'
                    }
                }, {
                    name: 'Outlier',
                    color: Highcharts.getOptions().colors[0],
                    type: 'scatter',
                    data: [// x, y positions where 0 is the first category
                        [0, 48],
                        [0, 50],
                        [0, 50],
                        [0, 50],
                        [0, 53],
                        [0, 59],
                        [0, 62],
                        [0, 64],
                        [0, 62],
                        [0, 64],
                        [0, 66],
                    ],
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                        pointFormat: 'Observation: {point.y}'
                    }
                }]

        });

    }

    if(val.value=="Discussion-Grade")
    {
        Highcharts.chart('container', {

            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Behavior-Discussion'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['Low', 'Medium', 'High'],
                title: {
                    text: 'Experiment No.'
                }
            },

            yAxis: {
                title: {
                    text: 'Observations'
                },
                plotLines: [{
                        value: 39,
                        color: 'red',
                        width: 1,
                        label: {
                            text: 'mean: 39',
                            align: 'space-around',
                            style: {
                                color: 'gray'
                            }
                        }
                    }]
            },

            series: [{
                    name: 'Observations',
                    data: [
                        [0, 13, 21, 49.5, 91.25],
                        [0, 22, 40, 66, 100],
                        [0, 30, 62, 71, 100]

                    ],
                    tooltip: {
                        headerFormat: '<em>Experiment No {point.key}</em><br/>'
                    }
                }, {
                    name: 'Outlier',
                    color: Highcharts.getOptions().colors[0],
                    type: 'scatter',
                    data: [// x, y positions where 0 is the first category
                        [0, 91],
                        [0, 97],
                        [0, 98],
                        [0, 98],
                    ],
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                        pointFormat: 'Observation: {point.y}'
                    }
                }]

        });

    }


    if(val.value=="StudentAbsenceDays-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Absence Day'
            },
            xAxis: {
                categories: ['Above 7 days', 'Under 7 days']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [116,11]
            }, {
                name: 'Medium',
                data: [71,140]
            }, {
                name: 'High',
                data: [4,138]
            }]
        });

    }

    if(val.value=="Educationalstage-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Education Stage'
            },
            xAxis: {
                categories: ['Lowlevel', 'Middleschool', 'Highschool']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [65,54,8]
            }, {
                name: 'Medium',
                data: [79,118,14]
            }, {
                name: 'High',
                data: [55,76,11]
            }]
        });
    }

    if(val.value=="GradeLevels-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'GradeLevels-Grade'
            },
            xAxis: {
                categories: ['G02', 'G04', 'G05', 'G06', 'G07', 'G08', 'G09', 'G10', 'G11', 'G12']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                    name: 'Low',
                    data: [50, 11, 3, 2, 28, 25, 1, 1, 2, 4]
                }, {
                    name: 'Medium',
                    data: [56, 23, 0, 16, 44, 58, 4, 2, 5, 3]
                }, {
                    name: 'High',
                    data: [41, 14, 0, 14, 29, 33, 0, 1, 6, 4]
                }]
        });
    }

    if(val.value=="SectionID-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Section'
            },
            xAxis: {
                categories: ['A', 'B', 'C']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [71,48,8]
            }, {
                name: 'Medium',
                data: [128,66,17]
            }, {
                name: 'High',
                data: [84,53,5]
            }]
        });
    }

    if(val.value=="Topic-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Topic'
            },
            xAxis: {
                categories: ['IT', 'Frencch','Arabic','Science','English','Biology','Spanish','Geology','Chemistry','Quran','Math','History']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [38,16,17,10,10,4,8,0,8,6,7,3]
            }, {
                name: 'Medium',
                data: [42,29,23,25,18,10,12,18,6,8,8,12]
            }, {
                name: 'High',
                data: [15,20,19,16,17,16,5,6,10,8,6,4]
            }]
        });
    }

    if(val.value=="Semester-Grade")
    {
        Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Semester'
            },
            xAxis: {
                categories: ['First', 'Second']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'COUNT'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Low',
                data: [77,50]
            }, {
                name: 'Medium',
                data: [106,105]
            }, {
                name: 'High',
                data: [62,80]
            }]
        });
    }
}