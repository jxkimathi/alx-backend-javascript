export default function guardrail(mathfunction){
  const queue = [];
  try {
    queue.push(mathfunction);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
