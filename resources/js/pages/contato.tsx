
import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';
function Contato({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) { 

    return ( 
    <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container-fluid container-md my-4"> 
            <div className="row">
                <div className="col contact-infos">
                    <h3 className="fw-bold mt-5">Contato:</h3>
                    <section className="d-grid d-md-flex align-items-center gap-2 gap-md-5">
                        <div className="small">
                            <a href="mailto:taukanepires@gmail.com">
                                <span>                                
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={32}
                                        height={32}
                                        fill="orange"
                                        className="bi bi-envelope-fill"
                                        viewBox="0 0 16 16">
                                        <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                    </svg> 
                                    <span className="ms-2">taukanepires@gmail.com</span>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="http://www.linkedin.com/in/taukane"
                                title="Linkedin"
                                target="_blank">
                                <span className="btn btn-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="#0a66c2"
                                        className="bi bi-linkedin"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                    <span className="ms-2">Linkedin</span>
                                </span>
                            </a>
                        </div>
                        <div>
                            <a
                                href="https://github.com/taukane/portfolio"
                                title="Github"
                                target="_blank">
                                <span className="btn btn-sm">                                
                                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
                                            data-view-component="true"
                                            className="octicon octicon-mark-github v-align-middle color-fg-default">
                                        <path
                                            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                    </svg>
                                    <span className="ms-2">GitHub</span>
                                </span>
                            </a>
                        </div>
                    </section>
                </div>
                </div>
                <div className="row mt-5"> 
                <div className="col">
                        <section>
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
                        </section>
                </div>
            </div>
        </div>
    </div>
)}
export default Contato;