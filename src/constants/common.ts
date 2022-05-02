import EnglishIcon from '~/assets/icons/english_ic.svg';
import VietnamIcon from '~/assets/icons/vietnam_ic.svg';

const LOCAL_STORAGE_KEY_TYPE = {
    THEME_MODE: 'THEME_MODE',
    CURRENT_LANGUAGE: 'CURRENT_LANGUAGE',
    PICK_UP_ADDRESS: 'PICK_UP_ADDRESS'
}

const LANGUAGES = [
    {
        key: 'en',
        value: 'English',
        flag: EnglishIcon
    },
    {
        key: 'vi',
        value: 'Vietnamese',
        flag: VietnamIcon
    }
]

const ROLES = {

}

const SIZE = {
    MOBILE: '600px', /* Small devices (portrait tablets and large phones, 600px and up) */
    TABLET: '768px', /* Medium devices (landscape tablets, 768px and up) */
    LAPTOP: '992px', /* Large devices (laptops/desktops, 992px and up) */
    DESKTOP: '1200px' /* Extra large devices (large laptops and desktops, 1200px and up) */
}

const DEVICE_RESPONSIVE = {
    MOBILE: `only screen and (max-width: ${SIZE.MOBILE})`,
    TABLET: `only screen and (max-width: ${SIZE.TABLET})`,
    LAPTOP: `only screen and (max-width: ${SIZE.LAPTOP})`,
    DESKTOP: `only screen and (max-width: ${SIZE.DESKTOP})`,
};

const COOKIE_KEY = {
    LOGIN: 'LOGIN'
}

export {
    LOCAL_STORAGE_KEY_TYPE,
    LANGUAGES,
    DEVICE_RESPONSIVE,
    COOKIE_KEY,
    ROLES,
    SIZE,
}
