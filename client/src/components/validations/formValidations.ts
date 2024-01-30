
export const isPasswordValid = (passwordInput: string) => {
   const regex = /^(?=.*[A-Z]).{5,}$/;
   return regex.test(passwordInput);
}

export const isDescriptionValid = (validInput: string) => {
   const regex = /^\w+\s+\w+/;
   return regex.test(validInput);
}

export const isImageAddressValid = (imageInput: string) => {
   const regex = /^(http(s)?:\/\/)?[^\s]+(\.(jpe?g|png|gif|bmp|tiff|webp))(\?.*)?$/i;
   return regex.test(imageInput);
}