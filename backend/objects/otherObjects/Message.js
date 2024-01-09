class Message {
    sender;
    receiver;
    messageContent;
    timestamp;

    constructor(sender, receiver, messageContent, timeStamp) {
        this.sender = sender;
        this.receiver = receiver;
        this.messageContent = messageContent;
        this.timeSatmp = timeStamp;

    }
}

module.exports = Message;