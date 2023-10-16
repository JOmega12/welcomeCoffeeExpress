// *This belongs to the Lobby Component

{/* !Why am i doing Array.isArray?! */}
{/* {coffee && Array.isArray(coffee) && isRegister? (
coffee.map((item: { id: number; title?: string; description?: string; image?: string; }, index: number) => (
<Link
to={`/coffee-card/${item.id}`}
className="w-full md:w-1/2 lg:w-1/3 p-2 bg-white rounded-lg shadow-md m-2 hover:cursor-pointer hover:bg-gray-500"
>
<PreviewCard item={{
   id: item.id,
   title: item?.title || 'Default Title',
   description: item?.description || "Default Description",
   image: item?.image || DefaultCoffee
}} index={index} />
</Link>
))
) : (
<>
<div>No coffees available. Please Login</div>
<Link to={`/login`}>Login</Link>
</>
)} */}