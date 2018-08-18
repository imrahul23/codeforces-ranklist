const request = require('request');

var getStandings = (contestId, callback) => {
  request({
    url: `https://codeforces.com/api/contest.standings?contestId=${contestId}&from=1&count=5&showUnofficial=true`,
    json: true
  }, (status, comment, result) => {
    if (status === 'FAILED') {
      // console.log("1");
      callback(comment);
    }
    else {
      // console.log(result);
      callback(undefined, result);
    }
  });
};

module.exports.getStandings = getStandings;


// http://codeforces.com/api/{methodName}

// https://codeforces.com/api/contest.standings?contestId=566&from=1&count=5&showUnofficial=true
