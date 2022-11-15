export const adventureListQuery = `{
  adventureList {
    items {
      _path
      adventureActivity: activity
      adventureTitle: title
      adventurePrimaryImage: primaryImage {
        ...on ImageRef {
          _path
          mimeType
          width
          height
        }
      }
    }
  }
}`;

export const adventureDetailQuery = _path => `{
  adventureByPath (_path: "${_path}") {
    item {
      _path
      adventureTitle: title
      adventureActivity: activity
      adventureType
      adventurePrice: price
      adventureTripLength: tripLength
      adventureGroupSize: groupSize
      advetureDifficutly: difficulty
      adventurePrice: price
      adventurePrimaryImage: primaryImage {
        ... on ImageRef {
          _path
          mimeType
          width
          height
        }
      }
      adventureDescription: description {
        html
        json
      }
      adventureItinerary: itinerary {
        html
        json
      }
    }
  }
}`;