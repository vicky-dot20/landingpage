import { HoverEffect } from "../../Components/ui/card-hovereffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto ">
      <h1 className="text-4xl text-center  text-white font-bold">Supported Devices</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Apple TV",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/appletvlogo.png"
  },
  {
    title: "Android TV",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "/androidtvlogo.png"
  },
  {
    title: "Apple ipad",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    
  image: "/ipadlogo.png"
    
  },
  {
    title: "Raspberry PI",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: "/berrylogo.png"
  },
  {
    title: "Chromebook",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image: "/chromelogo.png"
  },
  {
    title: "Windows",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    image: "/microsoftlogo.png"
  },
];

 

  


 




