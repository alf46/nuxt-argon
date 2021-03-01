export default function({ app, route, $axios, redirect, store }) {
    // handle api errors
    $axios.onError((error) => {
      const code = parseInt(error.response && error.response.status)
      // not found - show page
      if (code === 404) {
        redirect('/404')
      }
      // throw other errors
      return Promise.reject(error)
    })
  }
