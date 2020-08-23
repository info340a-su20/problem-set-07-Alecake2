'use strict';
export function printTweets(tweetArray) {
    if (tweetArray.length == 0) {
        console.log("No tweets found");
    }

    for (let tweetedObject of tweetArray) {
        let time = new Date(tweetedObject.timestamp);
        console.log("- \"" + tweetedObject.text+"\" ("+time.toLocaleString("en-US")+ ")")
    }
}