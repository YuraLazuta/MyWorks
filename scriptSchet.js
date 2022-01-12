$(function () {
    var
        count = 1500,
        block = $('.countClients'),
        interval = setInterval(function () {
            count++;

            block.text(count);

            if (count === 3587) {
                clearInterval(interval);
            }
        }, 0.1);

    block.text(count);
});

$(function () {
    var
        count = 1,
        block = $('.countCups'),
        interval = setInterval(function () {
            count++;

            block.text(count);

            if (count === 207) {
                clearInterval(interval);
            }
        }, 0.1);

    block.text(count);
});

$(function () {
    var
        count = 1000,
        block = $('.countBlog'),
        interval = setInterval(function () {
            count++;

            block.text(count);

            if (count === 2500) {
                clearInterval(interval);
            }
        }, 0.1);

    block.text(count);
});

$(function () {
    var
        count = 1,
        block = $('.countLikes'),
        interval = setInterval(function () {
            count++;

            block.text(count);

            if (count === 873) {
                clearInterval(interval);
            }
        }, 0.1);

    block.text(count);
});

$(function () {
    var
        count = 1,
        block = $('.countLaunch'),
        interval = setInterval(function () {
            count++;

            block.text(count);

            if (count === 900) {
                clearInterval(interval);
            }
        }, 0.1);

    block.text(count);
});