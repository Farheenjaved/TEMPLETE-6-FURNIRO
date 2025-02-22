import Image from "next/image";

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
            <div id="navbar">
                <div className="logo"><Image src="/img/logo.png" alt="Logo" width={200} height={100} /></div>
                <div className="topmenu">
                    <ul className="topcenter">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="topbaricons">
                <ul className="topright">
                    <li><a href="#"><Image src="/img/alert-outline.png" alt="" width={28} height={28} /></a></li>
                    <li><a href="#"><Image src="/img/search.png" alt="" width={28} height={28} /></a></li>
                    <li><a href="#"><Image src="/img/heart.png" alt="" width={28} height={28} /></a></li>
                    <li><a href="#"><Image src="/img/shopping-cart.png" alt="" width={28} height={28} /></a></li>                    
                </ul>
                </div>
            </div>
        </div>
        </div>
    );
}
