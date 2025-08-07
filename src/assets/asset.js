import Logo from '/Hekto.png'
import Home_HeroImage from './home/hero.png'
import Home_Background1 from './home/background(1).jpg'
import Home_Background2 from './home/background(2).jpg'
import Home_Background3 from './home/background(3).jpg'
import Home_Background4 from './home/background(4).jpg'
import Home_Discount1 from './home/above discount/discount(1).png'
import Home_Discount2 from './home/above discount/discount(2).png'
import Home_Discount3 from './home/above discount/discount(3).png'
import Home_Discount4 from './home/above discount/discount(4).png'
import Home_Discount5 from './home/above discount/discount(5).png'
import Home_Latest1 from './home/chairs/latest/latest(1).png'
import Home_Latest2 from './home/chairs/latest/latest(2).png'
import Home_Latest3 from './home/chairs/latest/latest(3).png'
import Home_Latest4 from './home/chairs/latest/latest(4).png'
import Home_Latest5 from './home/chairs/latest/latest(5).png'
import Home_Latest6 from './home/chairs/latest/latest(6).png'
import Home_Top1 from './home/chairs/top/top(1).png'
import Home_Top2 from './home/chairs/top/top(2).png'
import Home_Top3 from './home/chairs/top/top(3).png'
import Home_Top4 from './home/chairs/top/top(4).png'
import Home_Trending1 from './home/chairs/trending/trending(1).png'
import Home_Trending2 from './home/chairs/trending/trending(2).png'
import Home_Trending3 from './home/chairs/trending/trending(3).png'
import Home_Trending4 from './home/chairs/trending/trending(4).png'
import Home_TopCategories1 from './home/chairs/top categories/topCategory(1).png'
import Home_TopCategories2 from './home/chairs/top categories/topCategory(2).png'
import Home_TopCategories3 from './home/chairs/top categories/topCategory(3).png'
import Home_TopCategories4 from './home/chairs/top categories/topCategory(4).png'
import Home_Couch1 from './home/chairs/couch(1).png'
import Home_Couch2 from './home/chairs/couch(2).png'
// icons - start
    import { MdMailOutline } from "react-icons/md";
    import { FiPhoneCall } from "react-icons/fi";
    import { MdPerson } from "react-icons/md";
    import { GoHeart } from "react-icons/go";
    import { FiShoppingCart } from "react-icons/fi";
    import { IoSearch } from "react-icons/io5";
    import { FaDiamond } from "react-icons/fa6";
    import { LuDiamond } from "react-icons/lu";
    
// icons - end

const Images = {
    Home_Couch1,
    Home_Couch2,
    Home_TopCategories1,
    Home_TopCategories2,
    Home_TopCategories3,
    Home_TopCategories4,
    Home_HeroImage,
    Home_Background1,
    Home_Background2,
    Home_Background3,
    Home_Background4,
    Home_Discount1,
    Home_Discount2,
    Home_Discount3,
    Home_Discount4,
    Home_Discount5,
    Home_Latest1,
    Home_Latest2,
    Home_Latest3,
    Home_Latest4,
    Home_Latest5,
    Home_Latest6,
    Home_Top1,
    Home_Top2,
    Home_Top3,
    Home_Top4,
    Home_Trending1,
    Home_Trending2,
    Home_Trending3,
    Home_Trending4,
}

const Icons = {
    Mail: MdMailOutline,
    Phone: FiPhoneCall,
    Person: MdPerson,
    Heart: GoHeart,
    Cart: FiShoppingCart,
    Search: IoSearch,
    Diamond: LuDiamond,
    DiamondActive: FaDiamond,
}


const HeaderData = {
    top: {
        mail: "mhhasanul@gmail.com",
        contact: "(12345)67890",
        nav: [
            ["English"],
            ["USD"]
        ]
    },
    bottom: {
        nav: [
            { name: "Home", status: "active"},
            { name: "Pages", status: "inactive"},
            { name: "Products", status: "inactive"},
            { name: "Blog", status: "inactive"},
            { name: "Shop", status: "inactive"},
            { name: "Contact", status: "inactive"}
        ]
    }
}


const HeroData = {
    image: Home_HeroImage,
    comment: "Best Furniture For Your Castle....",
    title: "New Furniture Collection Trends in 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo."
}












const DataBase = { Logo, Images, HeaderData, HeroData, Icons }

export default DataBase