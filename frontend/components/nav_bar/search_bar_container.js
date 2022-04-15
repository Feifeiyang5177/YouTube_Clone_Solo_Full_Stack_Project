import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_action";
import SearchBar from "./search_bar"

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    videos: Object.values(state.entities.videos),
    filters: state.filters
  };
};
 
const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
