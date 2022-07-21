
    $(function() {
        $('dt').click(function() {
          $(this).next('dd:not(:animated)').slideToggle();
        });
      });
