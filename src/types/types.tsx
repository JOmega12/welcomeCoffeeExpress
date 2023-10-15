

export type CoffeeType = {
   id: number;
   title: string,
   description: string,
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
   // id: number;
   username: string,
   password: string,
}
