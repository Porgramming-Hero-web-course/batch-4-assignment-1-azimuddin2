Question: The significance of union and intersection types in Typescript?

ANS: 
Union Types (|): Allow a variable to be one of multiple types, useful when a value could be multiple forms (e.g., string | number). They offer flexibility and enable type-safe handling of each type with type guards.

Example:- `type NumberOrString = number | string;`


Intersection Types (&): Combine multiple types into one, requiring the variable to have all combined properties, great for creating complex types from simple ones.

Example:- `type Person = { name: string } & { age: number };`