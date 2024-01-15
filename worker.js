const {Worker} = require('bullmq');
// telling the worker that which queue are you part of!
const sendEmail = () => new Promise((res,rej)=>setTimeout(()=> res(), 5*1000));
const worker = new Worker("email-queue", async (job)=>{
    console.log(`Message recived id: ${job.id}`);
    console.log(`Processing Message`);
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email Sent"); 
}).run();

