const app = {
  data() {
    return {
      photos: [
        {
          url: "images/pineapple.jpg",
          title: "Pineapple",
          description: "This is the picture of Pineapple",
          liked: false,
          bigPicture: false
        },
        {
          url: "images/lion.jpg",
          title: "Lion",
          description: "This is the picture of Lion",
          liked: false,
          bigPicture: false
        },
        {
          url: "images/surface.jpg",
          title: "Microsoft Surface",
          description: "This is the picture of Microsoft Surface",
          liked: false,
          bigPicture: false
        },
        {
          url: "images/bangkok-landscape.jpg",
          title: "Bangkok",
          description: "This is the picture of Bangkok",
          liked: false,
          bigPicture: false
        }
      ],
      searchbutton: false,
      form: {
        searchText: '',
      },
      textSearch:'',
    };
  },
  methods: {
    toggleLike(index) {
      this.photos[index].liked = !this.photos[index].liked
      //   console.log(this.photos[index].liked)
    },
    searchBarToggle() {
      this.searchbutton = !this.searchbutton;
      this.form.searchText = '';
      this.textSearch = '';
    },
    bigPic(index) {
      console.log(this.photos[index])
      this.photos[index].bigPicture = !this.photos[index].bigPicture
      console.log("After Click : " + this.photos[index].bigPicture)
    },
    search(){
      this.textSearch = this.form.searchText
    }

  },
  computed: {
    countLike() {
      return this.photos.filter(t => t.liked).length
    },
    searched() {
      return this.photos.filter((photo) => {
        return photo.title.toLowerCase().includes(this.textSearch.toLowerCase());
      })
    }
  },
};
Vue.createApp(app).mount("#app");
