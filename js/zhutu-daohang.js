document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("<head>");
document.writeln("    <meta charset=\'utf-8\'>");
document.writeln("    <title>用户信息监测</title>");
document.writeln("    <!-- 引入 echarts.js -->");
document.writeln("    <script src=\'js/echarts.js\'></script>");
document.writeln("    ");
document.writeln("");
document.writeln("    ");
document.writeln("    </head>");
document.writeln("<body>");
document.writeln("       ");
document.writeln("    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->");
document.writeln("    <div id=\'main2\' style=\'width: 600px;height:400px;position:relative;top:20px;left:150px;\'></div>");
document.writeln("    <script type=\'text/javascript\'>");
document.writeln("        // 基于准备好的dom，初始化echarts实例");
document.writeln("        var myChart = echarts.init(document.getElementById(\'main2\'));");
document.writeln("");
document.writeln("        // 指定图表的配置项和数据");
document.writeln("        var option = {");
document.writeln("");
document.writeln("            title: {");
document.writeln("                text: \'热点信息量\'");
document.writeln("            },");
document.writeln("            tooltip: {},");
document.writeln("            legend: {");
document.writeln("                data:[\'信息量\']");
document.writeln("            },");
document.writeln("            xAxis: {");
document.writeln("                data: [\'韩国冬奥\',\'两会\',\'NCAA\',\'红海行动\',");
document.writeln("                \'中美贸易战\',\'Uber\']");
document.writeln("            },");
document.writeln("            yAxis: {},");
document.writeln("            series: [{");
document.writeln("                name: \'信息量\',");
document.writeln("                type: \'bar\',");
document.writeln("                data: [599, 290, 396, 190, 1000, 250]");
document.writeln("            }]");
document.writeln("        };");
document.writeln("");
document.writeln("        // 使用刚指定的配置项和数据显示图表。");
document.writeln("        myChart.setOption(option);");
document.writeln("    </script>");


document.writeln("</body>");
document.writeln("</html>");