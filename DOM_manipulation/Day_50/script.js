const reels = [
  {
    username: "john_doe",
    userProfile: "assets/profiles/john.png",
    isFollowed: true,

    video: "./vid/1.mp4",

    likeCount: 12800,
    isLike: false,
    commentCount: 560,
    shareCount: 120,

    caption: "Life is better with music 🎶 #vibes"
  },

  {
    username: "sara_18",
    userProfile: "assets/profiles/sara.png",
    isFollowed: false,

    video: "./vid/2.mp4",

    likeCount: 8900,
    isLike: true,
    commentCount: 220,
    shareCount: 45,

    caption: "Sunset therapy 🌅✨"
  },

  {
    username: "tech_master",
    userProfile: "assets/profiles/tech.png",
    isFollowed: true,

    video: "./vid/3.mp4",

    likeCount: 25000,
    isLike: false,
    commentCount: 980,
    shareCount: 300,

    caption: "Coding all night 💻🔥 #developerlife"
  },

  {
    username: "foodie_kriti",
    userProfile: "assets/profiles/kriti.png",
    isFollowed: false,

    video: "./vid/10.mp4",

    likeCount: 14200,
    isLike: true,
    commentCount: 340,
    shareCount: 75,

    caption: "Street food hits different 🌯❤️ #foodlove"
  },

  {
    username: "travel_with_raj",
    userProfile: "assets/profiles/raj.png",
    isFollowed: true,

    video: "./vid/9.mp4",

    likeCount: 31000,
    isLike: false,
    commentCount: 1100,
    shareCount: 460,

    caption: "Exploring new places every month ✈️🌍 #wanderlust"
  }, {
    username: "john_doe",
    userProfile: "assets/profiles/john.png",
    isFollowed: true,

    video: "./vid/4.mp4",

    likeCount: 12800,
    isLike: false,
    commentCount: 560,
    shareCount: 120,

    caption: "Life is better with music 🎶 #vibes"
  },

  {
    username: "sara_18",
    userProfile: "assets/profiles/sara.png",
    isFollowed: false,

    video: "./vid/6.mp4",

    likeCount: 8900,
    isLike: true,
    commentCount: 220,
    shareCount: 45,

    caption: "Sunset therapy 🌅✨"
  },

  {
    username: "tech_master",
    userProfile: "assets/profiles/tech.png",
    isFollowed: true,

    video: "./vid/5.mp4",

    likeCount: 25000,
    isLike: false,
    commentCount: 980,
    shareCount: 300,

    caption: "Coding all night 💻🔥 #developerlife"
  },

  {
    username: "foodie_kriti",
    userProfile: "assets/profiles/kriti.png",
    isFollowed: false,

    video: "./vid/7.mp4",

    likeCount: 14200,
    isLike: true,
    commentCount: 340,
    shareCount: 75,

    caption: "Street food hits different 🌯❤️ #foodlove"
  },

  {
    username: "travel_with_raj",
    userProfile: "assets/profiles/raj.png",
    isFollowed: true,

    video: "./vid/8.mp4",

    likeCount: 31000,
    isLike: false,
    commentCount: 1100,
    shareCount: 460,

    caption: "Exploring new places every month ✈️🌍 #wanderlust"
  }
];

let sum = ''
reels.forEach(function(elem){
   sum = sum + ` <div class="reels">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
                           
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>

                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLike ?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>' }</h4>
                            <h6 class="like-count">${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-1-line"></i></h4>
                            <h6 class="comment-count">${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-2-line"></i></h4>
                            <h6 class="${elem.shareCount}">100</h6>
                        </div>
                    </div>
                </div>`
})


let allreels = document.querySelector('.all-reels')
allreels.innerHTML = sum;