console.log('JS sourced');
// First param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []); // leave array empty for now

myApp.controller('WelcomeController', function(){
  var welcome = this;
  welcome.posts = [];
  createPosts();

  welcome.incrementLike = function(index){
    // increases number of likes by 1
    welcome.posts[index].likes += 1;
  };

  welcome.toggleShow = function(index){
    // toggles visible true or false, index.html displs either pic or description
    welcome.posts[index].visible = !welcome.posts[index].visible;
    console.log(welcome.posts[index].visible);
  };

  welcome.toggleComments= function(index){
    // toggles visibility of comments and text on show/hide button
    welcome.posts[index].commentsVisible = !welcome.posts[index].commentsVisible;
    console.log(welcome.posts[index].visible);
    if(welcome.posts[index].showhide == "Show") {
      welcome.posts[index].showhide = "Hide";
    } else {
      welcome.posts[index].showhide = "Show";
    }
  };

  welcome.saveComment = function(index, comment){
    // saves a comment to item's comment array
    if(comment != null){
      console.log('saving comment index and comment', index, comment);
      comment = '- ' + comment;
      welcome.posts[index].comments.push(comment);
    }
    welcome.posts[index].noComments = false;
  };

  welcome.addPic = function(desc, picUrl){
    // adds a new pic
    var newPic = {
      pic: picUrl,
      desc: desc,
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
    welcome.posts.push(newPic);
  };

  welcome.howManyLikes = function(index) {
    // returns number of likes
    if(welcome.posts[index].likes == 0){
      return "No likes yet :(";
    } else if(welcome.posts[index].likes == 1) {
      return welcome.posts[index].likes + " like!";
    } else {
      return welcome.posts[index].likes + " likes!";
    }
  };

  function createPosts(){
    // creates initial pics
    welcome.posts[0] = {
      pic: "images/bender.jpg",
      desc: "This is Bender. I was a little iffy on him when he first moved in, but he's my little buddy now. He's a timid guy who loves to get loved up.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
    welcome.posts[1] = {
      pic: "images/zyra.jpg",
      desc: "This is a Zyra. I just call her kitty. We adopted her from the Humane Society in 2016. She's a sweetheart.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
    welcome.posts[2] = {
      pic: "images/karen.jpg",
      desc: "This is my girlfriend, Karen, holding my boy Bruno. Bruno's favorite pastime is getting his belly scratched.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
    welcome.posts[3] = {
      pic: "images/bang.jpg",
      desc: "This is Bang! I love playing board games and card games.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
    welcome.posts[4] = {
      pic: "images/witcher.jpg",
      desc: "I added this one because I love getting immersed in a game or a show with a great story.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
    welcome.posts[5] = {
      pic: "images/styro.jpg",
      desc: "This is random order I made at work while I worked at Styrotech, the only one I happen to have a picture of. I added this picture because I spent a lot of years creating stuff like this.",
      likes: 0,
      visible: true,
      comments:[],
      commentsVisible: false,
      showhide: "Show",
      noComments: true
    };
  }
});
