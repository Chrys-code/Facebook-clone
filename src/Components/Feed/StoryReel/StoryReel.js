import React from "react";
import "./StoryReelStyle.scss";
import Story from "./Story/Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        userImg="https://scontent.fbud10-1.fna.fbcdn.net/v/t1.0-1/p200x200/84627940_3437699486271708_3460228006746783744_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=gNdzg6jrMwoAX-LEQoI&_nc_ht=scontent.fbud10-1.fna&tp=6&oh=6de2e42272f4b347b1612d43c7183807&oe=5F6F6D13"
        image="https://scontent.fbud10-1.fna.fbcdn.net/v/t1.0-1/p200x200/84627940_3437699486271708_3460228006746783744_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=gNdzg6jrMwoAX-LEQoI&_nc_ht=scontent.fbud10-1.fna&tp=6&oh=6de2e42272f4b347b1612d43c7183807&oe=5F6F6D13"
        title="Krisztian Nagy"
      />
      <Story
        userImg="https://cdn.pixabay.com/photo/2016/04/01/09/46/compass-1299559_960_720.png"
        image="https://cdn.pixabay.com/photo/2020/07/14/13/42/boat-5404195_960_720.jpg"
        title="Adventurers"
      />

      <Story
        userImg="https://cdn.pixabay.com/photo/2016/10/27/16/01/cat-1775543_960_720.png"
        image="https://cdn.pixabay.com/photo/2020/08/17/12/19/cat-5495234_960_720.jpg"
        title="Cats Group"
      />

      <Story
        userImg="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406_960_720.png"
        image="https://cdn.pixabay.com/photo/2020/08/10/14/17/hummingbird-5477966_960_720.jpg"
        title="Penguinno"
      />
      <Story
        userImg="https://cdn.pixabay.com/photo/2020/06/21/15/54/bohemian-5325610_960_720.png"
        image="https://cdn.pixabay.com/photo/2020/08/17/07/13/flower-5494537_960_720.jpg"
        title="Bohemian Woman"
      />
    </div>
  );
}

export default StoryReel;
