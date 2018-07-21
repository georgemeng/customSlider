    $(function() {

        var sliders = [];
/*
        [
            {sliderid: 'bins'},
            {sliderid:'bins2'}
        ];
*/
        var setupEvents = (i) => {
            var sliderid = sliders[i].sliderid;
            var inputid = sliders[i].sliderid + '_mapping';
            $(document).on('change','#' + sliderid, function(){
                $('#' + inputid).val( $('#' + sliderid).val() );
            });

            $(document).on('change', '#' + inputid, function(){

                var maxValue = $('#' + sliderid).data("max");
                var minValue = $('#' + sliderid).data("min");
 
                var text = $('#' + inputid).val();
                if ( isNaN(text) ) return;

                if ( text > maxValue ) $('#' + inputid).val(maxValue);
                if ( text < minValue ) $('#' + inputid).val(minValue);

                slider = $('#' + sliderid).data('ionRangeSlider');
                slider.update({from: $('#' + inputid).val()});
            });
        }

        var aInput = $('.customSliderInput');
        for ( var i = 0; i < aInput.length; i++ ) {
            var id = aInput[i].id;
            var sliderID = id.replace('_mapping','');
            sliders.push({sliderid: sliderID }) ;
        }

        for ( var i = 0; i < sliders.length; i++ ) {
            setupEvents(i);
        }

        console.log('ready!');

   });
