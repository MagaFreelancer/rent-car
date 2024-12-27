import Container from '@/shared/container.tsx';
import { NavLink } from 'react-router-dom';
import instagramIcon from '@/assets/instagram.svg';
const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="mt-[40px] mb-[40px]">
                    <div className="flex justify-between font-inter text-[#172335]">
                        <div>
                            <h6 className="text-base font-bold mb-1">Сервис</h6>
                            <ul>
                                <li className="mb-1">
                                    <NavLink className="text-sm" to="/">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="mb-1">
                                    <NavLink className="text-sm" to="/">
                                        Машины
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="text-sm" to="/">
                                        О нас
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-base font-bold mb-1">Связаться с нами</h6>
                            <div className="mb-5">
                                <a href="tel:88005553535" className="block text-2xl font-extrabold">
                                    +7 495 120-80-70
                                </a>
                                <span className=" text-xs text-[#556277]">
                                    ежедневно с 9:00 до 21:00
                                </span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <a href="#" className="flex items-center">
                                            <img src={instagramIcon} alt="instagram" />
                                            <span className="font-bold"> Мы в инстаграме</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="py-5 text-sm bg-[#f0f1f5] border-[1px] border-[rgba(23, 35, 53, .03)]">
                <Container>
                    <div className="flex justify-between">
                        <p className="text-[#9aa5b7]">© 2022. Все права защищены</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
