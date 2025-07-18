import { Head, Link } from '@inertiajs/react';
import { useState, useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type SwiperCore from 'swiper';

const panels = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p>Black Club <small>/ 2018</small></p>, src: ['image/black-club-layout-v2.webp' ]},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao: <p>CBD Med <small>/ 2018</small></p>, src: ['image/cbd-med-layout-home-logo.webp'],},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Sibras <small>/ 2018</small></p>, src: ['image/sibras-site.webp']},
{id: 4, name: 'Projeto Gráfico Jornal', descricao:<p>Jornal Independente <small>/ 2014</small></p>, src: ['image/jornal-independente-big.jpg']},
{id: 5, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Emariot <small>/ 2012</small></p>, src: ['image/emariot-2011.jpg']},
{id: 6, name: 'Direção de Arte Redes Sociais', descricao: <p>Café Automatic <small>/ 2012</small></p>, src: ['image/cafe-automatic.jpg']},
{id: 7, name: 'Direção de Arte UI Design', descricao: <p>SDLG <small>/ 2012</small></p>, src: ['image/sdlg-2012.webp', 'image/sdlg-2012-2.jpg']},
{id: 8, name: 'Direção de Arte Web + Desenvolvimento', descricao:<p>Carmen Steffens / Loja Villa / Franquias Brasileiras...  <small>/ 2011</small></p>, src: ['image/taukane-port.jpg']},
{id: 9, name: 'Direção de Arte Web + Email Marketing + Desenvolvimento', descricao:<p>Diversos <small>/ 2008 / 2011</small></p>, src: ['image/varios-taukane.webp']},
{id: 10, name: 'Websites + Projetos Gráficos + Website Interface', descricao:<p>Diversos <small>/ 2004 / 2008</small></p>, src: ['image/inicio-taukane.jpg']},
{id:11,src: null,}
];

const thumbis = [
{id: 1, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/blackclub-thumb.png'},
{id: 2, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/cbd-med.jpg'},
{id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/sibras-thumb.jpg'},
{id: 4, name: 'Projeto Gráfico', src: 'image/jornal-independente-thumb.jpg'},
{id: 5, name: 'Branding + Website Interface + Desenvolvimento Wordpress', src: 'image/emariot-thumb.jpg'},
{id: 6, name: 'Direção de Arte Redes Sociais', src: 'image/cafe-automatic-thumb.jpg'},
{id: 7, name: 'Direção de Arte Web', src: 'image/sdlg-thumb.jpg'},
{id: 8, name: 'Direção de Arte Web', src: 'image/antigos-thumb.jpg'},
{id: 9, name: 'Direção de Arte Web', src: 'image/tauk-2008-thumb.jpg'},
{id: 10, name: 'Direção de Arte Web', src: 'image/tauk-2004-thumb.jpg'},
{id:11, last:<a href="/portfolio" className="d-block my-auto text-center">
    <p>Portfolio</p>
    <img
        src="image/prev.jpg"
        alt="< Portfolio Taukane"
        title="< Portfolio Taukane"
        className="img-fluid rounded shadow-lg border-0 opacity-100"
        width={50}
        height={50}
    />
</a>
},
];


function Tools() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const panelsSwiperRef = useRef<SwiperCore | null>(null);

    const tumbers = useCallback((Swiper: SwiperCore) => {
        setThumbsSwiper(Swiper);
    }, []);

    const hash = useCallback((Swiper: SwiperCore) => {
        const hashNavigation = Swiper.params.hashNavigation;
        if (!hashNavigation) return;

        const updateHash = () => {
            const activeSlide = Swiper.slides[Swiper.activeIndex];
            if (activeSlide) {
                const hash = activeSlide.getAttribute('data-hash');
                if (hash) {
                    document.location.hash = hash;
                }
            }
        };

        Swiper.on('slideChange', updateHash);
        Swiper.on('slideChangeTransitionEnd', updateHash);
        updateHash();
    }, []);

return (
<>
    <Head title="Tools and Portfolio +" />
    <nav className="navbar bg-body-tertiary bg-gradient shadow sticky-top">
        <div className="container-fluid">
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir Navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <button title="Trocar Tema">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555555" className="bi bi-lightbulb-off" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"/>
                </svg> 
            </button>
            <a className="open-modal btn btn-outline-secondary"
            title="Contato" aria-label="Contato">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555555" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
            </svg>
            </a>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav my-3 hstack gap-5 d-block d-md-flex">
                    <li className="nav-item">
                    <Link className="nav-link" href={route('introduction')}>
                        Taukane
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href={route('portfolio')}>
                        Portfolio
                    </Link>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link text-amber-300">
                        Tools / Portfolio +
                    </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container-fluid">   
        <h5 className="bg-body-tertiary mt-0 mb-0 pt-4 pb-3 text-center">Ferramentas:</h5>
        <Swiper
            breakpoints={{
                '@0.00': {
                slidesPerView: 3,
                spaceBetween: 80,
                },
                '@1.00': {
                slidesPerView: 6,
                spaceBetween: 50,
                },
                '@1.50': {
                slidesPerView: 12,
                spaceBetween: 40,
                },
            }}
            modules={[ FreeMode, Pagination ]}
            pagination={true}
            grabCursor={true}
            freeMode={true}
            loop={true}
            className="myexpertise bg-body-tertiary bg-gradient pt-4 pb-3 mb-5 text-center rounded-0 rounded-bottom shadow-lg">
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator Logo" /><p>Illustrator</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop Logo" /><p>Photoshop</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD Logo" /><p>Adobe XD</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma Logo" /><p>Figma</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg" alt="GIMP Logo" /><p>GIMP</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML Logo" /><p>HTML</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS Logo" /><p>CSS</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass Logo" /><p>Sass</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg" alt="Less Logo" /><p>Less</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt="jQuery Logo" /><p>jQuery</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP Logo" /><p>PHP</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL Logo" /><p>MySQL</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress Logo" /><p>WordPress</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel Logo" /><p>Laravel</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg" alt="Livewire Logo" /><p>Livewire</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg" alt="Tailwind Css" /><p>Tailwind CSS</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite Logo" /><p>Vite</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" /><p>Node.js</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM Logo" /><p>NPM</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code Logo" /><p>VS Code</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" alt="Apache Logo" /><p>Apache</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/homebrew/homebrew-original.svg" alt="Homebrew Logo" /><p>Homebrew</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript Logo" /><p>JavaScript</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" /><p>React</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Logo" /><p>Bootstrap</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="Amazon Web Services Logo" /><p>Amazon Web Services</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" alt="Firebase Logo" /><p>Firebase</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git Logo" /><p>Git</p></SwiperSlide>
            <SwiperSlide><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Logo" /><p>GitHub</p></SwiperSlide>
        </Swiper>
        <Swiper
            modules={[FreeMode, Pagination, Thumbs, HashNavigation]}
            onSwiper={tumbers}
            loop={true}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            freeMode={true}
            watchSlidesProgress={true}
            breakpoints={{
                '@0.00': {
                slidesPerView: 3,
                spaceBetween: 8,
                },
                '@1.00': {
                slidesPerView: 4,
                spaceBetween: 10,
                },
                '@1.50': {
                slidesPerView: 6,
                spaceBetween: 20,
                },
            }}
            id="works">
            {thumbis.map((tumbis) => (
                <SwiperSlide key={tumbis.id}>
                    <a href={`portfolio-${tumbis.id}`}
                        onClick={e => {
                        e.preventDefault();
                        console.log(`Id da parada ${tumbis.name}`);
                        }}>
                        <h4>{tumbis.name}</h4>
                        {tumbis.src ? (
                            <img
                                src={tumbis.src}
                                alt={tumbis.name}
                            />
                        ) : null}
                    </a>
                    {tumbis.last}
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
<Swiper
    modules={[Keyboard, Navigation, Thumbs, HashNavigation]}
    hashNavigation={{
        watchState: true,
    }}
    onSwiper={(swiper) => {
        panelsSwiperRef.current = swiper;
    }}
    onSlideChange={(swiper) => {
        if (thumbsSwiper) {
            thumbsSwiper.slideTo(swiper.activeIndex);
        }
    }}
    thumbs={{ swiper: thumbsSwiper }}
    loop={true}
    spaceBetween={40}
    keyboard={{
        enabled: true,
    }}
    navigation={true}
    autoHeight={true}>
    {panels.map((panel) => (
        <SwiperSlide 
            key={panel.id}
            data-hash={`portfolio-${panel.id}`}
            id={`portfolio-${panel.id}`}>
            <h5 className="mt-5 pt-4 ps-4 fw-bold text-amber-400">{panel.name}</h5>
            <div className="ps-4">{panel.descricao}</div>
            {panel.src && panel.src.length > 0 ? (
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    modules={[Navigation, Pagination]}
                    navigation={panel.src.length > 1}
                    pagination={{ clickable: true }}
                    autoHeight={true}>
                    {panel.src.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`${panel.name} - Design ${index + 1}`}
                                className={`img-fluid ${index === 0 ? 'rounded shadow-lg' : (index === 1 ? 'shadow' : '')}`}
                            />
                            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : null}
        </SwiperSlide>
    ))}
</Swiper>
<hr className="border-0"/>
</>
)}

export default Tools