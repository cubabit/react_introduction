# Challenge - Creating a component

Let's create a component to display a classic 80's album. Here is some HTML using the bootstrap CSS
framework to showcase the first three tracks of the Michael Jackson album <em>Thriller</em>.

```html
  <div class="thumbnail">
    <img src="http://a.espncdn.com/photo/2013/0204/jackson/3-1920X1920.jpg" alt="Thriller" width="400" height="400" />

    <div class="caption">
      <h3>Thriller</h3>

      <p>Micheal Jackson biggest album</p>

      <table class="table table-striped">
        <tbody>
          <tr>
            <th>1</th>
            <td>Wanna Be Startin Somethin'</td>
            <td>6:03</td>
          </tr>

          <tr>
            <th>2</th>
            <td>Baby Be Mine</td>
            <td>4:20</td>
          </tr>

          <tr>
            <th>3</th>
            <td>The Girl Is Mine</td>
            <td>3:42</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
```
Make a React component using the HTML template above, where all the data is inserted using
<strong>props</strong>.

Use the following JavaScript object as a data source when rendering your component.

```js
var album = {
  image: "https://s3.amazonaws.com/images.sheetmusicdirect.com/Product/smd_132962/large.jpg",
  title: "Rio",
  description: "Duran Duran's biggest album",
  tracks: [{
    name: "Rio",
    duration: "3:36"
  }, {
    name: "My Own Way",
    duration: "4:20"
  }, {
    name: "Lonely In Your Nightmare",
    duration: "3:49"
  }]
}
```

You may wonder how to pass through an object to a component instead of a single value. You can do
it using the ES6 spread operator:

```
React.createElement(<Component {...myObject} />)
```