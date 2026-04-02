import Header from "@/components/Header";

function StoreLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Header />
        {children}
        </div>
  )
}

export default StoreLayout;