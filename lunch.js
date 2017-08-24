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
                <div class="modal-body" id="body">
                </div>
                <div class="modal-footer">
                    <div class="form-group mx-sm-3">
                        <input class="form-control" id="cmt"></textarea>
                    </div>
                    <button id="AddCmt" type="button" class="btn btn-secondary">Save</button>
                </div>
            </div>
        </div>
    </div>
    `;

$(modal).insertAfter("#submitForm");

$("#AddCmt").click(function() {
    var cmt = $("#cmt").val();
    var p = '<p>' + $("#cmt").val() + '</p>';
    $(p).appendTo("#body");

    $("#cmt").val("");
    PostData(cmt);
});

GetData();

console.log("load done..");

function GetData() {
    $.ajax({
        type: "Get",
        url: "http://ti03pc03:8899/?name=" + $("h2").text(),
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
}

function PostData(cmt) {
    $.ajax({
        type: "Post",
        url: "http://ti03pc03:8899/Comments/Create",
        data: {
            name: $("h2").text(),
            comment1: cmt
        },
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
}