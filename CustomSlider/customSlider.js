<script>
    $(function() {

        var sliders = [
            {sliderid: "bins", inputid: "binsCopy"},
            {sliderid:"bins2", inputid: "bins2Copy"}
        ];

        function setInputCSS () {
            for ( var i = 0; i < sliders.length; i++ ) {
                $("#" + sliders[i].inputid).css("background-color","#428bca");
                $("#" + sliders[i].inputid).css("color","white");
            }
        }

        var setupEvents = (i) => {
            var sliderid = sliders[i].sliderid;
            var inputid = sliders[i].inputid;
            $(document).on('change','#' + sliderid, function(){
                $("#" + inputid).val( $("#" + sliderid).val() );
            });

            $(document).on('change', '#' + inputid, function(){
                slider = $("#" + sliderid).data("ionRangeSlider");
                slider.update({from: $("#" + inputid).val()});
            });
        }

        var syncSliderAndInput = (i) => {
            
            var sliderid = sliders[i].sliderid;
            var max = $("#" + sliderid).data("max");
            var min = $("#" + sliderid).data("min");
            var from = $("#" + sliderid).data("from");
            var step = $("#" + sliderid).data("step");

            var inputid = sliders[i].inputid;

            $("#" + inputid).attr({
                "max" : max,
                "min" : min,
                "value":from,
                "step": step
            });
        }

        setInputCSS();
        for ( var i = 0; i < sliders.length; i++ ) {
            setupEvents(i);
            syncSliderAndInput(i);
        }

        console.log("ready!");

   });
</script>