import { useEffect, useReducer, useState } from "react";
import "./newdashboard.css";

type Props = {
    title: string[]
}

type keyValue = {
    key: string;
    hide?: boolean;
}

function RenderTitle({title}: {title: keyValue[]}){
    return (
        <>
         <tr className="border-collapse border-2 border-darker-midnight bg-midnight">
            {title.map(({hide=false, key})=>( !hide ?
                  (<th className="border-collapse border-2 border-darker-midnight p-8 text-darker-midnight">{key}</th>): ""
            ))}
            </tr>
        </>
    )
}

const Loader = () => (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
  

type content = {
    "email": String ;
    "first_name": String;
    "last_name": String;
    "avatar": string;
}

function RenderBody({content}: {content: content[]}){

    return (
      <>
        {content.map((element) => (
          <tr>
            <td>{element["email"]}</td>
            <td>{element["first_name"]}</td>
            <td>{element["last_name"]}</td>
            <td className="p-2">
                <img
                  src={element["avatar"]}
                  alt="Avatar"
                  className="size-auto rounded-full m-auto object-cover"
                />
            </td>
          </tr>
        ))}
      </>
    );
}
export default function DefaultRouter(){

    function reducer(state: any , action: {type: string, payload: any}){
        if(action.type == "Success"){
            let arr = action.payload;
            let title = [{key: "id", hide: true,},  {key: "email"}, {key: "first name"}, {key: "Last name"}, {key: "avatar"}];
            let content = [];

            for(let val of arr){
                content.push({
                    ...val,
                })
            }
            return {
                title: title,
                data: content
            }
        }else{
            throw new Error("Error")
        }

    }

    async function retrieveUsers() {
        await new Promise(resolve => setTimeout(resolve, 5000))
        const response = await fetch("https://reqres.in/api/users?page=1", {
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });
        const json = await response.json();
        dispatch({type: "Success", payload: json.data})
      }
    
    const [state, dispatch] = useReducer(reducer, {title: [], data: []})
    const [isDOMReady, setIsDOMReady] = useState(false);
    useEffect(()=>{
        
        retrieveUsers()
        setIsDOMReady(true)
    }, [])

     if (!isDOMReady) return <Loader />;


    return(
        <div className="bg-stone-100 size-full sm:size-full md:size-full">
            <div className="bg-sky-200  flex justify-center items-center p-[1%] sticky top-0 size-full">
                <h1 className="font-bold text-black"> GK </h1>
            </div>
            <div className="flex p-[10%] text-black size-full">
                <div>
                    <table className="border-collapse border-2 border-midnight">
                        <thead>
                            <RenderTitle title={state.title}/>
                        </thead>
                        <tbody>
                            <RenderBody content={state.data}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}