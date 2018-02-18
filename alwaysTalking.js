var sayings = [
    "Line Number 1",
    "Line Number 2",
    "Line Number 3",
    "Line Number 4",
    "Line Number 5",
    "Line Number 6",
    "Line Number 7",
];

var interval = setInterval(function(){
    var i = Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data){
    console.log(`STDIN Data Received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});