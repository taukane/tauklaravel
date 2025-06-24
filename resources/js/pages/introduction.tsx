import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Introduction() {
    const { auth } = usePage<SharedData>().props;
	return (
		<>
        <Head title="Intro"></Head>
            <nav className="navbar bg-body-tertiary bg-gradient shadow sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir Navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="btn" title="Trocar Tema">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555555" 
                            className="bi bi-lightbulb-off" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"/>
                        </svg> 
                    </button>
                    <a className="open-modal btn btn-outline-secondary"
                    title="Contato" aria-label="Contato">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#555555" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
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
                            <Link className="nav-link" href={route('tools')}>
                                Tools / Portfolio +
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
			<div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box box-1 my-5">
                            <h2>Taukane</h2>
                            <p>Atuo em criação e desenvolvimento de interfaces visuais, para mídias online e off-line.</p>
                        </div>
                        <div className="box box-2 my-5">
                            <h2>Designer</h2>
                            <p>Arquitetura da informação e wireframes até a implementação de interfaces UX/UI centradas no usuário.</p>
                        </div>
                        <div className="box box-3 my-5">
                            <h2>Web e Gráfico</h2>
                        </div>
                    </div>
                </div>
			</div>
			<div className="apresenta rounded mb-5 pb-5">
				<Link href={route('portfolio')} title="Portfolio Designer Web e Grafico"><h1>Portfolio Designer Web e Grafico</h1></Link>
			</div>
			<a href="#" title="Topo Portfolio" id="topo">
				<img
					src="top.jpg"
					alt="Taukane - Diretor de Arte Web"
					title="Diretor de Arte Web Curitiba"
					className="img-fluid rounded shadow-lg"
					width={50}
					height={50}
				/>
			</a>
			<span className="scroller"></span>
		</>
	)
}