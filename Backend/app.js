
import fs from 'fs'
import path from 'path'

const newID = (array) => {
    if (array.length > 0) {
        return array[array.length-1].id + 1
    } else {
        return 1
    }
}


function MessageApp () {
    this.messages = []

    this.filepath() {
        this.filepath = filepath
        this.messages = filepath ? this.readFromJson() : []
    }


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



    this.readFromJson () {
        return JSON.parse(fs.readFileSync(
            __dirname+path.normalize(this.filepath),"utf8",(err,data) => {
                if (err) throw err
            }
        ))
    }
}


module.exports = {MessageApp}