import action from "../../assets/action-tag.svg";
import adventure from "../../assets/adventure-tag.svg";
import animation from "../../assets/animation-tag.svg";
import comedy from "../../assets/comedy-tag.svg";
import crime from "../../assets/crime-tag.svg";
import documentary from "../../assets/documentary-tag.svg";
import drama from "../../assets/drama-tag.svg";
import family from "../../assets/family-tag.svg";
import fantasy from "../../assets/fantasy-tag.svg";
import history from "../../assets/history-tag.svg";
import horror from "../../assets/horror-tag.svg";
import music from "../../assets/music-tag.svg";
import mystery from "../../assets/mystery-tag.svg";
import romance from "../../assets/romance-tag.svg";
import scienceFiction from "../../assets/science-fiction-tag.svg";
import thriller from "../../assets/thriller-tag.svg";
import tvMovie from "../../assets/tv-movie-tag.svg";
import war from "../../assets/war-tag.svg";
import western from "../../assets/western-tag.svg";

export const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const genreTag = (ids) => {
  const genres = ids.map((id) => {
    switch (id) {
      case 28:
        return {
          id: 28,
          name: "Action",
          tag: action,
        };
      case 12:
        return {
          id: 12,
          name: "Adventure",
          tag: adventure,
        };
      case 16:
        return {
          id: 16,
          name: "Animation",
          tag: animation,
        };
      case 35:
        return {
          id: 35,
          name: "Comedy",
          tag: comedy,
        };
      case 80:
        return {
          id: 80,
          name: "Crime",
          tag: crime,
        };
      case 99:
        return {
          id: 99,
          name: "Documentary",
          tag: documentary,
        };
      case 18:
        return {
          id: 18,
          name: "Drama",
          tag: drama,
        };
      case 10751:
        return {
          id: 10751,
          name: "Family",
          tag: family,
        };
      case 14:
        return {
          id: 14,
          name: "Fantasy",
          tag: fantasy,
        };
      case 36:
        return {
          id: 36,
          name: "History",
          tag: history,
        };
      case 27:
        return {
          id: 27,
          name: "Horror",
          tag: horror,
        };
      case 10402:
        return {
          id: 10402,
          name: "Music",
          tag: music,
        };
      case 9648:
        return {
          id: 9648,
          name: "Mystery",
          tag: mystery,
        };
      case 10749:
        return {
          id: 10749,
          name: "Romance",
          tag: romance,
        };
      case 878:
        return {
          id: 878,
          name: "Science Fiction",
          tag: scienceFiction,
        };
      case 10770:
        return {
          id: 10770,
          name: "TV Movie",
          tag: tvMovie,
        };
      case 53:
        return {
          id: 53,
          name: "Thriller",
          tag: thriller,
        };
      case 10752:
        return {
          id: 10752,
          name: "War",
          tag: war,
        };
      case 37:
        return {
          id: 37,
          name: "Western",
          tag: western,
        };
      default:
        return {};
    }
  });

  return genres;
};
