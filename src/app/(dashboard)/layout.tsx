import Header from "../_components/Header"

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            {children}
        </>

    );
}
