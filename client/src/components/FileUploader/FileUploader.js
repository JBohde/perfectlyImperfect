function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
// HTML
{/* <input type='file' onchange="readURL(this);" />
<img id="blah" src="http://placehold.it/180" alt="your image" /> */}

// CSS
// img{
//     max-width:180px;
//   }
//   input[type=file]{
//   padding:10px;
//   background:#2d2d2d;}