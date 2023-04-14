import { Component } from 'react';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import css from './App.module.css';
class App extends Component {
  state = {
    query: '',
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
