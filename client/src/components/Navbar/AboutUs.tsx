export const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <section className="flex-col text-center">
        <div className="flex mb-6 flex-col">
          <h2 className="text-6xl md:text-6xl font-bold md:p-8 m-10">
            Why Our Coffee Shop
          </h2>
          {/* look at docs for xsm viewport */}
          <div className="p-4 flex lg:flex-row min-[320px]:flex-col gap-10 sm:gap-5">
            <p className="md:text-xl">
              Welcome to WelcomeCoffee, where we believe that coffee is not just
              a beverage, but a shared experience. Our coffee shop is more than
              just a place to grab your favorite brew; it's a community where
              the love for coffee connects us all. <br/> We are passionate about
              fostering a space where coffee enthusiasts can not only savor the
              finest blends but also share their creativity and unique recipes.
              We understand that coffee is a personal journey, and what better
              way to celebrate it than by making this space a canvas for your
              coffee stories.
            </p>
            <div className="w-full h-auto">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/21/81/99/1000_F_321819999_XAqAPgIi23WC2bCIKGyMdwOWK2HXWX1t.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex-col mt-5 text-center">
        <h1 className="text-6xl md:text-6xl font-bold md:p-8 m-10">
          What We Believe
        </h1>
        <div className="flex min-[320px]:flex-col lg:flex-row justify-center items-center sm:gap-5 gap-10">
          <div className="w-full h-auto">
            <img
              src="https://media.istockphoto.com/id/1177900338/photo/cup-of-espresso-with-coffee-beans.jpg?b=1&s=612x612&w=0&k=20&c=Kq8k4AR5xJQjiNWccTmR6txlxRSi_90qBKOq30LGGoY="
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="md:text-xl sm:mt-5">
            <p>
            We firmly believe that everyone, regardless of their background, has their own unique techniques for creating their perfect cup of coffee. Whether it's the precise grind size, a secret brewing method passed down through generations, or a quirky ritual that adds that special touch, we celebrate the individuality that each coffee enthusiast brings to their coffee-making journey.
            </p>
            <p>At WelcomeCoffee, we embrace the diversity of coffee culture. We believe in empowering each coffee lover to express their unique preferences and techniques. Whether you're a seasoned aficionado or just starting your coffee exploration, this is a space where you can discover, share, and revel in the endless possibilities that a simple coffee bean can offer.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
