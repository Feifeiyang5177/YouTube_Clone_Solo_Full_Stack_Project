import React, { useState } from "react";
import { AiOutlineSearch} from "react-icons/ai";
import SearchBarIndex from "./search_bar_index";
import { Link } from "react-router-dom";
// import SearchBar from "./search_bar"



// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
// //   componentDidMount() {
// //     this.props.fetchVideos();
// //   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     const {videos} = this.props
//     const vd = (videos || []).map((video, key) => {
//       return (
//       video={video}, 
//       key={key}
//       );
//     });
//     return (
//       <div className="search-bar-and-icon">
//         <form className="search-bar" onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               className="search-input"
//               type="text"
//               placeholder="Search"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button className="search-button">
//             <AiOutlineSearch className="search-icon" />{" "}
//           </button>
//           {/* <input className="search-button" type="submit" value="Submit" 
//           /> */}
//         </form>
//         <div className="loppping-video-names">{vd.title}</div>
//       </div>
//     );
//   }
// }

// export default SearchBar
 
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: "",
            change: ""
        }
       

    }
    changeSearch(e){
        this.setState({filter: e.currentTarget.value})
    }
    render(){
        const {video} = this.props;
        return (
          <div className="search-bar-and-icon">
            <div className="search-bar">
              {/* <input
                type="text"
                className="search-input"
                placeholder="Search"
                // value={wordEntered}
                // onChange={handleFilter}
                /> */}
              <input
                placeHolder="Search"
                className="search-input"
                value={this.state.filter}
                type="text"
                onChange={(e) => this.changeSearch(e)}
              />
              <Link
                className="search-button"
                to={`/videos/1`}
              >
                <AiOutlineSearch className="search-icon" />{" "}
              </Link>
              {/* <p>{video}</p> */}
            </div>
          </div>
        );
    }
}

export default SearchBar

// function SearchBar({video}) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");
// //   const video = (videoS || []).map((video, key) => {
// //       return (
// //       video={video}, 
// //       key={key}
// //       );
// //     });

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = video.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   const vd = video.title
  

//   return (
//     <div className="search-bar-and-icon">
//       <div className="search-bar">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={wordEntered}
//           onChange={handleFilter}
//         />
//         <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <button className="search-button">
//               <AiOutlineSearch className="search-icon" />{" "}
//             </button>
//           ) : (
//             <button className="search-button" onClick={clearInput}>
//               <AiOutlineSearch className="search-icon" />{" "}
//             </button>
//             // <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}
//         </div>
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <div>
//                 <video className="group-video-each" src={value.vdUrl} controls>
//                   <p>{value.title} </p>
//                 </video>
//                 {/* <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title} </p>
//               </a> */}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;