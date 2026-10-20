(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO
  })

cw2.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const rows = posts
          .map(post => `
            <tr>
              <td>${post.id}</td>
              <td class="post-title">${post.title}</td>
              <td class="post-body">${post.body}</td>
            </tr>
          `)
          .join('');

        answer.innerHTML = `
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        `;
      });
  });
  cw3.addEventListener("click", function () {
    //TODO
  })

})();
