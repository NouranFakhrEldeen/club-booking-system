import i18n from "../../i18n";

import Images from "../../styles/images/Images";

const items=[{
  title:i18n.t('activity.football'),
  description:i18n.t('activity.footballDescription'),
  img:Images.football.default,
  cost:100,
  time:'1 Hour',
  activityId: 1,
  Images:[Images.football , Images.football2]
},{
  title:i18n.t('activity.crossfit'),
  description:i18n.t('activity.crossfitDescription'),
  img:Images.crossfit.default,
  cost:900,
  time:'1 Month',
  activityId: 2

},{
  title:i18n.t('activity.camping'),
  description:i18n.t('activity.campingDescription'),
  img:Images.camping.default,
  cost:500,
  time:'1 Day',
  activityId: 3
},{
  title:i18n.t('activity.glee'),
  description:i18n.t('activity.gleeDescription'),
  img:Images.glee.default,
  activityId: 4
},{
  title:i18n.t('activity.library'),
  description:i18n.t('activity.libraryDescription'),
  img:Images.library.default,
  activityId: 5
},{
  title:i18n.t('activity.kids') ,
  description:i18n.t('activity.kidsDescription'),
  img:Images.kids.default,
  activityId: 6
}]

export default items;