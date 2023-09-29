

export type CoffeeType = {
   title: string,
   description: string,
   image: string,
   // id: number,
   // ingredients: [],
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
   password: string,
   // id: number,
}
