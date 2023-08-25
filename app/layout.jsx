import "@styles/globals.css";
import Nav from "@components/Nav";
import TestComponent from "@components/Test";
import Provider from "@components/Provider";

export const metadata = {
    title: "Promptopia",
    description: "Discover and share prompts for your next creative project.",
};

const RootLayout = ({ children }) => {
    return (
        <head lang="en">
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {/* <TestComponent /> */}
                        {children}
                    </main>
                </Provider>
            </body>
        </head>
    );
};

export default RootLayout;
