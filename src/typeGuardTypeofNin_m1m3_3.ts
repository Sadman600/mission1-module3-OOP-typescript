{
  // **Type Guard Using typeof and in
  type Add = number | string;

  const add = (param1: Add, param2: Add): Add => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  let result1 = add(5, 5);
  let result2 = add("5", "5");
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const myUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`Admin User`);
    } else {
      console.log(`Normal User`);
    }
  };
  const normalUser: NormalUser = {
    name: "Mr. X",
  };
  const adminUser: AdminUser = {
    name: "Mr.Y",
    role: "admin",
  };
  let output = myUser(adminUser);
  console.log(output);
}
