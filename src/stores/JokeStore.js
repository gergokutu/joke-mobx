import { observable, action, computed } from "mobx"
import superagent from 'superagent'

class JokeStore {
  @observable jokes = {}
    // {
    //   id: 1,
    //   type: "programming",
    //   setup: "What's the best thing about a Boolean?",
    //   punchline: "Even if you're wrong, you're only off by a bit."
    // }

  @action addJoke = (joke) => {
    this.jokes.push(joke)
  }

  @computed get countJokes() {
    return this.jokes.length
  }
}


// how to send the random jokes into @observable jokes ?
// console.log('JokeStore:', JokeStore.jokes)
superagent
  .get('https://official-joke-api.appspot.com/jokes/programming/random')
  .then(response => {
    console.log(response.body)
    this.JokeStore.jokes.push(response.body)
  })
  .catch(error => {
    console.log(error)
  })

const store = new JokeStore()
export default store

