import Controller from "../core/home/controller";
import Model from "../core/home/model";

export default function Home(){
  const model = new Model()
  return <Controller model={model}/>
}