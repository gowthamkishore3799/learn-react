
// route("products/:pid", "./product.tsx");
import { NavLink } from "react-router";
import type { Route } from "./+types/route";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log("Start loader"); // Triggers immediately

  await new Promise((res) => setTimeout(res, 2000)); // Simulated delay
  const response = await fetch("https://reqres.in/api/users/2");
  const json = await response.json();
  
  console.log("Finished loader");
  return json;
}


// export default function NewRoute({ loaderData }: { loaderData: Route.ComponentProps }) {
//   console.log(loaderData);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold">Product Info</h1>
//       <pre className="bg-gray-100 p-2 mt-2">
//         {JSON.stringify(loaderData, null, 2)}
//       </pre>
//     </div>
//   );
// }



export default function NewRoute({loaderData}: {loaderData: any}) {
  // const loaderData = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Product Info</h1>
      <pre className="bg-gray-100 p-2 mt-2">
        {JSON.stringify(loaderData, null, 2)}
        <nav>
          <NavLink to="/messages">Message</NavLink>
        </nav>
      </pre>
    </div>
  );
}