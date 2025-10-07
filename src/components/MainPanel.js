import BottomBar from "./bottomBar";


const MainContent = ({ title = "JavaScript Tutorial", src }) => {
    return (
        <>
            <main className="main-content">
                {/* <h2 className="main-title">{title}</h2> */}

                <section className="main-body">
                    {/* <div className="main-description">
                        <p>
                            JavaScript is the programming language of the Web. It lets you
                            create interactive websites, handle user events, and build
                            full-scale web applications directly in the browser.
                        </p>
                    </div> */}

                    <div className="main-iframe">
                        {src ? (
                            <iframe
                                src="https://siitecch-learn.vercel.app/"
                                title={title}
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        ) : (
                            <div className="placeholder">
                                <p>Select or provide a resource to preview here.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
           
        <BottomBar/>
    
        </>

    );
};

export default MainContent;
