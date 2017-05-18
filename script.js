
  var data = [
    {tweeter_name: "abc", number_of_replies: 1, number_of_retweets: 12, number_of_likes: 12, tweet_text: "hie :)"},
    {tweeter_name: "xyz", number_of_replies: 10, number_of_retweets: 12, number_of_likes: 12, tweet_text: "wwow!!"}
  ];

  function processJson(data) {
    // DO STUFF WITH data
    var myDiv = $(".take-flight-project-insert");
    console.log(data);
    console.log(data.length);
    for (i = 0; i < data.length; i++) {
      var tweet = data[i];
      console.log("adding tweet", tweet);
      tweet.tweeter_img = "/twitter_profile_files/mkpdB9Tf_bigger.jpg";
      // tweet.tweeter_name = "jack";
      tweet.tweet_time_display = "18h";
      var child = myDiv.clone();
      child.html("<li class=\"js-stream-item stream-item stream-item\">" +
  "<div class=\"tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content original-tweet js-original-tweet\">" +
    "<div class=\"content\">" +
      "<div class=\"stream-item-header\">" +
      "<img class=\"avatar js-action-profile-avatar\" src=\""+ tweet.tweeter_img +
      "\">" +
      "<span class=\"FullNameGroup\">" +
        "<strong class=\"fullname show-popup-with-id \">" + tweet.tweeter_name +
        "</strong>&nbsp;" +
        "<span class=\"UserNameBreak\">&nbsp;</span>" +
      "</span>" +
      "<span class=\"username u-dir\" dir=\"ltr\">@<b>" + tweet.tweeter_name +
      "</b></span>" +  
      "<small class=\"time\">" + tweet.tweet_time_display +
      "</small>" +
      "</div>" +
  "<div class=\"js-tweet-text-container\">" +
  "<p class=\"TweetTextSize TweetTextSize--normal js-tweet-text tweet-text\" lang=\"en\" data-aria-label-part=\"4\">" + tweet.tweet_text +
  "</p>" +
  "</div>" +
  "<div class=\"stream-item-footer\">" +
  "<div class=\"ProfileTweet-actionList js-actions\" role=\"group\" aria-label=\"Tweet actions\">" +
  "<div class=\"ProfileTweet-action ProfileTweet-action--reply\">" +
  "<button class=\"ProfileTweet-actionButton js-actionButton js-actionReply\" data-modal=\"ProfileTweet-reply\" type=\"button\">" +
    "<div class=\"IconContainer js-tooltip\" title=\"Reply\">" +
      "<span class=\"Icon Icon--reply\"></span>" +
    "</div>" +
      "<div class=\"IconTextContainer\">" +
        "<span class=\"ProfileTweet-actionCount\">" +
          "<span class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + tweet.number_of_replies +
          "</span>" +
        "</span>" +
      "</div>" +
  "</button>" +
"</div>" +
"<div class=\"ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt\">" +
  "<button class=\"ProfileTweet-actionButton js-actionButton js-actionRetweet\" data-modal=\"ProfileTweet-retweet\" type=\"button\">" +
    "<div class=\"IconContainer js-tooltip\" title=\"Retweet\">" +
      "<span class=\"Icon Icon--retweet\"></span>" +
    "</div>" +
      "<div class=\"IconTextContainer\">" +
        "<span class=\"ProfileTweet-actionCount\">" +
          "<span class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + tweet.number_of_retweets +
          "</span>" +
        "</span>" +
      "</div>" +
  "</button>" +
"</div>" +
"<div class=\"ProfileTweet-action ProfileTweet-action--favorite js-toggleState\">" +
  "<button class=\"ProfileTweet-actionButton js-actionButton js-actionFavorite\" type=\"button\">" +
    "<div class=\"IconContainer js-tooltip\" title=\"Like\">" +
      "<div class=\"HeartAnimationContainer\">" +
        "<div class=\"HeartAnimation\"></div>" +
      "</div>" +
    "</div>" +
      "<div class=\"IconTextContainer\">" +
        "<span class=\"ProfileTweet-actionCount\">" +
          "<span class=\"ProfileTweet-actionCountForPresentation\" aria-hidden=\"true\">" + tweet.number_of_likes +
          "</span>" +
        "</span>" +
      "</div>" +
  "</button>" +
"</div>" +
"<div class=\"ProfileTweet-action ProfileTweet-action--dm\">" +
    "<button class=\"ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionShareViaDM\" type=\"button\" data-nav=\"share_tweet_dm\">" +
      "<div class=\"IconContainer js-tooltip\" title=\"Direct message\">" +
        "<span class=\"Icon Icon--dm\"></span>" +
      "</div>" +
    "</button>" +
"</div>" +
"</div>" +
"</div>" +
"</div>" +
"</div>" +
"</li>");
      myDiv.append(child);
  }
}
$( document ).ready(function() {
    console.log( "ready!" );
    processJson(data);
});



// $.ajax({
//     url: '/tweets'
//   }).done(
//   });