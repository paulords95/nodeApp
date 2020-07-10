
const newID = (array) => {
    if (array.length > 0) {
        return array[array.length-1].id + 1
    } else {
        return 1
    }
}


function MessageApp () {
    this.messages = []

    //C
    this.post = function (content) {
        let item = {
            id: newID(this.messages),
            content: content,
            date: new Date()
        }
        this.messages.push(item)
        return this.messages
    }

    //R
    this.get = function (id) {
        return this.messages.filter(message => message.id === id)[0]
    }

    //U
    this.update = function (id, update) {
        let index = this.messages.findIndex(message => message.id === id )
        this.messages[index].content = update
    }

    //D
    this.delete = function (id) {
        this.messages = this.messages.filter(message => message.id != id)
        return this.messages
    }

}


module.exports = {MessageApp}