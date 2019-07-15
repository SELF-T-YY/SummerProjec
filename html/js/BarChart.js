var width = 300;
var height = 200;
var rectWidth = 4;
//画布周边的空白
var padding = {left:30, right:30, top:20, bottom:20};
//定义一个数组
var dataset = [10, 20, 30, 40, 33, 24, 12, 5];
var svg = d3.select('#L_2')
            .append('svg')
            .attr('width',width)
            .attr('height',height);
//V4版本-start
var xScale = d3.scaleBand()
        .domain(d3.range(0,dataset.length))
        .range([0,width-padding.left-padding.right]);
//V4版本-end
var yScale = d3.scaleLinear()//V4版本
        .domain([0,d3.max(dataset)])
        .range([height-padding.bottom-padding.top,0]);
var rects = svg.selectAll('MyRect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class','MyRect')
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr('x',function(d,i){
            return xScale(i) + rectWidth/2;
        }).attr('y',function(d,i){
            return yScale(d);
        }).attr('width',xScale.bandwidth() - rectWidth)
        .attr('height',function(d,i){
            return height-padding.bottom-padding.top-yScale(d);
}).attr('fill','steelblue');

var texts = svg.selectAll('MyText')
        .data(dataset)
        .enter()
        .append('text')
        .attr('class','MyText')
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr('x',function(d,i){
            return xScale(i) + rectWidth/2;
}).attr('y',function(d,i){
            return yScale(d);
        }).attr('dx',function(){
            return (xScale.bandwidth() - rectWidth)/2;//V4版本
        }).attr('dy',function(){
            return 20;
        }).text(function(d){
            return d;
        });

svg.append('g')
        .attr('class','axis').attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")").call(d3.axisBottom(xScale));//d3.axisBottom(xScale)  --V4版本
svg.append('g')
        .attr('class','axis').attr("transform","translate(" + padding.left + "," + padding.top + ")").call(d3.axisLeft(yScale));//d3.axisLeft(yScale) --V4版本