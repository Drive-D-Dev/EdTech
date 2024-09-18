import { create } from 'zustand'



const RootLayout = ({ children }) => {
    return (
        <>
            <div>
                <p></p>
                {children}
            </div>
        </>
    );
};

export default RootLayout;