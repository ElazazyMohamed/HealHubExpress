class Chat {
    particpant1;
    particpant2;
    messages;

    constructor(participant1, participant2) {
        this.particpant1 = participant1;
        this.particpant2 = participant2;
        this.messages = [];
    }
}

module.exports = Chat;
