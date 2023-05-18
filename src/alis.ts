// alias type

type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
}

const crush1: CrushType = 
{
    name: "john",
    age: 20,
    profession: "doctor",
    address: "uganda",
};

const crush2: CrushType = 
{
    name: "john mala",
    age: 21,
    profession: "eng",
    address: "ban",
};

// boolean alias  type
type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

//enum
