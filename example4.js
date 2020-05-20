function wait(msg) {
    setTimeout(function timer() {
        console.log(msg);
    }, 1000);
}

wait("Hello There");

/*
    inner function = timer
    outer function = wait
    timer has scope closure over the scope of wait(), that's why it can access msg
    if you pass a function around(callback), you are likely to see the functions exercising closure
*/