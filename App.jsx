import{
  CustomerReviews ,Footer  , Hero , PopularProducts,Services,
  SpecialOffers, Subscibe, SuperQuality } from "./sections";
  import Nav from "./COMPONENTS/Nav";
export default function App() {
  return (
   <main className="relative">
     <Nav/>
     <section className="xl:padding-l wide:padding-r padding-b" >
      <Hero/>
     </section >
     <section className="padding">
     < PopularProducts/>
     </section>
     <section className="padding">
     <SuperQuality />
     </section>
     <section className="padding-x py-10">
     <Services/>
     </section>
     <section className="padding">
     <SpecialOffers/>
     </section>
     <section className="bg-pale-blue
     padding">
     <CustomerReviews />
     </section> <section className="padding-x
     sm:py-32 py-16 w-full">
     <Subscibe/>
     </section> <section className="bg-black padding-x padding-t pb-8">
     <Footer/>
     </section>
   </main>
  )
}