import { connect } from "react-redux";
import SearchBarIndex from "./search_bar_index";
import { fetchVideos } from "../../actions/videos_action";
import SearchBar from "./search_bar"

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    videos: Object.values(state.entities.videos),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
