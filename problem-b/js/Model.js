'use strict';

import allTweet from './uw_ischool_tweets';

let tweets = allTweet.map((tweetedItem) => {
    let cleaned = {
        text: tweetedItem.text,
        timestamp: Date.parse(tweetedItem.created_at)
    }
    return cleaned;
});

export function getRecentTweets() {
    tweets.sort((firstTweet, secondTweet) => {
        return secondTweet.timestamp - firstTweet.timestamp;
    })
    return tweets.slice(0,5);
}

export function searchTweets(searched) {
    searched = searched.toLowerCase();
    let results = tweets.filter((tweetedItem) => {
        return (tweetedItem.text.toLowerCase().indexOf(searched) >= 0);
    })
    return results;
}