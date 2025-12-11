import { randomUUID } from "crypto";

let users = [
    {id: randomUUID(), name: "Jorge", email: "JSoria@a.com", active: true, age: 23},
    {id: randomUUID(), name: "Sebastian", email: "SSanchez@a.com", active: true, age: 18},
    {id: '1', name: "pepito", email: "pepito@a.com", active: true, age: 1},
];


export function filterUser(filter = {}) {
    let result = users;

    if (filter.name) {
        const q = String(filter.name).toLowerCase();
        result = result.filter((item) => item.name.toLowerCase().includes(q));
    }
    if (filter.age) {
        const q = Number(filter.age);
        result = result.filter((item) => item.age === q);
    }
    if (typeof filter.active !== 'undefined') {
    const q = (filter.active === 'true' || filter.active === true);
    result = result.filter(item => item.active === q);
    }
    if (filter.email) {
        const q = String(filter.email).toLowerCase();
        result = result.filter((item) => item.email.toLowerCase().includes(q));
    }

    return result;
}



export const findAll = () => {
    return users;
}

export const findById = (id) => {
    return users.find(u => u.id === id) || null;
}

export const addUser = (item) => {
    const user = {
        id: randomUUID(),
        name: item.name, //required
        email: item.email, //required
        age: item.age, // required
        active: true
    };

    users.push(user);
    return user;
}

export const updateUser = (id, data) => {
    const index = users.findIndex(e => e.id === id );

    if (index === -1) return null;

    users[index] = {
        ...users[index],
        name: typeof data.name === "undefined" ? users[index].name : data.name,
        email: typeof data.email === "undefined" ? users[index].email : data.email,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age),
        active: typeof data.active === "undefined" ? users[index].active : Boolean(data.active)
    }

    return users[index];

}