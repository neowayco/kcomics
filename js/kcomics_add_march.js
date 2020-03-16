$(document).ready(function() {
	$(".tabn_cont a").click(function(){
		var detailId = $(this).attr("data_detailId");
		$(".tabn_cont a").removeClass('active');
		$(this).addClass('active');
		$(".tabn_detail").hide();
		$("#"+(detailId)).show();
	});
});