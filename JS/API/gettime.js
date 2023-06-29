function getCurrentTime(){
    //const today = new Date();
    //const op = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    //postMessage(op);
    postMessage(new Date());
    setTimeout("getCurrentTime()", 1000);
}

getCurrentTime();