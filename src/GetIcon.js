import { faDragon, faCircle, faQuestionCircle, faBed, faLaugh, faLaughWink,
  faBroom, faTv, faTram, faFish, faHeart, faCheese, faCookie, weibo,
  faCommentsDollar, faComments, faMusic, faGift, faGlassCheers, faHandSparkles, faHatCowboy, faBirthdayCake, faMountain, faChild, faFemale, faPhoneAlt, faGamepad, faMale, faHatWizard, faHouseUser, faShoppingCart, faCandyCane, faClock, faGifts, faFlag } from '@fortawesome/free-solid-svg-icons'
import { faWeibo, faAlipay } from  '@fortawesome/free-brands-svg-icons'; 

const table = {
  'cheers': faGlassCheers,
  'star': faHandSparkles,
  'hat': faHatWizard,
  'birthday': faBirthdayCake,
  'gift': faGift,
  'music': faMusic,
  'comments': faComments,
  'red-pack': faCommentsDollar,
  'broom': faBroom,
  'tv': faTv,
  'tram': faTram,
  'fish': faFish,
  'love': faHeart,
  'cake': faCheese,
  'cookie': faCookie,
  'dragon': faDragon,
  'circle': faCircle,
  'question': faQuestionCircle,
  'bed': faBed,
  'laugh-wink': faLaughWink,
  'laugh': faLaugh,
  'child': faChild,
  'game': faGamepad,
  'mountain': faMountain,
  'weibo': faWeibo,
  'female': faFemale,
  'phone': faPhoneAlt,
  'male': faMale,
  'home': faHouseUser,
  'alipay': faAlipay,
  'shopping': faShoppingCart,
  'candy': faCandyCane,
  'clock': faClock,
  'gifts': faGifts,
  'flag': faFlag
}



export function getIcon(str) {
    return table[str];
  }