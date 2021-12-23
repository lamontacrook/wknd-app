export const adventureListQuery = `{
  adventureList {
    items {
      _path
      adventureActivity
      adventureTitle
      adventurePrimaryImage {
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
      adventureTitle
      adventureActivity
      adventureType
      adventurePrice
      adventureTripLength
      adventureGroupSize
      adventureDifficulty
      adventurePrice
      adventurePrimaryImage {
        ... on ImageRef {
          _path
          mimeType
          width
          height
        }
      }
      adventureDescription {
        html
        json
      }
      adventureItinerary {
        html
        json
      }
    }
  }
}`;