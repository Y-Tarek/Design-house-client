export default function ({ store, redirect }) {
    console.log('status',store.state.auth.loggedIn);
    if (store.state.auth.loggedIn) {
      return redirect('/')
    }
  }