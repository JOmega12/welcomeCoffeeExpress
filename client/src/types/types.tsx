

export type CoffeeType = {
   id?: number;
   title: string,
   // description: string,
   image: string,
   instructions: string,
};


export type CoffeeCardProps = {
   item: {
      title: string;
      imageURL: string;
      description: string;
      instructions: string;
    };
    index: number;
    onClick: () => void;
}

export type UserInformation = {
   id?: number;
   username: string,
   password: string,
}
