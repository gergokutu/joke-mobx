import { observable, action, computed } from "mobx"

class JokeStore {
  @observable jokes = [
    { 
      id: 1,
      title: 'HAHA',
      setup: 'Setup of the joke...',
      punch_line: "Punchline of the joke..."
    }
  ]

  @action addJoke = (joke) => {
    this.jokes.push(joke)
  }

  @computed get jokeCount() {
    return this.jokes.length
  }
}

const store = new JokeStore()
export default store

