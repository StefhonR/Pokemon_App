const React = require("react")



class New extends React.Component {
  render() {
    return (
      <div>
        <h1>ADD POKEMON</h1>
        

        <form action="/pokemon" method="POST">
          Name: <input type="text"  name="name" /> <br />
          Type: <input type="text" name="type" /> <br />
          Image URL: <input type="text" name="img" />
          <input type="submit" value="Add Pokemon" />
        </form>
        <nav>
          <a href="/pokemon">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New