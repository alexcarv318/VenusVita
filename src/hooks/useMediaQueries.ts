import {useMediaQuery} from "react-responsive";

export function useMediaQueries() {
    return {
        isDesktopOrLaptop: useMediaQuery({query: '(min-width: 1224px)'}),
        isTabletOrMobile: useMediaQuery({ query: '(max-width: 1224px)' })
    }
}