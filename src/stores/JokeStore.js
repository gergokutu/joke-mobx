import { observable, action, computed } from "mobx"

class JokeStore {
  @observable jokes =
    {
      id: 1,
      type: "programming",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit."
    }

  @action addJoke = (joke) => {
    this.jokes.push(joke)
  }

  @computed get countJokes() {
    return this.jokes.length
  }
}

const store = new JokeStore()
export default store

