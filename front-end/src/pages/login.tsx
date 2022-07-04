import Controller from "../core/login/controller";
import Model from "../core/login/model";

export default function Login(){
  const model = new Model()
  return <Controller model={model}/>
}