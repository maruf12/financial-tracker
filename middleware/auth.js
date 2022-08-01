export default function ({app, route, redirect}){
  if (route.path !== '/login') {
    // we are on a protected route
    if(!app.$fire.auth.currentUser) {
      // take them to sign in page
      return redirect('/testing')
    }
  } else if (route.path === '/login') {
    if(app.$fire.auth.currentUser) {
      // leave them on the sign in page
      return redirect('/')
    } else {
      return redirect('/')
    }
  }
}
