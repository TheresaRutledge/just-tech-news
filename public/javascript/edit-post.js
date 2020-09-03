async function editFormHandler(event) {
    event.preventDefault();
    console.log('in edit function')

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        title,
        post_url
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
}
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);