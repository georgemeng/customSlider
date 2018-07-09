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
                $("#" + sliders[i].inputid).css("text-align", "center");
            }
        }

        var setupEvents = (i) => {
            var sliderid = sliders[i].sliderid;
            var inputid = sliders[i].inputid;
            $(document).on('change','#' + sliderid, function(){
                $("#" + inputid).val( $("#" + sliderid).val() );
            });

            $(document).on('change', '#' + inputid, function(){

                var text = $("#" + inputid).val();
                if ( isNaN(text) ) return;

                slider = $("#" + sliderid).data("ionRangeSlider");
                slider.update({from: $("#" + inputid).val()});
            });
        }

        var syncSliderAndInput = (i) => {
            
            var sliderid = sliders[i].sliderid;
            var from = $("#" + sliderid).data("from");

            var inputid = sliders[i].inputid;

            $("#" + inputid).attr({
                "value":from
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