import { expect } from 'chai'
import { MessageApp } from './app.js'


describe("app", ()=>{
    let testApp = new MessageApp
    it("app has messages", ()=>{
        expect (testApp.messages).to.be.an('array')
    })
})