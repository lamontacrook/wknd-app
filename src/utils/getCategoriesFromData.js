import { sanitizeActivity } from "./sanitizeActivity";

export const getCategoriesFromData = (items) => {
  let categories = { };
  items.forEach(item => {
    if (!item.adventureActivity) categories.miscellaneous = item;
    else {
      const activity = sanitizeActivity(item.adventureActivity);
      if (!categories.hasOwnProperty(activity)) {
        categories[activity] = item
      }
    }
  })

  return categories;
}