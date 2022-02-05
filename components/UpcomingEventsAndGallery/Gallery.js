import { React, Component } from "react";
import ImageContainer from "./ImageContainer";
import ImgsViewer from "react-images-viewer";

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      currImg: 0,
    };

    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrev = this.gotoPrev.bind(this);
    this.closeImgsViewer = this.closeImgsViewer.bind(this);
    this.openImgsViewer = this.openImgsViewer.bind(this);
    this.gotoImg = this.gotoImg.bind(this);
  }

  openImgsViewer(index, event) {
    event.preventDefault();
    this.setState({
      currImg: index,
      isOpen: true,
    });
  }

  closeImgsViewer() {
    this.setState({
      currImg: 0,
      isOpen: false,
    });
  }

  gotoPrev() {
    this.setState({
      currImg: this.state.currImg - 1,
    });
  }

  gotoNext() {
    this.setState({
      currImg: this.state.currImg + 1,
    });
  }

  gotoImg (index) {
    this.setState({
      currImg: index
    })
  }

  render() {
    const imageLinks = this.props.gallery.map((imageLink) => {
      return {
        src: imageLink,
        thumbnail: imageLink,
        caption: "CSEA Gallery"
      };
    });

    return (
      <div>
        <div
          className="grid gap-3 overflow-auto md:pr-3 mt-4 h-fill md:max-h-128"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {this.props.gallery.map((imageLink, index) => {
            return (
              <a key={index} onClick={(e) => this.openImgsViewer(index, e)}>
                <ImageContainer img={imageLink} />
              </a>
            );
          })}
        </div>
        <ImgsViewer
          backdropCloseable={true}
          imgs={imageLinks}
          currImg={this.state.currImg}
          isOpen={this.state.isOpen}
          onClickPrev={this.gotoPrev}
          onClickNext={this.gotoNext}
          onClose={this.closeImgsViewer}
          onClickThumbnail={this.gotoImg}
          preloadNextImg={true}
          spinnerSize={15}
          spinnerColor="#fff"
          showThumbnails={true}
          imgCountSeparator=" out of "
        />
      </div>
    );
  }
}
