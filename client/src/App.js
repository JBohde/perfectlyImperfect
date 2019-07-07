import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Admin from './pages/Admin';
import EditPodcast from './pages/Admin/EditPodcast';
import Blog from './pages/Blog';
import Blogs from './pages/Blogs';
import Books from './pages/Books';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Inspiration from './pages/Inspiration';
import MustSee from './pages/MustSee';
import Podcasts from './pages/Podcasts';
import Shop from './pages/Shop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <div className="Site">
            <div className="Site-content">
              <Route path="/" component={Home} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/blog/:id" component={Blog} />
              <Route path="/inspiration" component={Inspiration} />
              <Route path="/mustsee" component={MustSee} />
              <Route path="/books" component={Books} />
              <Route path="/podcasts" component={Podcasts} />
              <Route path="/about" component={About} />
              <Route path="/shop/:id" component={Shop} />
              <Route path="/cart/:id" component={Cart} />
              <Route path="/admin" component={Admin} />
              <Route path="/edit/podcast" component={EditPodcast} />
            </div>
            <Footer />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
