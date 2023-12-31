function toggleSecondCheckbox(checkbox) {
   var secondCheckbox = document.getElementById('hnp_simple_contactform_data_more_checked');
   secondCheckbox.disabled = !checkbox.checked;
}

document.addEventListener('DOMContentLoaded', function() {
   var firstCheckbox = document.getElementById('hnp_simple_contactform_data_checked');
   
   if (firstCheckbox) {
      firstCheckbox.addEventListener('change', function() {
         toggleSecondCheckbox(this);
      });
      
      toggleSecondCheckbox(firstCheckbox);
   }
});


var translations = {
   'en': {
      'select_image_title': 'Select Image',
      'select_image_button_text': 'Select Image'
   },
   'de': {
      'select_image_title': 'Bild auswählen',
      'select_image_button_text': 'Bild auswählen'
   },
   
};

jQuery(function($) {
   $('#select_image_button').on('click', function(e) {
      e.preventDefault();
      var imageUploader = wp.media({
         title: 'Select Image',
         button: {
            text: 'Select Image'
         },
         multiple: false
      }).on('select', function() {
         var attachment = imageUploader.state().get('selection').first().toJSON();
         $('#hnp_simple_contactform_data_image_url').val(attachment.url);
		 
      }).open();
   });
});

jQuery(function($) {
   var colorInputs = [
      '#hnp_simple_contactform_data_bg_color',
      '#hnp_simple_contactform_data_border_color',
	  '#hnp_simple_contactform_data_text_color',
	  '#hnp_simple_contactform_data_button_bg_color',
	  '#hnp_simple_contactform_data_label_bg_color',
   ];

   colorInputs.forEach(function(inputId) {
      var colorInput = $(inputId);

      
      colorInput.on('focus', function() {
         $(this).wpColorPicker({
            change: function(event, ui) {
               
               colorInput.val(ui.color.toString());
            },
            clear: function() {
               
               colorInput.val('');
            }
         });
      });
   });
});