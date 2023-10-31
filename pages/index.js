import { Attends } from "@/src/components/Attends/Attends";
import { ClientsLogo } from "@/src/components/ClientsLogo/ClientsLogo";
import { ClinentsReview } from "@/src/components/ClinentsReview/ClinentsReview";
import { ExploreEvents } from "@/src/components/ExploreEvents/ExploreEvents";
import { Footer } from "@/src/components/Footer/Footer";
import { RegisterationForm } from "@/src/components/RegisterationForm/RegisterationForm";
import { Sponsors } from "@/src/components/Sponsors/Sponsors";
import { UpcomingExhibhition } from "@/src/components/UpcomingExhibhition/UpcomingExhibhition";


const index = () => {
  return <>
  <UpcomingExhibhition />
  <ClientsLogo />
  <ExploreEvents />
  <ClinentsReview />
  <RegisterationForm />
  <Attends></Attends>
  <Sponsors></Sponsors>
  <Footer></Footer>
  </>
}


export default index;