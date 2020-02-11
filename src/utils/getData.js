const GtfsRealtimeBindings = require('gtfs-realtime-bindings');
// const request = new XMLHttpRequest();

export default function getData() {
  fetch('https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l')
    .then(response => {
      console.log(response);
      // let feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
      //   response.body,
      // );
      // feed.entity.forEach(function(entity) {
      //   if (entity.trip_update) {
      //     console.log(entity.trip_update);
      //   }
      // });
    })
    // .then(responseJson => {
    //   return responseJson.movies;
    // })
    .catch(error => {
      console.error(error);
    });
}

// function getMoviesFromApiAsync() {
//   return (
//     fetch(
//       'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l',
//     )
//       .then(response => {
//         let feed = GtfsRealtimeBindings.FeedMessage.decode(response);
//         feed.entity.forEach(function(entity) {
//           if (entity.trip_update) {
//             console.log(entity.trip_update);
//           }
//         });
//       })
//       // .then(responseJson => {
//       //   return responseJson.movies;
//       // })
//       .catch(error => {
//         console.error(error);
//       })
//   );
// }
