import i18n from "../../i18n";

import Images from "../../styles/images/Images";

const items=[{
  title:i18n.t('activity.football'),
  description:i18n.t('activity.footballDescription'),
  img:Images.football.default
},{
  title:i18n.t('activity.crossfit'),
  description:i18n.t('activity.crossfitDescription'),
  img:Images.crossfit.default

},{
  title:i18n.t('activity.camping'),
  description:i18n.t('activity.campingDescription'),
  img:Images.camping.default
},{
  title:i18n.t('activity.glee'),
  description:i18n.t('activity.gleeDescription'),
  img:Images.glee.default
},{
  title:i18n.t('activity.library'),
  description:i18n.t('activity.libraryDescription'),
  img:Images.library.default
},{
  title:i18n.t('activity.kids') ,
  description:i18n.t('activity.kidsDescription'),
  img:Images.kids.default
}]

export default items;