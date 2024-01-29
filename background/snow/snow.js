// 背景雪花飘落特效
(function($){
	$.fn.snow = function(options){
	var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
	documentHeight 	= $(document).height(),	// 获取浏览器的高度
	documentWidth	= $(document).width(),	// 获取浏览器的宽度
	defaults = {
		minSize		: 10,
		maxSize		: 20,
		newOn		: 300,
		flakeColor	: "#FFFFFF" // 此处可以定义雪花颜色
	},
	options	= $.extend({}, defaults, options);
	var interval= setInterval( function(){
	var startPositionLeft = Math.random() * documentWidth - 50,	// 获取雪片产生时距离浏览器左边的宽度
	startOpacity = 0.5 + Math.random(),	// 获取雪片产生时的透明度
	sizeFlake = options.minSize + Math.random() * options.maxSize,
	endPositionTop = documentHeight - 2,	// 此处可以定义雪花下落消失的位置
	endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
	durationFall = documentHeight * 20 + Math.random() * 10000;	// 获取雪片下降的速度
	$flake.clone().appendTo('body').css({
		left: startPositionLeft,
		opacity: startOpacity,
		'font-size': sizeFlake,
		color: options.flakeColor
	}).animate({
		top: endPositionTop,
		left: endPositionLeft,
		opacity: 0.2
	},durationFall,'linear',function(){
		$(this).remove()
	});
	}, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({ 
	    minSize: 6,		// 定义雪花最小尺寸
	    maxSize: 22,	// 定义雪花最大尺寸
	    newOn: 50		// 定义密集程度，数字越小越密集
    });
});