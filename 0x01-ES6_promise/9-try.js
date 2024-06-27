export default function guardrail(mathfunction){
  let queue = [];
  queue += mathfunction() + ', ' + "'Guardrail was proessed'";
  return Array(queue);
}

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));