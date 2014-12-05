/*This retrieves the click event of the image and allows the user to expand the image's src in a modal pop up box */
$(document).ready(function() {

    /*takes small pictures and sets the attribute of src */
    $(".small-pic").on('click',function() {

        /*variables to implement code*/
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';

        /*display the modal and modal's body */
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        }); /*The above code simply calls the .modal() function as soon as we click a thumbnail; the contents are then grabbed from the two variable created (img and src) */
    });
})