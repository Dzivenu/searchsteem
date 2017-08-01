import loading from './assets/loading.gif';

export default {
  postImage: {
    position: "absolute",
    top: 5,
    maxHeight: 80,
    width: 90,
  },
  button: {
      cursor: 'pointer',
      padding: 6,
      fontSize: 10,
      color: '#1a5099',
      border: '1px solid #1a5099',
      borderRadius: '5%',
      backgroundColor: "#FFF",
      minWidth: 50,
      marginLeft: 2,
      textAlign: 'center',
      display: 'inline-block',
  },
  nsfwButton: {
    border: '1px solid #c00',
    backgroundColor: '#FFF',
    color: '#c00'
  },
  selectedButton: {
    color: '#FFFFFF',
    backgroundColor: "#1a5099",
  },
  typeButtons: {
    position: 'relative',
    top: -1,
  },
  tagButtons: {
    paddingTop: 5,
    paddingBottom: 8,
  },
  searchButton: {
    marginRight: 20,
    backgroundColor: '#4BA2F2',
  },
  header: {
    position: "relative",
    height: "100%",
    padding: 10,
    borderBottom: "1px solid #1a5099",
    width: "100%",
    backgroundColor: "#4ba2f2",
  },
  author: {
    color: "#FFFFFF",
    fontSize: 12,
    float: "right",
    paddingTop: 10,
    paddingRight: 20,
  },
  authorLink: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  logo: {
    height: 35,
    verticalAlign: "middle",
    paddingRight: 10,
  },
  postsContainer: {
    width: "100%",
    position: "absolute",
    top: 93,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "auto",
  },
  mainContainer: {
    width: "100%",
    paddingBottom: 0,
    overflow: "hidden",
  },
  searchInput: {
    width: 200,
  },
  loadingPanel: {
    backgroundImage: `url(${loading})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: 'contain',
    width: "100%",
    position: "absolute",
    top: 93,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "auto",
  },
  postTable: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 0,
    height: 100,
    width: "100%",
  },
  postTableImage: {
    position: "relative",
    height: 100,
    maxWidth: 100,
    width: 100,
    overflow: "hidden"
  }
}
