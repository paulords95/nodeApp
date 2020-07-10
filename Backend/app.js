function MessageApp () {
    this.messages = []

    //C
    this.post = function (content) {
        let item = {
            id: this.messages.length,
            content: content,
            date: new Date()
        }
        this.messages.push(item)
        return this.messages
    }

    //R
    this.get = function (id) {
        return this.messages[id]
    }

    //U
    this.update = function (id, update) {
        this.messages[id].content = update
        return this.messages[id]
    }

    //D
    this.delete = function (id) {
        this.messages.splice(id, 1)
        return this.messages
    }

}


module.exports = {MessageApp}