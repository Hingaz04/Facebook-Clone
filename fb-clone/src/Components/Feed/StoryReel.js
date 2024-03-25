import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="story-reel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg"
        title="Tony Stark"
      />
      <Story
        image="https://i.pinimg.com/736x/07/ee/2a/07ee2a0afee0f92a694f04c83cbd9b08.jpg"
        profileSrc="https://static.wikia.nocookie.net/bcfc45dd-9b15-46e9-9a1b-cd204c41baf8/smart/width/386/height/259"
        title="Harvey Specter"
      />
      <Story
        image="https://pbs.twimg.com/media/ExMLCgWVoAQaBef?format=jpg&name=large"
        profileSrc="https://hips.hearstapps.com/hmg-prod/images/american-actress-scarlett-johansson-at-cannes-film-festival-news-photo-1685449533.jpg?crop=0.66558xw:1xh;center,top&resize=1200:*"
        title="Natasha Romanoff"
      />
      <Story
        image="https://pbs.twimg.com/media/DfzhghPX0AA4vHO?format=jpg&name=4096x4096"
        profileSrc="https://cdn.britannica.com/61/217461-050-93A0E3CB/Israeli-Gal-Gadot-2019.jpg"
        title="Gal Gadot"
      />
      <Story
        image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/wandavision-series-finale-thum_1200x768.jpeg?size=690:388"
        profileSrc="https://nationaltoday.com/wp-content/uploads/2022/10/456840961-min-1200x834.jpg"
        title="Elizabeth Olsen"
      />
    </div>
  );
}

export default StoryReel;
