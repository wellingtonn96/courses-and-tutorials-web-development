const people = {
    salution: 'good morning',
    talk(){
        console.log(this.salution)
    }
}

people.talk()
const falar = people.talk
//talk() //conflito entre o mundo da programação funcional e a OO
const talkPeople = people.talk.bind(people)
talkPeople()


