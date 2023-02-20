export function LogOnInit() {
  return function (target: any){
    console.log("LogOnInit", target);
  }
}