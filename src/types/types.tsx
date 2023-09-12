

export type CoffeeType = {
   title: string,
   description: string,
   // ingredients: [],
   image: string,
}

export type CoffeeCardProps = {
   item: {
      title: string;
      imageURL: string;
      description: string;
    };
    index: number;
    onClick: () => void;
}

export type UserInformation = {
   username: string,
   password: string
}

// export const LandingPagesProps = {
//    Login: () => void;
//    Signup: () => void;
// }