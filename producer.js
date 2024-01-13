const { Queue } = require("bullmq");
const notificationQueue = new Queue("email-queue");
async function init() {
  const res = await notificationQueue.add("email to manash", { 
    email: "mppoff021@gmai.com",
    subject: "Welcome Manash",
    body: "Hey Manash, Welcome", 
  });
  console.log('Job added to the queue', res.id);
}

init();