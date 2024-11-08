{

    type KeysOf<T extends object> = (keyof T)[];

    function validateKeys<T extends object>(obj: T, keys: KeysOf<T>): boolean {
        return keys.every((key) => key in obj);
    }

    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    console.log(validateKeys(person, ["name", "age"]));


}