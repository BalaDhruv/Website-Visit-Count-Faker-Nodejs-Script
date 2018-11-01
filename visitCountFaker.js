var fs = require('fs');

fs.readFile('count.json', "utf8", function (err, data) {
    console.log(data);
    console.log(err);
    var d = JSON.parse(data);
    console.log(d.updatedAt);
    d.count = checkTime(d);
    d.updatedAt = new Date().valueOf();
    fs.writeFile('count.json', JSON.stringify(d), function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });
});

function checkTime(d) {
    var count = d.count;
    var timeDiff = Math.abs(new Date(d.updatedAt).getTime() - new Date().getTime());
    var diffDays = Math.floor((timeDiff / 60000) / 15);
    if (diffDays > 0) {
        for (let index = 0; index < diffDays; index++) {
            count += Math.floor(Math.random() * 4) + 1;
        }
        return count;
    } else {
        return count;
    }
}