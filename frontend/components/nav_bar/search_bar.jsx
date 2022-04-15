import React, { useState } from "react";
import { AiOutlineSearch} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import { Link } from "react-router-dom";
import SearchResult from "./search_result";
import debounce from "lodash.debounce";


function SearchBar ({videos}){
    
    const names = [
      "Summer",
      "Introduction",
      "Maleficent Trailer",
      "Voice Recognition MERN Project",
      "Youtube Clone Longin and Signup",
      "Erhu Playing Demo",
    ];
    const [state, setState] = useState([]);
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        // const name = names
        const newFilter = names.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        })
        if (searchWord === "") {
                setState([])
            }  
            else {setState(newFilter)} 
          }
        

    const clearInput = () => {
        setState([]);
        setWordEntered("")
    };

    const handleClick = () => {
        return (<div>Invalid search</div>)
    }
       
    return (
      <div className="search-bar-and-icon">
        <div className="search-bar">
          <input
            placeholder="Search"
            className="search-input"
            type="text"
            value={wordEntered}
            onChange={handleFilter}
          />

          <div className="search-bar-icons">
            {state.length == 0 ? (
              <button className="search-button" onClick={handleClick}>
                <AiOutlineSearch className="search-icon" />
              </button>
            ) : (
              <div className="search-button-and-close-icon">
                <GrClose className="search-close-icon" onClick={clearInput} />
                <Link className="search-button" to="/search">
                  <AiOutlineSearch className="search-icon" /> 
                </Link>
              </div>
            )}
          </div>
        </div>

        {state.length != 0 && (
          <div>
            {state.map((v, k) => {
              return (
                <div className="search-result" key={k}>
                  <p className="search-result-names">{v}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
    
    
}

export default SearchBar



// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       video: {},
//       hideFilters: true,
//       showSubmit: false,
//     };
//     this.update.bind(this);
   
//   }

//   update(field) {
//     return (e) => {
//       this.setState(
//         {
//           [field]: e.currentTarget.value,
//           showSubmit: false,
//         }
//         // () => {
//         //   this.debounce();
//         // }
//       );
//     };
//   }



//   changeSearchBar(video) {
//     if (this.state.title !== video.title) {
//       this.setState({
//         title: video.title,
//         video: video,
//         showSubmit: true,
//       });
//     } else {
//       this.setState({
//         title: "",
//         video: {},
//         hideFilters: false,
//         showSubmit: false,
//       });
//     }
//   }

  

//   //  handleFilter(event)  {
//   //         const searchWord = event.target.value;
//   //         setWordEntered(searchWord);
//   //         const newFilter = names.filter((value) => {
//   //             return value.toLowerCase().includes(searchWord.toLowerCase());
//   //         })
//   //         if (searchWord === "") {
//   //                 setState([])
//   //             }
//   //             else {setState(newFilter)}
//   //           }

//    clearInput () {
//           setState([]);
//           setWordEntered("")
//       };

//   render() {
//     const { videos } = this.props;
//     const allVideos = (videos || []).map((video) => {
//       <SearchResult key={video.id} video={video} creator={video.creator}/>
//       // <div>{video}</div>;
//     });

//     return (
//       <div>
//         <div className="search-bar">
//           <input
//             placeholder="Search"
//             className="search-input"
//             type="text"
//             value={this.state.title}
//             onChange={this.update("title")}
//           />

//           <div className="search-bar-icons">
//             {this.state.title == 0 ? (
//               <button className="search-button"  >
//                 <AiOutlineSearch className="search-icon" />
//               </button>
//             ) : (
//               <div className="search-button-and-close-icon">
//                 <GrClose className="search-close-icon" />
//                 <Link className="search-button" to="/search">
//                   <AiOutlineSearch className="search-icon" />
//                 </Link>
               
//               </div>
             
//             )}
//           </div>
//         </div>

//         <div>{allVideos}</div>
//       </div>
//     );
//   }
// }

// export default SearchBar;

