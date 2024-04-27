import HeaderTop from "./header/headerTop"
import HeaderMain from "./header/headerMain"
import HeaderBottom from "./header/headerBottom"

export default function Header() {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderMain />
            <HeaderBottom />
        </header>

    )
}