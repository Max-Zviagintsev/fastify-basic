function getMessages(request, reply) {
  reply.sendFile("images/cat.jpg");
}

function postMessage(request, reply) {
  return { test: "updating messages" };
}

export { getMessages, postMessage };
