import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFirstVideoMacbook,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightSecondVideoMacbook,
  highlightThirdVideo,
  highlightThirdVideoMacbook,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { name: "Iphone", path: "/", id: 1 },
  { name: "Macbook", path: "/macbook", id: 2 },
  { name: "Store", path: "/store", id: 3 },
  { name: "Contact", path: "/contact", id: 4 },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

//macbook
export const hightlightsSlidesMacbook = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideoMacbook,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideoMacbook,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideoMacbook,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const imagesSlider = [
  {
    path: "/assets/images/slider1.jpg",
    title: "MacBook Pro 16” in Space Black2 ",
  },
  {
    path: "/assets/images/slider2.jpg",
    title: " MacBook Pro 14” in three colors2",
  },
  {
    path: "/assets/images/slider3.jpg",
    title: "MacBook Pro 14” in Silver and MacBook Pro 16” in Space Black2 ",
  },
  {
    path: "/assets/images/slider4.jpg",
    title: "MacBook Pro 14” in Silver and MacBook Pro 16” in Space Black2 ",
  },
  {
    path: "/assets/images/slider5.jpg",
    title: "MacBook Pro 14” in Silver and MacBook Pro 16” in Space Black2 ",
  },
];

export const tabs = [
  {
    id: 1,
    title: "Software development",
    text: "Xcode, Unity Editor, Create ML, TensorFlow, PyTorch, NAG Fortran Compiler, Docker, IntelliJ, and more.",
    path: "/assets/images/tab1.jpg",
  },
  {
    id: 2,
    title: "Photo editing",
    text: "Adobe Photoshop, Affinity Photo 2, Capture One, Adobe Photoshop Lightroom, Pixelmator Pro, Topaz Photo AI, DxO Nik, and more.",
    path: "/assets/images/tab2.jpg",
  },
  {
    id: 3,
    title: "STEAM",
    text: "MATLAB, Autodesk AutoCAD, NASA TetrUSS, Oxford Nanopore MinKNOW, OsiriX MD, Shapr3D, SurgicalAR, Vectorworks, Archicad, and more.",
    path: "/assets/images/tab3.jpg",
  },
  {
    id: 4,
    title: "Graphic design",
    text: "Adobe InDesign, Affinity Publisher 2, Sketch, Linearity Curve, Adobe Illustrator, Figma, and more.",
    path: "/assets/images/tab4.jpg",
  },
  {
    id: 5,
    title: "Productivity",
    text: "Microsoft 365, Slack, Zoom, Omni productivity suite, and more.",
    path: "/assets/images/tab5.jpg",
  },
  {
    id: 6,
    title: "3D rendering",
    text: "Octane X, Maxon Cinema 4D, Maxon Redshift, Autodesk Maya, Adobe Substance Painter, Houdini, Blender, and more.",
    path: "/assets/images/tab6.jpg",
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

// macbook

export const modelsMacbook = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizesMacbook = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

////////////////////////////////////////

export const products = [
  {
    id: 1,
    slug: "iphone",
    title: "Iphone 15 pro",
    desc: "The best phone in the world",
    img: "/assets/images/iphone_15_pro.png",
    price: 999,
  },
  {
    id: 2,
    slug: "iphone",
    title: "Iphone 15",
    desc: "The best phone in the world",
    img: "/assets/images/iphone_15.png",
    price: 899,
  },
  {
    id: 3,
    slug: "iphone",
    title: "Iphone 14",
    desc: "The best phone in the world",
    img: "/assets/images/iphone_14.png",
    price: 799,
  },
  {
    id: 4,
    slug: "iphone",
    title: "Iphone 13",
    desc: "The best phone in the world",
    img: "/assets/images/iphone_13.png",
    price: 699,
  },
  {
    id: 5,
    slug: "iphone",
    title: "Iphone SE",
    desc: "The best phone in the world",
    img: "/assets/images/iphone_se.png",
    price: 599,
  },
  {
    id: 6,
    slug: "macbook",
    title: "Macbook Pro 13",
    desc: "The best macbook in the world",
    img: "/assets/images/macbook_air_13.png",
    price: 1999,
  },
  {
    id: 7,
    slug: "macbook",
    title: "Macbook Pro 14”",
    desc: "The best macbook in the world",
    img: "/assets/images/macbook_air_14.png",
    price: 1799,
  },
];

export const category = [
  {
    id: 1,
    title: "Iphone ",
    slug: "iphone",
    desc: "The best phone in the world",
    img: "/assets/images/iphoneStore.jpg",
    color: "white",
  },
  {
    id: 2,
    title: "macbook ",
    slug: "macbook",
    desc: "The best macbook in the world",
    img: "/assets/images/macbookStore.jpg",
    color: "white",
  },
];
