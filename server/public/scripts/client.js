console.log('JS sourced');
// First param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []); // leave array empty for now

myApp.controller('WelcomeController', function(){
  var welcome = this;
  welcome.posts = [];
  createPosts();

  welcome.incrementLike = function(index){
    welcome.posts[index].likes += 1;
  };

  welcome.toggleShow = function(index){
    welcome.posts[index].visible = !welcome.posts[index].visible;
    console.log(welcome.posts[index].visible);
  };

  welcome.toggleComments= function(index){
    welcome.posts[index].commentsVisible = !welcome.posts[index].commentsVisible;
    console.log(welcome.posts[index].visible);
    if(welcome.posts[index].showhide == "Show") {
      welcome.posts[index].showhide = "Hide";
    } else {
      welcome.posts[index].showhide = "Show";
    }
  };

  welcome.saveComment = function(index, comment){
    if(comment != null){
      console.log('saving comment index and comment', index, comment);
      comment = '- ' + comment;
      welcome.posts[index].comments.push(comment);
    }
  };

  function createPosts(){
    welcome.posts[0] = {
      pic: "images/pic.jpeg",
      desc: "This is a picture of my face. It was taken by my girlfriend. Her face is cuter than mine.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show"
    };
    welcome.posts[1] = {
      pic: "images/pic.jpeg",
      desc: "This is a picture of my face. It was taken by my girlfriend. Her face is cuter than mine.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show"
    };
    welcome.posts[2] = {
      pic: "images/pic.jpeg",
      desc: "This is a picture of my face. It was taken by my girlfriend. Her face is cuter than mine.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show"
    };
    welcome.posts[3] = {
      pic: "images/pic.jpeg",
      desc: "This is a picture of my face. It was taken by my girlfriend. Her face is cuter than mine.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show"
    };
    welcome.posts[4] = {
      pic: "images/pic.jpeg",
      desc: "This is a picture of my face. It was taken by my girlfriend. Her face is cuter than mine.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show"
    };
    welcome.posts[5] = {
      pic: "images/pic.jpeg",
      desc: "This is a picture of my face. It was taken by my girlfriend. Her face is cuter than mine.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show"
    };
  }
});
