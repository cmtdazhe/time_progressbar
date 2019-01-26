let echarsObj = {};

//仪表1
echarsObj.toolbox1 = function(){
	
	var myChart1 = echarts.init(document.getElementById('toolbox_first'));
	option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
        }
    },
    series: [
        {		
						
            name: '业务指标',
            type: 'gauge',
						splitLine:{
							show:false,
							length:'10',
						},
						axisLabel:{
							distance:'3',
						},
						axisLine: {
							lineStyle: {
								width : '10',
							},
						},
						axisTick: {
							splitNumber:'1',
							length:'10',
						},
						pointer:{
							width:'5',
						},
            detail: {
							fontSize:'20',
							formatter:'{value}%',
							},
            data: [{value: 40, name: '完成率'}],
						
        }
    ]
};
 myChart1.setOption(option);
}
  
	
//仪表2
echarsObj.toolbox2 = function(){
	
	var myChart2 = echarts.init(document.getElementById('toolbox_first2'));
	
		option = {
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        feature: {
	        }
	    },
	    series: [
	        {		
							
	            name: '业务指标',
	            type: 'gauge',
							splitLine:{
								show:false,
								length:'10',
							},
							axisLabel:{
								distance:'3',
							},
							axisLine: {
								lineStyle: {
									width : '10',
								},
							},
							axisTick: {							
								splitNumber:'1',
								length:'10',
							},
							pointer:{
								width:'5',
							},
	            detail: {
								fontSize:'20',
								formatter:'{value}%',
								},
	            data: [{value: 90, name: '完成率'}],
							
	        }
	    ]
	};
 myChart2.setOption(option);
}

//仪表3
echarsObj.toolbox3 = function(){
	
	var myChart3 = echarts.init(document.getElementById('toolbox_second'));
	option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
        }
    },
    series: [
        {		
						
            name: '业务指标',
            type: 'gauge',
						splitLine:{
							show:false,
							length:'10',
						},
						axisLabel:{
							distance:'3',
						},
						axisLine: {
							lineStyle: {
								width : '10',
							},
						},
						axisTick: {
							splitNumber:'1',
							length:'10',
						},
						pointer:{
							width:'5',
						},
            detail: {
							fontSize:'20',
							formatter:'{value}%',
							},
            data: [{value: 10, name: '完成率'}],
						
        }
    ]
};
 myChart3.setOption(option);
}
  
	
//仪表4
echarsObj.toolbox4 = function(){	
	var myChart4 = echarts.init(document.getElementById('toolbox_second2'));
	
		option = {
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        feature: {
	        }
	    },
	    series: [
	        {		
							
	            name: '业务指标',
	            type: 'gauge',
							splitLine:{
								show:false,
								length:'10',
							},
							axisLabel:{
								distance:'3',
							},
							axisLine: {
								lineStyle: {
									width : '10',
								},
							},
							axisTick: {							
								splitNumber:'1',
								length:'10',
							},
							pointer:{
								width:'5',
							},
	            detail: {
								fontSize:'20',
								formatter:'{value}%',
								},
	            data: [{value: 20, name: '完成率'}],
							
	        }
	    ]
	};
 myChart4.setOption(option);
} 

//环形1
echarsObj.toolbox6_1 = function(){	
	var myChart5 = echarts.init(document.getElementById('pieDiagram1'));
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
						hoverAnimation:false,
						itemStyle:{
							color: function (params) {
                  // 自定义颜色
                  var colorList = [
                    'gainsboro','#33FF33', '#fff'
                  ]
                  return colorList[params.dataIndex]
                }

						},
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10},
                {value:40},
                {value:50},
            ]
        }
    ]
};
    myChart5.setOption(option);
		}
//环形2
echarsObj.toolbox6_2 = function(){	
	var myChart5 = echarts.init(document.getElementById('pieDiagram2'));
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
						hoverAnimation:false,
						itemStyle:{
							color: function (params) {
                  // 自定义颜色
                  var colorList = [
                    'gainsboro','#33FF33', '#fff'
                  ]
                  return colorList[params.dataIndex]
                }

						},
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10},
                {value:40},
                {value:50},
            ]
        }
    ]
};
    myChart5.setOption(option);
		}
//环形3
echarsObj.toolbox6_3 = function(){	
	var myChart5 = echarts.init(document.getElementById('pieDiagram3'));
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
						hoverAnimation:false,
						itemStyle:{
							color: function (params) {
                  // 自定义颜色
                  var colorList = [
                    'gainsboro','#33FF33', '#fff'
                  ]
                  return colorList[params.dataIndex]
                }

						},
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10},
                {value:40},
                {value:50},
            ]
        }
    ]
};
    myChart5.setOption(option);
		}
//环形4
echarsObj.toolbox6_4 = function(){	
	var myChart5 = echarts.init(document.getElementById('pieDiagram4'));
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
						hoverAnimation:false,
						itemStyle:{
							color: function (params) {
                  // 自定义颜色
                  var colorList = [
                    'gainsboro','#33FF33', '#fff'
                  ]
                  return colorList[params.dataIndex]
                }

						},
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10},
                {value:40},
                {value:50},
            ]
        }
    ]
};
    myChart5.setOption(option);
		}
//环形5
echarsObj.toolbox6_5 = function(){	
	var myChart5 = echarts.init(document.getElementById('pieDiagram5'));
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
						hoverAnimation:false,
						itemStyle:{
							color: function (params) {
                  // 自定义颜色
                  var colorList = [
                    'gainsboro','#33FF33', '#fff'
                  ]
                  return colorList[params.dataIndex]
                }

						},
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10},
                {value:40},
                {value:50},
            ]
        }
    ]
};
    myChart5.setOption(option);
		}
//环形6
echarsObj.toolbox6_6 = function(){	
	var myChart5 = echarts.init(document.getElementById('pieDiagram6'));
    var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
						hoverAnimation:false,
						itemStyle:{
							color: function (params) {
                  // 自定义颜色
                  var colorList = [
                    'gainsboro','#33FF33', '#fff'
                  ]
                  return colorList[params.dataIndex]
                }

						},
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:10},
                {value:40},
                {value:50},
            ]
        }
    ]
};
    myChart5.setOption(option);
		}



$(function(){
    echarsObj.toolbox1();
		echarsObj.toolbox2();
		echarsObj.toolbox3();
		echarsObj.toolbox4();
		//环形
		echarsObj.toolbox6_1();
		echarsObj.toolbox6_2();
		echarsObj.toolbox6_3();
		echarsObj.toolbox6_4();
		echarsObj.toolbox6_5();
		echarsObj.toolbox6_6();
});