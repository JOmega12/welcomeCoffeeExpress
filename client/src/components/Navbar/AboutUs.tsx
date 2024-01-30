

export const AboutUs = () => {
   return(
      <div className="flex flex-col">
         <section
            className="flex-col text-center"
         >
            <div className="flex mb-6 flex-col">
               <h2 className="text-6xl md:text-6xl font-bold md:p-8 m-10">Why Our Coffee Shop</h2>
               {/* look at docs for xsm viewport */}
               <div className="p-4 flex lg:flex-row min-[320px]:flex-col gap-10 sm:gap-5">
                  <p className="md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                  <div className="w-full h-auto">
                     <img src="https://as2.ftcdn.net/v2/jpg/03/21/81/99/1000_F_321819999_XAqAPgIi23WC2bCIKGyMdwOWK2HXWX1t.jpg" alt="" 
                     className="w-full h-full"
                     />
                  </div>
               </div>
            </div>
         </section>

         <section className="flex-col mt-5 text-center">
            <h1 className="text-6xl md:text-6xl font-bold md:p-8 m-10">What We Believe</h1>
            <div className="flex min-[320px]:flex-col lg:flex-row justify-center items-center sm:gap-5 gap-10">
               <div className="w-full h-auto">
                  <img src="https://media.istockphoto.com/id/1177900338/photo/cup-of-espresso-with-coffee-beans.jpg?b=1&s=612x612&w=0&k=20&c=Kq8k4AR5xJQjiNWccTmR6txlxRSi_90qBKOq30LGGoY=" alt="" 
                  className="w-full h-full"
                  />
               </div>
               <div className="md:text-xl sm:mt-5">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
         </section>
      </div>
   )
}