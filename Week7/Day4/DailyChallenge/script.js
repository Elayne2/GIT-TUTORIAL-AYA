class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched a ${this.time} of ${this.title}!`);
    }
  }
  

const videoData = [
    { title: "Video 1",
      uploader: "User 1",
      time: "1 Hour",
    },
    { title: "Video 2",
      uploader: "User 2",
      time: "1H30"
    },
    { title: "Video 3", 
      uploader: "User 3", 
      time: "2 Hours" 
    },
    { title: "Video 4",
      uploader: "User 4", 
      time: "30 min" 
    },
    { title: "Video 5",
      uploader: "User 5",
      time: "1H15" },
  ];
  
  
const videoInstances = videoData.map((data) => new Video(data.title, data.uploader, data.time));

videoInstances.forEach((video) => video.watch());

  