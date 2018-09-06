import React from 'react';

const shows = [
  {
    name: "First Things First",
    url: "https://content.production.cdn.art19.com/images/1f/37/15/84/1f371584-1f3c-42dd-9dea-976e6e7f2379/943f3a7b24f1f4c41049d3d8dd729308dfa11d7c43f9bd4231bf77e7f5a45056967c689d8209e120e813f8d7898bdc1e4c91beb228b22cb78fafec266af89250.jpeg",
  },
  {
    name: "Dan Patrick Show", 
    url: "https://www.podcastone.com/images/general/danpatrick_1200x630.jpg",
  }, 
  {
    name: "Undisputed",
    url: "https://dtvimages.hs.llnwd.net/e1//db_photos/showcards/v5/AllPhotos/13211896/p13211896_b_v5_aa.jpg",
  },
  {
    name: "The Herd",
    url: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Herd_logo.jpg",
  },
  {
    name: "Speak For Yourself",
    url: 'http://images.performgroup.com/di/library/sporting_news/3/ed/speak-for-yourself_1o6infl62j2qr1jopvtca0sy2m.jpg?w=747&h=420&quality=100',
  },
];

const Starter = () => (
  <div>
    <ul>
      {shows.map((show) => {
        return(
          <div key={show.name}>
            <img 
              src={show.url} 
              alt="meaningful text"
            />
            <span>{show.name}</span>
          </div>
        )
      })}
    </ul>
  </div>
);

export default Starter;
