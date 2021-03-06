document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("");
document.writeln("<head>");
document.writeln("    <meta  charset=\'utf-8\' />");
document.writeln("    <title>用户监测</title>");
document.writeln("    <!-- 引入 echarts.js -->");
document.writeln("    <script src=\'js/echarts.js\'></script>");
document.writeln("");
document.writeln("    ");
document.writeln("    </head>");
document.writeln("<body>");
document.writeln("       ");
document.writeln("   <!-- 为ECharts准备一个具备大小（宽高）的Dom -->");
document.writeln("   <div id=\'main1\' style=\'width: 800px;height:600px;position:relative;top:50px;left:50px;\'></div>");
document.writeln("   <script type=\'text/javascript\'>  ");
document.writeln("   ");
document.writeln("      // 基于准备好的dom，初始化echarts实例");
document.writeln("var myChart = echarts.init(document.getElementById(\'main1\'));   ");
document.writeln("");
document.writeln("");
document.writeln("data = [[\'2017-06-05\',116],[\'2017-06-06\',129],[\'2017-06-07\',135],[\'2017-06-08\',86],[\'2017-06-09\',73],[\'2017-06-10\',85],[\'2017-06-11\',73],[\'2017-06-12\',68],[\'2017-06-13\',92],[\'2017-06-14\',130],[\'2017-06-15\',245],[\'2017-06-16\',139],[\'2017-06-17\',115],[\'2017-06-18\',111],[\'2017-06-19\',309],[\'2017-06-20\',206],[\'2017-06-21\',137],[\'2017-06-22\',128],[\'2017-06-23\',85],[\'2017-06-24\',94],[\'2017-06-25\',71],[\'2017-06-26\',106],[\'2017-06-27\',84],[\'2017-06-28\',93],[\'2017-06-29\',85],[\'2017-06-30\',73],[\'2017-07-01\',83],[\'2017-07-02\',125],[\'2017-07-03\',107],[\'2017-07-04\',82],[\'2017-07-05\',44],[\'2017-07-06\',72],[\'2017-07-07\',106],[\'2017-07-08\',107],[\'2017-07-09\',66],[\'2017-07-10\',91],[\'2017-07-11\',92],[\'2017-07-12\',113],[\'2017-07-13\',107],[\'2017-07-14\',131],[\'2017-07-15\',111],[\'2017-07-16\',64],[\'2017-07-17\',69],[\'2017-07-18\',88],[\'2017-07-19\',77],[\'2017-07-20\',83],[\'2017-07-21\',111],[\'2017-07-22\',57],[\'2017-07-23\',55],[\'2017-07-24\',60]];");
document.writeln("");
document.writeln("var dateList = data.map(function (item) {");
document.writeln("    return item[0];");
document.writeln("});");
document.writeln("var valueList = data.map(function (item) {");
document.writeln("    return item[1];");
document.writeln("});");
document.writeln("");
document.writeln("option = {");
document.writeln("");
document.writeln("    // Make gradient line here");
document.writeln("    visualMap: [{");
document.writeln("        show: false,");
document.writeln("        type: \'continuous\',");
document.writeln("        seriesIndex: 0,");
document.writeln("        min: 0,");
document.writeln("        max: 300");
document.writeln("    }],");
document.writeln("");
document.writeln("");
document.writeln("    title: [{");
document.writeln("        left: \'center\',");
document.writeln("        text: \'话题热度趋势\'");
document.writeln("    }],");
document.writeln("    tooltip: {");
document.writeln("        trigger: \'axis\'");
document.writeln("    },");
document.writeln("    xAxis: [{");
document.writeln("        data: dateList");
document.writeln("    }],");
document.writeln("    yAxis: [{");
document.writeln("        splitLine: {show: false}");
document.writeln("    }],");
document.writeln("    grid: [{");
document.writeln("        bottom: \'60%\'");
document.writeln("    }],");
document.writeln("    series: [{");
document.writeln("        type: \'line\',");
document.writeln("        showSymbol: false,");
document.writeln("        data: valueList");
document.writeln("    }]");
document.writeln("};");
document.writeln("        // 使用刚指定的配置项和数据显示图表。");
document.writeln("        myChart.setOption(option);");
document.writeln("</script>");
document.writeln("");
document.writeln("</body>");
document.writeln("</html>");