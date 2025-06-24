import { Link } from '@inertiajs/react';
import { useState, useCallback, useRef } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Pagination, Navigation, Thumbs, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type SwiperCore from 'swiper';
import type SwiperRef from 'swiper';

const panels = [
    {id: 0, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p><a href="https://mitsul.com.br" target="_blank" className="text-light" rel="noreferrer noopener">Mitsul / Mitsubishi</a> <small>/ 2023</small></p>, src: ['image/mitsul.jpg']},
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', descricao:<p><a href="https://realveiculos.com.br" target="_blank" className="text-light" rel="noreferrer noopener">Real Veiculos / Volkswagen</a> <small>/ 2022</small></p>, src: ['image/Volkswagen-layout-site.png']},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', descricao: <p>Honda <small>/ 2021</small></p>, src: ['image/honda-veiculos.jpg']},
    {id: 3, name: 'Website Interface + Desenvolvimento Wordpress', descricao: <p><a href="https://autoconf.com.br" target="_blank" className="text-light" rel="noreferrer noopener">Autoconf</a> <small>/ 2021</small></p>, src: ['image/layout-blog-autoconf-v2-01.jpg']},
    {id: 4, name: 'Projeto Gráfico', descricao: <p>Desenvolvimento de embalagens Bulbo Led <small>/ 2020</small></p>, src: ['image/facas-embalagens.png']},
    {id: 5, name: 'Website Interface UI Design', descricao: <p>Lawww <small>/ 2018</small></p>, src: ['image/laww-layout-home-v2.webp']},
    {id: 6, name: 'Website Interface UI Design', descricao:<p>Serro Carrocerias<small>/ 2018</small></p>, src: ['image/serro-carrocerias.webp']},
    {id: 7, name: 'Direção de Arte Redes Sociais', descricao:<p>Roldão / Perini <small>/ 2017</small></p>, src: ['image/roldao-posts.webp', 'image/megamidia.webp', 'image/megamidia-3.webp']},
    {id: 8, name: 'Website Interface + Desenvolvimento Wordpress', descricao:<p>Probat Leogap <small>/ 2016</small></p>, src: ['image/probat-leogap-website-2017.jpg', 'image/probat-leogap-wireframe-2017.jpg', null]},
    {id: 9, name: 'Layout Landing Page', descricao:<p>Globo Renault Florianópolis <small>/ 2016</small></p>, src: ['image/landing-reanult-globo.jpg']},
    {id: 10, name: 'Branding', descricao:<p>Marmoraria Florianópolis <small>/ 2014</small></p>, src: ['image/marmoraria-florianopolis-2014.jpg']},
    {id: 11, name: 'Branding + Website Interface + Desenvolvimento Wordpress', descricao:<p>Zeta Estaleiro <small>/ 2013</small></p>, src: ['image/zeta-estaleiro-redesign.jpg']},
    {id: 12, name: 'Projeto Gráfico Midia Kit', descricao:<p>Curitiba Cultura <small>/ 2013</small></p>, src: ['image/curitiba-cultura.jpg']},
    {id: 13, name: 'Direção de Arte Redes Sociais', descricao:<p>Shopping Total <small>/ 2012</small></p>, src: ['image/shopping-total.webp', 'image/shopping-total.jpg', null]},
    {id: 14, name: 'Direção de Arte Redes Sociais e Email Marketing', descricao:<p>Volvo CE <small>/ 2012</small></p>, src: ['image/volvo-facebook-2012.jpg','image/volvo-2012.jpg', 'image/volvo-2012-posts.jpg']},
    {id: 15, name: 'Direção de Arte Apresentação', descricao:<p>Boticário <small>/ 2012</small></p>, src: ['image/boticario.jpg', 'image/boticario-2.jpg', 'image/boticario-3.jpg']},
    {id: 16, name: 'Direção de Arte Web', descricao:<p>Gazeta do Povo <small>/ 2010</small></p>, src: ['image/gazeta.webp']},
    {id: 17},
];

const thumbis = [
    {id: 0, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/mitsul-thumb.jpg'},
    {id: 1, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/volks-thumb.jpg'},
    {id: 2, name: 'Website Interface + Desenvolvimento Laravel', src: 'image/honda-thumb.jpg'},
    {id: 3, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/autoconf-thumb.jpg'},
    {id: 4, name: 'Projeto Gráfico', src: 'image/facas-embalagens-thumb.jpg'},
    {id: 5, name: 'Website Interface', src: 'image/laww-thumb.jpg'},
    {id: 6, name: 'Website Interface', src: 'image/serro-thumb.jpg'},
    {id: 7, name: 'Direção de Arte', src: 'image/roldao-posts-facebook-thumb.jpg'},
    {id: 8, name: 'Website Interface + Desenvolvimento Wordpress', src: 'image/probat-thumb.jpg'},
    {id: 9, name: 'Website Interface', src: 'image/globo-renault-thumb.jpg'},
    {id: 10, name: 'Branding', src: 'image/marmoraria-thumb.jpg'},
    {id: 11, name: 'Branding +  Website Interface + Desenvolvimento Wordpress', src: 'image/zeta-estaleiro.jpg'},
    {id: 12, name: 'Projeto Gráfico', src: 'image/curitiba-cultura-thumb.jpg'},
    {id: 13, name: 'Direção de Arte', src: 'image/shopping-total-thumb.jpg'},
    {id: 14, name: 'Direção de Arte', src: 'image/volvo-ce-facebook.jpg'},
    {id: 15, name: 'Direção de Arte', src: 'image/boticario-thumb.jpg'},
    {id: 16, name: 'Direção de Arte', src: 'image/gazeta-thumb.jpg'},
    {id: 17, 
    last:<a href="/tools" className="d-block text-center link-offset-3 link-underline link-underline-opacity-0 link-underline-opacity-50-hover">
        <p>Mais Projetos</p>
        <img
            src="image/more.png"
            alt="+ Projetos Design"
            title="+ Projetos Design"
            className="rounded shadow-lg border-0 mx-auto"
            width={50}
            height={50} />
    </a>
    },
];


export default function Portfolio() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const panelsSwiperRef = useRef<SwiperCore | null>(null);

    const tumbers = useCallback((Swiper: SwiperCore) => {
        setThumbsSwiper(Swiper);
    }, []);

    const handleThumbClick = useCallback((id: number) => {
        if (panelsSwiperRef.current) {
            panelsSwiperRef.current.slideTo(id);
        }
    }, []);

    const hash = useCallback((swiper: SwiperCore) => {
        const hashNavigation = swiper.params.hashNavigation;
        if (!hashNavigation) return;

        const updateHash = () => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
                const hash = activeSlide.getAttribute('data-hash');
                if (hash) {
                    document.location.hash = hash;
                }
            }
        };

        swiper.on('slideChange', updateHash);
        swiper.on('slideChangeTransitionEnd', updateHash);
        updateHash();
    }, []);

return (
    <>
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
                        <Link className="nav-link" href={route('contact')}>
                            Taukane
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href={route('contact')}>
                            Portfolio
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href={route('contact')}>
                            Portfolio +
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="apresenta rounded-bottom w-100 h-100" >
            <a  title="Designer Web e Grafico"
                href="#works">
                <h1>Taukane / Portfolio Web Designer Curitiba</h1>
            </a>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto lh-lg">
                        Experiência sólida em desenvolvimento web front-end, concepção da arquitetura da informação e wireframes até a implementação de interfaces UX/UI centradas no usuário.
                        <hr/>
                        <h3>Conhecimento em metodologias ágeis, versionamento de código com Git e implementação de boas práticas de desenvolvimento.</h3>
                        <hr/>
                        <h4>Habilidades em design responsivo, otimização de performance, acessibilidade web e SEO.</h4>
                        <hr/>
                        <h4>Criação de identidades visuais para marcas e embalagens até a arte final para impressão.</h4>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-11 col-xxl-auto mx-auto"
                id="works">
                     <Swiper
                        modules={[FreeMode, Pagination, Thumbs]}
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
                <div className="col-12 col-lg-11 col-xxl-auto mx-auto">
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
            <h5 className="mt-5 pt-4 fw-bold text-amber-400">{panel.name}</h5>
            <div>{panel.descricao}</div>
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
                </div>
            </div>
        </div>
    <span className="scroller"></span>
    </>
	)
}