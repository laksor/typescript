

type NoobDeveloper = {
    name: string;
};

// intersection type
type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

// union type
const NewDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "John",
    expertise: "JavaScript",
    experience: 5,
};