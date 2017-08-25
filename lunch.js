var btn = `<button id='comment' class='btn btn-primary' style='margin-bottom: 10px;' data-toggle="modal" data-target="#lunchModal" >Comment</button>`;

var modal =
    `<div class="modal" id="lunchModal" >
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" style="font-weight:bold;">Comment</h5>
                </div>
                <div class="modal-body" id="body">
                </div>
                <div class="modal-footer">
                    <div class="form-group mx-sm-3">
                        <input class="form-control" id="cmt"></textarea>
                    </div>
                    <button id="AddCmt" type="button" class="btn btn-primary">Save</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `;

if (location.pathname.indexOf("ClientOrder") > 0) {

    $(btn).insertAfter("h2");

    $(modal).insertAfter("#submitForm");

    $("#AddCmt").click(function(e) {
        e.preventDefault();

        var cmt = $("#cmt").val().trim();
        if (cmt == '') {
            alert("comment can't be empty !!");
            return;
        }

        var p = '<p>' + cmt + '</p>';
        $(p).appendTo("#body");

        EmptyCmt();
        PostData(cmt);
    });

    $("#comment").click(function(e) {
        e.preventDefault();
        EmptyCmt();
        GetData();
    });
}

console.log("load done..");

function EmptyCmt() {
    $("#cmt").val("");
}

function GetData() {
    $.ajax({
        type: "Get",
        url: "http://ti03pc03:8899/?name=" + $("h2").text(),
        dataType: "json",
        success: GetDataSuccess
    });
}

function GetDataSuccess(response) {
    $("#body").empty();

    $.each(response, function(index, value) {
        var p = '<p>' + value.Comment1 + '</p>';
        $(p).appendTo("#body");
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
            var msg = "Save " + (response.isSuccess ? "Success" : "failed");
            alert(msg);
        }

    });
}