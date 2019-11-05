import { observable, action, computed } from "mobx"

class JokeStore {
  @observable jokes = ["Joke1", "Joke2"]

  @action addJoke = (joke) => {
    this.jokes.push(joke)
  }

  @computed get countJokes() {
    return this.jokes.length
  }
}

const store = new JokeStore()
export default store

