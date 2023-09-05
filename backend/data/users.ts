import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "robbieprokop@pm.me",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Johnny Doe",
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Mattilda Doe",
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
