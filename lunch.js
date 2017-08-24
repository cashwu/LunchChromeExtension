$("<button id='comment' class='btn btn-primary' style='margin-bottom: 10px;' data-toggle='modal' data-target='#lunchModal'>Comment</button>").insertAfter("h2");

var modal =
    `<div class="modal" id="lunchModal" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Comment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `;

$(modal).insertAfter("#submitForm");

// var $searchDBFilter = $('#searchDB');
// var $searchTableFilter = $('#searchTable');

// function Filter(i, e, obj) {
//     return $(e).val().toLowerCase().indexOf(obj.val().toLowerCase()) > -1;
// }

// function FilterDB(i, e) {
//     return Filter(i, e, $searchDBFilter);
// }

// function FilterTable(i, e) {
//     return Filter(i, e, $searchTableFilter);
// }

// $searchDBFilter.keyup(function() {
//     $('#Database option').hide().filter(FilterDB).show();
// });

// $searchTableFilter.keyup(function() {
//     $('#Table option').hide().filter(FilterTable).show();
// });


console.log("load done..");