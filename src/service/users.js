export const users = [
  {
    id: 1,
    name: "Maria",
    avatar: "userOne",
  },
  {
    id: 2,
    name: "Carolina",
    avatar: "userTwo",
  },
  {
    id: 3,
    name: "Daniele",
    avatar: "userThree",
  },
  {
    id: 4,
    name: "João",
    avatar: "userFour",
  },
  {
    id: 5,
    name: "Rodrigo",
    avatar: "userFive",
  },
  {
    id: 6,
    name: "Luiz",
    avatar: "userSix",
  },
];

export const userRandom = () => {
  const idRandom = Math.floor(Math.random() * 6 + 1);
  return users.find((item) => item.id === idRandom);
};
