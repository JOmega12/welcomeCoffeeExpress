

export type CoffeeType = {
   id: number;
   favoriteId: number;
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
   username: string,
   password: string,
}
