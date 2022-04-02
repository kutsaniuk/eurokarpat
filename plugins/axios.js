export default function ({ $axios }) {
  $axios.onError((error) => {
    switch (error.response && error.response.status) {
      // case 401: location.replace('/login'); break
      // case 403: location.replace('/login'); break
    }
  })
}
