import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const stories = [
  {
    image:
      "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png",
    profileSrc:
      "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635",
    title: "John Smith",
  },
  {
    image:
      "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png",
    profileSrc:
      "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635",
    title: "John Smith",
  },
  {
    image:
      "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png",
    profileSrc:
      "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635",
    title: "John Smith",
  },
  {
    image:
      "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png",
    profileSrc:
      "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635",
    title: "John Smith",
  },
  {
    image:
      "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png",
    profileSrc:
      "https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635",
    title: "John Smith",
  },
];

function StoryReel() {
  return (
    <div className="storyReel">
      {stories.map((story, index) => (
        <Story
          key={index}
          image={story.image}
          profileSrc={story.profileSrc}
          title={story.title}
        />
      ))}
    </div>
  );
}

export default StoryReel;
