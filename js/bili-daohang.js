document.writeln("<!DOCTYPE html>");
document.writeln("<html>");
document.writeln("<head lang=\'en\'>");
document.writeln("<meta charset=\'UTF-8\'>");
document.writeln("<title>热点指数</title>");
document.writeln("");
document.writeln("<script src=\'js/echarts.js\'></script>");
document.writeln("");
document.writeln("</head>");
document.writeln("<body>");

document.writeln("    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->");
document.writeln("    <div id=\'main\' style=\'width: 600px;height:400px;position:relative;left:150px;\'></div>");
document.writeln("    <script type=\'text/javascript\'>  ");
document.writeln("    ");
document.writeln("       // 基于准备好的dom，初始化echarts实例");
document.writeln("var myChart = echarts.init(document.getElementById(\'main\'));");
document.writeln("");
document.writeln("// 绘制图表");
document.writeln("myChart.setOption({");
document.writeln("    ");
document.writeln("    backgroundColor: \'#2c343c\',");
document.writeln("    textStyle: {");
document.writeln("        color: \'rgba(255, 255, 255, 0.3)\'");
document.writeln("    },   ");
document.writeln("     title: {");
document.writeln("        text: \'热度信息占比\',");
document.writeln("        left: \'center\',");
document.writeln("        top: 20,");
document.writeln("        textStyle: {");
document.writeln("            color: \'#ccc\'");
document.writeln("        }");
document.writeln("    },");
document.writeln("    series : [");
document.writeln("        {");
document.writeln("            name: \'访问来源\',");
document.writeln("            type: \'pie\',");
document.writeln("            radius: \'55%\',");
document.writeln("            roseType: \'angle\',  ");
document.writeln("            data:[");
document.writeln("                {value:235, name:\'凤凰\'},");
document.writeln("                {value:274, name:\'新华社\'},");
document.writeln("                {value:310, name:\'人民日报\'},");
document.writeln("                {value:335, name:\'微信\'},");
document.writeln("                {value:400, name:\'微博\'}");
document.writeln("            ],");
document.writeln("            itemStyle: {");
document.writeln("            // 设置扇形的颜色");
document.writeln("            // color: \'#c23531\',");
document.writeln("            // 阴影的大小");
document.writeln("            shadowBlur: 200,");
document.writeln("            // 阴影水平方向上的偏移");
document.writeln("            shadowOffsetX: 0,");
document.writeln("            // 阴影垂直方向上的偏移");
document.writeln("            shadowOffsetY: 0,");
document.writeln("            // 阴影颜色");
document.writeln("            shadowColor: \'rgba(0, 0, 0, 0.5)\',");
document.writeln("            emphasis: {");
document.writeln("            shadowBlur: 200,");
document.writeln("            shadowColor: \'rgba(0, 0, 0, 0.5)\'");
document.writeln("                }");
document.writeln("            ");
document.writeln("            },");
document.writeln("            labelLine: {");
document.writeln("            lineStyle: {");
document.writeln("                color: \'rgba(255, 255, 255, 0.3)\'");
document.writeln("            }");
document.writeln("            },");
document.writeln("            ");
document.writeln("            // label: {");
document.writeln("            // textStyle: {");
document.writeln("            //     color: \'rgba(25, 25, 255, 0.3)\'");
document.writeln("            // }");
document.writeln("            // }");
document.writeln("            ");
document.writeln("        }");
document.writeln("    ]");
document.writeln("})");
document.writeln("");
document.writeln("        </script> ");
document.writeln("        ");
document.writeln("");
document.writeln(" ");
// document.writeln(" <script type=\'text/javascript\' src=\'js/footer1.js\'></script>");
document.writeln(" ");
document.writeln(" ");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");
document.writeln("");