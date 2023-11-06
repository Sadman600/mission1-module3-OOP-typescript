"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    let result1 = add(5, 5);
    let result2 = add("5", "5");
    const myUser = (user) => {
        if ("role" in user) {
            console.log(`Admin User`);
        }
        else {
            console.log(`Normal User`);
        }
    };
    const normalUser = {
        name: "Mr. X",
    };
    const adminUser = {
        name: "Mr.Y",
        role: "admin",
    };
    let output = myUser(adminUser);
    console.log(output);
}
