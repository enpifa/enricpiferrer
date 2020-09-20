export interface IContentItem {
  imageSource: string;
  title: string;
  content: string;
}

const contentItems: IContentItem[] = [
  {
    imageSource: "engaged.jpg",
    title: "We are engaged!",
    content: "It happened in Yellowstone..."
  },
  {
    imageSource: "career.png",
    title: "My boring career",
    content: "I am a Software Engineer at Alteryx. Even though I am currently working with React and Typescript, I have worked on multiple projects in the past! Check out my professional profile on LinkedIn (at https://www.linkedin.com/in/enric-piferrer-torres-47503447/)."
  },
  {
    imageSource: "mountainPeak.png",
    title: "Pin the Peak",
    content: "Since we are great explorers and love hiking, camping and living in the mountains, we thought it would be a great idea to know what mountains we are looking at! For that simple reason we thought it could be great to develop an app that tells us the peaks we have in front of us. Download the source code here: https://github.com/enpifa/PinPeak"
  },
  {
    imageSource: "foodFirstFuel.png",
    title: "Fuel your body!",
    content: "Food First Fuel is a small company own by Renata Altamirano that focuses on helping people achieve their nutritional goals. Check it out at http://foodfirstfuel.com"
  },
  {
    imageSource: "travelBlog.png",
    title: "Travelling blog",
    content: "This is a project idea where any of my friends who have been on a trip would post kind of a trip summary, so more friends with the same travelling destination can get idea on what to do."
  }
];

export default contentItems;