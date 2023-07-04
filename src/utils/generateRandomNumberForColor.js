const generateRandomNumberForColor = () => {
  const arrCol = [
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "indigo",
    "sky",
    "blue",
  ];
  return arrCol[Math.floor(Math.random() * 12)];
};

export default generateRandomNumberForColor;
